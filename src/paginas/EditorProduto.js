import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function EditorProduto() {
  const _nav = BottomNav('perfil');

  function html() {
    return `
<div class="ap-page">

  <header class="ap-header">
    <button class="ap-back" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <h1 class="ap-title">Editar Produto / Serviço</h1>
  </header>
 <div class="ep-actions">
      <button class="ep-edit-btn" id="ep-edit">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        Editar
      </button>
      <button class="ep-delete-btn" id="ep-delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
        Apagar
      </button>
    </div>
  <div class="ap-form">

    <!-- Tipo -->
    <div class="ap-group">
      <label class="ap-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
        Tipo
      </label>
      <div class="ap-radio-row">
        <label class="ap-radio" for="ap-tipo-produto">
          <input type="radio" name="ap-tipo" id="ap-tipo-produto" value="produto" checked>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          Produto
        </label>
        <label class="ap-radio" for="ap-tipo-servico">
          <input type="radio" name="ap-tipo" id="ap-tipo-servico" value="servico">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
          Serviço
        </label>
      </div>
    </div>

    <!-- Nome -->
    <div class="ap-group">
      <label class="ap-label" for="ap-nome">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>
        Nome
      </label>
      <input class="ap-input" type="text" id="ap-nome" placeholder="Nome do produto ou serviço">
    </div>

    <!-- Descrição -->
    <div class="ap-group">
      <label class="ap-label" for="ap-desc">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Descrição
      </label>
      <textarea class="ap-input ap-textarea" id="ap-desc" rows="3" placeholder="Descreva o produto ou serviço"></textarea>
    </div>

    <!-- Preço -->
    <div class="ap-group">
      <label class="ap-label" for="ap-preco">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Preço (Kz)
      </label>
      <input class="ap-input" type="number" id="ap-preco" placeholder="0" min="0">
    </div>

    <!-- Imagens (até 3) -->
    <div class="ap-group">
      <label class="ap-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        Imagens <span class="ap-hint">(máx. 3)</span>
      </label>
      <div class="ap-img-grid" id="ap-img-grid">
        <label class="ap-img-slot" id="ap-slot-0" for="ap-img-0">
          <span class="ap-slot__icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>
          <span class="ap-slot__txt">Adicionar</span>
          <input type="file" id="ap-img-0" accept="image/*" data-slot="0" style="display:none;">
        </label>
        <label class="ap-img-slot" id="ap-slot-1" for="ap-img-1">
          <span class="ap-slot__icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>
          <span class="ap-slot__txt">Adicionar</span>
          <input type="file" id="ap-img-1" accept="image/*" data-slot="1" style="display:none;">
        </label>
        <label class="ap-img-slot" id="ap-slot-2" for="ap-img-2">
          <span class="ap-slot__icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>
          <span class="ap-slot__txt">Adicionar</span>
          <input type="file" id="ap-img-2" accept="image/*" data-slot="2" style="display:none;">
        </label>
      </div>
    </div>

    <!-- Vídeo -->
    <div class="ap-group">
      <label class="ap-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
        Vídeo <span class="ap-hint">(opcional)</span>
      </label>
      <label class="ap-upload" for="ap-video">
        <span class="ap-upload__icon"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#bbb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></span>
        <span class="ap-upload__txt" id="ap-video-txt">Toque para selecionar vídeo</span>
        <input type="file" id="ap-video" accept="video/*" style="display:none;">
      </label>
      <video id="ap-video-preview" class="ap-video-preview" style="display:none;" controls playsinline></video>
    </div>

    <button class="ap-submit" id="ap-submit" style="display:none;">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      Guardar Alterações
    </button>

   

  </div>

</div>

<debliwui-notificacao id="ap-notif"></debliwui-notificacao>

<!-- Modal confirmar apagar -->
<div class="ep-modal-overlay" id="ep-modal" style="display:none;">
  <div class="ep-modal">
    <div class="ep-modal__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e03d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
    </div>
    <h2 class="ep-modal__title">Apagar produto?</h2>
    <p class="ep-modal__desc">Esta acção não pode ser desfeita. O produto será removido permanentemente.</p>
    <div class="ep-modal__btns">
      <button class="ep-modal__cancel" id="ep-modal-cancel">Cancelar</button>
      <button class="ep-modal__confirm" id="ep-modal-confirm">Apagar</button>
    </div>
  </div>
</div>

${_nav.html}
<style>
  .ap-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    padding-bottom: 88px;
    box-sizing: border-box;
  }

  .ap-header {
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

  .ap-back {
    background: none;
    border: none;
    line-height: 1;
    cursor: pointer;
    color: #111;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .ap-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
    flex: 1;
  }

  .ep-actions {
    display: flex;
    gap: 10px;
    margin-top: 4px;
    padding:10px;
  }

  .ep-edit-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 13px;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #555;
    cursor: pointer;
    transition: border-color 0.18s, color 0.18s, background 0.18s;
  }
  .ep-edit-btn.active {
    border-color: #f5a623;
    color: #f5a623;
    background: #fff8ee;
  }
  .ep-edit-btn.active svg { stroke: #f5a623; }

  .ep-delete-btn {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 13px;
    background: #fff5f5;
    border: 2px solid #f5c6c6;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #e03d3d;
    cursor: pointer;
    transition: background 0.18s;
  }
  .ep-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    box-sizing: border-box;
    animation: ep-fade-in 0.18s ease;
  }
  @keyframes ep-fade-in { from { opacity:0 } to { opacity:1 } }

  .ep-modal {
    background: #fff;
    border-radius: 18px;
    padding: 28px 24px 20px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    animation: ep-slide-up 0.2s ease;
  }
  @keyframes ep-slide-up { from { transform: translateY(24px); opacity:0 } to { transform: translateY(0); opacity:1 } }

  .ep-modal__icon { margin-bottom: 4px; }

  .ep-modal__title {
    margin: 0;
    font-size: 18px;
    font-weight: 800;
    color: #111;
    text-align: center;
  }

  .ep-modal__desc {
    margin: 0;
    font-size: 13px;
    color: #777;
    text-align: center;
    line-height: 1.5;
  }

  .ep-modal__btns {
    display: flex;
    gap: 10px;
    width: 100%;
    margin-top: 8px;
  }

  .ep-modal__cancel {
    flex: 1;
    padding: 13px;
    border: 2px solid #ddd;
    border-radius: 10px;
    background: #fff;
    font-size: 14px;
    font-weight: 700;
    color: #555;
    cursor: pointer;
  }

  .ep-modal__confirm {
    flex: 1;
    padding: 13px;
    border: none;
    border-radius: 10px;
    background: #e03d3d;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: background 0.18s;
  }
  .ep-modal__confirm:hover { background: #c0392b; }

  .ap-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 16px;
    box-sizing: border-box;
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
  }

  .ap-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .ap-label {
    font-size: 13px;
    font-weight: 700;
    color: #444;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .ap-input {
    width: 100%;
    padding: 12px 14px;
    border: 1.5px solid #ddd;
    border-radius: 10px;
    font-size: 14px;
    background: #fff;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.18s;
  }
  .ap-input:focus { border-color: #f5a623; }

  .ap-textarea { resize: vertical; min-height: 80px; }

  .ap-radio-row {
    display: flex;
    gap: 10px;
  }

  .ap-radio {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #888;
    background: #fff;
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 12px 10px;
    transition: color 0.18s, border-color 0.18s, background 0.18s, box-shadow 0.18s;
    user-select: none;
  }
  .ap-radio input[type="radio"] { display: none; }
  .ap-radio:has(input:checked) {
    color: #f5a623;
    border-color: #f5a623;
    background: #fff8ee;
    box-shadow: 0 2px 10px rgba(245,166,35,0.18);
  }
  .ap-radio:has(input:checked) svg { stroke: #f5a623; }

  .ap-hint {
    font-weight: 400;
    color: #999;
    font-size: 11px;
  }

  .ap-img-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .ap-img-slot {
    aspect-ratio: 1;
    border: 2px dashed #ddd;
    border-radius: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    overflow: hidden;
    transition: border-color 0.18s;
    position: relative;
  }
  .ap-img-slot:hover { border-color: #f5a623; }
  .ap-img-slot.ap-slot--filled { border-style: solid; border-color: #f5a623; }
  .ap-img-slot.ap-slot--filled .ap-slot__icon,
  .ap-img-slot.ap-slot--filled .ap-slot__txt { display: none; }

  .ap-slot__icon { font-size: 26px; }
  .ap-slot__txt  { font-size: 11px; color: #aaa; }

  .ap-img-slot.ap-slot--placeholder {
    background: #f7f7f7;
    border-style: dashed;
    border-color: #ddd;
  }
  .ap-slot__ph {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .ap-slot__img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .ap-slot__remove {
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(0,0,0,0.55);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    font-size: 13px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .ap-video-preview {
    width: 100%;
    border-radius: 10px;
    margin-top: 8px;
    max-height: 220px;
    background: #000;
  }

  .ap-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px dashed #ddd;
    border-radius: 12px;
    padding: 24px 16px;
    cursor: pointer;
    background: #fff;
    transition: border-color 0.18s;
  }
  .ap-upload:hover { border-color: #f5a623; }

  .ap-upload__icon { font-size: 32px; }
  .ap-upload__txt  { font-size: 13px; color: #888; text-align: center; }

  .ap-submit {
    width: 100%;
    padding: 15px;
    background: #f5a623;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.18s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .ap-submit:hover { background: #e05b00; }
</style>`;
  }

  function init() {
    _nav.init();

    // ── Modo leitura / edição ──
    const EDITAVEIS = ['ap-nome', 'ap-desc', 'ap-preco'];
    const submitBtn = document.getElementById('ap-submit');
    const editBtn   = document.getElementById('ep-edit');
    let modoEdicao  = false;

    function setModoEdicao(ativo) {
      modoEdicao = ativo;
      EDITAVEIS.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.disabled = !ativo;
      });
      // radio buttons
      document.querySelectorAll('input[name="ap-tipo"]').forEach(r => r.disabled = !ativo);
      // slots de imagem e vídeo
      document.querySelectorAll('.ap-img-slot input[type="file"]').forEach(i => i.disabled = !ativo);
      document.getElementById('ap-video').disabled = !ativo;
      submitBtn.style.display = ativo ? 'flex' : 'none';
      editBtn.classList.toggle('active', ativo);
      editBtn.title = ativo ? 'Cancelar edição' : 'Ativar edição';
    }

    // começa em modo leitura
    setModoEdicao(false);

    editBtn.addEventListener('click', () => setModoEdicao(!modoEdicao));

    // ── Carregar dados guardados ──
    let produto = {};
    try {
      produto = JSON.parse(sessionStorage.getItem('produto_editar') || '{}');
    } catch (e) { produto = {}; }

    // Preencher campos
    if (produto.tipo === 'servico') {
      document.getElementById('ap-tipo-servico').checked = true;
    } else {
      document.getElementById('ap-tipo-produto').checked = true;
    }
    if (produto.nome)     document.getElementById('ap-nome').value  = produto.nome;
    if (produto.descricao) document.getElementById('ap-desc').value = produto.descricao;
    if (produto.preco)    document.getElementById('ap-preco').value = produto.preco;

    // Preencher imagens existentes (suporta imagem, imagem2, imagem3)
    const imgFiles = [null, null, null];
    const imgUrls  = [produto.imagem || '', produto.imagem2 || '', produto.imagem3 || ''];

    const PLACEHOLDER_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;

    function preencherSlot(index, src) {
      const slot = document.getElementById('ap-slot-' + index);
      if (!slot) return;

      if (src) {
        // imagem real
        const img = document.createElement('img');
        img.className = 'ap-slot__img';
        img.src = src;
        img.alt = 'imagem ' + (index + 1);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'ap-slot__remove';
        removeBtn.textContent = '✕';
        removeBtn.addEventListener('click', ev => {
          ev.preventDefault();
          ev.stopPropagation();
          img.remove();
          removeBtn.remove();
          slot.classList.remove('ap-slot--filled');
          slot.classList.add('ap-slot--placeholder');
          slot.insertAdjacentHTML('afterbegin', `<span class="ap-slot__ph">${PLACEHOLDER_SVG}</span>`);
        });

        slot.appendChild(img);
        slot.appendChild(removeBtn);
        slot.classList.add('ap-slot--filled');
      } else {
        // placeholder vazio
        slot.classList.add('ap-slot--placeholder');
        slot.insertAdjacentHTML('afterbegin', `<span class="ap-slot__ph">${PLACEHOLDER_SVG}</span>`);
      }
    }

    imgUrls.forEach((src, i) => preencherSlot(i, src));

    // Preencher vídeo existente
    const videoInput   = document.getElementById('ap-video');
    const videoPreview = document.getElementById('ap-video-preview');
    const videoTxt     = document.getElementById('ap-video-txt');

    if (produto.video) {
      videoPreview.src = produto.video;
      videoPreview.style.display = 'block';
      videoTxt.textContent = 'Vídeo actual';
    }

    // ── imagens (até 3) ──
    function setupImgSlot(index) {
      const input = document.getElementById('ap-img-' + index);
      const slot  = document.getElementById('ap-slot-' + index);

      input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return;
        imgFiles[index] = file;

        const reader = new FileReader();
        reader.onload = e => {
          const old = slot.querySelector('.ap-slot__img');
          if (old) old.remove();
          const oldBtn = slot.querySelector('.ap-slot__remove');
          if (oldBtn) oldBtn.remove();

          const img = document.createElement('img');
          img.className = 'ap-slot__img';
          img.src = e.target.result;
          img.alt = 'imagem ' + (index + 1);

          const removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.className = 'ap-slot__remove';
          removeBtn.textContent = '✕';
          removeBtn.addEventListener('click', ev => {
            ev.preventDefault();
            ev.stopPropagation();
            img.remove();
            removeBtn.remove();
            imgFiles[index] = null;
            input.value = '';
            slot.classList.remove('ap-slot--filled');
          });

          slot.appendChild(img);
          slot.appendChild(removeBtn);
          slot.classList.add('ap-slot--filled');
        };
        reader.readAsDataURL(file);
      });
    }

    [0, 1, 2].forEach(setupImgSlot);

    // ── vídeo: novo ficheiro ──
    videoInput.addEventListener('change', () => {
      const file = videoInput.files[0];
      if (!file) return;
      videoTxt.textContent = file.name;
      videoPreview.src = URL.createObjectURL(file);
      videoPreview.style.display = 'block';
    });

    // ── guardar ──
    const notif = document.getElementById('ap-notif');

    document.getElementById('ap-submit').addEventListener('click', () => {
      const tipo  = document.querySelector('input[name="ap-tipo"]:checked').value;
      const nome  = document.getElementById('ap-nome').value.trim();
      const desc  = document.getElementById('ap-desc').value.trim();
      const preco = document.getElementById('ap-preco').value;

      if (!nome) {
        notif.sms('Por favor insira o nome do ' + (tipo === 'produto' ? 'produto' : 'serviço') + '.', 1);
        return;
      }

      const token   = localStorage.getItem('token');
      const imagens = imgFiles.filter(Boolean);
      const video   = videoInput.files[0] || null;

      // TODO: enviar para API (PUT/update)
      console.log({ id: produto.id, token, tipo, nome, desc, preco, imagens, video });
      notif.sms('Alterações guardadas!', 0);
      setTimeout(() => history.back(), 1800);
    });

    // ── apagar (com modal de confirmação) ──
    const modal = document.getElementById('ep-modal');

    document.getElementById('ep-delete').addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    document.getElementById('ep-modal-cancel').addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) modal.style.display = 'none';
    });

    document.getElementById('ep-modal-confirm').addEventListener('click', () => {
      modal.style.display = 'none';
      const token = localStorage.getItem('token');
      if (!produto.id) {
        notif.sms('Não foi possível identificar o produto.', 1);
        return;
      }
      // TODO: enviar DELETE para API
      console.log('apagar', { id: produto.id, token });
      notif.sms('Produto removido.', 0);
      setTimeout(() => history.back(), 1800);
    });
  }

  function destroy() {
    sessionStorage.removeItem('produto_editar');
  }

  return { html: html(), init, destroy };
}
