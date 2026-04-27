const debliwui_info = document.createElement('template');
debliwui_info.innerHTML = `
    <style>
        .container{
            width:100%;
            height:fit-content;
            background: #fff;
            background: rgba(255, 255, 255, 0.57);
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:9vh 0 2vh 0;
        }
        .info {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            text-align:center;
        }
    
    .info .quantos {
        width:40px;
        height:40px;
        padding: 5px;
        border-radius: 25px;
        background: #ffffff;
        box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }


    </style>

    <div class="container">     
        <br><br><br>
        <div class="info">
            <div class="quantos"></div>
            <p class="nome"></p>
        </div>
        <br><br>
    </div>
`;

class debliwuiinfo extends HTMLElement {

    constructor(dados) {
        super(dados);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_info.content.cloneNode(true));
        this.dados = dados;
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
        var dados = this.dados;
        
        this.shadowRoot.querySelector(".quantos").innerHTML = dados.qtd;
        this.shadowRoot.querySelector(".nome").innerHTML = dados.nome;

    }

}

window.customElements.define('debliwui-info', debliwuiinfo)