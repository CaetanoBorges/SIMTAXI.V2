export default function NovaPalavraPasse() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br><br>
        <p class="header-title">CONFIRMOU <br>A TITULARIDADE DA CONTA</p>
        <br><br>
        <p class="crie-pw">Crie uma nova palavra-passe</p>
        <input type="password" class="input-telas-inicio input-pw" placeholder="Nova palavra-passe" id="passe">
        <br><br><br><br><br>
        <button class="button-telas-inicio btn-pw" onclick='CADASTRO.renovarPalavraPasse()'>CONFIRMAR</button>
    </div>
</div>
<style>
    .btn-pw { margin:24px auto 0; background:linear-gradient(135deg,#e63946dd,#b71c2cdd); border-color:rgba(230,57,70,0.5); }
    .crie-pw { text-align:center; font-size:13px; color:rgba(0,0,0,0.60); }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
