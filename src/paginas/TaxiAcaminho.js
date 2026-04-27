export default function TaxiAcaminho() {
  function html() {
    return `
<style>
    .taxiacaminho { width:100%;height:100vh; }
    .taxiacaminho img { width:50%;display:block;margin:30vh auto 20px auto; }
    .taxiacaminho p { font-size:16px;line-height:18px;text-align:center;color:#000000; }
</style>
<div class="taxiacaminho">
    <img src="/circle-check.svg">
    <p>O SEU TÁXI CHEGA EM ALGUNS<br>MINUTOS</p>
</div>`;
  }

  function init() {
    ['menu', 'corrida', 'pesquisa'].forEach(function (key) {
      if (window[key] && window[key].style) {
        window[key].style.display = 'none';
      }
    });
  }

  function destroy() {
    ['menu', 'corrida', 'pesquisa'].forEach(function (key) {
      if (window[key] && window[key].style) {
        window[key].style.display = '';
      }
    });
  }

  return { html: html(), init, destroy };
}
