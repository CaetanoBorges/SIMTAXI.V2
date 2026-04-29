import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function Pedidos() {
  const _nav = BottomNav('pedidos');

  function html() {
    return `
<div class="pedidos-page">

  <header class="pd-header">
    <h1 class="pd-title">Pedidos</h1>
  </header>

  <div class="pd-empty">
    <span class="pd-empty__icon">📋</span>
    <p class="pd-empty__text">Nenhum pedido ainda</p>
    <p class="pd-empty__sub">Os seus pedidos aparecerão aqui.</p>
    <button class="pd-btn" id="pd-comecar">Fazer um pedido</button>
  </div>

</div>

${_nav.html}
<style>
  .pedidos-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 88px;
    box-sizing: border-box;
  }

  .pd-header {
    width: 100%;
    background: #ffffff;
    padding: 20px 20px 16px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  .pd-title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #111;
  }

  .pd-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 80px 20px;
  }

  .pd-empty__icon {
    font-size: 64px;
    line-height: 1;
  }

  .pd-empty__text {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .pd-empty__sub {
    margin: 0;
    font-size: 14px;
    color: rgba(0,0,0,0.5);
    text-align: center;
  }

  .pd-btn {
    margin-top: 12px;
    background: #f5a623;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(245,166,35,0.35);
    transition: opacity 0.2s;
  }

  .pd-btn:active { opacity: 0.8; }
</style>`;
  }

  function init() {
    _nav.init();

    const btn = document.getElementById('pd-comecar');
    if (btn) btn.addEventListener('click', () => window.vaiTela('#/home'));
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
