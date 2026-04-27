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
            height: 31px;
            background: #D97E13;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:15px 0;
            border: 1px solid #D97E13;
            cursor:pointer;
        }

        
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