const debliwui_corrida = document.createElement('template');
debliwui_corrida.innerHTML = `
    <style>
        *{margin:0;padding:0;}
        .container{
            opacity:0;
            position:fixed;
            padding: 25px 1% 20px 1%;
            height:fit-content;
            right: 0;
            bottom:0;
            background: none;
            /*box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);*/
            border-radius:50px 50px 0 0;
            z-index: 10101;
            width:400px;
            z-index: 999999999;
        }

        .btn-chamar-um{
            width: 75%;
            height: 31px;
            background: #ff0000;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #ff0000;
            cursor:pointer;
        }
        .inputs{
            width:100%;
            display: none;
            align-items:flex-start;
            justify-content:space-around;
            font-weight:600;
        }
        .inputs .inputde{
            width: 100%;
            height: 31px;
            background: rgba(217, 217, 217, 0.35);
            border-radius: 5px 5px 0px 0px;
            text-align:center;
            color: #d97e13;
            border: 1px solid rgba(217, 217, 217, 0.35);
        }
        .inputs .inputde:focus{
            outline: 1px solid #d97e13;
        }

        .inputs .inputpara{
            width: 100%;
            height: 31px;
            background: rgba(217, 217, 217, 0.35);
            border-radius: 0px 0px 5px 5px;
            text-align:center;
            color: #6EC85F;
            border: 1px solid rgba(217, 217, 217, 0.35);
        }
        .inputs .inputpara:focus{
            outline: 1px solid #6EC85F;
        }

        .inputs div{
            position:relative;
            margin:5px 0;
        }
        .inputs .span{
            position:absolute;
            top: 6px;
            left: 6px;
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.5);

        }
        .inputs img{
            margin: 15px 0;
        }

        *:focus {
            outline:none;
        }

        .switch{
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            cursor:pointer;
            border-radius:10px;
            margin-top:30px !important;
        }


        .basic-info{
            width:100%;
            padding:2% 0;
            font-size:13px;
            justify-content:space-between;
            margin: 10px 0 15px 0;
            display:none;
            font-size:15px;

        }

        .basic-info p{
           

        }
        .basic-info .basic-distancia-preco span{
            color:#6EC85F;
        }
        .basic-tempo{
            
        }

        .btn-chamar-taxi{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            display:block;
            margin:0 auto;
            border: 1px solid #2FD913;
            cursor:pointer;
        }

        .status-um{ display:none;}
        .selects{display:flex;width:100%;align-items:center;justify-content:space-between;}
        .selects select {width: 87px;
            height: 31px;background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;text-align:center;}
                    .selects p{
            height: 15px;
            font-size: 12px;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.67);}


        .cupom{width:100%;}
        .cupom .titulo{
            font-size: 12px;
            text-transform:uppercase;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.67);
        }
        .cupom .descricao{
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.51);
            margin: 0 0 5px 0;
        }
        .cupom input{
            width: 98%;
            height: 31px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;
            padding-left:2%;
        }

        .concluir{width:100%;}
        
        .btn-taxi-concluir{
            width: 80%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0 5px 10.5%;
            border: 1px solid #2FD913;
            cursor:pointer;
        }
        .btn-taxi-voltar{
            width: 80%;
            height: 31px;
            background: #ff000050;
            border-radius: 5px;
            margin:15px 0 5px 10.5%;
            border: 1px solid #ff0000;
            cursor:pointer;
            
        }
        .concluir .preco{
            font-size: 16px;
            line-height: 19px;
            color: rgba(0, 0, 0, 0.53);
            margin-top:10px;
        }
        .concluir .desconto{
            font-size: 16px;
            line-height: 19px;
            color: #D97E13;
        }
        .concluir .total{
            font-size: 16px;
            line-height: 19px;
            color: #2FD913;margin-bottom:10px;
        }

        .centro{width:80%;height:fit-content}

        .pagamentos{
            background: rgba(217, 217, 217, 0.1);
            display:none;
            margin-top:20px !important;
        }
        .pagamentos .header{
            width:100%;
            text-align:center;
            padding:15px 0;
            background: rgba(217, 217, 217, 0.45);
            border-radius: 5px 5px 0px 0px;
            font-size:16pt;
        }
        .pagamentos .descricao{
            text-align:center;
            padding:15px 0;
            font-size: 10px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.54);
            margin-top:15px;
        }
        .pagamentos div{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            text-align:center;
            border-radius: 0px 0px 5px 5px;
        }
        .pagamentos div img{
            width:22%;
            cursor:pointer;
            filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
            border-radius: 10px;
        }

        .confirmar-sms{
            background: rgba(217, 217, 217, 0.1);
            display:none;
            margin-top:20px !important;
        }
        .confirmar-sms .header{
            width:100%;
            text-align:center;
            padding:15px 0;
            background: rgba(217, 217, 217, 0.45);
            border-radius: 5px 5px 0px 0px;
            font-size:16pt;
        }
        .confirmar-sms .descricao{
            text-align:center;
            padding:15px 0;
            font-size: 12px;
            line-height: 15px;
            color: #000000;
            margin-top:15px;
        }
        .confirmar-sms div{
            width:100%;
            border-radius: 0px 0px 5px 5px;
            padding-bottom:15px;
        }
        .confirmar-sms div input{
            display:block;
            margin: 0 auto;
            width: 80%;
            height: 31px;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;
            padding-left:10px;
        }
        .btn-confirmar-sms{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0;
            border: 1px solid #2FD913;
            cursor:pointer;
            display:none;
        }
        .btn-concluir-sms{
            width: 100%;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:15px 0;
            border: 1px solid #2FD913;
            cursor:pointer;
            display:none;
        }

        @media screen and (max-width:500px) {
            .container{
                width:98%;}
                .pagamentos div img{
            width:38%;
        }
                
        }
    </style>

    <div class="container">
        
        <div class="inputs">
            <section class="centro">
                <section class="basic-info">
                    <p class="basic-distancia-preco"><br><span></span></p>
                    <p class="basic-tempo"><br><span></span></p>
                </section>
                <button class="btn-chamar-taxi">CHAMAR TAXI</button>
                <div class="status-um">
                    <section class="selects">
                        <div>
                            <p>Carro ou moto?</p>
                            <select class="btn-select" id="carromoto">
                                <option value="carro">Carro</option>
                                <option value="moto">Moto</option>
                            </select>
                        </div>
                        <div>
                            <p>Nº de pessoas</p>
                            <select class="btn-select" id="npessoas">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </section>
                    <section class="selects">
                        <div>
                            <p>Categoria</p>
                            <select class="btn-select" id="categoria">
                                <option value="normal">Normal</option>
                                <option value="vip">VIP</option>
                            </select>
                        </div>
                        <div>
                            <p>Ida e volta?</p>
                            <select class="btn-select" id="idavolta">
                                <option value="nao">Não</option>
                                <option value="sim">Sim</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div class="cupom status-um">
                    <p class="titulo">TEM CUPOM</p>
                    <p class="descricao">Insira o código do cupom para obter desconto.</p>
                    <input type="text" id="cupom">
                </div>
                
                <div class="concluir status-um">
                    <p class="preco">Preço: <p>
                    <p class="desconto">Desconto: 0 kz<p>
                    <p class="total">Total: <p>
                    <button class="btn-taxi-voltar status-um" onclick='vaiTela("home")'>VOLTAR</button>
                </div>
                 

                <div class="pagamentos">
                    <p class="header">TOTAL 8 6431</p>
                    <p class="descricao">Escolha um método de pagamento</p>
                    <div>
                        <img src="/paypal.png"> 
                        <img src="/stripe.png"> 
                    </div>
                </div>

                <button class="btn-confirmar-sms">CONFIRMAR POR SMS</button>

                
                <div class="confirmar-sms">
                    <p class="header">TOTAL: <span class="confirmarTotal"></span></p>
                    <p class="descricao">POR FAVOR
                    <br>CONFIRME<br>
                    A CORRIDA</p>
                    <div>
                        <!--<input type="text" placeholder="Número de verificação" id="nConfirmacao">-->
                    </div>
                </div>

                <button class="btn-concluir-sms">CONFIRMAR E CONCLUIR</button>

            </section>
        </div>
        <button class="btn-taxi-concluir status-um">CHAMAR TÁXI AGORA</button>
    </div>
`;

