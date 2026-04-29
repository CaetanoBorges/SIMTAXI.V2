const debliwui_rota = document.createElement('template');
debliwui_rota.innerHTML = `
    <style>
        .container{
            width:95%;
            padding:2.5%;
            height:fit-content;
            background: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.90);
            box-shadow: 0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(180,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.90);
            border-radius: 4px;
            margin:2vh 0 2vh 0;
        }

   


        .top{
            width: 95%;
            padding:2.5%;
            display: flex;
            align-items: center;
            background: rgba(20,20,20,0.82);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 6px;
            color:white;
        } 
       .endereco{
            width: 100%;
            display: flex;
            align-items: center;
        }
       .endereco p{
            font-size:12px;
            line-height:20px;
            margin:0;
        }
        
       .preco{
            font-size:12px;
            line-height:20px;
            margin:0;
            width:25%;
        }

 



    </style>

    <div class="container">
        <div class="top">
            <div class="endereco">
                <img src="/start-finish.svg" style="margin-right:1%;">
                <section>
                    <p class="partida">Humpata</p>
                    <p class="destino">Lubango</p>
                </section>
            </div>
            <p class="preco">20 000 kz</p>
        </div>
        
    </div>
`;

class debliwuirota extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_rota.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".container").addEventListener("click", function() {
            vaiTela("rota");
        })
    }




}

window.customElements.define('debliwui-rota', debliwuirota)