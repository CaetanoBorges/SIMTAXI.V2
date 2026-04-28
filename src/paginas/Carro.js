export default function Carro() {
  function html() {
    return `
<div class="principal">
    <div id="fotos"></div>
    <div class="descricao"></div>
    <div id="especificacoes"></div>
    <br><br>
</div>
<style>
    .descricao { padding:10px;color:rgba(0,0,0,0.70); }
</style>`;
  }

  function init() {
    if (window._rentacar && window._rentacar.verCarro) {
      window._rentacar.verCarro();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
