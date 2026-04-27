export default function Rotas() {
  function html() {
    return `
<div class="principal">
    <debliwui-info></debliwui-info>
</div>
<br><br>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
