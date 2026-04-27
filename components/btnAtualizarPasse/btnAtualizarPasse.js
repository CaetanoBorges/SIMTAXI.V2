const debliwui_btnatualizarpasse = document.createElement('template');
debliwui_btnatualizarpasse.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 0 auto;
            border: 1px solid #d9d9d9;
            background: #FFFFFF;
            cursor: pointer;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            font-size: 12pt;
            line-height: 14pt;
            width: 90%;
            display: block;
            padding:5%;
        }

        #atual, #nova{}
        .input-telas-inicio{
            width: 100%;
            padding: 0 10px;
            height: 31px;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid rgba(0, 0, 0, 0.41);
            border-radius: 5px;
            margin: 10px 0;
        }
        
        
        .dois{
            display:block;
            width: fit-content;
            height: 31px;
            background: #2FD913;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #2FD913;
            cursor:pointer;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 31px;
        }
        

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:#00000090;display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 25vh;
            /* display: block; */
            width: 60%;
            padding: 10%;
            /* margin: 15vh 0 0 20%; */
            background: #ffffff;
            border-radius: 5px;
            left: 10%;z-index: 1000;}
            .content p{text-align:center;font-size:12pt;}
            .content textarea{display:block;margin:10px auto;
            width: 140px;
            height: 73px;
            background: #F5F5F5;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            padding:4px;}
            input:valid,
            textarea:valid {
                background-color: palegreen;
            }
    </style>

    <div class="container">
        <button class="btn"> ATUALIZAR <br> PALAVRA-PASSE </button>
        <div class="backdrop"></div>
        <div class="content">
            <p> ATUALIZAR <br> PALAVRA-PASSE </p>
            <p>Tem certeza?</p>
            <form id="formulario">
            <input type="password" placeholder="Palavra-passe atual" id="atual" class="input-telas-inicio" required="required">
            <input type="password" placeholder="Nova palavra-passe" id="nova" class="input-telas-inicio" required="required" minlength="6">
            <button class="dois" type="submit">SIM, ATUALIZAR</button>
            </form>
        </div>
    </div>
`;

class debliwuibtnatualizarpasse extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnatualizarpasse.content.cloneNode(true));
    }
    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }

    connectedCallback() {
        var esse = this;
        this.shadowRoot.querySelector(".btn").addEventListener("click", function () {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function () {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
        this.shadowRoot.querySelector("#formulario").addEventListener("submit", function (ev) {
            ev.preventDefault();
            console.log("saquei");
            var atual = esse.shadowRoot.querySelector("#atual").value;
            var nova = esse.shadowRoot.querySelector("#nova").value;
            window._definicoes.alteraPasse(atual,nova);
        })
    }


}

window.customElements.define('debliwui-btnatualizarpasse', debliwuibtnatualizarpasse)