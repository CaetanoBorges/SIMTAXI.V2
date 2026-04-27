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
    .descricao { padding:10px; }
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
