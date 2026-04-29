const debliwui_meusalugueres = document.createElement('template');
debliwui_meusalugueres.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 30px auto 0 auto;
            border: 1px solid rgba(255,255,255,0.90);
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            cursor: pointer;
            box-shadow: 0 4px 16px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95);
            border-radius: 6px;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 44px;
            z-index:999999;
            display:block;
            font-weight:bold;
            color:#333;
            transition: transform 0.18s ease;
        }
        .btn:active { transform: scale(0.97); }
       
       .card-aluguer{padding:10px;margin-bottom:10px}

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 10vh;
            height: 80vh;
            width: 76%;
            padding: 2%;
            background: rgba(255,255,255,0.90);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.95);
            border-radius: 4px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.90);
            left: 10%;z-index: 1000;
            overflow-y:scroll;}
            .conteudo{}
            .content p{text-align:left;font-size:12pt;line-height:13px;margin:8px 0;}
           
        
    </style>

    <div class="container">
        <button class="btn">Meus Alugueres</button>
        <div class="backdrop"></div>
        <div class="content">
            <p class="total"></p>
            <div class="conteudo">

            </div>
            
        </div>
    </div>
`;

class debliwuimeusalugueres extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_meusalugueres.content.cloneNode(true));
    }
    fechar() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "none";
    }
    abrir() {
        let container = this.shadowRoot.querySelector('.container');
        container.style.display = "block";
    }

    mostrar(){
        this.shadowRoot.querySelector(".conteudo").innerHTML = "";
        this.shadowRoot.querySelector(".total").innerHTML = "";
        var alugueres = JSON.parse(localStorage.getItem("alugueres"));
        var html = ``;
        var elementos = (alugueres.payload).toReversed();
        elementos.forEach(element => {
            console.log((element.carro).marca);

            var nomeCarro = ((element.carro).marca)+" "+((element.carro).modelo)+" "+((element.carro).cor);
            var preco = formataPreco(Number((element.aluguer).preco));
            var total = formataPreco(Number((element.aluguer).total));
            var de = ((element.aluguer).de);
            var ate = ((element.aluguer).ate);
            var dias = ((element.aluguer).dias);
            var quando = ((element.aluguer).quando);
            var aceite = ((element.aluguer).aceite);
            var estilo = aceite ? "#2FD913" : "red";
            html += `<div style="background:${estilo}" class="card-aluguer">
                <p>${nomeCarro}</p>
                <p>Preco: ${preco} kz</p>
                <p>De ${de} até ${ate}</p>
                <p>Dias: ${dias}</p>
                <p>Total: ${total}</p>
                <p>Pedido em: ${quando}</p>             
            </div>`;

        });
        this.shadowRoot.querySelector(".conteudo").innerHTML = html;
        this.shadowRoot.querySelector(".total").innerHTML = (alugueres.payload).length+" Alugueres";
    }

    connectedCallback() {
        var esse = this;
        this.shadowRoot.querySelector(".btn").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.mostrar();
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })

    }


}

window.customElements.define('debliwui-meusalugueres', debliwuimeusalugueres)
window.debliwuimeusalugueres = debliwuimeusalugueres;