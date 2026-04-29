const debliwui_btnpanico = document.createElement('template');
debliwui_btnpanico.innerHTML = `
    <style>
        .container{
            position:relative;
            display:block;
        }
        .btn{
            width: 114px;
            height: 38px;
            background: linear-gradient(135deg,rgba(217,119,6,0.88),rgba(180,83,9,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 6px;
            margin:5px 0;
            border: 1px solid rgba(217,119,6,0.45);
            box-shadow: 0 4px 14px rgba(217,119,6,0.30), inset 0 1px 0 rgba(255,255,255,0.20);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            transition: transform 0.18s ease;
        }
        .btn:active { transform: scale(0.97); }
        .um{
            display:block;
            height: 40px;
            background: linear-gradient(135deg,rgba(22,163,74,0.88),rgba(20,83,45,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 14px rgba(22,163,74,0.30);
            border-radius: 6px;
            margin:5px auto;
            border: 1px solid rgba(22,163,74,0.45);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            width: 114px;
            transition: transform 0.18s ease;
        }
        .um:active { transform: scale(0.97); }
        .dois{
            display:block;
            height: 40px;
            background: linear-gradient(135deg,rgba(217,119,6,0.88),rgba(180,83,9,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 14px rgba(217,119,6,0.30);
            border-radius: 6px;
            margin:5px auto;
            border: 1px solid rgba(217,119,6,0.45);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            width: 114px;
            transition: transform 0.18s ease;
        }
        .dois:active { transform: scale(0.97); }
        .tres{
            display:block;
            height: 40px;
            background: linear-gradient(135deg,rgba(230,57,70,0.88),rgba(183,28,44,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 4px 14px rgba(230,57,70,0.30);
            border-radius: 6px;
            margin:5px auto;
            border: 1px solid rgba(230,57,70,0.50);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            width: 114px;
            transition: transform 0.18s ease;
        }
        .tres:active { transform: scale(0.97); }

        .backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0,0,0,0.45);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:none;z-index: 1000;}
        .content{
            display:none;
            position: fixed;
            top: 25vh;
            width: 76%;
            padding: 4% 5%;
            background: rgba(255,255,255,0.90);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.95);
            border-radius: 4px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.90);
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