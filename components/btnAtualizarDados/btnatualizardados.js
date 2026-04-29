const debliwui_btnatualizardados = document.createElement('template');
debliwui_btnatualizardados.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 30px auto 0 auto;
            border: 1px solid rgba(255,255,255,0.90);
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95);
            border-radius: 6px;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 44px;
            display: block;
            font-weight: 700;
            color: #333;
            transition: transform 0.18s ease;
        }
        .btn:active { transform: scale(0.97); }
        
        
        .dois{
            display:block;
            background: linear-gradient(135deg,rgba(22,163,74,0.88),rgba(20,83,45,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 16px rgba(22,163,74,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
            border-radius: 6px;
            margin:10px auto 5px auto;
            border: 1px solid rgba(22,163,74,0.45);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 44px;
            transition: transform 0.18s ease;
        }
        .dois:active { transform: scale(0.97); }
        

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:none;z-index:99999;}
        .content{
            display:none;
            position: fixed;
            top: 25vh;
            width: 76%;
            padding: 4% 5%;
            background: rgba(255,255,255,0.90);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.95);
            border-radius: 4px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.90);
            left: 10%;z-index:99999;}
            .content p{text-align:center;font-size:12pt;}
            .content textarea{display:block;margin:10px auto;
            width: 140px;
            height: 73px;
            background: rgba(255,255,255,0.70);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(0,0,0,0.12);
            border-radius: 4px;
            padding:4px;}
        
    </style>

    <div class="container">
        <button class="btn">ATUALIZAR DADOS</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Tem certeza?</p>
            <button class="dois">SIM, ATUALIZAR</button>
        </div>
    </div>
`;

class debliwuibtnatualizardados extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnatualizardados.content.cloneNode(true));
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
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
        this.shadowRoot.querySelector(".dois").addEventListener("click", function() {
            window._conta.editar();
            esse.shadowRoot.querySelector(".content").style.display = "none";
            esse.shadowRoot.querySelector(".backdrop").style.display = "none";
        })
    }


}

window.customElements.define('debliwui-btnatualizardados', debliwuibtnatualizardados)