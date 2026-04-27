export default function NotFound() {
  function html() {
    return `<h1>ERRO 404</h1>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
