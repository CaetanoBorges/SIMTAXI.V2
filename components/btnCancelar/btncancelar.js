const debliwui_btncancelar = document.createElement('template');
debliwui_btncancelar.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            width: 114px;
            height: 31px;
            background: #ff0000;
            border-radius: 5px;
            margin:5px 0;
            border: 1px solid #ff0000;
            cursor:pointer;
        }
        
        .dois{
            display:block;
            width: fit-content;
            height: 31px;
            background: #ff0000;
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #ff0000;
            cursor:pointer;
        }
        

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:#00000090;display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 25vh;
            /* display: block; */
            width: 76%;
            padding: 2%;
            /* margin: 15vh 0 0 20%; */
            background: #ffffff;
            border-radius: 5px;
            left: 10%;z-index: 1000;}
            .content p{text-align:center;font-size:12pt;}
            .content textarea{display:block;margin:10px auto;
            width: 140px;
            height: 73px;
            background: #F5F5F5;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 5px;
            padding:4px;}
        
    </style>

    <div class="container">
        <button class="btn">CANCELAR</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Diga-nos o motivo</p>
            <textarea class="motivo"></textarea>
            <button class="dois">CANCELAR CORRIDA</button>
        </div>
    </div>
`;

class debliwuibtncancelar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btncancelar.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn").addEventListener("click", function () {

            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";

        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function () {

            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";

        })
        this.shadowRoot.querySelector(".dois").addEventListener("click", function () {


            var motivo = esse.shadowRoot.querySelector(".motivo").value;
            if (motivo.length >= 10) {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            esse.shadowRoot.querySelector(".backdrop").style.display = "none";
                _corrida.cancelar(motivo);
            }else{
                notificacao.sms("Texto curto demais, escreva mais",1);
            }

        })
    }


}

window.customElements.define('debliwui-btncancelar', debliwuibtncancelar)