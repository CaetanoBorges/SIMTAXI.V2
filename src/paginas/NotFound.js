export default function NotFound() {
  function html() {
    return `
<div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:20px;box-sizing:border-box;">
  <h1 style="color:#111;font-size:clamp(48px,15vw,96px);font-weight:800;letter-spacing:0.1em;margin:0;">404</h1>
  <p style="color:rgba(0,0,0,0.55);font-size:16px;margin:0;">Página não encontrada</p>
  <button class="button-telas-inicio" style="width:220px;margin-top:12px;" onclick='vaiTela("home")'>VOLTAR AO INÍCIO</button>
</div>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
