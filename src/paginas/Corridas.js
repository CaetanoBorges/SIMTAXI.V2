export default function Corridas() {
  function html() {
    return `
<div class="principal" id="corridas">
    <debliwui-info></debliwui-info>
</div>
<br><br>`;
  }

  function init() {
    if (window._corrida && window._corrida.verCorridas) {
      window._corrida.verCorridas();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
