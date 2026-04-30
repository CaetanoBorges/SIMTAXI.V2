import BottomNav from '../../components/bottomNav/bottomNav.js';
import TopNav from '../../components/topNav/topNav.js';

export default function Wallet() {
  const _nav    = BottomNav('');
  const _topNav = TopNav();

  /* ── IBANs (localStorage) ── */
  function getIbans() {
    try { return JSON.parse(localStorage.getItem('wl_ibans') || '[]'); }
    catch { return []; }
  }

  /* ── Transacções de exemplo ── */
  const TRANSACOES = [
    { tipo: 'entrada', desc: 'Recarga via Multicaixa',      valor: 5000,  data: '28 Abr 2026' },
    { tipo: 'saida',   desc: 'Corrida — Centro → Talatona', valor: 1200,  data: '27 Abr 2026' },
    { tipo: 'saida',   desc: 'Rent a Car — Toyota Corolla', valor: 15000, data: '25 Abr 2026' },
    { tipo: 'entrada', desc: 'Bónus de boas-vindas',        valor: 2000,  data: '20 Abr 2026' },
    { tipo: 'saida',   desc: 'Guesthouse — Apartamento 4',  valor: 8000,  data: '18 Abr 2026' },
  ];

  const saldo = TRANSACOES.reduce((acc, t) =>
    t.tipo === 'entrada' ? acc + t.valor : acc - t.valor, 0
  );

  function fmtKz(n) {
    return n.toLocaleString('pt-AO') + ' Kz';
  }

  const listaHTML = TRANSACOES.map(t => `
    <div class="wt-item wt-item--${t.tipo}">
      <div class="wt-item__icon">
        ${t.tipo === 'entrada'
          ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a9e4a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`
          : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`
        }
      </div>
      <div class="wt-item__info">
        <span class="wt-item__desc">${t.desc}</span>
        <span class="wt-item__data">${t.data}</span>
      </div>
      <span class="wt-item__valor wt-item__valor--${t.tipo}">
        ${t.tipo === 'entrada' ? '+' : '-'}${fmtKz(t.valor)}
      </span>
    </div>
  `).join('');

  /* ── Modal de saque (HTML gerado em runtime com IBAN actual) ── */
  function modalSaqueHTML(iban) {
    const ibanBox = iban
      ? `<div class="wl-modal__iban-box">
          <div>
            <span class="wl-modal__iban-label">IBAN principal</span>
            <span class="wl-modal__iban-valor">${iban.numero}</span>
            ${iban.apelido ? `<span class="wl-modal__iban-apelido">${iban.apelido}</span>` : ''}
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a9e4a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>`
      : `<div class="wl-modal__no-iban">
          <p>Nenhum IBAN registado.</p>
          <button class="wl-modal__add-iban-btn" id="wl-goto-ibans">+ Adicionar IBAN</button>
        </div>`;

    return `
    <div class="wl-modal-overlay" id="wl-saque-overlay">
      <div class="wl-modal">
        <p class="wl-modal__titulo">Fazer Saque</p>
        <p class="wl-modal__sub">O valor será transferido para o IBAN abaixo.</p>
        ${ibanBox}
        ${iban ? `
        <p class="wl-modal__valor-label">Valor a sacar (Kz)</p>
        <input class="wl-modal__valor-input" id="wl-saque-valor" type="number" min="100" placeholder="0">
        <div class="wl-modal__actions">
          <button class="wl-modal__cancelar" id="wl-saque-cancelar">Cancelar</button>
          <button class="wl-modal__confirmar" id="wl-saque-confirmar">Confirmar Saque</button>
        </div>` : `
        <div class="wl-modal__actions">
          <button class="wl-modal__cancelar" id="wl-saque-cancelar">Fechar</button>
        </div>`}
      </div>
    </div>`;
  }

  function html() {
    return `
${_topNav.html}
<div class="wallet-page">

  <!-- Saldo -->
  <div class="wl-saldo-card">
    <span class="wl-saldo-label">Saldo disponível</span>
    <span class="wl-saldo-valor">${fmtKz(saldo)}</span>
    <div class="wl-actions">
      <button class="wl-btn" id="wl-recarregar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
        Recarregar
      </button>
      <button class="wl-btn wl-btn--outline" id="wl-saque">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Fazer Saque
      </button>
    </div>
  </div>

  <!-- Gerir IBANs -->
  <div class="wl-ibans-link" id="wl-ibans-link">
    <div class="wl-ibans-link__left">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
      <span>IBANs registados</span>
    </div>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  </div>

  <!-- Transacções -->
  <div class="wl-section">
    <h2 class="wl-section__title">Últimas transacções</h2>
    <div class="wl-list">
      ${listaHTML}
    </div>
  </div>

</div>

${_nav.html}
<style>
  .wallet-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f2f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 0 88px;
    box-sizing: border-box;
  }

  /* ── Saldo ── */
  .wl-saldo-card {
    width: calc(100% - 32px);
    max-width: 480px;
    background: linear-gradient(135deg, #c0392b, #922b21);
    border-radius: 20px;
    padding: 28px 24px 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    box-shadow: 0 8px 32px rgba(192,57,43,0.35);
    margin-top: 16px;
  }

  .wl-saldo-label {
    font-size: 13px;
    color: rgba(255,255,255,0.75);
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .wl-saldo-valor {
    font-size: 36px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.5px;
    line-height: 1.1;
  }

  .wl-actions {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    width: 100%;
    justify-content: center;
  }

  .wl-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.2);
    color: #fff;
    border: 1.5px solid rgba(255,255,255,0.35);
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: background 0.2s;
    flex: 1;
    justify-content: center;
    max-width: 160px;
  }

  .wl-btn--outline { background: transparent; }

  /* ── Link IBANs ── */
  .wl-ibans-link {
    width: calc(100% - 32px);
    max-width: 480px;
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  .wl-ibans-link__left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #111;
  }

  /* ── Secção de transacções ── */
  .wl-section {
    width: calc(100% - 32px);
    max-width: 480px;
    margin-top: 16px;
  }

  .wl-section__title {
    font-size: 16px;
    font-weight: 700;
    color: #111;
    margin: 0 0 12px;
  }

  .wl-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .wt-item {
    background: #fff;
    border-radius: 14px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }

  .wt-item__icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .wt-item--entrada .wt-item__icon { background: #e8f7ee; }
  .wt-item--saida   .wt-item__icon { background: #fdecea; }

  .wt-item__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }

  .wt-item__desc {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .wt-item__data {
    font-size: 12px;
    color: rgba(0,0,0,0.45);
  }

  .wt-item__valor {
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .wt-item__valor--entrada { color: #1a9e4a; }
  .wt-item__valor--saida   { color: #c0392b; }

  /* ── Modal de saque ── */
  .wl-modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex; align-items: flex-end; justify-content: center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.25s;
    pointer-events: none;
  }
  .wl-modal-overlay--open {
    opacity: 1;
    pointer-events: all;
  }
  .wl-modal {
    background: #fff;
    border-radius: 20px 20px 0 0;
    padding: 28px 24px 40px;
    width: 100%;
    max-width: 520px;
    box-sizing: border-box;
    transform: translateY(40px);
    transition: transform 0.3s ease;
  }
  .wl-modal-overlay--open .wl-modal {
    transform: translateY(0);
  }
  .wl-modal__titulo {
    font-size: 18px; font-weight: 700; color: #111;
    margin: 0 0 6px;
  }
  .wl-modal__sub {
    font-size: 13px; color: rgba(0,0,0,0.5);
    margin: 0 0 20px;
  }
  .wl-modal__iban-box {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .wl-modal__iban-label {
    font-size: 11px; color: rgba(0,0,0,0.45); display: block; margin-bottom: 2px;
  }
  .wl-modal__iban-valor {
    font-size: 15px; font-weight: 700; color: #111; letter-spacing: 1px;
  }
  .wl-modal__iban-apelido {
    display: block;
    font-size: 12px;
    color: rgba(0,0,0,0.5);
    margin-top: 2px;
  }
  .wl-modal__no-iban {
    background: #fff8f0;
    border: 1.5px dashed #f0a070;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    margin-bottom: 20px;
  }
  .wl-modal__no-iban p {
    margin: 0 0 10px;
    font-size: 14px;
    color: rgba(0,0,0,0.55);
  }
  .wl-modal__add-iban-btn {
    background: #c0392b; color: #fff;
    border: none; border-radius: 10px;
    padding: 9px 18px; font-size: 13px; font-weight: 600;
    cursor: pointer;
  }
  .wl-modal__valor-label {
    font-size: 13px; color: rgba(0,0,0,0.5); margin-bottom: 6px;
  }
  .wl-modal__valor-input {
    width: 100%; box-sizing: border-box;
    border: 1.5px solid #ddd; border-radius: 12px;
    padding: 12px 16px; font-size: 18px; font-weight: 700;
    outline: none; margin-bottom: 20px;
    transition: border-color 0.2s;
  }
  .wl-modal__valor-input:focus { border-color: #c0392b; }
  .wl-modal__actions {
    display: flex; gap: 10px;
  }
  .wl-modal__confirmar {
    flex: 1; background: #c0392b; color: #fff;
    border: none; border-radius: 12px;
    padding: 14px; font-size: 15px; font-weight: 700;
    cursor: pointer;
  }
  .wl-modal__cancelar {
    background: #f0f0f0; color: #555;
    border: none; border-radius: 12px;
    padding: 14px 20px; font-size: 15px; font-weight: 600;
    cursor: pointer;
  }

  /* ── Modal Multicaixa Express ── */
  .wl-mx-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #f5f5f5;
    border-radius: 12px;
    padding: 12px 16px;
    margin-bottom: 20px;
  }
  .wl-mx-logo__icon {
    width: 36px; height: 36px;
    border-radius: 8px;
    background: linear-gradient(135deg, #e05b00, #f5a623);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .wl-mx-logo__nome {
    font-size: 14px; font-weight: 700; color: #111;
  }
  .wl-mx-logo__sub {
    font-size: 11px; color: rgba(0,0,0,0.45);
  }
  .wl-mx-tel-row {
    display: flex;
    gap: 8px;
    margin-bottom: 4px;
  }
  .wl-mx-prefix {
    background: #f5f5f5;
    border: 1.5px solid #e0e0e0;
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 15px; font-weight: 700;
    color: #111;
    flex-shrink: 0;
    display: flex; align-items: center;
  }
  .wl-mx-step {
    display: none;
    flex-direction: column;
  }
  .wl-mx-step--active { display: flex; }
  .wl-mx-resumo {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 14px 16px;
    margin-bottom: 20px;
  }
  .wl-mx-resumo__linha {
    display: flex; justify-content: space-between;
    font-size: 13px; color: #555;
    margin-bottom: 6px;
  }
  .wl-mx-resumo__linha:last-child { margin-bottom: 0; }
  .wl-mx-resumo__linha strong { color: #111; }
  .wl-mx-nota {
    font-size: 11px; color: rgba(0,0,0,0.4);
    margin: 0 0 20px;
    text-align: center;
  }
</style>`;
  }

  function init() {
    _topNav.init();
    _nav.init();

    /* ── Modal Multicaixa Express ── */
    const mxHTML = `
    <div class="wl-modal-overlay" id="wl-mx-overlay">
      <div class="wl-modal">
        <p class="wl-modal__titulo">Recarregar Wallet</p>
        <p class="wl-modal__sub">Via Multicaixa Express</p>
        <div class="wl-mx-logo">
          <div class="wl-mx-logo__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <div>
            <span class="wl-mx-logo__nome">Multicaixa Express</span>
            <span class="wl-mx-logo__sub">Pagamento instantâneo</span>
          </div>
        </div>

        <!-- Passo 1: telefone -->
        <div class="wl-mx-step wl-mx-step--active" id="wl-mx-step1">
          <label class="wl-modal__valor-label">Número de telefone</label>
          <div class="wl-mx-tel-row">
            <span class="wl-mx-prefix">+244</span>
            <input class="wl-modal__valor-input" id="wl-mx-tel" type="tel"
              maxlength="9" placeholder="9XX XXX XXX"
              style="margin-bottom:0;flex:1;">
          </div>
          <span class="gi-input-error" id="wl-mx-tel-err" style="margin-bottom:12px;"></span>
          <label class="wl-modal__valor-label" style="margin-top:8px;">Valor a carregar (Kz)</label>
          <input class="wl-modal__valor-input" id="wl-mx-valor" type="number" min="500" placeholder="0">
          <span class="gi-input-error" id="wl-mx-valor-err"></span>
          <div class="wl-modal__actions">
            <button class="wl-modal__cancelar" id="wl-mx-cancelar1">Cancelar</button>
            <button class="wl-modal__confirmar" id="wl-mx-seguinte">Seguinte</button>
          </div>
        </div>

        <!-- Passo 2: confirmação -->
        <div class="wl-mx-step" id="wl-mx-step2">
          <div class="wl-mx-resumo">
            <div class="wl-mx-resumo__linha"><span>Telefone</span><strong id="wl-mx-res-tel"></strong></div>
            <div class="wl-mx-resumo__linha"><span>Valor</span><strong id="wl-mx-res-val"></strong></div>
            <div class="wl-mx-resumo__linha"><span>Método</span><strong>Multicaixa Express</strong></div>
          </div>
          <p class="wl-mx-nota">Confirme os dados antes de prosseguir. Receberá um pedido de autorização no seu telefone.</p>
          <div class="wl-modal__actions">
            <button class="wl-modal__cancelar" id="wl-mx-voltar">Voltar</button>
            <button class="wl-modal__confirmar" id="wl-mx-pagar">Confirmar Pagamento</button>
          </div>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', mxHTML);
    const mxOverlay = document.getElementById('wl-mx-overlay');

    function abrirMx() {
      document.getElementById('wl-mx-tel').value    = '';
      document.getElementById('wl-mx-valor').value  = '';
      document.getElementById('wl-mx-tel-err').textContent   = '';
      document.getElementById('wl-mx-valor-err').textContent = '';
      document.getElementById('wl-mx-step1').classList.add('wl-mx-step--active');
      document.getElementById('wl-mx-step2').classList.remove('wl-mx-step--active');
      mxOverlay.classList.add('wl-modal-overlay--open');
      setTimeout(() => document.getElementById('wl-mx-tel')?.focus(), 320);
    }
    function fecharMx() {
      mxOverlay.classList.remove('wl-modal-overlay--open');
    }

    document.getElementById('wl-recarregar')?.addEventListener('click', abrirMx);
    document.getElementById('wl-mx-cancelar1')?.addEventListener('click', fecharMx);
    mxOverlay?.addEventListener('click', e => { if (e.target === mxOverlay) fecharMx(); });

    document.getElementById('wl-mx-seguinte')?.addEventListener('click', () => {
      const telInput = document.getElementById('wl-mx-tel');
      const valInput = document.getElementById('wl-mx-valor');
      const telErr   = document.getElementById('wl-mx-tel-err');
      const valErr   = document.getElementById('wl-mx-valor-err');
      let ok = true;

      const tel = (telInput?.value || '').replace(/\s/g, '');
      if (!/^9[0-9]{8}$/.test(tel)) {
        telErr.textContent = 'Número inválido. Ex: 923 456 789';
        telInput.style.borderColor = '#c0392b';
        ok = false;
      } else {
        telErr.textContent = '';
        telInput.style.borderColor = '';
      }

      const val = parseFloat(valInput?.value);
      if (!val || val < 500) {
        valErr.textContent = 'Valor mínimo: 500 Kz';
        valInput.style.borderColor = '#c0392b';
        ok = false;
      } else {
        valErr.textContent = '';
        valInput.style.borderColor = '';
      }

      if (!ok) return;

      document.getElementById('wl-mx-res-tel').textContent = '+244 ' + tel;
      document.getElementById('wl-mx-res-val').textContent = val.toLocaleString('pt-AO') + ' Kz';
      document.getElementById('wl-mx-step1').classList.remove('wl-mx-step--active');
      document.getElementById('wl-mx-step2').classList.add('wl-mx-step--active');
    });

    document.getElementById('wl-mx-voltar')?.addEventListener('click', () => {
      document.getElementById('wl-mx-step2').classList.remove('wl-mx-step--active');
      document.getElementById('wl-mx-step1').classList.add('wl-mx-step--active');
    });

    document.getElementById('wl-mx-pagar')?.addEventListener('click', () => {
      const tel = document.getElementById('wl-mx-res-tel').textContent;
      const val = document.getElementById('wl-mx-res-val').textContent;
      fecharMx();
      alert(`Pedido enviado!\nVerifique o seu telefone (${tel}) para autorizar o pagamento de ${val}.`);
    });

    document.getElementById('wl-ibans-link')?.addEventListener('click', () => {
      window.vaiTela('/geribans');
    });

    /* ── Modal de saque ── */
    const ibans   = getIbans();
    const principal = ibans.find(i => i.principal) || ibans[0] || null;

    document.body.insertAdjacentHTML('beforeend', modalSaqueHTML(principal));

    const overlay = document.getElementById('wl-saque-overlay');

    function abrirModal() {
      overlay.classList.add('wl-modal-overlay--open');
      const inp = document.getElementById('wl-saque-valor');
      if (inp) { inp.value = ''; setTimeout(() => inp.focus(), 320); }
    }
    function fecharModal() {
      overlay.classList.remove('wl-modal-overlay--open');
    }

    document.getElementById('wl-saque')?.addEventListener('click', abrirModal);
    document.getElementById('wl-saque-cancelar')?.addEventListener('click', fecharModal);
    overlay?.addEventListener('click', e => { if (e.target === overlay) fecharModal(); });

    document.getElementById('wl-goto-ibans')?.addEventListener('click', () => {
      fecharModal();
      window.vaiTela('/geribans');
    });

    document.getElementById('wl-saque-confirmar')?.addEventListener('click', () => {
      const inp = document.getElementById('wl-saque-valor');
      const val = parseFloat(inp?.value);
      if (!val || val < 100) {
        if (inp) inp.style.borderColor = '#c0392b';
        inp?.focus();
        return;
      }
      fecharModal();
      alert(`Saque de ${val.toLocaleString('pt-AO')} Kz solicitado para\n${principal.numero}.`);
    });
  }

  function destroy() {
    document.getElementById('wl-saque-overlay')?.remove();
    document.getElementById('wl-mx-overlay')?.remove();
  }

  return { html: html(), init, destroy };
}
