const debliwui_btnconcluirrent = document.createElement('template');
debliwui_btnconcluirrent.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 30px auto 0 auto;
            border: 1px solid #d9d9d9;
            background: #2FD913;
            cursor: pointer;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            font-size: 15pt;
            line-height: 17pt;
            width: 100%;
            height: fit-content;
            display: block;
            font-weight:bold;
            padding:10px 0;
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
            width: 76%;
            padding: 2%;
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
        
    </style>

    <div class="container">
        <button class="btn">CONCLUIR ALUGUER</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Tem certeza?</p>
            <button class="dois">SIM, QUERO ALUGAR</button>
        </div>
    </div>
`;

class debliwuibtnconcluirrent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnconcluirrent.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn").addEventListener("click", function() {
            if(document.querySelector("#fimFormatado").value == "0"){
                window._notificacao.sms("Precisa preencher os dados corretamente",1);
                return;
            }
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
        this.shadowRoot.querySelector(".dois").addEventListener("click", function() {
            window._rentacar.alugar();
            esse.shadowRoot.querySelector(".content").style.display = "none";
            esse.shadowRoot.querySelector(".backdrop").style.display = "none";
        })
    }


}

window.customElements.define('debliwui-btnconcluirrent', debliwuibtnconcluirrent)