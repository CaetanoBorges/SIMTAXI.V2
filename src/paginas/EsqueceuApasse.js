export default function EsqueceuApasse() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br><br>
        <p class="header-title">INSIRA O SEU EMAIL<br>PARA RECEBER UM NÚMERO<br>DE VERIFICAÇÃO DE CONTA<br>POR EMAIL</p>
        <br><br>
        <input type="email" class="input-telas-inicio recuperar-telefone" id="telefone" placeholder="Email">
        <br><br><br><br><br>
        <button class="button-telas-inicio btn-receber-numero" onclick='CADASTRO.receberNumeroRecuperacao()'>RECEBER NÚMERO</button>
    </div>
</div>
<style>
    .btn-receber-numero { margin:40px auto 0 auto;border:1px solid #2FD913;background:#2FD913; }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
