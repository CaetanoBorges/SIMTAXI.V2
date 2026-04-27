export default function Guesthouse() {
  function html() {
    return `
<div class="principal">
    <br><br>
    <debliwui-meusarrendamentos></debliwui-meusarrendamentos>
</div>
<div id="cards-carros"></div>
<style>
    .card-rentacar { display:inline-block;width:200px;height:fit-content;padding:10px;margin:auto 10px auto auto;background:#FFFFFF;box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:5px; }
    .card-container { width:100%;position:relative; }
    .card-container button { position:absolute;width:100px;top:2vh;left:50px;padding:5px;background:rgba(217,217,217,.5);box-shadow:0px 0px 4px 2px rgba(0,0,0,.25);border-radius:5px;border:none;cursor:pointer; }
    .card-container img { width:100%;border-radius:5px 5px 0 0; }
    .card-bottom { background:#FFFFFF;box-shadow:0px 0px 4px 1px rgba(0,0,0,.25);border-radius:0 0 5px 5px;padding:2vh 1%; }
    .card-bottom p { text-align:center;margin:5px; }
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
