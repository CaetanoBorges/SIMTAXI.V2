export default function Rota() {
  function html() {
    return `
<div class="principal">
    <debliwui-info></debliwui-info>
    <debliwui-rota></debliwui-rota>
    <debliwui-rota></debliwui-rota>
    <debliwui-rota></debliwui-rota>
    <debliwui-rota></debliwui-rota>
    <debliwui-rota></debliwui-rota>
</div>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
