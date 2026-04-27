export default function ConfirmarRent() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br>
        <h3 style="text-align:center">CONFIRMAR ALUGUER</h3>
        <br>
        <div>
            <p>Data de início</p>
            <input type="date" class="input-telas-inicio" id="inicio">
        </div>
        <div>
            <p>Data de fim</p>
            <input type="date" class="input-telas-inicio" id="fim">
        </div>
        <div class="confirmar-sms">
            <div class="header">CONFIRMAR POR SMS</div>
            <p class="descricao">Insira o código de confirmação que recebeu por SMS</p>
            <div>
                <input type="text" placeholder="Código SMS">
            </div>
        </div>
        <br><br>
    </div>
</div>
<style>
    .confirmar-sms { background:rgba(217,217,217,.1);display:block;margin-top:20px; }
    .confirmar-sms .header { width:100%;text-align:center;padding:15px 0;background:rgba(217,217,217,.45);border-radius:5px 5px 0 0;font-size:16pt; }
    .confirmar-sms .descricao { text-align:center;padding:15px 0;font-size:12px;line-height:15px;color:#000;margin-top:15px; }
    .confirmar-sms div { width:100%;border-radius:0 0 5px 5px;padding-bottom:15px; }
    .confirmar-sms div input { display:block;margin:0 auto;width:80%;height:31px;background:#FFFFFF;border:1px solid rgba(0,0,0,.41);border-radius:5px;padding-left:10px; }
</style>`;
  }

  function init() {}
  function destroy() {}

  return { html: html(), init, destroy };
}