class debliwuicorrida extends HTMLElement {

    constructor(jquery, loader, notificacao) {
        super(jquery, loader, notificacao);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_corrida.content.cloneNode(true));
        this.jquery = jquery;
        this.loader = loader;
        this.notificacao = notificacao;
        this.precoNormal = 0;
    }

    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }

    abrirChamarUmFn(esse) {
        let inputs = esse.shadowRoot.querySelector('.inputs');
        let container = esse.shadowRoot.querySelector('.container');

        container.style.background = "rgba(255, 255, 255, 0.7)";
        container.style.boxShadow = "0px 0px 5px 2px rgba(0, 0, 0, 0.25)";
        if (inputs.style.display == "flex") {

        } else {
            inputs.style.display = "flex";

        }
    }
    fecharChamarUmFn(esse) {
        let inputs = esse.shadowRoot.querySelector('.inputs');
        let container = esse.shadowRoot.querySelector('.container');

        container.style.background = "none";
        container.style.boxShadow = "none";
        if (inputs.style.display == "flex") {
            inputs.style.display = "none";
        } else {


        }
    }

    abrirChamarFn(esse) {
        let inputs = esse.shadowRoot.querySelectorAll('.status-um');
        let chamar = esse.shadowRoot.querySelector('.btn-chamar-taxi');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        inputs.forEach((value, key) => {
            if (value.style.display == "block") { }
            if (value.style.display != "block") {
                chamar.style.display = "none";
                value.style.display = "block";
                concluir.style.display = "block";
            }
        })

    }
    fecharChamarFn(esse) {
        let inputs = esse.shadowRoot.querySelectorAll('.status-um');
        let chamar = esse.shadowRoot.querySelector('.btn-chamar-taxi');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        inputs.forEach((value, key) => {
            if (value.style.display == "block") {

                chamar.style.display = "block";
                value.style.display = "none";
                concluir.style.display = "none";
            }
            if (value.style.display != "block") { }
        })

    }

    abrirConcluirFn(esse) {
        let selects = esse.shadowRoot.querySelectorAll('.btn-select');
        let cupom = esse.shadowRoot.querySelector('.cupom');
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        let divConcluir = esse.shadowRoot.querySelector('.concluir');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = esse.shadowRoot.querySelector('.btn-concluir-sms');

        selects.forEach((value, key) => {
            value.setAttribute("disabled", "disabled");

        });
        concluir.style.display = "none";
        cupom.style.display = "none";
        divConcluir.style.display = "none";
        divConcluirSMS.style.display = "block";
        confirmar.style.display = "block";
    }

    fecharConcluirFn(esse) {
        let selects = esse.shadowRoot.querySelectorAll('.btn-select');
        let cupom = esse.shadowRoot.querySelector('.cupom');
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        let divConcluir = esse.shadowRoot.querySelector('.concluir');
        let concluir = esse.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = esse.shadowRoot.querySelector('.btn-concluir-sms');

        selects.forEach((value, key) => {
            value.removeAttribute("disabled");

        });
        concluir.style.display = "block";
        cupom.style.display = "block";
        divConcluir.style.display = "block";
        divConcluirSMS.style.display = "none";
        confirmar.style.display = "none";
    }

    abrirConfirmarFn(esse) {
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        var concluir = esse.shadowRoot.querySelector('.btn-concluir-sms');
        var confirmar = esse.shadowRoot.querySelector('.btn-confirmar-sms');

        confirmar.style.display = "none";
        divConcluirSMS.style.display = "block";
        concluir.style.display = "block";
    }
    fecharConfirmarFn(esse) {
        var divConcluirSMS = esse.shadowRoot.querySelector('.confirmar-sms');
        var concluir = esse.shadowRoot.querySelector('.btn-concluir-sms');

        divConcluirSMS.style.display = "none";
        concluir.style.display = "none";
    }

    abrirConcluirSMSFn(esse) {
        esse.loader.abrir();
        esse.fechar();
        //vaiTela("/taxiacaminho");
        localStorage.setItem("corridapendente", "sim");
        esse.loader.fechar();
    }

    resetaCupom(esse){
        localStorage.setItem("descontoCorrida", "0");
        esse.shadowRoot.querySelector("#cupom").removeAttribute("disabled");
        esse.shadowRoot.querySelector("#cupom").value ="";
        esse.shadowRoot.querySelector("#cupom").innerHTML ="";
        esse.shadowRoot.querySelector(".desconto").innerHTML = `Desconto: <b>0</b>`;
        localStorage.removeItem("cupom");
    }

    connectedCallback() {
        var esse = this;
        var notificacao = this.notificacao;
        var container = this.shadowRoot.querySelector('.container');
        var basic = this.shadowRoot.querySelector('.basic-info');
        var chamar = this.shadowRoot.querySelector('.btn-chamar-taxi');
        var concluir = this.shadowRoot.querySelector('.btn-taxi-concluir');
        var confirmar = this.shadowRoot.querySelector('.btn-confirmar-sms');
        var concluirSMS = this.shadowRoot.querySelector('.btn-concluir-sms');

        /**
         * COMECA A LOGICA DE PREFERENCIAS DA CORRIDA
         */
        this.shadowRoot.querySelector("#npessoas").addEventListener("change", function () {
            var input = this.value;
            /* if(input == "1" || input == 1){
                 
                 var distancia = localStorage.getItem("distanciaCorrida");
                 var precoPorKilometro = localStorage.getItem("precoPorKilometro");
 
                 var total = Number((distancia.split(" ")[0]).replace(",",".")) * Number(precoPorKilometro);
 
                 localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                 esse.shadowRoot.querySelector(".total").innerHTML = "Total: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: "+formataPreco(total)+" kz";
 
             }
             if(input == "2" || input == 2){
                 
                 var preco = localStorage.getItem("precoCorrida");
                 var prec = Number(preco);
 
                 var total = (prec * 0.2) + prec;
                 localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                 esse.shadowRoot.querySelector(".total").innerHTML = "Total: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: "+formataPreco(total)+" kz";
 
             }
             if(input == "3" || input == 3){
                 
                 var preco = localStorage.getItem("precoCorrida");
                 var prec = Number(preco);
 
                 var total = (prec * 0.3) + prec;
                 localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                 esse.shadowRoot.querySelector(".total").innerHTML = "Total: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: "+ formataPreco(total)+ " kz";
                 esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: "+formataPreco(total)+" kz";
 
             }*/
        })
        this.shadowRoot.querySelector("#carromoto").addEventListener("change", function () {
            var input = this.value;
            esse.resetaCupom(esse);
            var categoria = esse.shadowRoot.querySelector("#categoria");
            categoria.removeChild(categoria.options[0]);
            var option = document.createElement("option");
            option.innerText = "Normal";
            option.value = "normal";
            option.setAttribute("selected","selected");
            categoria.prepend(option);
            
            
            var idaevolta = esse.shadowRoot.querySelector("#idavolta");
            idaevolta.removeChild(idaevolta.options[0]);
            var option2 = document.createElement("option");
            option2.innerText = "Não";
            option2.value = "nao";
            option2.setAttribute("selected","selected");
            idaevolta.prepend(option2);
            
            if (input == "moto") {
                var por = 2;
                esse.shadowRoot.querySelector("#categoria").setAttribute("disabled", "disabled");
                esse.shadowRoot.querySelector("#npessoas").setAttribute("disabled", "disabled");
                var cateVgal = esse.shadowRoot.querySelector("#categoria").value;
                if(cateVgal == "vip"){
                    por = 4;
                }
                esse.shadowRoot.querySelector("#categoria").value = "normal";
                esse.shadowRoot.querySelector("#npessoas").value = 1;
                
                var distancia = localStorage.getItem("distanciaCorrida");
                 var dis = distancia.split(' ')[0];
                var dist = dis.replaceAll(",",'.');
                var precoPorKilometroMoto = localStorage.getItem("precoPorKilometroMoto");
                
                var prec = Number(dist) * Number(precoPorKilometroMoto);
            
                var total = prec;
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
            if (input == "carro") {

                esse.shadowRoot.querySelector("#categoria").removeAttribute("disabled");
                esse.shadowRoot.querySelector("#npessoas").removeAttribute("disabled");
                
                var distancia = localStorage.getItem("distanciaCorrida");
                var dis = distancia.split(' ')[0];
                var dist = dis.replaceAll(",",'.');
                var precoPorKilometroCarro = localStorage.getItem("precoPorKilometroCarro");
                console.log(distancia,1);
                var prec = Number(dist) * Number(precoPorKilometroCarro);

                var total = prec;
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
        })
        this.shadowRoot.querySelector("#categoria").addEventListener("change", function () {
            esse.resetaCupom(esse);
            var input = this.value;
            if (input == "vip") {

                var preco = localStorage.getItem("precoCorrida");
                var prec = Number(preco);

                var total = (prec * 2);
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
            if (input == "normal") {

                var preco = localStorage.getItem("precoCorrida");
                var prec = Number(preco);

                var total = (prec / 2);
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
        })
        this.shadowRoot.querySelector("#idavolta").addEventListener("change", function () {
            esse.resetaCupom(esse);
            var input = this.value;
            if (input == "sim") {

                var preco = localStorage.getItem("precoCorrida");
                var prec = Number(preco);

                var total = (prec * 2);
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
            if (input == "nao") {

                var preco = localStorage.getItem("precoCorrida");
                var prec = Number(preco);

                var total = (prec / 2);
                localStorage.setItem("precoCorrida", total);
                localStorage.setItem("totalCorrida", total);
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + formataPreco(total) + " kz";
                esse.shadowRoot.querySelector(".basic-distancia-preco span").innerHTML = "Preço: " + formataPreco(total) + " kz";

            }
        })



        /**
         * TERMINA A LOGICA DE PREFERENCIAS DA CORRIDA
         */
        /**
         * COMECA A LOGIA DO CUPOM
         */
        this.shadowRoot.querySelector("#cupom").addEventListener("input", function () {

            console.log(this.value);
            if ((this.value).length >= 9) {
                localStorage.setItem("cupom", (this.value));
                window._corrida.verCupom();
            }
        })
        /**
         * TERMINA LOGICA DE CUPOM
         */

        chamar.addEventListener("click", function () {
            esse.loader.abrir();
           
            if (basic.style.display == "none" || basic.style.display == "") {
                notificacao.sms("Precisa dizer para onde vai", 1);
            } else {
                vaiTela("#chamarotaxi");
                var preco = localStorage.getItem("precoCorrida");
                var prec = formataPreco(Number(preco));
                esse.shadowRoot.querySelector(".total").innerHTML = "Total: " + prec + " kz";
                esse.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + prec + " kz";

            }
            esse.loader.fechar();
        });
        concluir.addEventListener("click", function () {
            var preco = localStorage.getItem("totalCorrida");
            var prec = formataPreco(Number(preco));
            esse.shadowRoot.querySelector(".confirmarTotal").innerHTML = prec + " kz";


            //PEGA OS DADOS E METE NA DB
            var cupom = esse.shadowRoot.querySelector("#cupom").value;
            var idavolta = esse.shadowRoot.querySelector("#idavolta").value;
            var categoria = esse.shadowRoot.querySelector("#categoria").value;
            var npessoas = esse.shadowRoot.querySelector("#npessoas").value;
            var carromoto = esse.shadowRoot.querySelector("#carromoto").value;
            var partida = document.querySelector("#from").value;
            var destino = document.querySelector("#to").value;

            localStorage.setItem("cupom",cupom);
            localStorage.setItem("idavolta",idavolta);
            localStorage.setItem("categoria",categoria);
            localStorage.setItem("npessoas",npessoas);
            localStorage.setItem("carromoto",carromoto);
            localStorage.setItem("partida",partida);
            localStorage.setItem("destino",destino);
            //--------------------------
            
            window._corrida.concluirPedido();
            vaiTela("#pedidoconcluido");
        })
        confirmar.addEventListener("click", function () {

            vaiTela("#confirmarpedidodotaxi");
        })
        /*concluirSMS.addEventListener("click", function () {

            //var preco = localStorage.getItem("totalCorrida");
            //var prec = formataPreco(Number(preco));
            //esse.shadowRoot.querySelector(".confirmarTotal").innerHTML = prec + " kz";


            //PEGA OS DADOS E METE NA DB
            var cupom = esse.shadowRoot.querySelector("#cupom").value;
            var idavolta = esse.shadowRoot.querySelector("#idavolta").value;
            var categoria = esse.shadowRoot.querySelector("#categoria").value;
            var npessoas = esse.shadowRoot.querySelector("#npessoas").value;
            var carromoto = esse.shadowRoot.querySelector("#carromoto").value;
            var partida = document.querySelector("#from").value;
            var destino = document.querySelector("#to").value;

            localStorage.setItem("cupom",cupom);
            localStorage.setItem("idavolda",idavolta);
            localStorage.setItem("categoria",categoria);
            localStorage.setItem("npessoas",npessoas);
            localStorage.setItem("carromoto",carromoto);
            localStorage.setItem("partida",partida);
            localStorage.setItem("destino",destino);


            window._corrida.concluirPedido();
            vaiTela("#pedidoconcluido");
        })*/

    }



}

window.customElements.define('debliwui-corrida', debliwuicorrida)
window.debliwuicorrida = debliwuicorrida;