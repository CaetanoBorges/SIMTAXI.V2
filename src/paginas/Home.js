export default function Home() {
  function html() {
    return `
<div class="home">
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
    .corrida-atual { width:50%;padding:10px;height:fit-content;box-sizing:border-box;background:#ff0000;border:1px solid rgba(0,0,0,.41);margin:10px 0;box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:5px;font-weight:bold;font-size:12pt;line-height:14pt;cursor:pointer;position:fixed;bottom:5vh;left:25%;z-index:99999999;display:none; }
    .pendente { position:fixed;top:0;right:0;margin:21px 23px 0 0;width:fit-content;height:30px;border:1px solid #d9d9d9;background:#FFFFFF;cursor:pointer;box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:5px;text-align:center;z-index:190000001;font-size:14pt;line-height:14pt; }
    .pendente p { margin:5px;padding:0;text-align:center; }
    .pendente-container { width:96%;padding:5% 2%;height:fit-content;display:block; }
    .scroller { position:absolute;top:60px;left:5%;width:90%;height:92vh;overflow-y:scroll;z-index:19000000; }
    #pendente-backdrop { position:fixed;top:0;left:0;width:100%;height:100vh;background:none;z-index:19000000; }
</style>`;
  }

  function init() {
    if (window.CORRIDA && window.CORRIDA.veMotoristaProximos) {
      window.CORRIDA.veMotoristaProximos();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
