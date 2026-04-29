const debliwui_info = document.createElement('template');
debliwui_info.innerHTML = `
    <style>
        .container{
            width:100%;
            height:fit-content;
            background: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.90);
            box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(180,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.90);
            border-radius: 4px;
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
        border-radius: 4px;
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