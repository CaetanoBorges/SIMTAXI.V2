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
    .mensagens .quem { display:block;font-size:13px; }
    .mensagens .quando { display:block;font-size:10px; }
    .mensagens p { padding:10px 20px;margin:5px 0;max-width:100%; }
    .mensagens .left .sms { display:block;background:#2FD91310;padding:10px;border-radius:5px; }
    .mensagens .left { border-radius:5px;display:block;text-align:left;border:1px solid #2FD91325;padding:10px;background-color:#2FD91310; }
    .mensagens .right .sms { display:block;background:#D97E1310;padding:10px;border-radius:5px; }
    .mensagens .right { display:block;border-radius:5px;text-align:right;border:1px solid #D97E1325;padding:10px;background-color:#D97E1310; }
    .chatdacorrida h3 { padding:1vh 0;background:rgba(217,217,217,.45);text-align:center; }
    .actions { width:94%;display:flex;justify-content:space-between;position:fixed;bottom:0;left:0;padding:3%;background:#FF000001;filter:drop-shadow(0px 0px 7px rgba(0,0,0,.25)); }
    .actions input { width:70%;background:#FFFFFF;border:1px solid rgba(0,0,0,.41);border-radius:15px;padding:0 5%; }
    .actions img { width:33px;height:31px;background:#2FD913;border-radius:15px;cursor:pointer; }
    .corrida { width:96%;padding:3%;height:84vh; }
    .pdistancia { color:black !important; }
    .ptempo { color:black !important; }
    .btn-ver-motorista { width:114px;height:31px;background:#d9d9d9;border-radius:5px;display:block;margin:10px auto;border:1px solid #d9d9d9;cursor:pointer; }
    .btn-chamar-cheguei { width:114px;height:31px;background:#2FD913;border-radius:5px;display:block;margin:10px auto;border:1px solid #2FD913;cursor:pointer; }
    .btn-chamar-cancelar { width:114px;height:31px;background:#D97E13;border-radius:5px;display:block;margin:10px auto;border:1px solid #D97E13;cursor:pointer; }
    .btn-chamar-panico { width:114px;height:31px;background:#FF0000;border-radius:5px;display:block;margin:10px auto;border:1px solid #FF0000;cursor:pointer; }
    .detailsButtons { display:100%;display:flex;align-items:flex-start;justify-content:space-between; }
    .detailsButtons p { font-size:13px;line-height:5px;color:rgba(0,0,0,.67); }
    .cancelada { display:none;background:#ff000020;padding:1vh 9%;border-radius:5px; }
    .titulo { font-weight:bold;color:black !important; }
    .motivo { color:black !important; }
    .chegamos { display:none;background:#2FD91320;padding:1vh 9%;border-radius:5px; }
    .chegamos p { font-weight:bold;color:black !important;line-height:17px; }
    .depois-de-iniciar { display:none; }
    .passageiro-info { padding:15px 0; }
    .passageiro-info img { width:50px;border-radius:25px; }
    .passageiro-info p { font-size:13px;line-height:15px;margin:0; }
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
