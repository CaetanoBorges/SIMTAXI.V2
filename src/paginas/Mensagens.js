import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function Mensagens() {
  const _nav = BottomNav('mensagens');

  function html() {
    return `
<div class="notif-page">

  <header class="nf-header">
    <h1 class="nf-title">Mensagens</h1>
    <button class="nf-clear" id="nf-clear" aria-label="Limpar todas">Limpar</button>
  </header>

  <div class="nf-empty" id="nf-empty">
    <span class="nf-empty__icon">💬</span>
    <p class="nf-empty__text">Sem mensagens</p>
    <p class="nf-empty__sub">As suas conversas aparecerão aqui.</p>
  </div>

</div>

${_nav.html}
<style>
  .notif-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 88px;
    box-sizing: border-box;
  }

  .nf-header {
    width: 100%;
    background: #ffffff;
    padding: 20px 20px 16px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nf-title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #111;
  }

  .nf-clear {
    background: none;
    border: none;
    font-size: 13px;
    font-weight: 600;
    color: #f5a623;
    cursor: pointer;
    padding: 4px 0;
  }

  .nf-empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 80px 20px;
  }

  .nf-empty__icon {
    font-size: 64px;
    line-height: 1;
  }

  .nf-empty__text {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .nf-empty__sub {
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
