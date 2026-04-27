class Guesthouse {
    constructor(jquery, apiUrl, loader, notificacao) {
        this.jquery = jquery;
        this.apiUrl = apiUrl;
        this.loader = loader;
        this.notificacao = notificacao;
    }

    poeschroller(elementos) {
        var elementos = elementos.toReversed();
        var schroller = document.createElement("div");
        schroller.setAttribute("class", "schroller");

        var total = document.createElement("p");
        total.innerHTML =(elementos.length)+ " Guesthouses";
        total.style.position = "absolute";
        total.style.top = "-13px";
        total.style.fontSize = "13px";
        total.style.left = "6px";
        total.style.zIndex = "1";
        total.style.fontWeight = "bold";
        total.style.opacity = ".5";
        schroller.append(total);

        var rouller = document.createElement("div");
        rouller.setAttribute("class", "rouller");
        var width = (elementos.length) * 230;
        rouller.style.width = width + "px";


        elementos.forEach(element => {
            var api = (this.apiUrl).replace("Passageiro", "Guesthouse");
            var foto = JSON.parse(element["fotos"])[0];
            var tipo = element.tipo;
            var preco = formataPreco(Number(element.preco));

            var cardTemplate = document.createElement("div");
            cardTemplate.setAttribute("class", "card-rentacar");
            cardTemplate.innerHTML = `
                <div class="card-container">
                    <button>Arrendar agora</button>
                    <img src="${api}/House/foto/${foto}" alt="">
                    <div class="card-bottom">
                        <p>${tipo}</p>
                        <p>kz ${preco} / dia</p>
                    </div>
                </div>`;

            cardTemplate.addEventListener("click", function () {
                localStorage.setItem("abrirApartamento", JSON.stringify(element));
                vaiTela("/apartamento");
            });
            rouller.append(cardTemplate);
        });


        schroller.append(rouller);
        //document.querySelector("#cards-carros").innerHTML = "";

        document.querySelector("#cards-carros").append(schroller);

    }
    poeNormal(elementos) {
        elementos.forEach(element => {
            var api = (this.apiUrl).replace("Passageiro", "Guesthouse");
            var foto = JSON.parse(element["fotos"])[0];
            var tipo = element.tipo;
            var preco = formataPreco(Number(element.preco));

            var cardTemplate = document.createElement("div");
            cardTemplate.setAttribute("class", "card-rentacar-grande");
            cardTemplate.innerHTML =
                `<div class="card-container">
                    <button>Arrendar agora</button>
                    <img src="${api}/House/foto/${foto}" alt="">
                    <div class="card-bottom">
                        <p>${tipo}</p>
                        <p>kz ${preco} / dia</p>
                    </div>
                </div>`;

            cardTemplate.addEventListener("click", function () {
                localStorage.setItem("abrirApartamento", JSON.stringify(element));
                vaiTela("/apartamento");
            });
            document.querySelector("#cards-carros").innerHTML = "";
            document.querySelector("#cards-carros").append(cardTemplate);
        });
    }


    meteDuas(dados) {
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        for (let i = 0; i < tamanho; i += dobra) {
            res.push(dados.slice(i, i + dobra));
        }


        if (!(res[0].length % 2)) {
            this.poeschroller(res[1]);
            this.poeNormal(res[0]);
            return;
        }

        if (res[1].length % 2) {
            var arrayUm = res[0];
            var arrayDois = res[1];

            var arrayNovo = [arrayDois[0], ...arrayUm];
            this.poeschroller(arrayNovo);
            arrayDois.shift();
            this.poeNormal(arrayDois);
            return;
        }

        if (!(res[1].length % 2)) {
            this.poeschroller(res[0]);
            this.poeNormal(res[1]);
            return;
        }

        console.log(res);
    }



    getApartamentos() {

        var apartamentos = JSON.parse(localStorage.getItem("apartamentos"));
        var dados = (apartamentos.payload);
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        this.trataArray(dados, res);
        console.log(res);

        document.querySelector("#cards-carros").innerHTML = "";
        for (let i = 0; i < res.length; i++) {
            this.poeschroller(res[i]);
        }
    }

    trataArray(dados, arrayContatenar) {
        var tamanho = dados.length;
        var dobra = Math.ceil(tamanho / 2);
        var res = [];
        for (let i = 0; i < tamanho; i += dobra) {
            res.push(dados.slice(i, i + dobra));
        }
        if (res[0].length > 12) {
            this.trataArray(res[0], arrayContatenar);
        } else {
            arrayContatenar.push(res[0]);
        }
        if (res[1].length > 12) {
            this.trataArray(res[1], arrayContatenar);
        } else {
            arrayContatenar.push(res[1]);
        }
    }


    verApartamento() {
        var api = (this.apiUrl).replace("Passageiro", "Guesthouse");
        var apartamento = JSON.parse(localStorage.getItem("abrirApartamento"));
        console.log(apartamento);

        var ApFotos = JSON.parse(apartamento.fotos);

        var fotosAp = [];
        ApFotos.forEach(function (element) {
            fotosAp.push(`<img src="${api}/House/foto/${element}">`);
        });
        var sli = new debliwuislideimg((this.jquery), fotosAp);
        document.querySelector("#fotos").append(sli);



        var tipo = apartamento.tipo;
        var quartodebanho = apartamento.casadebanho;
        var internet = apartamento.internet;
        var preco = formataPreco(Number(apartamento.preco));
        var action = document.createElement("div");
        action.setAttribute("class", "action");
        action.innerHTML = `
            <button>ARRENDE AGORA</button>
            <div>
                <p>${tipo} - ${internet} <br>Casa de banho ${quartodebanho}</p>
                <p>kz <b>${preco}</b> / dia</p>
            </div>`;

        action.querySelector("button").addEventListener("click", function () {
            vaiTela("/arrendar");
        })
        document.querySelector(".prod-top").append(action);


        var especificacoes = JSON.parse(apartamento.especificacoes);

        var estacionamento = especificacoes.estacionamento;
        var mobilia = especificacoes.mobilia;
        var vista = especificacoes.vista;
        var exterior = especificacoes.exterior;
        var climatizacao = especificacoes.climatizacao;

        var spec = document.createElement("div");
        spec.setAttribute("class", "rouller");
        spec.style.width = "575px";
        spec.innerHTML = `<div class="info">
                <img src="/estacionamento.svg" alt="">
                <p>${estacionamento}</p>
            </div>
            <div class="info">
                <img src="/mobilia.svg" alt="">
                <p>${mobilia}</p>
            </div>
            <div class="info">
                <img src="/vista.svg" alt="">
                <p>${vista}</p>
            </div>
            <div class="info">
                <img src="/exterior.svg" alt="">
                <p>${exterior}</p>
            </div>
            <div class="info">
                <img src="/climatizacao.svg" alt="">
                <p>${climatizacao}</p>
            </div>`;

        document.querySelector("#especificacoes").append(spec);

        var guesthouse = (apartamento.guesthouse);
        var nome = guesthouse.nome;
        var sobre = guesthouse.sobre;
        var telefone = guesthouse.telefone;
        
        localStorage.setItem("ligar_guesthouse",telefone);
        
        document.querySelector(".descricao").innerHTML = `
                <h3>${nome}</h3>
                <p>${sobre}</p>
                <a href="tel:${telefone}" style="padding:10px;background:red;color:white;font-weight:bold;text-decoration:none;border-radius:5px;">LIGAR</a>
            `;
    }

    arrend() {
        var esse = this;
        var apartamento = JSON.parse(localStorage.getItem("abrirApartamento"));

        let currentDate = new Date().toJSON().slice(0, 10);
        document.querySelector("#inicio").value = currentDate;
        document.querySelector("#inicioFormatado").value = this.dataDeHoje();



        var tipo = apartamento.tipo;
        var quartodebanho = apartamento.casadebanho;
        var internet = apartamento.internet;
        var preco = formataPreco(Number(apartamento.preco));

        document.querySelector(".nome-carro").innerHTML = `
                <p>${tipo} - ${internet} <br>Casa de banho ${quartodebanho}</p>`;

        document.querySelector(".preco span").innerHTML = `
                <b>${preco}</b> / dia`;





        var especificacoes = JSON.parse(apartamento.especificacoes);

       var estacionamento = especificacoes.estacionamento;
        var mobilia = especificacoes.mobilia;
        var vista = especificacoes.vista;
        var exterior = especificacoes.exterior;
        var climatizacao = especificacoes.climatizacao;

        var spec = document.createElement("div");
        spec.setAttribute("class", "rouller");
        spec.style.width = "575px";
        spec.innerHTML = `<div class="info">
                <img src="/estacionamento.svg" alt="">
                <p>${estacionamento}</p>
            </div>
            <div class="info">
                <img src="/mobilia.svg" alt="">
                <p>${mobilia}</p>
            </div>
            <div class="info">
                <img src="/vista.svg" alt="">
                <p>${vista}</p>
            </div>
            <div class="info">
                <img src="/exterior.svg" alt="">
                <p>${exterior}</p>
            </div>
            <div class="info">
                <img src="/climatizacao.svg" alt="">
                <p>${climatizacao}</p>
            </div>`;

        document.querySelector("#especificacoes").append(spec);


        document.querySelector("#precoDia").value = (Number(apartamento.preco));

        document.querySelector("#inicio").addEventListener("change", function () {
            var dataFinal = esse.formataData(this.value);
            var dataDeHoje = esse.dataDeHoje();

            if (dataDeHoje > dataFinal) {
                esse.notificacao.sms("Não pode usar datas passadas", 1);
                return;
            }
            document.querySelector("#inicioFormatado").value = dataFinal;
            console.log(this.value);


        });
        document.querySelector("#fim").addEventListener("change", function () {
            var dataFinal = esse.formataData(this.value);
            var inicio = document.querySelector("#inicioFormatado").value;


            if (inicio == "0") {
                esse.notificacao.sms("Precisa de uma data inicial", 1);
                return;
            }
            if (inicio >= dataFinal) {
                esse.notificacao.sms("As datas de aluguer são inválidas", 1);
                return;
            }
            if (inicio < dataFinal) {
                var dias = (dataFinal - inicio);
                var preco = Number(document.querySelector("#precoDia").value);
                var total = formataPreco(dias * preco)

                document.querySelector(".total span").innerHTML = `
                <b>${total}</b>`;
                document.querySelector(".desconto span").innerHTML = `
                <b>${dias}</b>`;

            }

            document.querySelector("#fimFormatado").value = dataFinal;
            console.log(inicio, dataFinal);
        });

    }
    alugar() {
        this.loader.abrir();
        let currentDate = new Date().toJSON().slice(0, 10);
        var esse = this;
        var api = (this.apiUrl);
        var inicio = Number(document.querySelector("#inicioFormatado").value);
        var fim = Number(document.querySelector("#fimFormatado").value);
        var dias = (fim - inicio);

        var esse = this;
        var apartamento = JSON.parse(localStorage.getItem("abrirApartamento"));
        var guesthouseId = (apartamento.guesthouse).identificador;
        var apartamentoId = apartamento.identificador;

        var de = document.querySelector("#inicio").value;
        var ate = document.querySelector("#fim").value;

        var preco = apartamento.preco;
        var total = Number(preco) * dias;
        var token = localStorage.getItem("token");

        var obj = {};

        obj.rentacar = guesthouseId;
        obj.carro = apartamentoId;
        obj.de = de;
        obj.ate = ate;
        obj.dias = dias;
        obj.preco = preco;
        obj.total = total;
        obj.token = token;


        (this.jquery).post(api + "/Guesthouse/alugar.php", obj).done(function (data) {
            console.log(data);
            var objeto = JSON.parse(data);
            if (objeto.ok) {
                var post = obj;
                post.quando = currentDate;

                var aluguer = {apartamento: apartamento, aluguer: post};
                var aluguerPendente = localStorage.getItem("arrendamentos");
                var alugueres = JSON.parse(aluguerPendente);
                (alugueres.payload).push(aluguer);

                localStorage.setItem("arrendamentos", JSON.stringify(alugueres));

                esse.notificacao.sms("Concluido com sucesso");
                window.scrollTo(0, 0);
                vaiTela("/arrendarpendente");

            } else {
                esse.notificacao.sms("Erro, algo inexperado aconteceu", 1);
            }
        }).always(function (a) {
            esse.loader.fechar();
        })


    }
    formataData(data) {
        var dat = data;
        var dataFormatada = dat.replaceAll("-", "");
        return Number(dataFormatada);
    }
    dataDeHoje() {
        let currentDate = new Date().toJSON().slice(0, 10);
        return this.formataData(currentDate);
    }

}

window.Guesthouse = Guesthouse;

