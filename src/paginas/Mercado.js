import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function Mercado() {
  const _nav = BottomNav('mercado');

  function html() {
    return `
<div class="mercado-page">

  <header class="mp-header">
    <h1 class="mp-title">Mercado</h1>
  </header>

  <div class="mp-empty">
    <span class="mp-empty__icon">🛒</span>
    <p class="mp-empty__text">Em breve</p>
    <p class="mp-empty__sub">O mercado está a ser preparado para si.</p>
  </div>

</div>

${_nav.html}
<style>
  .mercado-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 88px;
    box-sizing: border-box;
  }

  .mp-header {
    width: 100%;
    background: #ffffff;
    padding: 20px 20px 16px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  .mp-title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #111;
  }

  .mp-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 80px 20px;
  }

  .mp-empty__icon {
    font-size: 64px;
    line-height: 1;
  }

  .mp-empty__text {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .mp-empty__sub {
    margin: 0;
    font-size: 14px;
    color: rgba(0,0,0,0.5);
    text-align: center;
  }
</style>`;
  }

  function init() {
    _nav.init();
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
