import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function AdicionarProduto() {
  const _nav = BottomNav('perfil');

  function html() {
    return `
<div class="ap-page">

  <header class="ap-header">
    <button class="ap-back" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <h1 class="ap-title">Adicionar Produto / Serviço</h1>
  </header>

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

    <button class="ap-submit" id="ap-submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      Guardar
    </button>

  </div>

</div>

<debliwui-notificacao id="ap-notif"></debliwui-notificacao>

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
  }

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

  .ap-preview {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-top: 8px;
  }

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

    // ── imagens (até 3) ──
    const imgFiles = [null, null, null];

    function setupImgSlot(index) {
      const input = document.getElementById('ap-img-' + index);
      const slot  = document.getElementById('ap-slot-' + index);

      input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return;
        imgFiles[index] = file;

        const reader = new FileReader();
        reader.onload = e => {
          // remove imagem anterior se existir
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

    // ── vídeo ──
    const videoInput   = document.getElementById('ap-video');
    const videoPreview = document.getElementById('ap-video-preview');
    const videoTxt     = document.getElementById('ap-video-txt');

    videoInput.addEventListener('change', () => {
      const file = videoInput.files[0];
      if (!file) return;
      videoTxt.textContent = file.name;
      const url = URL.createObjectURL(file);
      videoPreview.src = url;
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

      const imagens = imgFiles.filter(Boolean);
      const video   = videoInput.files[0] || null;

      // TODO: enviar para API
      console.log({ tipo, nome, desc, preco, imagens, video });
      notif.sms('Guardado com sucesso!', 0);
      setTimeout(() => history.back(), 1800);
    });
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
