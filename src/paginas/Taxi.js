export default function Taxi() {
  function html() {
    return `
<div class="home">
     <div id="mapa-global" style="width:100% !important;height:100vh !important;z-index: 9999999 !important;padding:0 !important;margin:0 !important;">

            </div>  
    <div class="todo-pendente">
        <div id="corrida-pendente">
            <div class="pendente" onclick="CORRIDA.acionaPendentes()">
                <p style="font-weight:300;">Motoristas próximos: <span class="contador">0</span></p>
            </div>
            <div id="pendente-backdrop" style="display:block;"></div>
            <div class="scroller" style="display:block;">
                <div class="pendente-container">
                    <div id="disponiveis">
                        <debliwui-infopendente id="info-pendentes-disponiveis"></debliwui-infopendente>
                    </div>
                    <div class="corrida-pendente" id="pendentes"></div>
                </div>
            </div>
        </div>
    </div>
    <button class="corrida-atual" onclick='vaiTela("/corridaatual")'>CORRIDA ATUAL</button>
</div>
<style>
    .contador { font-weight:bold; }
    .corrida-atual {
        width:50%;padding:12px;height:fit-content;box-sizing:border-box;
        background:linear-gradient(135deg,rgba(231,76,60,0.85),rgba(180,30,20,0.85));
        backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
        border:1px solid rgba(231,76,60,0.5);
        box-shadow:0 4px 20px rgba(231,76,60,0.35);
        border-radius: 4px;font-weight:bold;font-size:13px;color:#fff;
        cursor:pointer;position:fixed;bottom:5vh;left:25%;z-index:99999999;display:none;
    }
    .pendente {
        position:fixed;top:0;right:0;margin:21px 23px 0 0;
        width:fit-content;height:36px;
        background:rgba(255,255,255,0.15);
        backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
        border:1px solid rgba(255,255,255,0.25);
        cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.3);
        border-radius: 4px;text-align:center;z-index:190000001;
    }
    .pendente p { margin:8px;padding:0;text-align:center;color:#111;font-size:13px; }
    .pendente-container { width:96%;padding:5% 2%;height:fit-content;display:block; }
    .scroller { position:absolute;top:60px;left:5%;width:90%;height:92vh;overflow-y:scroll;z-index:19000000; }
    #pendente-backdrop { position:fixed;top:0;left:0;width:100%;height:100vh;background:none;z-index:19000000; }
</style>`;
  }

  function init() {
    // O HTML com #mapa-global já foi injectado — podemos inicializar o mapa.
    // Se o Google Maps ainda não carregou, _mapsReadyPending ficará activo
    // e initMap() será chamado automaticamente pelo callback quando carregar.
    if (window.google && window.google.maps) {
      window.initMap();
    } else {
      window._mapsReadyPending = true;
    }
  }

  function destroy() {
    if (window.TAXI_destroy) window.TAXI_destroy();
  }

  return { html: html(), init, destroy };
}
