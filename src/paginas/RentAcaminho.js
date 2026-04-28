export default function RentAcaminho() {
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
    .taxiacaminho p { font-size:clamp(14px,4vw,17px);line-height:1.6;text-align:center;color:#fff;margin:0; }
    .taxiacaminho > div {
        display:flex;gap:12px;margin-top:8px;
        width:min(100%,300px);
    }
    .taxiacaminho > div a {
        flex:1;padding:12px 0;text-align:center;
        backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
        border-radius:8px;font-weight:700;font-size:13px;text-decoration:none;
        transition:transform 0.18s;
    }
    .taxiacaminho > div a:active { transform:scale(0.97); }
    #ligar-rent {
        background:rgba(231,76,60,0.70);
        border:1px solid rgba(231,76,60,0.5);color:#fff;
    }
    .btn-esperar {
        background:rgba(74,144,217,0.70);
        border:1px solid rgba(74,144,217,0.5);color:#fff;
    }
</style>
<div class="taxiacaminho">
    <img src="/circle-check.svg">
    <p>SERÁ CONTACTADO EM ALGUNS<br>MINUTOS</p>
    <p>PARA CONFIRMAR O SEU ALUGUER</p>
    <br>
    <p>Pode também ligar para a Rent a Car</p>
    <div>
        <a href="" id="ligar-rent">LIGAR</a>
        <a href="#" onclick='vaiTela("home")' class="btn-esperar">ESPERAR</a>
    </div>
</div>`;
  }

  function init() {
    ['menu', 'corrida', 'pesquisa'].forEach(function (key) {
      if (window[key] && window[key].style) {
        window[key].style.display = 'none';
      }
    });
    var ligarRent = document.getElementById('ligar-rent');
    if (ligarRent && window._rentacar && window._rentacar.telefone) {
      ligarRent.href = 'tel:' + window._rentacar.telefone;
    }
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
