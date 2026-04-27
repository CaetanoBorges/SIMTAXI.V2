const CORRIDA = {
    "markers": [],
    "_pullingIntervalo": null,
    "_pullingGPSIntervalo": null,
    "pendente": function () {

    },
    "pararPulling": function () {
        if (this._pullingIntervalo)    { clearInterval(this._pullingIntervalo);    this._pullingIntervalo    = null; }
        if (this._pullingGPSIntervalo) { clearInterval(this._pullingGPSIntervalo); this._pullingGPSIntervalo = null; }
    },
    "pulling": function () {
        var esse = this;
        esse._pullingIntervalo = window.setInterval(function () {
            var isActive = localStorage.getItem("corridapendente");
            var minhaPosicao = localStorage.getItem("minhaPosicao");

            if (isActive == "sim") {
                var token = localStorage.getItem("token");
                var corr = localStorage.getItem("corridaEmEspera");
                var corrida = JSON.parse(corr);
                $.get(api + "/Corrida/ver.php", { token: token, corrida: corrida.payload.identificador }).done(function (data) {
                    //console.info(data);
                    var array = JSON.parse(data);
                    if(!array.ok){
                        localStorage.setItem("corridapendente","nao");
                        notificacao.sms("Cancelado automaticamente <br>Muito tempo sem resposta",1);
                    }
                    var qtd = (array.payload.motoristasproximos).length;

                    if (corr == data) {
                        var controle = localStorage.getItem("controlaMotoristasProximos");
                        if (controle < 1) {
                            //esse.deletaMarcadorDoMapa();
                            var array = JSON.parse(data);
                            document.querySelector(".pendente .contador").innerHTML = qtd;
                            esse.detalhesCorridaPendente();
                            document.querySelector("#pendentes").innerHTML = '';
                            //console.error(array);
                            var reversed = (array.payload.motoristasproximos).reverse();
                            (reversed).forEach(element => {
                                esse.calcRoute(element.motorista.endereco, minhaPosicao, element);
                            });
                            localStorage.setItem("corridaEmEspera", data);
                        }
                        //console.info("igual");
                        localStorage.setItem("controlaMotoristasProximos", 1);
                    } else {
                        //esse.deletaMarcadorDoMapa();
                        var array = JSON.parse(data);
                        document.querySelector(".pendente .contador").innerHTML = qtd;
                        esse.detalhesCorridaPendente();
                        document.querySelector("#pendentes").innerHTML = '';
                        var reversed = (array.payload.motoristasproximos).reverse();
                        (reversed).forEach(element => {
                            esse.calcRoute(element.motorista.endereco, minhaPosicao, element);
                        });
                        localStorage.setItem("corridaEmEspera", data);
                    }


                }).always(function (al) {

                })
            }

        }, 2000);
    },
    "calcRoute": function (motorista, passageiro, element) {
        //Create request
        var esse = this;
        //console.info(element);
        var duracao = element.motorista.duracao;
        var endereco = element.motorista.endereco;

        var pendente = new debliwuipendente($, element, duracao);
        document.querySelector("#pendentes").appendChild(pendente);

    },
    "acionaPendentes": function () {
        var pendenteContainer = document.querySelector(".scroller").style;
        document.querySelector("#pendente-backdrop").addEventListener("click", function () {
            pendenteContainer.display = "none";
            document.querySelector("#pendente-backdrop").style.display = "none";
        });
        //console.log(pendenteContainer.display);
        if (pendenteContainer.display == "none") {
            pendenteContainer.display = "block";
            document.querySelector("#pendente-backdrop").style.display = "block";
        } else {
            pendenteContainer.display = "none";
            document.querySelector("#pendente-backdrop").style.display = "none";
        }
    },

    "deletaMarcadorDoMapa": function () {
        var markers = this.markers;
        for (let i = 0; i < markers.length; i++) {
            mapa.removeObject(markers[i]);
        }
    },

    "aceitarCorrida": function (motorista) {
        var esse = this;
        loader.abrir();
        var corr = JSON.parse(localStorage.getItem("corridaEmEspera"));
        var dados = corr.payload;
        var corrida = dados.identificador;
        var token = localStorage.getItem("token");
        $.post(api + "/Corrida/aceitarCorrida.php", { token: token, corrida: corrida, motorista: motorista }).done(function (data) {
            //console.log(data);
            var res = JSON.parse(data);
            if (res.ok) {
                esse.deletaMarcadorDoMapa();
                localStorage.setItem("corridaatual", JSON.stringify(res.payload));
                localStorage.setItem("corridaativa", "sim");
                localStorage.removeItem("corridaEmEspera");
                localStorage.removeItem("corridapendente");
                localStorage.removeItem("controlaMotoristasProximos");
                notificacao.sms("Aceitou a corrida");
                esse.pullingGPSmotorista();
            } else {
                notificacao.sms("Erro, tente novamente", 1);
            }
        }).always(function (a) {
            loader.fechar();
        })
    },
    "cancelarCorrida": function () {
        var esse = this;
        loader.abrir();

        var corr = JSON.parse(localStorage.getItem("corridaEmEspera"));
        var dados = corr.payload;
        var corrida = dados.identificador;
        var token = localStorage.getItem("token");
        $.post(api + "/Corrida/cancelarCorrida.php", { token: token, corrida: corrida }).done(function (data) {
            //console.log(data);
            var res = JSON.parse(data);
            if (res.ok) {
                //esse.deletaMarcadorDoMapa();
                localStorage.removeItem("corridapendente");
                localStorage.removeItem("corridaEmEspera");
                localStorage.removeItem("controlaMotoristasProximos");
                history.back();
                history.back();
                //history.back();
                notificacao.sms("Cancelou a corrida");
            } else {
                notificacao.sms("Erro, tente novamente", 1);
            }
        }).always(function (a) {
            loader.fechar();
        })
    },
    "detalhesCorridaPendente": function () {
        var corr = JSON.parse(localStorage.getItem("corridaEmEspera"));

        var dados = corr.payload;
        var distancia = dados.distancia;
        var tempo = dados.tempo;
        var veiculo = dados.carromoto;
        var ida_volta = Number(dados.ida_volta) ? "Sim" : "Não";
        var npessoas = dados.npessoas;
        var tipo = dados.tipo;

        var partida = (dados.partida).split(" | ")[0];
        var destino = (dados.destino).split(" | ")[0];
        document.querySelector("#info-pendentes-disponiveis").shadowRoot.querySelector(".detalhes").innerHTML = `
                <div>
                    <p class="distancia">Distancia: <span>${distancia}</span></p>
                    <p class="tempo">Tempo de viagem: <span>${tempo}</span></p>
                    <p class="veiculo">Veiculo: <span>${veiculo}</span></p>
                    <p class="veiculo">Categoria: <span>${tipo}</span></p>
                    <p class="idavolta">Ida e volta: <span>${ida_volta}</span></p>
                    <p class="pessoas">Nº de pessoas: <span>${npessoas}</span></p>
                </div>
        `;
        document.querySelector("#info-pendentes-disponiveis").shadowRoot.querySelector(".endereco section").innerHTML = `
            <p class="partida"><b>De:</b> ${partida}</p>
            <p class="destino"><b>Para:</b> ${destino}</p>
        `;
        document.querySelector("#info-pendentes-disponiveis").shadowRoot.querySelector(".preco").innerHTML = formataPreco(Number(dados.total)) + " kz";
    },
    /////////////

    "calculaRotaCorrida": function (partida, destino) {
        //APAGOUSE
        
    },
    ////
    "pullingGPSmotorista": function () {
        var esse = this;
        esse._pullingGPSIntervalo = setInterval(function () {
            var corridaativa = (localStorage.getItem("corridaativa"));
            if (corridaativa == "sim") {
                function clear(position) {
                    //console.error(pos);
                    var pos = position.split(",");
                    if (window.posicaoMot) {
                        (window.posicaoMot).setMap(null);
                    }
                    //window.posicaoMot = new google.maps.Marker(position:{lat:pos[0], lng:pos[1]}, map: mapa);
                    var location = new google.maps.LatLng(pos[0], pos[1]);
                    window.posicaoMot = new google.maps.Marker({
                        position: location,
                        map: mapa
                    });

                }
                var corrida = JSON.parse(localStorage.getItem("corridaatual"));
                var motorista = corrida.motorista.identificador;
                var token = localStorage.getItem("token");
                $.get(api + "/Corrida/getGPSmotorista.php", { token: token, motorista: motorista }).done(function (data) {
                    //console.error(data);
                    var res = JSON.parse(data);
                    if (res.ok) {
                       //console.log(res);
                       clear(res.payload);
                    }
                }).always(function (a) {

                })

            }
        }, 6000);
    }
};
window.CORRIDA = CORRIDA;
