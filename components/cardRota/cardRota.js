const debliwui_rota = document.createElement('template');
debliwui_rota.innerHTML = `
    <style>
        .container{
            width:95%;
            padding:2.5%;
            height:fit-content;
            background: #fff;
            background: rgba(255, 255, 255, 0.57);
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            margin:2vh 0 2vh 0;
        }

   


        .top{
            width: 95%;
            padding:2.5%;
            display: flex;
            align-items: center;
            background:#000000;
            border-radius: 5px;
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