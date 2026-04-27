const debliwui_pesquisa_rentacar = document.createElement('template');
debliwui_pesquisa_rentacar.innerHTML = `
    <style>
        .container{
            width:97%;
            height:fit-content;
            z-index: 999;
            padding:1vh 1.5%;
            font-size:12pt;
            margin-top:5vh;
        }

        .pesquisar {
            
        }
        .pesquisar select{
            box-sizing: border-box;
            width: 100%;
            height: 31px;
            background: rgba(255, 255, 255, 0.57);
            box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
        }

        .pesquisar .aciona-pesquisa {
            width: 30px;
            height: 30px;
        }

        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
    </style>

    <div class="container">
        
        <div class="pesquisar">
            <select>
                <option>Benguela</option>
            </select>
        </div>
        
    </div>

    <script>
        
    </script>

`;

class debliwuipesquisarentacar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(debliwui_pesquisa_rentacar.content.cloneNode(true));
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



    }

}
window.customElements.define('debliwui-pesquisa-rentacar', debliwuipesquisarentacar)