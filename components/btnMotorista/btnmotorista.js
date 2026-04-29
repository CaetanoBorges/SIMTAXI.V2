const debliwui_btnmotorista = document.createElement('template');
debliwui_btnmotorista.innerHTML = `
    <style>
        .container{
            z-index: 1000;
            display:block;
        }
        .btn{
            width: 114px;
            height: 36px;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 6px;
            margin:5px 0;
            border: 1px solid rgba(255,255,255,0.90);
            box-shadow: 0 4px 12px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95);
            cursor:pointer;
            font-weight:700;
            color:#333;
            transition: transform 0.18s ease;
        }
        .btn:active { transform: scale(0.97); }

        
    </style>

    <div class="container">
        <button class="btn">MOTORISTA</button>
    </div>
`;

class debliwuibtnmotorista extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnmotorista.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn").addEventListener("click", function() {
            vaiTela("/motorista");
        })
    }


}

window.customElements.define('debliwui-btnmotorista', debliwuibtnmotorista)