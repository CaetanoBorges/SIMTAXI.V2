export default function Guesthouse() {
  function html() {
    return `
<div class="principal">
    <br><br>
    <debliwui-meusarrendamentos></debliwui-meusarrendamentos>
</div>
<div id="cards-carros"></div>
<style>
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
    if (window._guesthouse && window._guesthouse.getApartamentos) {
      window._guesthouse.getApartamentos();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
