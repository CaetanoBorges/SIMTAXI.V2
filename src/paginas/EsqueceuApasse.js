export default function EsqueceuApasse() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br>
        <img src="/inicio/logo.svg" class="esq-logo">
        <p class="header-title">INSIRA O SEU EMAIL<br>PARA RECEBER UM NÚMERO<br>DE VERIFICAÇÃO DE CONTA<br>POR EMAIL</p>
        <br><br>
        <input type="email" class="input-telas-inicio recuperar-telefone" id="telefone" placeholder="Email">
        <br><br><br><br><br>
        <button class="button-telas-inicio btn-receber-numero" onclick='CADASTRO.receberNumeroRecuperacao()'>RECEBER NÚMERO</button>
    </div>
</div>
<style>
    .esq-logo { display: block; width: 120px; height: 120px; object-fit: contain; margin: 0 auto 12px; }
    .btn-receber-numero { margin:24px auto 0; background:linear-gradient(135deg,#e63946dd,#b71c2cdd); border-color:rgba(230,57,70,0.5); }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
