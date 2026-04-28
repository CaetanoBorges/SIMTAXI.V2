export default function Rent() {
  function html() {
    return `
<div class="principal">
    <br><br>
    <debliwui-meusalugueres></debliwui-meusalugueres>
</div>
<div id="cards-carros"></div>
<style>
    .rentaca-menu { display:inline-block;margin:auto;padding:2vh 2vh 2vh 0;color:rgba(0,0,0,0.55);cursor:pointer; }
    .card-rentacar {
        display:inline-block;width:200px;height:fit-content;padding:10px;
        margin:auto 10px auto auto;
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
        border:1px solid rgba(255,255,255,0.20);
        box-shadow:0 4px 16px rgba(0,0,0,0.3);border-radius:8px;
    }
    .card-container { width:100%;position:relative; }
    .card-container button {
        position:absolute;width:100px;top:2vh;left:50px;padding:5px;
        background:rgba(255,255,255,0.25);
        backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
        box-shadow:0 2px 8px rgba(0,0,0,0.25);border-radius:6px;border:none;cursor:pointer;color:#111;
    }
    .card-container img { width:100%;border-radius:6px 6px 0 0; }
    .card-bottom {
        background:rgba(255,255,255,0.08);border-radius:0 0 6px 6px;
        border-top:1px solid rgba(255,255,255,0.12);padding:10px 4%;
    }
    .card-bottom p { text-align:center;margin:4px;color:rgba(0,0,0,0.65);font-size:13px; }
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
