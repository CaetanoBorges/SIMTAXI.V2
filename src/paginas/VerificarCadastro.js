export default function VerificarCadastro() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br><br>
        <p class="header-title">POR FAVOR<br>CONFIRME O NÚMERO<br>QUE RECEBEU POR EMAIL</p>
        <br><br>
        <input type="number" class="input-telas-inicio input-numero" placeholder="Número recebido" id="numero">
        <br><br>
        <p>Não recebi EMAIL, <span onclick="CADASTRO.reenviarCodigo()" style="color:red;font-weight:bold;"> reenviar</span></p>
        <br><br><br>
        <button class="button-telas-inicio btn-criar-conta" onclick='CADASTRO.verificarCadastro()'>CONFIRMAR</button>
    </div>
</div>
<style>
    .btn-criar-conta { margin:20px auto 0; background:linear-gradient(135deg,#e63946dd,#b71c2cdd); border-color:rgba(230,57,70,0.5); }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
