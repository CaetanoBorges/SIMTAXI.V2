export default function RentAcaminho() {
  function html() {
    return `
<style>
    .taxiacaminho { width:100%;height:100vh; }
    .taxiacaminho img { width:50%;display:block;margin:20vh auto 20px auto; }
    .taxiacaminho p { font-size:16px;line-height:18px;text-align:center;color:#000000; }
</style>
<div class="taxiacaminho">
    <img src="/circle-check.svg">
    <p>SERÁ CONTACTADO EM ALGUNS<br>MINUTOS</p>
    <p>PARA CONFIRMAR O SEU ALUGUER</p>
    <br>
    <p>Pode também ligar para a Rent a Car</p>
    <div style="width:50%;display:flex;margin:auto;justify-content:space-between;flex-direction:row;align-items:center;">
        <a href="" id="ligar-rent" style="padding:10px;background:red;color:white;font-weight:bold;text-decoration:none;border-radius:5px;width:100%;">LIGAR</a>
        <br><br><br>
        <a href="#" onclick='vaiTela("home")' style="padding:10px;background:blue;color:white;font-weight:bold;text-decoration:none;border-radius:5px;width:100%;">ESPERAR</a>
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
