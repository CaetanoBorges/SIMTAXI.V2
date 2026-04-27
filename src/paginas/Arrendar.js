export default function Arrendar() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <br><br>
        <h3 style="text-align:center">ARRENDAR APARTAMENTO</h3>
        <br>
        <div>
            <p>Data de início</p>
            <input type="date" class="input-telas-inicio" id="inicio">
        </div>
        <div>
            <p>Data de fim</p>
            <input type="date" class="input-telas-inicio" id="fim">
        </div>
        <div>
            <p>Preço por dia</p>
            <input type="number" class="input-telas-inicio" id="precoDia" readonly>
        </div>
        <div class="concluir">
            <p class="preco">Preço: 0 kz</p>
            <p class="desconto">Desconto: 0 kz</p>
            <p class="total">Total: 0 kz</p>
        </div>
        <debliwui-btnconcluirguest></debliwui-btnconcluirguest>
        <br><br>
    </div>
</div>
<style>
    .concluir { width:100%; }
    .concluir .preco { font-size:16px;line-height:19px;color:rgba(0,0,0,.53);margin-top:10px; }
    .concluir .desconto { font-size:16px;line-height:19px;color:#D97E13; }
    .concluir .total { font-size:16px;line-height:19px;color:#2FD913;margin-bottom:10px; }
</style>`;
  }

  function init() {
    if (window._guesthouse && window._guesthouse.arrend) {
      window._guesthouse.arrend();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
