import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function MeusProdutos() {
  const _nav = BottomNav('perfil');

  function html() {
    return `
<div class="mp-page">

  <header class="mp-header">
    <button class="mp-back" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <h1 class="mp-title">Meus Produtos e Serviços</h1>
  </header>
<br>
  <button class="mp-add-btn" onclick="window.vaiTela('#/adicionar-produto')">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    Adicionar produto
  </button>

  <div class="mp-resumo" id="mp-resumo"></div>
  <div class="mp-lista" id="mp-lista">
    <div class="mp-skeleton" id="mp-skeleton">
      <div class="mp-skel-item"></div>
      <div class="mp-skel-item"></div>
      <div class="mp-skel-item"></div>
    </div>
  </div>

</div>

<debliwui-notificacao id="mp-notif"></debliwui-notificacao>

${_nav.html}
<style>
  .mp-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    padding-bottom: 88px;
    box-sizing: border-box;
  }

  .mp-header {
    width: 100%;
    background: #ffffff;
    padding: 16px 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 12px;
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .mp-add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: calc(100% - 32px);
    margin: 0 16px 16px;
    background: #f5a623;
    border: none;
    border-radius: 14px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    padding: 15px;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.18s;
    box-shadow: 0 4px 16px rgba(245,166,35,0.35);
  }
  .mp-add-btn:hover { background: #e09010; }

  .mp-back {
    background: none;
    border: none;
    line-height: 1;
    cursor: pointer;
    color: #111;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .mp-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
  }

  .mp-resumo {
    padding: 0 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .mp-resumo__linha {
    font-size: 12px;
    color: #666;
    font-weight: 500;
  }
  .mp-resumo__linha strong { color: #111; }
  .mp-resumo__linha--alerta strong { color: #e07b00; }

  .mp-lista {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px 16px;
    box-sizing: border-box;
  }

  .mp-vazio {
    text-align: center;
    color: #888;
    font-size: 14px;
    margin-top: 40px;
  }

  /* skeleton */
  .mp-skeleton { display: flex; flex-direction: column; gap: 12px; }
  .mp-skel-item {
    height: 76px;
    border-radius: 12px;
    background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
    background-size: 200% 100%;
    animation: mp-shimmer 1.4s infinite;
  }
  @keyframes mp-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

  .mp-item {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s;
    text-decoration: none;
  }
  .mp-item:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.12); }

  .mp-item__thumb {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    object-fit: cover;
    flex-shrink: 0;
    background: #f0f0f0;
  }

  .mp-item__icon {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    background: #fff8ee;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .mp-item__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
  }

  .mp-item__top {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .mp-item__nome {
    font-size: 14px;
    font-weight: 700;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mp-item__badge {
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 20px;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .mp-item__badge--produto { background: #fff8ee; color: #f5a623; }
  .mp-item__badge--servico { background: #eef4ff; color: #4a90d9; }

  .mp-item__desc {
    font-size: 12px;
    color: #888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mp-item__preco {
    font-size: 13px;
    font-weight: 700;
    color: #f5a623;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .mp-item__status {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 20px;
    margin-top: 4px;
    width: fit-content;
  }
  .mp-item__status--pago    { background: #e8f8e8; color: #27ae60; }
  .mp-item__status--pendente { background: #fff4e0; color: #e07b00; }

  .mp-item__vendas {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
    color: #888;
    margin-top: 3px;
  }

  .mp-item__pay-btn {
    background: #f5a623;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 5px;
    width: fit-content;
    transition: background 0.18s;
  }
  .mp-item__pay-btn:hover { background: #e09010; }

  /* Modal pagamento */
  .mp-pay-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 100;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    animation: mp-fade-in 0.18s ease;
  }
  @keyframes mp-fade-in { from{opacity:0} to{opacity:1} }

  .mp-pay-modal {
    background: #fff;
    border-radius: 22px 22px 0 0;
    padding: 28px 24px 36px;
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    box-shadow: 0 -4px 30px rgba(0,0,0,0.12);
    position: relative;
    animation: mp-slide-up 0.22s ease;
  }
  @keyframes mp-slide-up { from{transform:translateY(40px);opacity:0} to{transform:translateY(0);opacity:1} }

  .mp-pay-modal__close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #555;
  }

  .mp-pay-modal__icon { margin-bottom: 4px; }

  .mp-pay-modal__title {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #111;
  }

  .mp-pay-modal__produto {
    margin: 0;
    font-size: 13px;
    color: #888;
    font-style: italic;
  }

  .mp-pay-modal__valor {
    margin: 0;
    font-size: 15px;
    color: #111;
  }

  .mp-pay-modal__saldo {
    margin: 0;
    font-size: 13px;
    color: #555;
  }

  .mp-pay-modal__opts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    margin-top: 12px;
  }

  .mp-pay-opt {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: opacity 0.18s;
  }
  .mp-pay-opt:hover { opacity: 0.88; }
  .mp-pay-opt--carteira { background: #eef4ff; color: #4a90d9; }
  .mp-pay-opt--carteira:disabled { background: #f0f0f0; color: #bbb; cursor: not-allowed; }
  .mp-pay-opt--express  { background: #f5a623; color: #fff; }
</style>`;
  }

  function renderItem(p) {
    const badge    = p.tipo === 'servico'
      ? '<span class="mp-item__badge mp-item__badge--servico">Serviço</span>'
      : '<span class="mp-item__badge mp-item__badge--produto">Produto</span>';

    const thumb = p.imagem
      ? `<img class="mp-item__thumb" src="${p.imagem}" alt="${p.nome}" loading="lazy">`
      : `<div class="mp-item__icon">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
         </div>`;

    const preco = p.preco > 0
      ? `<span class="mp-item__preco">${Number(p.preco).toLocaleString('pt-AO')} Kz</span>`
      : '';

    const statusPago = p.pago
      ? `<span class="mp-item__status mp-item__status--pago">
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
           Publicado
         </span>
         <span class="mp-item__vendas">
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
           ${p.vendas || 0} venda${(p.vendas || 0) !== 1 ? 's' : ''}
         </span>`
      : `<span class="mp-item__status mp-item__status--pendente">
           <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
           Taxa pendente
         </span>
         <button class="mp-item__pay-btn" onclick="event.stopPropagation(); window._mpPagar(${p.id})">
           <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
           Pagar taxa
         </button>`;

    const dataAttr = `data-produto='${JSON.stringify(p).replace(/'/g, '&#39;')}'`;

    return `
    <div class="mp-item" ${dataAttr} onclick="window._mpAbrirEditor(this)">
      ${thumb}
      <div class="mp-item__info">
        <div class="mp-item__top">
          <span class="mp-item__nome">${p.nome}</span>
          ${badge}
        </div>
        ${p.descricao ? `<span class="mp-item__desc">${p.descricao}</span>` : ''}
        ${statusPago}
      </div>
      ${preco}
    </div>`;
  }

  const MOCK_PRODUTOS = [
    { id: 1, tipo: 'produto', nome: 'Fone Bluetooth', descricao: 'Fone sem fio com cancelamento de ruído', preco: 15000, imagem: '', imagem2: '', imagem3: '', video: '', pago: true, vendas: 12 },
    { id: 2, tipo: 'servico', nome: 'Design Gráfico', descricao: 'Criação de logos e materiais visuais', preco: 8000, imagem: '', imagem2: '', imagem3: '', video: '', pago: false, vendas: 0 },
    { id: 3, tipo: 'produto', nome: 'Carregador USB-C', descricao: 'Carregador rápido 65W', preco: 5500, imagem: '', imagem2: '', imagem3: '', video: '', pago: true, vendas: 3 },
    { id: 4, tipo: 'servico', nome: 'Aulas de Inglês', descricao: 'Aulas online individuais', preco: 3000, imagem: '', imagem2: '', imagem3: '', video: '', pago: false, vendas: 0 },
  ];

  function carregarItens(items) {
    const skel    = document.getElementById('mp-skeleton');
    const lista   = document.getElementById('mp-lista');
    if (skel) skel.remove();
    if (!items.length) {
      lista.insertAdjacentHTML('beforeend', '<p class="mp-vazio">Nenhum produto ou serviço registado.</p>');
      return;
    }
    // guardar referência global para o modal de pagamento
    if (window._mpSetItems) window._mpSetItems(items);
    const total    = items.length;
    const pendente = items.filter(p => !p.pago).length;
    const totalVendas = items.reduce((acc, p) => acc + (Number(p.vendas) || 0), 0);
    const resumo   = document.getElementById('mp-resumo');
    if (resumo) {
      resumo.innerHTML = `
        <span class="mp-resumo__linha"><strong>${total}</strong> produto${total !== 1 ? 's' : ''}/serviço${total !== 1 ? 's' : ''} no mercado</span>
        <span class="mp-resumo__linha"><strong>${totalVendas}</strong> venda${totalVendas !== 1 ? 's' : ''} no total</span>
        ${pendente > 0 ? `<span class="mp-resumo__linha mp-resumo__linha--alerta"><strong>${pendente}</strong> com taxa por pagar</span>` : ''}`;
    }
    items.forEach(p => lista.insertAdjacentHTML('beforeend', renderItem(p)));
  }

  function init() {
    _nav.init();

    // ── Modal de pagamento — injetado no body para evitar clipping ──
    const _modalEl = document.createElement('div');
    _modalEl.id = 'mp-pay-modal';
    _modalEl.className = 'mp-pay-overlay';
    _modalEl.style.display = 'none';
    _modalEl.innerHTML = `
      <div class="mp-pay-modal">
        <button class="mp-pay-modal__close" id="mp-pay-close">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="mp-pay-modal__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        </div>
        <h2 class="mp-pay-modal__title">Taxa de Inserção</h2>
        <p class="mp-pay-modal__produto" id="mp-pay-nome"></p>
        <p class="mp-pay-modal__valor">Valor: <strong id="mp-pay-valor"></strong></p>
        <p class="mp-pay-modal__saldo">Saldo na carteira: <strong id="mp-pay-saldo"></strong></p>
        <div class="mp-pay-modal__opts">
          <button class="mp-pay-opt mp-pay-opt--carteira" id="mp-pay-carteira">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1 0-4h14v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><circle cx="17" cy="16" r="1"/></svg>
            Pagar com Carteira
          </button>
          <button class="mp-pay-opt mp-pay-opt--express" id="mp-pay-express">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Pagar com Express
          </button>
        </div>
      </div>`;
    document.body.appendChild(_modalEl);

    const TAXA_INSERCAO = 500; // Kz — valor da taxa de inserção
    const payModal    = _modalEl;
    const payNome     = document.getElementById('mp-pay-nome');
    const payValor    = document.getElementById('mp-pay-valor');
    const paySaldo    = document.getElementById('mp-pay-saldo');
    const btnCarteira = document.getElementById('mp-pay-carteira');
    const notif = document.getElementById('mp-notif');
    let _pagarId = null;
    let _todosItems = [];

    // saldo mock (normalmente viria de window.dados ou API)
    const saldoCarteira = (window.dados && window.dados.saldo) ? Number(window.dados.saldo) : 1200;

    function abrirPayModal(id) {
      _pagarId = id;
      const p = _todosItems.find(x => x.id === id);
      if (!p) return;
      payNome.textContent  = '"' + p.nome + '"';
      payValor.textContent = TAXA_INSERCAO.toLocaleString('pt-AO') + ' Kz';
      paySaldo.textContent = saldoCarteira.toLocaleString('pt-AO') + ' Kz';
      btnCarteira.disabled = saldoCarteira < TAXA_INSERCAO;
      payModal.style.display = 'flex';
    }

    function fecharPayModal() { payModal.style.display = 'none'; }

    window._mpPagar = (id) => abrirPayModal(id);

    document.getElementById('mp-pay-close').addEventListener('click', fecharPayModal);
    payModal.addEventListener('click', e => { if (e.target === payModal) fecharPayModal(); });

    btnCarteira.addEventListener('click', () => {
      fecharPayModal();
      const token = localStorage.getItem('token');
      // TODO: POST para API de pagamento com carteira
      console.log('pagar carteira', { id: _pagarId, token, taxa: TAXA_INSERCAO });
      notif.sms('Pagamento efetuado com sucesso!', 0);
      // marcar como pago na lista
      _todosItems = _todosItems.map(p => p.id === _pagarId ? { ...p, pago: true } : p);
      const lista = document.getElementById('mp-lista');
      lista.innerHTML = '';
      _todosItems.forEach(p => lista.insertAdjacentHTML('beforeend', renderItem(p)));
    });

    document.getElementById('mp-pay-express').addEventListener('click', () => {
      fecharPayModal();
      const token = localStorage.getItem('token');
      // TODO: POST para API de pagamento express
      console.log('pagar express', { id: _pagarId, token, taxa: TAXA_INSERCAO });
      notif.sms('Redirecionando para Express...', 0);
    });

    window._mpSetItems = (items) => { _todosItems = items; };

    window._mpAbrirEditor = function (el) {
      try {
        const raw = el.getAttribute('data-produto');
        sessionStorage.setItem('produto_editar', raw);
      } catch (e) {
        sessionStorage.setItem('produto_editar', '{}');
      }
      window.vaiTela('#/editar-produto');
    };

    const notif2 = document.getElementById('mp-notif');
    const token = localStorage.getItem('token');

    if (!token) {
      // sem login — mostra dados de exemplo
      carregarItens(MOCK_PRODUTOS);
      return;
    }

    $.get(window._api + '/Produtos/listar.php', { token })
      .done(function (dados) {
        try {
          const obj   = typeof dados === 'string' ? JSON.parse(dados) : dados;
          const items = Array.isArray(obj) ? obj : (obj.payload || []);
          carregarItens(items);
        } catch (e) {
          carregarItens([]);
        }
      })
      .fail(function () {
        const el = document.getElementById('mp-skeleton');
        if (el) el.remove();
        const l = document.getElementById('mp-lista');
        if (l) l.insertAdjacentHTML('beforeend', '<p class="mp-vazio">Erro ao carregar. Tente novamente.</p>');
        notif2.sms('Erro ao carregar produtos.', 1);
      });
  }

  function destroy() {
    delete window._mpAbrirEditor;
    delete window._mpPagar;
    delete window._mpSetItems;
    const el = document.getElementById('mp-pay-modal');
    if (el) el.remove();
  }

  return { html: html(), init, destroy };
}
