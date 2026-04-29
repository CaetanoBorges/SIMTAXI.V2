const debliwui_menu = document.createElement('template');
debliwui_menu.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:fit-content;
            left: 0;
            top:0;
            height:fit-content;
            z-index: 9999999999;
            padding:0;
            font-size:12pt;
        }
        .conteudo{
            position:absolute;
            top:0;
            width:300px;
            height:100vh;
            background: rgba(255,255,255,0.90);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-right: 1px solid rgba(255,255,255,0.95);
            box-shadow: 4px 0 32px rgba(0,0,0,0.14), inset -1px 0 0 rgba(255,255,255,0.80);
            z-index: 10102;
        }
        .relativa{
            position: relative;
            overflow:auto;
            height:100vh;
            background: transparent;
        }
        .backdrop{
            width:100%;
            height:100%;
            position:fixed;
            width:100%;
            left: 0;
            top:0;
            height:100vh;
            background: rgba(0,0,0,0.45);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        }
        
        ul {
            list-style: none;
            width: 100%;
            margin-left: -50px;
        }
        
        ul a {
            text-decoration: none;
            color: #7a7a7a;
            font-weight: 600;
            text-align: left;
        }
        
        ul li:hover {
            background: #961A1A;
            color:white;
        }
        
        ul li {
            width: 100%;
            padding: 5px 5px 10px 5px;
            display: flex;
            align-items:center;
            margin: 7px 0;
            border-bottom:1px solid #00000010;
        }
        
        ul li img {
            width: 25px;
            margin: 0 30px 0 30px;
        }

        .aciona-menu{
            width:25px;
            margin: 18px 0 0 15px;
            cursor:pointer;
            z-index:11111;
        }
        .user{
            background-color:#ff0000;
            width:95%;
            height:20vh;
            display:flex;
            align-items:baseline;
            flex-direction:column;
            justify-content: flex-end;
            padding: 0 0 1vh 5%;
            color:white;
            position:relative;

        }
        .user div{
            width:50pt;height:50pt;
            border-radius:50%;
        }
        .user .perfil{
            width:100%;
            height:100%;
            border-radius:36pt;
            }
        .user .definicoes-user{
            position:absolute;
            top:20px;
            right:20px;
            width:40px;
            height:40px;
            cursor:pointer;
        }

        .sair{color:red}
        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
        
        .collapse {
            margin-left: 5% 
        }
        
        .collapse-btn {
            width: 100%;
            padding: 3px 10px 10px 10px;
            border: none;
            text-align: left;
            cursor: pointer;
            background: transparent;
            color:#7a7a7a;
            font-size:12pt;
            font-weight:bold;
            border-bottom: 1px solid rgba(0,0,0,0.07);
            position:relative;
        }
        
        .collapse-btn img {
            width: 25px;
            margin: 0 26px 0 11px;
            float:left;
        }
        
        .collapse-btn:hover {
            
        }
        
        .collapse-body {
            padding: 15px;
            border: 1px solid #ddd;
            border-top: none;
            display: none;
            border-radius: 0 0 4px 4px;
        }
        
        .action-btn {
            padding: 8px 12px;
            margin-right: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
        }
        
        .call-btn {
            background-color: #28a745;
            color: white;
            width:100%;
            display:block;
        }
        
        .email-btn {
            background-color: #17a2b8;
            color: white;
            width:100%;
            display:block;
        }
    </style>

    <div class="container">
        <img src="/barras-menu.svg" class="aciona-menu">
        
        <div class="conteudo" style="display:none">
            <div class="backdrop"></div>
            <div class="relativa">
                <div class="user">
                    <a href="/definicoes" class="go-definicoes"><img class="definicoes-user" src="/gear.svg"></a>
                    <div> <img src="" class="perfil"> </div>
                    <p></p>
                </div>
                <ul>
                    <a href="/home" class="home">
                        <li> <img src="/home.svg"> <span>Início</span></li>
                    </a>
                    <a href="/corridas" class="corridas">
                        <li> <img src="/location-menu.svg"> <span>Corridas</span></li>
                    </a>
                    <a href="/rentacar" class="rentacar">
                        <li> <img src="/car.svg"> <span>Rent a car</span></li>
                    </a>
                    <a href="/guesthouse" class="guesthouse">
                        <li> <img src="/guest.svg"> <span>Guesthouse</span></li>
                    </a>
                    <div class="linha-divisoria"></div>
                    <a href="/conta" class="conta">
                        <li> <img src="/user-menu.svg"> <span>Minha conta</span></li>
                    </a>
                    <!-- <a href="/termosdeuso" class="termosdeuso">
                        <li> <img src="/money-menu.svg"> <span>Termos de uso do serviço</span></li>
                    </a> -->
                    <a href="/privacidadetermos" class="privacidade">
                        <li> <img src="/handshake-menu.svg"> <span>Políticas e Termos</span></li>
                    </a>
                    <div class="collapse">
                    <button class="collapse-btn"><img src="/circle-info.svg"> <span style="position: absolute;top: 8px;">Suporte</span></button>
                    <div class="collapse-body">
                        <button class="action-btn call-btn" onclick="window.location.href='tel:+244941096405'">Ligar ao apoio</button> <br>
                        <button class="action-btn email-btn" onclick="window.location.href='mailto:suporte@jjgmsimtaxi.com'">Enviar um e-mail</button>
                    </div>
                </div>
                     <a href="#" class="sair">
                        <li> <img src="/sair.svg"> <span>Sair</span></li>
                    </a>
                    <div id="sub">
                            
                    </div>
                </ul>
            </div>
        </div>
        
    </div>

    <script>
        
    </script>

