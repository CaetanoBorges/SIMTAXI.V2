function componentPesquisar(element, localizao, mapa) {


    const pesquisar = document.createElement('div');
    pesquisar.setAttribute("class","barradepesquisa");
    pesquisar.style.display = "none";
    pesquisar.innerHTML = `
    <style>
        .container{
            position:fixed;
            width:276px;
            right: 35px;
            top:18px;
            height:fit-content;
            z-index: 999;
            padding:0;
            font-size:12pt;
            z-index: 999999999;
        }

        .pesquisar {
            
            display:flex;
            align-items:center;
            justify-content: space-between;
            width:100%;
            height:fit-content;
        }

        .pesquisar input{
            box-sizing: border-box;
            width: 90%;
            height: 31px;
            background: rgba(255, 255, 255);
            border: 1px solid rgba(0, 0, 0, 0.6);
            border-radius: 5px;
            text-align:center;
            text-transform: uppercase;
            font-size:10px;
        }
        .pesquisar .img {
            width: 20px;
            height: 20px;
            position:absolute;
            top:6px;
            left:5px;
            opacity:.4;
        }

        .pesquisar .aciona-pesquisa {
            width: 30px;
            height: 30px;
            position:absolute;
            top:0;
            right:-18px;
            cursor:pointer;
            box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
            border-radius:15px;
            padding:1px;
        }
        .backgroun{
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:103px;
            background: #FFFFFF90;
            z-index: 999999998;
            box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
        }
        @media screen and (max-width:700px) {
            .conteudo{
                display:none;
            }
        }
    </style>
    <div class="backgroun"></div>
    <div class="container">
        
        <div class="pesquisar">
            <div>
                <input type="text" placeholder="Partida" id="from" style="margin-bottom: 5px;" oninput='docode()' onchange='docode()'>
                <input type="text" placeholder="Destino" id="to" oninput='docode()' onchange='docode()'>
            </div>
            <img src="/location-header.svg" class="aciona-pesquisa" >
        </div>
        
    </div>

    <script>
        
    </script>

`;
    pesquisar.querySelector(".aciona-pesquisa").addEventListener("click", function () {
        localizao(mapa)
    })

    var from = pesquisar.querySelector("#from");
    var to = pesquisar.querySelector("#to");

    to.addEventListener("input",docode);
    to.addEventListener("change",docode);

    const defaultBounds = {
        north: window.latitude + 0.5,
        south: window.latitude - 0.5,
        east: window.longitude + 0.5,
        west: window.longitude - 0.5,
    };
    var options = {
        //bounds:defaultBounds,
        componentRestrictions: { country: "ao" },
        //strictBounds: true,
        types: []
    }

    new google.maps.places.Autocomplete(from, options);
    new google.maps.places.Autocomplete(to, options);

    document.querySelector(element).prepend(pesquisar)

}


function abreBarraDePesquisas(){
    if(document.querySelector(".barradepesquisa")){
        document.querySelector(".barradepesquisa").style.display = "block";
    }

}

function fechaBarraDePesquisas(){
    if(document.querySelector(".barradepesquisa")){
        document.querySelector(".barradepesquisa").style.display = "none";
    }else{
    
    }
    
}

window.componentPesquisar = componentPesquisar;
window.fechaBarraDePesquisas = fechaBarraDePesquisas;
window.abreBarraDePesquisas = abreBarraDePesquisas;