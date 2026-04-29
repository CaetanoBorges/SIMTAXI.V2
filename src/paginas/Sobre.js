export default function Sobre() {
  function html() {
    return `
<div class="principal">
  <div class="principal-corpo">
    <br>
    <h1 class="header-title" style="font-size:clamp(22px,6vw,32px);">SOBRE</h1>
    <br>
    <div class="g-card" style="padding:24px;color:rgba(0,0,0,0.70);line-height:1.8;">
      <p>SIM TAXI é a plataforma de mobilidade que conecta passageiros a motoristas de taxi, aluguel de carros e hospedagem em Angola.</p>
    </div>
    <br>
  </div>
</div>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
