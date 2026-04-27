class Corrida {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }


    pegaIdCorridaAtual() {
        var json = localStorage.getItem("abrirCorrida");
        var obj = JSON.parse(json);
        //console.warn(obj);
        return obj.corrida.identificador
    }
    manejaClassificacao(idCorridaAtual, objClassificacaoNova) {
        var json = localStorage.getItem("corridas");
        var obj = JSON.parse(json);

        (obj.payload).forEach(function (el) {
            if (el.corrida.identificador == idCorridaAtual) {
                el.classificacao = objClassificacaoNova;
            }

        });
        localStorage.setItem("corridas", JSON.stringify(obj));
    }
    verCorridas() {
        var corridas = JSON.parse(localStorage.getItem("corridas"));
        document.querySelector("#corridas").innerHTML = "";
        var qtd = (corridas.payload).length;
        var info = new debliwuiinfo({ nome: "CORRIDAS", qtd: qtd });
        document.querySelector("#corridas").append(info);

        var cor = (corridas.payload).reverse();
        cor.forEach(element => {
            var card = new debliwuicorridas(element);
            document.querySelector("#corridas").append(card);
        });

    }

    verCorrida() {
        var corrida = JSON.parse(localStorage.getItem("abrirCorrida"));

        var distancia = corrida.corrida.distancia;
        var tempo = corrida.corrida.tempo;
        var carromoto = (corrida.corrida.carromoto);
        var npessoas = corrida.corrida.npessoas;
        var partida = (corrida.corrida.partida)
        var destino = (corrida.corrida.destino);
        var total = formataPreco(Number(corrida.corrida.total)) + " kz";
        var idavolta = (Number(corrida.corrida.idavolta)) ? "Sim" : "Nao";

        var template = document.createElement('div');
        template.innerHTML =
            `<p class="pdistancia">Distância: ${distancia} km</p>
            <p class="ptempo">Tempo de viagem: ${tempo}</p>
            <p>Moto ou carro: ${carromoto}</p>
            <p>Nº de pessoas: ${npessoas}</p>
            <p>Ida e volta: ${idavolta}</p>
            <p>Total: ${total}</p>`;

        document.querySelector("#detalhes").innerHTML = "";
        document.querySelector("#detalhes").append(template);
        document.querySelector("#partida").innerHTML = '<img src="/pin.svg" class="icon-p"> '+ partida.split(" | ")[0];
        document.querySelector("#destino").innerHTML = '<img src="/target.svg" class="icon-p"> '+ destino.split(" | ")[0];


        var chat = ``;
        (corrida.chat).forEach(element => {
            var data = (element.quando);
            if (element.eu) {
                chat += `<p class="right">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            } else {
                chat += `<p class="left">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            }
        });
        document.querySelector("#mensagens").innerHTML = chat;


        localStorage.setItem("abrirMotorista", (JSON.stringify(corrida.motorista)));
        localStorage.setItem("abrirClassificacao", (JSON.stringify(corrida.classificacao)));

        localStorage.setItem("abrirVeiculo", (JSON.stringify(corrida.veiculo)));
        localStorage.removeItem("thumbsStatus");


        var height = document.querySelector(".mensagens").scrollHeight;
        document.querySelector(".mensagens").scrollTo(0, height);


        if (corrida.corrida.cancelou) {
            document.querySelector(".actions").style.display = "none";
            document.querySelector(".ativa").style.display = "none";
            document.querySelector(".cancelada").style.display = "block";
            document.querySelector(".motivo").innerHTML = corrida.corrida.extra;
            return;
        }

        if (corrida.corrida.chegamos) {
            document.querySelector(".actions").style.display = "none";
            document.querySelector(".ativa").style.display = "none";
            document.querySelector(".chegamos").style.display = "block";
            return;
        }

    }
    verCupom() {
        var token = localStorage.getItem("token");
        var api = this.apiUrl;
        var loader = this.loader;
        var notificacao = this.notificacao;
        var cupom = localStorage.getItem("cupom");

        loader.abrir();
        (this.jquery).post(api + "/Corrida/verificaCupom.php", { token: token, identificador: cupom }).done(function (data) {
            var obj = JSON.parse(data);

            if (obj.ok) {
                var desconto = Number(obj.payload);
                var descontoFormatado = formataPreco(desconto);
                var preco = Number(localStorage.getItem("precoCorrida"));
                var total = formataPreco(preco - desconto);
                if ((preco - desconto) < 1000) {
                    loader.fechar();
                    notificacao.sms("Este cupom não é válido para a sua corrida");
                    return;
                }
                notificacao.sms("Recebeu um desconto de " + descontoFormatado);
                corrida.shadowRoot.querySelector(".desconto").innerHTML = `Desconto: <b>${descontoFormatado}</b>`;
                corrida.shadowRoot.querySelector(".total").innerHTML = `Total: ${total}`;
                localStorage.setItem("totalCorrida", (preco - desconto));
                localStorage.setItem("descontoCorrida", desconto);
                corrida.shadowRoot.querySelector("#cupom").setAttribute("disabled", "disabled");

            } else {
                notificacao.sms("Cupom inválido", 1);
            }

        }).always(function (a) {
            loader.fechar();
        })
    }
    concluirPedido() {
        var token = localStorage.getItem("token");
        var api = this.apiUrl;
        var loader = this.loader;
        var notificacao = this.notificacao;
        
        var idavolta = 1;
        var vaivem = localStorage.getItem('idavolta');
        if(vaivem == "nao"){
            idavolta = 0;
        }


        loader.abrir();
        (this.jquery).post(api + "/Corrida/confirmarPedido.php", {
            token: token, 
            part_coord: localStorage.getItem('part_coord'),
            dest_coord: localStorage.getItem('dest_coord'),
            polilyne: localStorage.getItem('polyline'),
            doc_rota: localStorage.getItem('doc_rota'),
            cupom: localStorage.getItem('cupom'),
            distancia: localStorage.getItem('distanciaCorrida'),
            tempo: localStorage.getItem('duracaoCorrida'),
            carromoto: (localStorage.getItem('carromoto')).toLowerCase(),
            tipo: (localStorage.getItem('categoria')).toLowerCase(),
            npessoas: localStorage.getItem('npessoas'),
            preco: localStorage.getItem('precoCorrida'),
            total: localStorage.getItem('totalCorrida'),
            ida_volta: idavolta,
            partida: localStorage.getItem('partida'),
            destino: localStorage.getItem('destino')
        }).done(function (data) {
            console.info(data);
            var obj = JSON.parse(data);


            if (obj.ok) {
                localStorage.setItem("corridaEmEspera", data);
                window._corrida.detalhesCorridaPendente();
            } else {
                notificacao.sms("Cupom inválido", 1);
            }

        }).always(function (a) {
            loader.fechar();
        })
    }

    verMotorista() {
        var api = (this.apiUrl).replace("Passageiro", "Motorista");

        var motorista = JSON.parse(localStorage.getItem("abrirMotorista"));
        var classificacao = JSON.parse(localStorage.getItem("abrirClassificacao"));
        var veiculo = JSON.parse(localStorage.getItem("abrirVeiculo"));
        var veiculoFotos = JSON.parse(veiculo.fotos);

        var fotosVeiculo = [];
        veiculoFotos.forEach(function (element) {
            fotosVeiculo.push(`<img src="${api}/Veiculo/foto/${element}">`);
        });

        localStorage.setItem("motorista", motorista.identificador);
        var nome = motorista.nome;
        var genero = motorista.genero;
        var foto = motorista.foto;
        document.querySelector("#nomegenero").innerHTML = `<p>Nome: ${nome}</p><p class="genero">Genero:  ${genero}</p>`;
        document.querySelector("#foto").innerHTML = `<img src="${api}/Conta/foto/${foto}">`;

        var matricula = veiculo.matricula;
        var marca = veiculo.marca;
        var cor = veiculo.cor;
        var modelo = veiculo.modelo;
        var tipo = veiculo.tipo;

        var fichaTecnica = document.createElement('div');
        fichaTecnica.innerHTML =
            `<p>Matricula: ${matricula}</p>
                <p>Marca: ${marca}</p>
                <p>Cor: ${cor}</p>
                <p>Modelo: ${modelo}</p>
                <p>Tipo: ${tipo}</p>`;
        document.querySelector(".ficha-tecnica").append(fichaTecnica);



        var sli = new debliwuislideimg((this.jquery), fotosVeiculo);
        document.querySelector(".imagens").append(sli);

        document.querySelector("#reacaonegativa").innerHTML = classificacao.mau;
        document.querySelector("#reacaopositiva").innerHTML = classificacao.bom;

        var thumbsDown = document.querySelector(".thumbs-down");
        var thumbsUp = document.querySelector(".thumbs-up");
        if (classificacao.votei.votei) {

            if (classificacao.votei.voto) {
                var status = localStorage.getItem("thumbsStatus");;

                if (status == null || status == "null") {
                    localStorage.setItem("thumbsStatus", "1");
                    thumbsUp.setAttribute("src", "/thumbs-up-solid.svg");
                    return;
                }
                if (status == "0") {
                    localStorage.setItem("thumbsStatus", "1");
                    thumbsDown.setAttribute("src", "/thumbs-down-regular.svg");
                    thumbsUp.setAttribute("src", "/thumbs-up-solid.svg");
                    return;
                }
            } else {
                var status = localStorage.getItem("thumbsStatus");;

                if (status == null || status == "null") {
                    localStorage.setItem("thumbsStatus", "0");
                    thumbsDown.setAttribute("src", "/thumbs-down-solid.svg");
                    return;
                }
                if (status == "1") {
                    localStorage.setItem("thumbsStatus", "0");
                    thumbsUp.setAttribute("src", "/thumbs-up-regular.svg");
                    thumbsDown.setAttribute("src", "/thumbs-down-solid.svg");
                    return;
                }
            }
        }
    }
    classificarMotorista() {
        var jquery = this.jquery;
        var api = this.apiUrl;
        var token = localStorage.getItem("token");
        var motorista = localStorage.getItem("motorista");
        var thumbStatus = localStorage.getItem("thumbsStatus");
        var thumbsDown = document.querySelector(".thumbs-down");
        var thumbsUp = document.querySelector(".thumbs-up");
        var esse = this;


        var neg = document.querySelector("#reacaonegativa");
        var pos = document.querySelector("#reacaopositiva");

        if (thumbStatus == null || thumbStatus == "null") {

        }
        if (thumbStatus == "0") {
            thumbsDown.setAttribute("src", "/thumbs-down-solid.svg");
        }
        if (thumbStatus == "1") {
            thumbsUp.setAttribute("src", "/thumbs-up-solid.svg");
        }
        thumbsDown.addEventListener("click", function () {

            var status = localStorage.getItem("thumbsStatus");

            if (status == null || status == "null") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 0 }).done(function (d) {
                    //console.log(d);
                });
                neg.innerHTML = "1";

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: 0, mau: 1, votei: { votei: true, voto: false } }
                esse.manejaClassificacao(idCorridaAtual, objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "0");
                thumbsDown.setAttribute("src", "/thumbs-down-solid.svg");
                return;
            }
            if (status == "1") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 0 }).done(function (d) {
                    //console.log(d);
                });
                var valorNeg = Number(neg.innerHTML);
                var valorPos = Number(pos.innerHTML);

                var bom = (valorPos - 1);
                var mau = (valorNeg + 1);
                pos.innerHTML = bom;
                neg.innerHTML = mau;

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: bom, mau: mau, votei: { votei: true, voto: false } }
                esse.manejaClassificacao(idCorridaAtual, objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "0");
                thumbsUp.setAttribute("src", "/thumbs-up-regular.svg");
                thumbsDown.setAttribute("src", "/thumbs-down-solid.svg");
                return;
            }
        });
        thumbsUp.addEventListener("click", function () {

            var status = localStorage.getItem("thumbsStatus");;

            if (status == null || status == "null") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 1 }).done(function (d) {
                    //console.log(d);
                });
                pos.innerHTML = "1";

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: 1, mau: 0, votei: { votei: true, voto: true } }
                esse.manejaClassificacao(idCorridaAtual, objClassificacaoNova);
                localStorage.setItem("thumbsStatus", "1");
                thumbsUp.setAttribute("src", "/thumbs-up-solid.svg");
                return;
            }
            if (status == "0") {
                jquery.post(api + "/Corrida/classificarMotorista.php", { token: token, motorista: motorista, voto: 1 }).done(function (d) {
                    //console.log(d);
                });

                var valorNeg = Number(neg.innerHTML);
                var valorPos = Number(pos.innerHTML);

                var bom = (valorPos + 1);
                var mau = (valorNeg - 1);
                pos.innerHTML = bom;
                neg.innerHTML = mau;

                var idCorridaAtual = esse.pegaIdCorridaAtual();
                var objClassificacaoNova = { bom: bom, mau: mau, votei: { votei: true, voto: true } }
                esse.manejaClassificacao(idCorridaAtual, objClassificacaoNova);

                localStorage.setItem("thumbsStatus", "1");
                thumbsDown.setAttribute("src", "/thumbs-down-regular.svg");
                thumbsUp.setAttribute("src", "/thumbs-up-solid.svg");
                return;
            }
        });
    }

    verCorridaAtual() {
        var api = (this.apiUrl).replace("Passageiro", "Motorista");
        var corrida = JSON.parse(localStorage.getItem("corridaatual"));

        var distancia = corrida.corrida.distancia;
        var tempo = corrida.corrida.tempo;
        var carromoto = (corrida.corrida.carromoto);
        var npessoas = corrida.corrida.npessoas;
        var partida = corrida.corrida.partida;
        var destino = corrida.corrida.destino;
        var total = formataPreco(Number(corrida.corrida.total)) + " kz";
        var idavolta = (Number(corrida.corrida.ida_volta)) ? "Sim" : "Nao";

        var template = document.createElement('div');
        template.innerHTML =
            `<p class="pdistancia">Distância: ${distancia} km</p>
            <p class="ptempo">Tempo de viagem: ${tempo}</p>
            <p>Moto ou carro: ${carromoto}</p>
            <p>Nº de pessoas: ${npessoas}</p>
            <p>Ida e volta: ${idavolta}</p>
            <p>Total: ${total}</p>`;

        document.querySelector("#detalhes").innerHTML = "";
        document.querySelector("#detalhes").append(template);
        document.querySelector("#partida").innerHTML = '<img src="/pin.svg" class="icon-p"> '+ partida.split(" | ")[0];
        document.querySelector("#destino").innerHTML = '<img src="/target.svg" class="icon-p"> '+ destino.split(" | ")[0];


        var nome = corrida.motorista.nome;
        var genero = corrida.motorista.genero;
        var telefone = corrida.motorista.telefone;
        var foto = corrida.motorista.foto;
        document.querySelector(".passageiro-info").innerHTML = `
            <img src="${api}/Conta/foto/${foto}">
            <p>Nome: ${nome}</p>
            <p>Genero: ${genero}</p> <br>
            <a style="border:1px solid red;border-radius:5px;color:red;margin-top:5px;text-decoration:none;padding:3% 10%" href="tel:${telefone}"><span>LIGAR</span></a>
        `;


        var chatt = ``;

        (corrida.chat).forEach(element => {
            var data = (element.quando);
            if (element.eu) {
                chatt += `<p class="right">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            } else {
                chatt += `<p class="left">
                <span class="quem">${element.emissor}</span>
                <span class="sms">${element.mensagem}</span>
                <span class="quando">${data}</span>
            </p>`;
            }
        });
        document.querySelector("#mensagens").innerHTML = chatt;

        var height = document.querySelector(".mensagens").scrollHeight;
        document.querySelector(".mensagens").scrollTo(0, height);

        localStorage.setItem("abrirMotorista", (JSON.stringify(corrida.motorista)));
        localStorage.setItem("abrirClassificacao", (JSON.stringify(corrida.classificacao)));

        localStorage.setItem("abrirVeiculo", (JSON.stringify(corrida.veiculo)));

        this.enviaMensagem();
        this.pullingMensagem();
        if (corrida.corrida.cancelou) {
            document.querySelector(".actions").style.display = "none";
            document.querySelector(".ativa").style.display = "none";
            document.querySelector(".cancelada").style.display = "block";
            document.querySelector(".motivo").innerHTML = corrida.corrida.extra;
            return;
        }

        if (corrida.corrida.chegamos) {
            document.querySelector(".actions").style.display = "none";
            document.querySelector(".ativa").style.display = "none";
            document.querySelector(".chegamos").style.display = "block";
            return;
        }
        this.pullingCancelamento();

    }
    enviaMensagem() {
        var esse = this;
        var token = localStorage.getItem("token");
        document.querySelector(".actions img").addEventListener("click", function () {
            esse.loader.abrir();
            var corrida = JSON.parse(localStorage.getItem("corridaatual"));
            var identificador = corrida.corrida.identificador;
            var sms = document.querySelector(".actions input").value;
            if (sms.length <= 1) {
                esse.notificacao.sms("Mensagem muito curta", 1);
                esse.loader.fechar();
                return;
            }
            (esse.jquery).post((esse.apiUrl) + "/Corrida/chat.php", { token: token, sms: sms, corrida: identificador }).done(function (data) {
                //console.log(data);
                var obj = JSON.parse(data);
                if (obj.ok) {
                    var mensagem = document.createElement("p");
                    var quando = timestampToDate(timestampToDate(Date.now()));
                    var quem = localStorage.getItem("nome") + " <b>(Eu)</b>";
                    mensagem.setAttribute("class", "right");
                    mensagem.innerHTML = (`
                        <span class="quem">${quem}</span>
                        <span class="sms">${sms}</span>
                        <span class="quando">${quando}</span>
                    `);
                    document.querySelector("#mensagens").append(mensagem);
                    var height = document.querySelector(".mensagens").scrollHeight;
                    document.querySelector(".mensagens").scrollTo(0, height);
                    var sms = document.querySelector(".actions input").value = "";
                }
            }).always(function (al) {
                esse.loader.fechar();
            })
        })
    }
    pullingMensagem() {
        var esse = this;
        var mensagensNovas = setInterval(function () {
            if (!(localStorage.getItem("corridaatual"))) {
                clearInterval(mensagensNovas);
            }
            var token = localStorage.getItem("token");
            var path = window.location.pathname;
            var corrida = JSON.parse(localStorage.getItem("corridaatual"));
            var identificador = corrida.corrida.identificador;
            var motorista = corrida.motorista.nome;
            var eu = localStorage.getItem("nome");

            if (path != "/corridaatual") {
                clearInterval(mensagensNovas);
            }
            if (corrida.corrida.cancelou) {
                clearInterval(mensagensNovas);
            }

            (esse.jquery).post((esse.apiUrl) + "/Corrida/verChat.php", { token: token, corrida: identificador, eu: eu, motorista: motorista }).done(function (data) {
                //console.log("chat: "+data);
                var chatAtual = JSON.stringify(corrida.chat);
                var novo = JSON.parse(data);

                var chatNovo = JSON.stringify(novo.payload);
                if (chatNovo == chatAtual) {

                } else {

                    var obj = JSON.parse(data);
                    if (obj.ok) {
                        var chat = ``;
                        (obj.payload).forEach(element => {
                            var data = (element.quando);
                            //console.log(element.eu);
                            if (element.eu) {
                                chat += `<p class="right">
                                <span class="quem">${element.emissor}</span>
                                <span class="sms">${element.mensagem}</span>
                                <span class="quando">${data}</span>
                            </p>`;
                            } else {
                                chat += `<p class="left">
                                <span class="quem">${element.emissor}</span>
                                <span class="sms">${element.mensagem}</span>
                                <span class="quando">${data}</span>
                            </p>`;
                            }
                        });
                        document.querySelector("#mensagens").innerHTML = chat;
                        var height = document.querySelector(".mensagens").scrollHeight;
                        document.querySelector(".mensagens").scrollTo(0, height);
                    }

                    var cor = JSON.parse(localStorage.getItem("corridaatual"));
                    cor.chat = (JSON.parse(data)).payload;
                    //console.log(cor);
                    localStorage.setItem("corridaatual", JSON.stringify(cor));
                }
            }).always(function (al) {

            })
        }, 1000)

    }
    pullingCancelamento() {
        var esse = this;
        var mensagensNovas = setInterval(function () {

            var token = localStorage.getItem("token");
            var path = window.location.pathname;
            if (path != "/corridaatual") {
                clearInterval(mensagensNovas);
            }
            var corrida = JSON.parse(localStorage.getItem("corridaatual"));
            var identificador = corrida.corrida.identificador;
            //console.warn(identificador);
            (esse.jquery).get((esse.apiUrl) + "/Corrida/verCancelamento.php", { token: token, corrida: identificador }).done(function (data) {
                //console.log(data);
                var corridaAtual = JSON.stringify(corrida.corrida);
                var novo = JSON.parse(data);

                var corridaNovo = JSON.stringify(novo.payload);
                //console.warn("que vem: " + corridaNovo);
                //console.info("atual: " + corridaAtual);
                if (corridaNovo == corridaAtual) {

                } else {

                    var obj = JSON.parse(data);
                    if (obj.ok) {
                        if (obj.payload.cancelou) {
                            document.querySelector(".actions").style.display = "none";
                            document.querySelector(".ativa").style.display = "none";
                            document.querySelector(".cancelada").style.display = "block";
                            document.querySelector(".iniciar-corrida").style.display = "none";
                            document.querySelector(".motivo").innerHTML = obj.payload.extra;
                            clearInterval(mensagensNovas);
                        }
                        if (obj.payload.chegamos) {
                            document.querySelector(".actions").style.display = "none";
                            document.querySelector(".ativa").style.display = "none";
                            document.querySelector(".chegamos").style.display = "block";
                            clearInterval(mensagensNovas);
                        }
                        if (obj.payload.inicio) {
                            document.querySelector(".depois-de-iniciar").style.display = "block";
                            document.querySelector(".iniciar-corrida").style.display = "none";
                        }
                    }

                    var cor = JSON.parse(localStorage.getItem("corridaatual"));
                    cor.corrida = (JSON.parse(data)).payload;
                    //console.log(cor);
                    localStorage.setItem("corridaatual", JSON.stringify(cor));
                }
            }).always(function (al) {

            })
        }, 1000)

    }
    veInicio() {
        var corrida = JSON.parse(localStorage.getItem("corridaatual"));
        var inicio = corrida.corrida.inicio;
        if (inicio) {
                document.querySelector(".depois-de-iniciar").style.display = "block";
        }
    }
    panico() {
        var esse = this;
        this.loader.abrir();
        var corrida = JSON.parse(localStorage.getItem("corridaatual"));
        var identificador = corrida.corrida.identificador;
        var local = localStorage.getItem("minhaPosicao");
        (this.jquery).post((this.apiUrl) + "/Corrida/panico.php", { token: token, corrida: identificador, local: local }).done(function (data) {

            var obj = JSON.parse(data);
            if (obj.ok) {

            }
        }).always(function (al) {

        })
    }
    cancelar(motivo) {
        var esse = this;
        this.loader.abrir();
        var corrida = JSON.parse(localStorage.getItem("corridaatual"));
        var identificador = corrida.corrida.identificador;
        (this.jquery).post((this.apiUrl) + "/Corrida/cancelar.php", { token: token, corrida: identificador, motivo: motivo }).done(function (data) {
            //console.log(data);
            var obj = JSON.parse(data);
            if (obj.ok) {
                document.querySelector(".actions").style.display = "none";
                document.querySelector(".ativa").style.display = "none";
                document.querySelector(".cancelada").style.display = "block";
                document.querySelector(".motivo").innerHTML = motivo;

                //console.log(cor);
                localStorage.setItem("corridaatual", "");
                localStorage.setItem("corridaaativa", "nao");
                //location.reload();
            }
        }).always(function (al) {
            esse.loader.fechar();
        })
    }
    chegamos() {
        var esse = this;
        this.loader.abrir();
        var token = localStorage.getItem("token");
        var corrida = JSON.parse(localStorage.getItem("corridaatual"));
        var identificador = corrida.corrida.identificador;
        (this.jquery).post((this.apiUrl) + "/Corrida/chegamos.php", { token: token, corrida: identificador }).done(function (data) {
            //console.log(data);
            var obj = JSON.parse(data);
            if (obj.ok) {
                document.querySelector(".actions").style.display = "none";
                document.querySelector(".ativa").style.display = "none";
                document.querySelector(".chegamos").style.display = "block";

                var cor = JSON.parse(localStorage.getItem("corridaatual"));
                cor.corrida.chegamos = "1";
                //console.log(cor);
                localStorage.setItem("corridaatual", JSON.stringify(cor));
            }
        }).always(function (al) {
            esse.loader.fechar();
        })
    }
    okay() {
        this.loader.abrir();
        var esse = this;
        _DADOS.buscar();
        localStorage.setItem("corridaativa", "");
        localStorage.setItem("corridaatual", "");
        localStorage.setItem("corridapendente", "nao");
        setTimeout(function () {
            //esse.loader.fechar();
            location.href = ".";
        }, 3000)
    }


}

window.Corrida = Corrida;

