const debliwui_btncheguei = document.createElement('template');
debliwui_btncheguei.innerHTML = `
    <style>
        .container{
            position:relative;
            
            display:block;
        }
        .btn{
            width: 114px;
            height: 38px;
            background: linear-gradient(135deg,rgba(22,163,74,0.88),rgba(20,83,45,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 6px;
            margin:5px 0;
            border: 1px solid rgba(22,163,74,0.45);
            box-shadow: 0 4px 14px rgba(22,163,74,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            transition: transform 0.18s ease;
        }
        .btn:active { transform: scale(0.97); }
        .um{
            display:block;
            height: 44px;
            background: linear-gradient(135deg,rgba(22,163,74,0.88),rgba(20,83,45,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 14px rgba(22,163,74,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
            border-radius: 6px;
            margin:10px auto 5px auto;
            border: 1px solid rgba(22,163,74,0.45);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            width: 114px;
            transition: transform 0.18s ease;
        }
        .um:active { transform: scale(0.97); }

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:none;z-index: 1000;}
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
            left: 10%;z-index: 1000;}
            .content p{text-align:center;font-size:12pt;}
        
    </style>

    <div class="container">
        <button class="btn">CHEGAMOS</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Chegou ao<br>destino?</p>
            <button class="um">CHEGAMOS</button>
        </div>
    </div>
`;

class debliwuibtncheguei extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btncheguei.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".um").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            esse.shadowRoot.querySelector(".backdrop").style.display = "none";
            _corrida.chegamos();
        })
    }


}

window.customElements.define('debliwui-btncheguei', debliwuibtncheguei)