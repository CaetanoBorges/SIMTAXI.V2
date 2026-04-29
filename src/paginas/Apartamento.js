export default function Apartamento() {
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
    if (window._guesthouse && window._guesthouse.verApartamento) {
      window._guesthouse.verApartamento();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