`;

class debliwuimenu extends HTMLElement {

    constructor(route) {
        super(route);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_menu.content.cloneNode(true));
        this.route = route;
    }

    fechar(esse) {
        let container = esse.shadowRoot.querySelector('.container');

        if (container.style.display == "none") {
            container.style.display = "block";
        } else {
            container.style.display = "none";
        }
    }

    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }
    
    subscricao(esse){
        var sub = JSON.parse(localStorage.getItem("subscricao"));
        var desde = sub.payload.desde;
        var ate = sub.payload.ate;
        var pacote = sub.payload.pacote;

        var subDiv = esse.shadowRoot.querySelector("#sub");
        if(sub.ok){
            
            corrida.shadowRoot.querySelector(".container").style.opacity = '1';
            setTimeout(function(){
                document.querySelector(".barradepesquisa").style.opacity = '1';
            },2000);
            subDiv.innerHTML = `
            <div class="com-subscricao" style="width:80%;padding:10%;margin-left:3%;">
                <p>Tem recarga:<br>Desde: ${desde} <br>Até: ${ate} <br>Pacote: ${pacote}</p>
            </div>`;
        }else{
            esse.shadowRoot.querySelector('.rentacar').style.display = "none";
            corrida.shadowRoot.querySelector(".container").style.marginBottom = '-300px';
            subDiv.innerHTML = `
            <div class="sem-subscricao" style="width:80%;padding:10%;margin-left:3%;">
                <span style="padding:5px;background:red;cursor:pointer;color:white;text-transform:uppercase;border-radius: 4px;" id="fazer-pagamento" onclick=""><b>Recarga de acesso</b></span>
                <p style="font-size:11px;">Não tem recarga de acesso:<br><b>Serviço restrito</b></p>
            </div>
            <style>
                #pagamento-container{position:fixed;top:0;width:100%;height:100vh;left:0;background:#00000099;}
                #pagamento-backdrop{position:absolute;top:0;width:100%;height:100vh;left:0;z-index:1;}
                #pagamento-dentro{position:relative;top:20vh;width:60%;height:fit-content;left:15%;padding:5%;background:#fff;border-radius: 4px;z-index:2;}
                #pagamento-form{display:flex;flex-direction: column;}
                #pagamento-form label{font-size:11px;margin-top:15px}
                #pagamento-form input{width:95%;}
                #pagamento-form img{width:100%;}
            </style>
            <div id="pagamento-container" style="display:none">
                <div id="pagamento-backdrop"></div>
                <div id="pagamento-dentro">
                    <form id="pagamento-form">
                        <img src="express.svg">
                        <div>
                          <label for="formGroupExampleInput">Valor a carregar (Em kwanza)</label>
                          <input type="number" class="form-control" id="valor" disabled style="padding:5px;">
                        </div>
                        <div>
                          <label for="formGroupExampleInput2">Telefone do seu Multicaixa Express</label>
                          <input type="number" class="form-control" id="telefone" placeholder="Telefone para carregar via Express" value="999999" style="padding:5px;">
                        </div> <br>
                        <span style="padding:5px;background:red;cursor:pointer;color:white;text-transform:uppercase;border-radius: 4px;text-align:center" id="pagamento-pagar">CARREGAR ACESSO</span>
                    </form>
                </div>
            </div>
            `;
            
            setInterval(function(){
                //console.log(($));
                var identificador = localStorage.getItem("identificador");
                $.post("https://gpo.jjgmsimtaxi.com/verificar.php",{quem: "passageiro", identificador: identificador}).done(function(dados){
                        console.log(dados);
                        var res = JSON.parse(dados);
                        if(res.ok){
                            location.reload();
                        }else{
                            notificacao.sms("Não tem recarga de acesso<br> Serviço restrito",1);
                        }
                    }).always(function(a){
                        //loader.fechar();
                    })
            },5000)
        }
        
    }
    
    
    connectedCallback() {
        var esse = this;
        esse.shadowRoot.querySelector('.collapse-btn').addEventListener('click', function() {
            const body = esse.shadowRoot.querySelector('.collapse-body');
            body.style.display = body.style.display === 'block' ? 'none' : 'block';
        });
        var inter = setInterval(function(){
            //console.log(esse);
            if(localStorage.getItem("subscricao")){
                esse.subscricao(esse);
                clearInterval(inter);
            }
        },1000);
        var interv = setInterval(function(){
            //console.log(esse);
            if(esse.shadowRoot.querySelector('#fazer-pagamento')){
                esse.shadowRoot.querySelector('#fazer-pagamento').addEventListener("click", function (event) {
                    esse.shadowRoot.querySelector('#pagamento-container').style.display = "block";
                    esse.shadowRoot.querySelector('#valor').value = localStorage.getItem("valorsubscricao");
                    esse.shadowRoot.querySelector('#telefone').value = localStorage.getItem("telefone");
                    
                });
                esse.shadowRoot.querySelector('#pagamento-backdrop').addEventListener("click", function (event) {
                    esse.shadowRoot.querySelector('#pagamento-container').style.display = "none";
                    //console.log($);
                });
                esse.shadowRoot.querySelector('#pagamento-pagar').addEventListener("click", function (event) {
                    esse.shadowRoot.querySelector('#pagamento-container').style.display = "none";
                    esse.shadowRoot.querySelector('.conteudo').style.display = "none";
                    var identificador = localStorage.getItem("identificador");
                    var valor = localStorage.getItem("valorsubscricao");
                    var telefone = esse.shadowRoot.querySelector('#telefone').value;
                    
                    loader.abrir();
                    notificacao.sms("ABRA O MULTICAIXA EXPRESS <br> E CONFIRME O PAGAMENTO");
                    $.post("https://gpo.jjgmsimtaxi.com/pagar.php",{quem: "passageiro", identificador: identificador, valor: valor, telefone: telefone}).done(function(dados){
                        console.log(dados);
                        var res = JSON.parse(dados);
                        if(res.ok){
                            notificacao.sms(res.payload);
                            location.reload();
                        }else{
                            notificacao.sms(res.payload,1);
                            loader.fechar();
                        }
                    }).always(function(a){
                    })
                });
            
                clearInterval(interv);
            }
        },1000);

        var route = this.getAttribute('route');
        this.shadowRoot.querySelector('.aciona-menu').addEventListener("click", function () {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
        this.shadowRoot.querySelector('.backdrop').addEventListener("click", function () {
            let container = esse.shadowRoot.querySelector('.conteudo');

            if (container.style.display == "none") {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
        let lis = this.shadowRoot.querySelectorAll('li');
        lis.forEach(element => {
            element.addEventListener("click", function () {
                let container = esse.shadowRoot.querySelector('.conteudo');

                if (container.style.display == "none") {
                    container.style.display = "block";
                } else {
                    container.style.display = "none";
                }
            });
        });

        this.shadowRoot.querySelector('.home').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/home');
        });
        this.shadowRoot.querySelector('.corridas').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/corridas');
        });
        this.shadowRoot.querySelector('.conta').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/conta');
        });
        this.shadowRoot.querySelector('.privacidade').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/privacidadetermos');
        });
        this.shadowRoot.querySelector('.rentacar').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/rentacar');
        });
        this.shadowRoot.querySelector('.guesthouse').addEventListener("click", function (event) {
            event.preventDefault();
            window.vaiTela('#/guesthouse');
        });
        this.shadowRoot.querySelector('.go-definicoes').addEventListener("click", function (event) {
            let container = esse.shadowRoot.querySelector('.conteudo');
            container.style.display = container.style.display === 'none' ? 'block' : 'none';
            event.preventDefault();
            window.vaiTela('#/definicoes');
        });

        var foto = setInterval(function () {
            if (localStorage.getItem("foto")) {
                esse.shadowRoot.querySelector('.user img.perfil').setAttribute("src", (window._api) + "/Conta/foto/" + localStorage.getItem("foto"));
                clearInterval(foto);
            }
            //console.log(1);
        }, 100);
        this.shadowRoot.querySelector('.user img.perfil').setAttribute("src", (window._api) + "/Conta/foto/" + localStorage.getItem("foto"));
        this.shadowRoot.querySelector('.user p').innerHTML = localStorage.getItem("nome");

        this.shadowRoot.querySelector('.sair').addEventListener("click", function (event) {
            localStorage.clear();
            location.href = ".";
        });
    }

}
window.customElements.define('debliwui-menu', debliwuimenu)
window.debliwuimenu = debliwuimenu;