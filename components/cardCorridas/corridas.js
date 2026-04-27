const debliwui_corridas = document.createElement('template');
debliwui_corridas.innerHTML = `
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

        .detalhes{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom:5px;
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
        }

       .quando{
            font-size:12px;
            line-height:20px;
            margin:0;
        }

 



    </style>

    <div class="container">
            <div class="detalhes">
                <p class="quando"></p>
                <p class="preco"></p>
            </div>
        <div class="top">
            <div class="endereco">
                <img src="/start-finish.svg" style="margin-right:1%;">
                <section>
                    <p class="partida"></p>
                    <p class="destino"></p>
                </section>
            </div>
        </div>
        
    </div>
`;

class debliwuicorridas extends HTMLElement {

    constructor(array) {
        super(array);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_corridas.content.cloneNode(true));
        this.dados = array;
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
        this.shadowRoot.querySelector(".partida").innerHTML = (dados.corrida.partida).split(" | ")[0];
        this.shadowRoot.querySelector(".destino").innerHTML = (dados.corrida.destino).split(" | ")[0];
        this.shadowRoot.querySelector(".quando").innerHTML = ((dados.corrida.quando));
        this.shadowRoot.querySelector(".preco").innerHTML = formataPreco(Number(dados.corrida.total)) + " kz";

        this.shadowRoot.querySelector(".container").addEventListener("click", function() {
            localStorage.setItem("abrirCorrida",JSON.stringify(dados));
            vaiTela("corrida");
        })

    }




}

window.customElements.define('debliwui-corridas', debliwuicorridas)