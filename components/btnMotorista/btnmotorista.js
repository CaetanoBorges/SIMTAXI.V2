const debliwui_btnmotorista = document.createElement('template');
debliwui_btnmotorista.innerHTML = `
    <style>
        .container{
            z-index: 1000;
            display:block;
        }
        .btn{
            width: 114px;
            height: 31px;
            background: #d9d9d9;
            border-radius: 5px;
            margin:5px 0;
            border: 1px solid #d9d9d9;
            cursor:pointer;
        }

        
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