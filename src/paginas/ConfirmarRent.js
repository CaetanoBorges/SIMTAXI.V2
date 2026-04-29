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
    .confirmar-sms {
        background:rgba(255,255,255,0.06);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.15);border-radius: 6px;
        display:block;margin-top:20px;overflow:hidden;
    }
    .confirmar-sms .header {
        width:100%;text-align:center;padding:14px 0;
        background:rgba(255,255,255,0.12);font-size:15px;
        font-weight:600;color:#111;letter-spacing:0.06em;
    }
    .confirmar-sms .descricao { text-align:center;padding:12px 16px;font-size:12px;color:rgba(0,0,0,0.60);margin:0; }
    .confirmar-sms div { width:100%;padding-bottom:16px; }
    .confirmar-sms div input {
        display:block;margin:0 auto;width:80%;height:42px;
        background:rgba(255,255,255,0.10);border:1px solid rgba(255,255,255,0.22);
        border-radius: 4px;padding-left:14px;color:#111;font-size:14px;box-sizing:border-box;
    }
    .confirmar-sms div input::placeholder { color:rgba(0,0,0,0.35); }
    h3 { color:#111;text-align:center; }
    p { color:rgba(0,0,0,0.70); }
</style>`;
  }

  function init() {}
  function destroy() {}

  return { html: html(), init, destroy };
}
