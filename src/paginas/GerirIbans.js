import TopNav from '../../components/topNav/topNav.js';
import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function GerirIbans() {
  const _topNav = TopNav();
  const _nav    = BottomNav('');

  /* ── localStorage helpers ── */
  function getIbans() {
    try { return JSON.parse(localStorage.getItem('wl_ibans') || '[]'); }
    catch { return []; }
  }
  function saveIbans(ibans) {
    localStorage.setItem('wl_ibans', JSON.stringify(ibans));
  }

  function html() {
    return `
${_topNav.html}
<div class="gi-page">

  <header class="gi-header">
    <button class="gi-back" id="gi-back">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <h1 class="gi-title">IBANs registados</h1>
  </header>

  <!-- Lista de IBANs -->
  <div class="gi-lista" id="gi-lista"></div>

  <!-- Formulário de adição -->
  <div class="gi-form-card">
    <p class="gi-form-title">Adicionar novo IBAN</p>

    <label class="gi-label">Número IBAN</label>
    <input class="gi-input" id="gi-iban-num" type="text"
      placeholder="AO06.0040.0000.0000.0000.0000.0"
      maxlength="34" autocomplete="off" spellcheck="false">
    <span class="gi-input-error" id="gi-iban-num-err"></span>

    <label class="gi-label">Apelido (opcional)</label>
    <input class="gi-input" id="gi-iban-apelido" type="text"
      placeholder="Ex: Conta pessoal" maxlength="40">

    <button class="gi-btn-add" id="gi-add">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      Adicionar IBAN
    </button>
  </div>

</div>

${_nav.html}

<!-- Modal de confirmação de remoção -->
<div class="gi-modal-overlay" id="gi-del-overlay">
  <div class="gi-modal">
    <p class="gi-modal__titulo">Remover IBAN?</p>
    <p class="gi-modal__sub" id="gi-del-sub"></p>
    <div class="gi-modal__actions">
      <button class="gi-modal__cancelar" id="gi-del-cancelar">Cancelar</button>
      <button class="gi-modal__confirmar" id="gi-del-confirmar">Remover</button>
    </div>
  </div>
</div>

<style>
  .gi-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f2f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 0 100px;
    box-sizing: border-box;
  }

  /* ── Header ── */
  .gi-header {
    width: calc(100% - 32px);
    max-width: 480px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .gi-back {
    background: #fff;
    border: none;
    border-radius: 50%;
    width: 40px; height: 40px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    color: #111;
    flex-shrink: 0;
  }
  .gi-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  /* ── Lista ── */
  .gi-lista {
    width: calc(100% - 32px);
    max-width: 480px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  .gi-iban-item {
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  .gi-iban-item__icon {
    width: 42px; height: 42px;
    border-radius: 50%;
    background: #fdecea;
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .gi-iban-item--principal .gi-iban-item__icon {
    background: #e8f7ee;
  }
  .gi-iban-item__info {
    flex: 1;
    min-width: 0;
  }
  .gi-iban-item__numero {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    letter-spacing: 0.5px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .gi-iban-item__apelido {
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    display: block;
    margin-top: 2px;
  }
  .gi-iban-item__badge {
    font-size: 10px;
    font-weight: 700;
    color: #1a9e4a;
    background: #e8f7ee;
    border-radius: 6px;
    padding: 2px 7px;
    display: inline-block;
    margin-top: 4px;
  }
  .gi-iban-item__actions {
    display: flex;
    gap: 6px;
    flex-shrink: 0;
  }
  .gi-iban-btn {
    background: #f5f5f5;
    border: none;
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .gi-iban-btn--principal {
    color: #1a9e4a;
    background: #e8f7ee;
  }
  .gi-iban-btn--remover {
    color: #c0392b;
    background: #fdecea;
  }

  .gi-empty {
    text-align: center;
    padding: 32px 20px;
    color: rgba(0,0,0,0.4);
    font-size: 14px;
  }
  .gi-empty__icon {
    font-size: 48px;
    display: block;
    margin-bottom: 10px;
  }

  /* ── Formulário ── */
  .gi-form-card {
    width: calc(100% - 32px);
    max-width: 480px;
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .gi-form-title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin: 0 0 10px;
  }
  .gi-label {
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    font-weight: 500;
  }
  .gi-input {
    width: 100%;
    box-sizing: border-box;
    border: 1.5px solid #e0e0e0;
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
    font-family: monospace;
    margin-bottom: 4px;
  }
  .gi-input:focus { border-color: #c0392b; }
  .gi-input-error {
    font-size: 11px;
    color: #c0392b;
    min-height: 16px;
    display: block;
    margin-bottom: 4px;
  }
  .gi-btn-add {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 14px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
  }

  /* ── Modal remoção ── */
  .gi-modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; align-items: center; justify-content: center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    padding: 20px;
    box-sizing: border-box;
  }
  .gi-modal-overlay--open {
    opacity: 1;
    pointer-events: all;
  }
  .gi-modal {
    background: #fff;
    border-radius: 18px;
    padding: 24px 22px;
    width: 100%;
    max-width: 360px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.18);
  }
  .gi-modal__titulo {
    font-size: 17px; font-weight: 700; color: #111; margin: 0 0 6px;
  }
  .gi-modal__sub {
    font-size: 13px; color: rgba(0,0,0,0.5); margin: 0 0 20px;
    word-break: break-all;
  }
  .gi-modal__actions {
    display: flex; gap: 10px;
  }
  .gi-modal__confirmar {
    flex: 1; background: #c0392b; color: #fff;
    border: none; border-radius: 12px;
    padding: 13px; font-size: 14px; font-weight: 700; cursor: pointer;
  }
  .gi-modal__cancelar {
    background: #f0f0f0; color: #555;
    border: none; border-radius: 12px;
    padding: 13px 18px; font-size: 14px; font-weight: 600; cursor: pointer;
  }
</style>`;
  }

  /* ── Renderização dinâmica da lista ── */
  function renderLista() {
    const ibans = getIbans();
    const lista = document.getElementById('gi-lista');
    if (!lista) return;

    if (!ibans.length) {
      lista.innerHTML = `
        <div class="gi-empty">
          <span class="gi-empty__icon">💳</span>
          Ainda não tem IBANs registados.
        </div>`;
      return;
    }

    lista.innerHTML = ibans.map((iban, idx) => `
      <div class="gi-iban-item ${iban.principal ? 'gi-iban-item--principal' : ''}" data-idx="${idx}">
        <div class="gi-iban-item__icon">
          ${iban.principal
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a9e4a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`
          }
        </div>
        <div class="gi-iban-item__info">
          <span class="gi-iban-item__numero">${iban.numero}</span>
          ${iban.apelido ? `<span class="gi-iban-item__apelido">${iban.apelido}</span>` : ''}
          ${iban.principal ? `<span class="gi-iban-item__badge">Principal</span>` : ''}
        </div>
        <div class="gi-iban-item__actions">
          ${!iban.principal ? `<button class="gi-iban-btn gi-iban-btn--principal" data-action="principal" data-idx="${idx}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Principal
          </button>` : ''}
          <button class="gi-iban-btn gi-iban-btn--remover" data-action="remover" data-idx="${idx}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
            Remover
          </button>
        </div>
      </div>
    `).join('');
  }

  /* ── Validação IBAN angolano (formato básico) ── */
  function validarIban(str) {
    const limpo = str.replace(/[\s.]/g, '').toUpperCase();
    if (!/^AO\d{23}$/.test(limpo)) return false;
    return true;
  }
  function normalizeIban(str) {
    const limpo = str.replace(/[\s.]/g, '').toUpperCase();
    // formata AO06 0040 0000 ... em grupos de 4 separados por .
    return limpo.replace(/(.{4})/g, '$1.').replace(/\.$/, '');
  }

  function init() {
    _topNav.init();
    _nav.init();

    renderLista();

    /* Voltar */
    document.getElementById('gi-back')?.addEventListener('click', () => {
      window.vaiTela('/wallet');
    });

    /* Acções na lista (delegação) */
    const lista = document.getElementById('gi-lista');
    lista?.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const idx    = parseInt(btn.dataset.idx, 10);
      const action = btn.dataset.action;
      const ibans  = getIbans();

      if (action === 'principal') {
        ibans.forEach((ib, i) => { ib.principal = (i === idx); });
        saveIbans(ibans);
        renderLista();
      } else if (action === 'remover') {
        const overlay = document.getElementById('gi-del-overlay');
        const sub     = document.getElementById('gi-del-sub');
        sub.textContent = ibans[idx].numero + (ibans[idx].apelido ? ` (${ibans[idx].apelido})` : '');
        overlay.classList.add('gi-modal-overlay--open');

        const confirmar = document.getElementById('gi-del-confirmar');
        const cancelar  = document.getElementById('gi-del-cancelar');

        function fechar() {
          overlay.classList.remove('gi-modal-overlay--open');
          confirmar.replaceWith(confirmar.cloneNode(true));
          cancelar.replaceWith(cancelar.cloneNode(true));
          // re-wire cancel (confirmar foi substituído, referência velha)
          document.getElementById('gi-del-cancelar').addEventListener('click', () => {
            overlay.classList.remove('gi-modal-overlay--open');
          });
        }

        document.getElementById('gi-del-confirmar').addEventListener('click', () => {
          const fresh = getIbans();
          fresh.splice(idx, 1);
          // garante que ainda tem um principal
          if (fresh.length && !fresh.some(i => i.principal)) fresh[0].principal = true;
          saveIbans(fresh);
          overlay.classList.remove('gi-modal-overlay--open');
          renderLista();
        });
        cancelar.addEventListener('click', fechar);
        overlay.addEventListener('click', e => { if (e.target === overlay) fechar(); });
      }
    });

    /* Adicionar novo IBAN */
    document.getElementById('gi-add')?.addEventListener('click', () => {
      const inputNum     = document.getElementById('gi-iban-num');
      const inputApelido = document.getElementById('gi-iban-apelido');
      const errEl        = document.getElementById('gi-iban-num-err');

      const numRaw  = (inputNum?.value || '').trim();
      const apelido = (inputApelido?.value || '').trim();

      if (!validarIban(numRaw)) {
        errEl.textContent = 'IBAN inválido. Deve começar com AO e ter 25 dígitos.';
        inputNum.style.borderColor = '#c0392b';
        inputNum.focus();
        return;
      }

      errEl.textContent = '';
      inputNum.style.borderColor = '';

      const ibans   = getIbans();
      const numero  = normalizeIban(numRaw);

      if (ibans.some(i => i.numero.replace(/\./g,'') === numero.replace(/\./g,''))) {
        errEl.textContent = 'Este IBAN já está registado.';
        inputNum.style.borderColor = '#c0392b';
        return;
      }

      ibans.push({ numero, apelido, principal: ibans.length === 0 });
      saveIbans(ibans);

      inputNum.value     = '';
      inputApelido.value = '';
      renderLista();
    });
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
