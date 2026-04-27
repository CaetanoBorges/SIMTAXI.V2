const debliwui_btnpanico = document.createElement('template');
debliwui_btnpanico.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            width: 114px;
            height: 31px;
            background: #D97E13;
            border-radius: 5px;
            margin:5px 0;
            border: 1px solid #D97E13;
            cursor:pointer;
        }
        .um{
            display:block;
            width: 114px;
            height: 31px;
            background: #2FD913;
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #2FD913;
            cursor:pointer;
        }
        .dois{
            display:block;
            width: 114px;
            height: 31px;
            background: #D97E13;
            border-radius: 5px;
            margin:5px auto;
            border: 1px solid #D97E13;
            cursor:pointer;
        }
        .tres{
            display:block;
            width: 114px;
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
        
    </style>

    <div class="container">
        <button class="btn">PANICO</button>
        <div class="backdrop"></div>
        <div class="content">
            <p>Aperte os três botões<br>para ativar o pânico e receber<br>ajuda</p>
            <button class="um">CONFIRMAR</button>
            <button class="dois">CONFIRMAR</button>
            <button class="tres">CONFIRMAR</button>
        </div>
    </div>
`;

class debliwuibtnpanico extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_btnpanico.content.cloneNode(true));
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
        this.shadowRoot.querySelector(".btn").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        var um = null;
        var dois = null;
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })
        this.shadowRoot.querySelector(".um").addEventListener("click", function() {
            this.setAttribute("disabled","disabled");
            um = true;
        })
        this.shadowRoot.querySelector(".dois").addEventListener("click", function() {
            dois = true;
            this.setAttribute("disabled","disabled");
        })
        this.shadowRoot.querySelector(".tres").addEventListener("click", function() {
            
            if(um && dois){
                this.setAttribute("disabled","disabled");
                esse.shadowRoot.querySelector(".content").style.display = "none";
                esse.shadowRoot.querySelector(".backdrop").style.display = "none";
                _corrida.panico();
            } 
        })
    }


}

window.customElements.define('debliwui-btnpanico', debliwuibtnpanico)