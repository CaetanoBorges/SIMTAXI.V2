export default function Sobre() {
  function html() {
    return `
<div class="principal"><br><br>
    <h1 style="text-align:center;">SOBRE</h1>
    <br><br>
</div>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
