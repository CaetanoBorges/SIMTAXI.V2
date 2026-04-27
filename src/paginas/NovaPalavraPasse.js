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
    .btn-pw { margin:40px auto 0 auto;border:1px solid #2FD913;background:#2FD913; }
    .crie-pw { text-align:center;font-size:12px; }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
