export default function ConfirmarRecuperacao() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br><br>
        <p class="header-title">POR FAVOR<br>CONFIRME O NÚMERO<br>QUE RECEBEU POR EMAIL</p>
        <br><br>
        <input type="number" class="input-telas-inicio" placeholder="Número recebido" id="numero">
        <br><br><br><br><br>
        <button class="button-telas-inicio btn-confirmar" onclick='CADASTRO.confirmarRecuperacao()'>CONFIRMAR</button>
    </div>
</div>
<style>
    .btn-confirmar { margin:40px auto 0 auto;border:1px solid #2FD913;background:#2FD913; }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
