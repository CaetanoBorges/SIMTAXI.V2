export default function CorridaAtual() {
  function html() {
    return `
<div class="corrida">
    <div class="chatdacorrida">
        <div class="locations">
            <img src="/start-finish.png" style="margin-right:5px;">
            <div>
                <p id="partida"></p>
                <p id="destino"></p>
            </div>
        </div>
        <h3>CHAT DA CORRIDA</h3>
        <div class="mensagens" id="mensagens"></div>
    </div>
    <div id="detalhes">
        <div class="detailsButtons">
            <div>
                <p class="pdistancia"></p>
                <p class="ptempo"></p>
            </div>
        </div>
    </div>
    <div id="butoes">
        <debliwui-btncheguei></debliwui-btncheguei>
        <debliwui-btnpanico></debliwui-btnpanico>
        <debliwui-btncancelar></debliwui-btncancelar>
        <button class="btn-ver-motorista" onclick="_corrida.okay()">VER MOTORISTA</button>
    </div>
    <div class="depois-de-iniciar">
        <debliwui-btncorrida></debliwui-btncorrida>
    </div>
    <div class="cancelada">
        <p class="titulo">CORRIDA CANCELADA</p>
        <p class="motivo"></p>
    </div>
    <div class="chegamos">
        <p>CHEGAMOS AO DESTINO</p>
    </div>
    <div class="actions">
        <input type="text" id="msg-input" placeholder="Mensagem...">
        <img src="/send.svg" id="btn-send" style="cursor:pointer;">
    </div>
</div>
<style>
    .mensagens { width:96%;display:flex;flex-direction:column;height:28vh;overflow-anchor:none;overflow-y:scroll; }
    .mensagens .quem { display:block;font-size:12px;color:rgba(0,0,0,0.50); }
    .mensagens .quando { display:block;font-size:10px;color:rgba(0,0,0,0.40); }
    .mensagens p { padding:8px 16px;margin:4px 0;max-width:100%; }
    .mensagens .left .sms { display:block;background:rgba(47,217,19,0.10);padding:10px;border-radius:6px;color:#111; }
    .mensagens .left { border-radius: 4px;display:block;text-align:left;border:1px solid rgba(47,217,19,0.2);padding:8px;background:rgba(47,217,19,0.07); }
    .mensagens .right .sms { display:block;background:rgba(245,166,35,0.10);padding:10px;border-radius:6px;color:#111; }
    .mensagens .right { display:block;border-radius: 4px;text-align:right;border:1px solid rgba(245,166,35,0.2);padding:8px;background:rgba(245,166,35,0.07); }
    .chatdacorrida h3 {
        padding:10px 0;background:rgba(255,255,255,0.10);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border-bottom:1px solid rgba(255,255,255,0.15);
        text-align:center;color:#111;letter-spacing:0.08em;font-size:13px;
    }
    .actions {
        width:100%;display:flex;justify-content:space-between;
        position:fixed;bottom:0;left:0;padding:10px 3%;box-sizing:border-box;
        background:rgba(15,15,40,0.75);
        backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
        border-top:1px solid rgba(255,255,255,0.12);
    }
    .actions input {
        width:78%;background:rgba(255,255,255,0.10);
        border:1px solid rgba(255,255,255,0.22);border-radius:20px;
        padding:0 14px;height:40px;color:#fff;font-size:14px;
    }
    .actions input::placeholder { color:rgba(255,255,255,0.45); }
    .actions img { width:40px;height:40px;background:linear-gradient(135deg,#2FD913cc,#1aaa00cc);border-radius:20px;cursor:pointer;padding:8px;box-sizing:border-box; }
    .corrida { width:96%;padding:3%;height:84vh; }
    .pdistancia { color:rgba(0,0,0,0.70) !important; font-size:13px; }
    .ptempo { color:rgba(0,0,0,0.70) !important; font-size:13px; }
    .btn-ver-motorista {
        height:38px;background:rgba(255,255,255,0.15);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border-radius: 4px;display:block;margin:8px auto;
        border:1px solid rgba(255,255,255,0.25);cursor:pointer;
        color:#111;font-size:13px;padding:0 16px;
    }
    .detailsButtons { display:flex;align-items:flex-start;justify-content:space-between; }
    .detailsButtons p { font-size:13px;line-height:1.4;color:rgba(0,0,0,0.65); }
    .cancelada { display:none;background:rgba(231,76,60,0.12);border:1px solid rgba(231,76,60,0.3);padding:10px 16px;border-radius: 4px;margin:8px 0; }
    .titulo { font-weight:bold;color:#111 !important; }
    .motivo { color:rgba(0,0,0,0.65) !important; }
    .chegamos { display:none;background:rgba(47,217,19,0.12);border:1px solid rgba(47,217,19,0.3);padding:10px 16px;border-radius: 4px;margin:8px 0; }
    .chegamos p { font-weight:bold;color:#111 !important;line-height:17px; }
    .depois-de-iniciar { display:none; }
    .passageiro-info { padding:12px 0; }
    .passageiro-info img { width:48px;border-radius: 4px;border:2px solid rgba(255,255,255,0.25); }
    .passageiro-info p { font-size:13px;line-height:15px;margin:0;color:rgba(0,0,0,0.70); }
    .locations { display:flex;align-items:center;padding:10px 0;margin-bottom:6px; }
    .locations div p { font-size:13px;margin:2px 0;color:rgba(0,0,0,0.70); }
</style>`;
  }

  function init() {
    if (window._corrida) {
      if (window._corrida.verCorridaAtual) window._corrida.verCorridaAtual();
      if (window._corrida.veInicio) window._corrida.veInicio();
    }
    var mensagens = document.getElementById('mensagens');
    if (mensagens) {
      mensagens.scrollTop = mensagens.scrollHeight;
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
