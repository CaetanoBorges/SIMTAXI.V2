const debliwui_meusarrendamentos = document.createElement('template');
debliwui_meusarrendamentos.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            margin: 30px auto 0 auto;
            border: 1px solid #d9d9d9;
            background: none;
            cursor: pointer;
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            font-size: 12pt;
            line-height: 14pt;
            width: 100%;
            height: 31px;
            z-index:999999;
            display:block;
            font-weight:bold;
        }
       
       .card-aluguer{padding:10px;margin-bottom:10px}

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:#00000090;display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 10vh;
            height: 80vh;
            /* display: block; */
            width: 76%;
            padding: 2%;
            /* margin: 15vh 0 0 20%; */
            background: #ffffff;
            border-radius: 5px;
            left: 10%;z-index: 1000;
            overflow-y:scroll;}
            .conteudo{}
            .content p{text-align:left;font-size:12pt;line-height:13px;margin:8px 0;}
           
        
    </style>

    <div class="container">
        <button class="btn">Meus Arrendamentos</button>
        <div class="backdrop"></div>
        <div class="content">
            <p class="total"></p>
            <div class="conteudo">

            </div>
            
        </div>
    </div>
`;

class debliwuimeusarrendamentos extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_meusarrendamentos.content.cloneNode(true));
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
        var alugueres = JSON.parse(localStorage.getItem("arrendamentos"));
        var html = ``;
        var elementos = (alugueres.payload).toReversed();
        elementos.forEach(element => {
            console.log((element.ap));

            var nomeCarro = ((element.ap).tipo)+"<br>Casa de banho: "+((element.ap).casadebanho)+"<br>"+((element.ap).internet);
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

window.customElements.define('debliwui-meusarrendamentos', debliwuimeusarrendamentos)