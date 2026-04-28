export default function TaxiAcaminho() {
  function html() {
    return `
<style>
    .taxiacaminho {
        width:100%;min-height:100vh;
        display:flex;flex-direction:column;
        align-items:center;justify-content:center;
        gap:16px;padding:24px;box-sizing:border-box;
    }
    .taxiacaminho img {
        width:clamp(80px,28vw,150px);
        filter:drop-shadow(0 4px 24px rgba(47,217,19,0.5));
    }
    .taxiacaminho p {
        font-size:clamp(14px,4vw,18px);
        line-height:1.6;text-align:center;color:#111;
        margin:0;
    }
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
