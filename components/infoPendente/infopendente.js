const debliwui_infopendente = document.createElement('template');
debliwui_infopendente.innerHTML = `
    <style>
        .container{
            width:100%;
            height:fit-content;
            background: rgba(255, 255, 255, 0.88);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid rgba(255,255,255,0.95);
            box-shadow: 0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.90);
            border-radius: 4px;
            margin:0 0 2vh 0;
            position:relative;
        }

        .dois{
            display:block;
            background: linear-gradient(135deg,rgba(230,57,70,0.88),rgba(183,28,44,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 6px;
            margin:10px auto 5px auto;
            border: 1px solid rgba(230,57,70,0.50);
            box-shadow: 0 4px 12px rgba(230,57,70,0.25);
            cursor:pointer;
            color:#fff;
            font-weight:700;
            width: 100%;
            height: 44px;
            transition: transform 0.18s ease;
        }
        .dois:active { transform: scale(0.97); }
        }
        

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
            .content textarea{display:block;margin:10px auto;
            width: 140px;
            height: 73px;
            background: rgba(255,255,255,0.70);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border: 1px solid rgba(0,0,0,0.12);
            border-radius: 4px;
            padding:4px;}
        


        .top{
            width: 90%;
            padding:5% 5% 0 5%;
            display: flex;
            align-items: center;
        } 
       .endereco{
            width: 100%;
            display: flex;
            align-items: center;
        }
       .endereco p{
            font-size:15px;
            line-height:20px;
            margin:0;
        }

        .btn-chamar-cancelar {
            width: fit-content;
            height: 36px;
            background: linear-gradient(135deg,rgba(230,57,70,0.88),rgba(183,28,44,0.88));
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 4px;
            margin: 10px 0;
            border: 1px solid rgba(230,57,70,0.50);
            box-shadow: 0 4px 12px rgba(230,57,70,0.25);
            cursor: pointer;
            margin: 0 0 15px 15px;
            color: white;
            font-weight:700;
            padding: 0 16px;
        }
        *:focus {
            outline:none;
        }
        .info {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            text-align:center;
        }
    
    .info .quantos-motoristas {
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

    
    .detalhes div{
        font-size:13px;
        padding:5px 5%;
    }
    .detalhes div p{
        font-size:12px;
        line-height:15px;
        margin:0;
    }

    .icon-p{width:13px;display:inline-block}
    </style>

    <div class="container">
        <div class="top">
            <div class="endereco">
                <!-- <img src="/start-finish.svg" style="margin-right:1%;"> -->
                <section>
                    
                </section>
            </div>
        </div>
            <div class="detalhes">
                
            </div>
            <button class="btn-chamar-cancelar">CANCELAR</button>
       

        
        <div class="backdrop"></div>
        <div class="content">
            <p>Tem certeza?</p>
            <button class="dois">CANCELAR CORRIDA</button>
        </div>
        
        <p class="preco" style="position:absolute;right:5%;bottom:0;font-weight:600;"><span></span></p>
    </div>
`;

class debliwuiinfopendente extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_infopendente.content.cloneNode(true));
        
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
        this.shadowRoot.querySelector(".btn-chamar-cancelar").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "block";
            esse.shadowRoot.querySelector(".backdrop").style.display = "block";
        })
        this.shadowRoot.querySelector(".backdrop").addEventListener("click", function() {
            esse.shadowRoot.querySelector(".content").style.display = "none";
            this.style.display = "none";
        })

        /*this.shadowRoot.querySelector(".preco span").innerHTML = formataPreco(Number(dados.total))+" kz";
        this.shadowRoot.querySelector(".partida").innerHTML = dados.partida;
        this.shadowRoot.querySelector(".destino").innerHTML = dados.destino;

        this.shadowRoot.querySelector(".distancia span").innerHTML = dados.distancia;
        this.shadowRoot.querySelector(".tempo span").innerHTML = dados.tempo;
        this.shadowRoot.querySelector(".idavolta span").innerHTML = dados.ida_volta;
        this.shadowRoot.querySelector(".veiculo span").innerHTML = dados.carromoto;
        this.shadowRoot.querySelector(".pessoas span").innerHTML = dados.npessoas; */
        this.shadowRoot.querySelector(".dois").addEventListener("click",function(){
            CORRIDA.cancelarCorrida();
        })
    }

   


}

window.customElements.define('debliwui-infopendente', debliwuiinfopendente)