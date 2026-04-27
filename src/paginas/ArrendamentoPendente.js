export default function ArrendamentoPendente() {
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
    <p>PARA CONFIRMAR O SEU ARRENDAMENTO</p>
    <br>
    <p>Pode também ligar para a Guesthouse</p>
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
    if (ligarRent && window._guesthouse && window._guesthouse.telefone) {
      ligarRent.href = 'tel:' + window._guesthouse.telefone;
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
