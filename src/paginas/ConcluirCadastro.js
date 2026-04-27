export default function ConcluirCadastro() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br><br>
        <p class="header-title">INSIRA A SUA<br>PALAVRA-PASSE</p>
        <br><br>
        <input type="password" class="input-telas-inicio" id="palavra-passe" placeholder="Palavra-passe">
        <br><br><br><br><br>
        <button class="button-telas-inicio btn-concluir" onclick='CADASTRO.concluirCadastro()'>CONCLUIR</button>
    </div>
</div>
<style>
    .btn-concluir { margin:40px auto 0 auto;border:1px solid #2FD913;background:#2FD913; }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
