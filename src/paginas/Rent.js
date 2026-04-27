export default function Rent() {
  function html() {
    return `
<div class="principal">
    <br><br>
    <debliwui-meusalugueres></debliwui-meusalugueres>
</div>
<div id="cards-carros"></div>
<style>
    .rentaca-menu { display:inline-block;margin:auto auto auto auto;padding:2vh 2vh 2vh 0;color:rgba(0,0,0,.51);cursor:pointer; }
    .card-rentacar { display:inline-block;width:200px;height:fit-content;padding:10px;margin:auto 10px auto auto;background:#FFFFFF;box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:5px; }
    .card-container { width:100%;position:relative; }
    .card-container button { position:absolute;width:100px;top:2vh;left:50px;padding:5px;background:rgba(217,217,217,.5);box-shadow:0px 0px 4px 2px rgba(0,0,0,.25);border-radius:5px;border:none;cursor:pointer; }
    .card-container img { width:100%;border-radius:5px 5px 0 0; }
    .card-bottom { background:#FFFFFF;box-shadow:0px 0px 4px 1px rgba(0,0,0,.25);border-radius:0 0 5px 5px;padding:2vh 1%; }
    .card-bottom p { text-align:center;margin:5px; }
</style>`;
  }

  function init() {
    if (window._rentacar && window._rentacar.rent) {
      window._rentacar.rent();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
