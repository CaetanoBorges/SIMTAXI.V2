const debliwui_btncorrida = document.createElement('template');
debliwui_btncorrida.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:80%;
            left: 10%;
            bottom:1vh;
            z-index: 10100;
            display:none;
        }
        .btn-corrida{
            width: 100%;
            height: 44px;
            background: linear-gradient(135deg,rgba(217,119,6,0.88),rgba(180,83,9,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 16px rgba(217,119,6,0.35), inset 0 1px 0 rgba(255,255,255,0.20);
            border-radius: 6px;
            margin:15px 0;
            border: 1px solid rgba(217,119,6,0.50);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            font-size:13px;
            letter-spacing:0.06em;
            transition: transform 0.18s ease;
        }
        .btn-corrida:active { transform: scale(0.97); }

        
    </style>

    <div class="container">
        <button class="btn-corrida">CORRIDA</button>
    </div>
`;

class debliwuibtncorrida extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btncorrida.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn-corrida").addEventListener("click", function() {
            vaiTela("/corrida");
        })
    }


}

window.customElements.define('debliwui-btncorrida', debliwuibtncorrida)
window.debliwuibtncorrida = debliwuibtncorrida;