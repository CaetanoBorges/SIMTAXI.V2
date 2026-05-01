// VerItem — carrossel de media no topo + detalhes em texto
import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function VerItem() {
  const _nav = BottomNav('inicio');

  function html() {
    return `
<div class="vi-page">

  <header class="vi-header">
    <button class="vi-back" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <h1 class="vi-title" id="vi-titulo">Detalhes</h1>
  </header>

  <!-- Carrossel de media -->
  <div class="vi-carousel-wrap" id="vi-carousel-wrap" style="display:none;">
    <div class="vi-carousel" id="vi-carousel"></div>
    <div class="vi-dots" id="vi-dots"></div>
    <button class="vi-arrow vi-arrow--prev" id="vi-prev" aria-label="Anterior">&#8249;</button>
    <button class="vi-arrow vi-arrow--next" id="vi-next" aria-label="Seguinte">&#8250;</button>
  </div>

  <!-- Detalhes em texto -->
  <div class="vi-body" id="vi-body" style="display:none;">

    <div class="vi-card">
      <div class="vi-card__top">
        <span class="vi-tipo-badge" id="vi-tipo-badge">Produto</span>
        <div class="vi-estrelas" id="vi-estrelas"></div>
      </div>
      <h2 class="vi-nome" id="vi-nome"></h2>
      <p class="vi-preco" id="vi-preco"></p>
      <p class="vi-label">Descrição</p>
      <p class="vi-desc" id="vi-desc">—</p>
    </div>

    <div class="vi-card" id="vi-rating-card">
      <p class="vi-label">A sua classificação</p>
      <div class="vi-estrelas vi-estrelas--rate" id="vi-estrelas-rate"></div>
    </div>

  </div>

  <!-- Skeleton -->
  <div class="vi-skel" id="vi-skel">
    <div class="vi-skel__media"></div>
    <div class="vi-skel__line"></div>
    <div class="vi-skel__line vi-skel__line--short"></div>
    <div class="vi-skel__line"></div>
  </div>

  <!-- Erro -->
  <p class="vi-erro" id="vi-erro" style="display:none;">Item não encontrado.<br>Volte e tente novamente.</p>

  <!-- Lightbox -->
  <div class="vi-lightbox" id="vi-lightbox" style="display:none;">
    <button class="vi-lb-close" id="vi-lb-close">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="vi-lb-track-wrap">
      <div class="vi-lb-track" id="vi-lb-track"></div>
    </div>
    <div class="vi-lb-dots" id="vi-lb-dots"></div>
    <button class="vi-lb-arrow vi-lb-arrow--prev" id="vi-lb-prev">&#8249;</button>
    <button class="vi-lb-arrow vi-lb-arrow--next" id="vi-lb-next">&#8250;</button>
  </div>

</div>

<debliwui-notificacao id="vi-notif"></debliwui-notificacao>

${_nav.html}
<style>
  .vi-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    padding-bottom: 88px;
    box-sizing: border-box;
  }

  /* ── header ── */
  .vi-header {
    width: 100%;
    background: #fff;
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
  .vi-back {
    background: none;
    border: none;
    cursor: pointer;
    color: #111;
    padding: 0;
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .vi-title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: #111;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* ── carrossel ── */
  .vi-carousel-wrap {
    position: relative;
    width: 100%;
    background: #111;
    overflow: hidden;
    user-select: none;
  }
  .vi-carousel {
    display: flex;
    transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
    will-change: transform;
    height: 280px;
  }
  .vi-slide {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
  }
  .vi-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .vi-slide video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
    display: block;
  }
  .vi-slide--placeholder {
    background: #1a1a1a;
    cursor: default;
  }
  .vi-slide--placeholder svg { opacity: 0.3; }

  /* dots */
  .vi-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 2;
  }
  .vi-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255,255,255,0.45);
    transition: background 0.2s, transform 0.2s;
    cursor: pointer;
  }
  .vi-dot--on {
    background: #fff;
    transform: scale(1.3);
  }

  /* setas */
  .vi-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.38);
    border: none;
    color: #fff;
    font-size: 28px;
    line-height: 1;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.18s;
  }
  .vi-arrow:hover { background: rgba(0,0,0,0.6); }
  .vi-arrow--prev { left: 10px; }
  .vi-arrow--next { right: 10px; }

  /* ── detalhes ── */
  .vi-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 16px 4px;
    max-width: 520px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .vi-card {
    background: #fff;
    border-radius: 16px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.06);
  }

  .vi-card__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }

  .vi-tipo-badge {
    font-size: 11px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 20px;
    background: #fff8ee;
    color: #f5a623;
    border: 1.5px solid #f5a623;
    text-transform: capitalize;
  }

  .vi-estrelas { display: flex; gap: 3px; }
  .vi-star { font-size: 20px; color: #ddd; }
  .vi-star--on { color: #f5a623; }

  .vi-estrelas--rate {
    display: flex;
    justify-content: space-between;
  }
  .vi-estrelas--rate .vi-star {
    font-size: 40px;
    cursor: pointer;
    transition: color 0.15s, transform 0.12s;
  }
  .vi-estrelas--rate .vi-star:hover,
  .vi-estrelas--rate .vi-star--hover { color: #f5a623; transform: scale(1.2); }
  .vi-estrelas--rate .vi-star--on { color: #f5a623; }

  .vi-nome {
    margin: 0;
    font-size: 22px;
    font-weight: 800;
    color: #111;
    line-height: 1.25;
  }

  .vi-preco {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #f5a623;
  }
  .vi-preco--gratis { color: #27ae60; font-size: 18px; }

  .vi-label {
    margin: 0 0 2px;
    font-size: 12px;
    font-weight: 700;
    color: #999;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .vi-desc {
    margin: 0;
    font-size: 14px;
    color: #444;
    line-height: 1.65;
  }



  /* ── skeleton ── */
  .vi-skel {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0 0 16px;
  }
  .vi-skel__media {
    width: 100%;
    height: 280px;
    background: linear-gradient(90deg,#d8d8d8 25%,#eee 50%,#d8d8d8 75%);
    background-size: 200% 100%;
    animation: vi-shimmer 1.4s infinite;
  }
  .vi-skel__line {
    height: 16px;
    border-radius: 8px;
    margin: 0 16px;
    background: linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%);
    background-size: 200% 100%;
    animation: vi-shimmer 1.4s infinite;
  }
  .vi-skel__line--short { width: 45%; }
  @keyframes vi-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

  .vi-erro {
    padding: 60px 24px;
    text-align: center;
    color: #888;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }

  /* ── lightbox ── */
  .vi-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.95);
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: vi-fade-in 0.18s ease;
  }
  @keyframes vi-fade-in { from{opacity:0} to{opacity:1} }

  .vi-lb-close {
    position: absolute;
    top: 16px;
    right: 16px;
    background: rgba(255,255,255,0.15);
    border: none;
    color: #fff;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
  }

  .vi-lb-track-wrap {
    width: 100%;
    overflow: hidden;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .vi-lb-track {
    display: flex;
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
    will-change: transform;
    width: 100%;
  }
  .vi-lb-slide {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    box-sizing: border-box;
    max-height: calc(100vh - 120px);
  }
  .vi-lb-slide img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  .vi-lb-slide video {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    background: #000;
  }

  .vi-lb-dots {
    display: flex;
    gap: 6px;
    padding: 12px 0 20px;
    z-index: 2;
  }
  .vi-lb-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .vi-lb-dot--on { background: #fff; transform: scale(1.3); }

  .vi-lb-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.12);
    border: none;
    color: #fff;
    font-size: 32px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.18s;
  }
  .vi-lb-arrow:hover { background: rgba(255,255,255,0.25); }
  .vi-lb-arrow--prev { left: 10px; }
  .vi-lb-arrow--next { right: 10px; }
</style>`;
  }

  /* ─────────────────── helpers ─────────────────── */

  function buildSlides(mediaList) {
    const track = document.getElementById('vi-carousel');
    const dotsEl = document.getElementById('vi-dots');
    if (!track) return;

    track.innerHTML = mediaList.map((m, i) => {
      if (m.type === 'video') {
        if (!m.src) {
          // placeholder vídeo
          return `<div class="vi-slide vi-slide--placeholder" data-index="${i}">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
          </div>`;
        }
        return `<div class="vi-slide" data-index="${i}">
          <video src="${m.src}" playsinline muted loop></video>
        </div>`;
      }
      if (!m.src) {
        // placeholder imagem
        return `<div class="vi-slide vi-slide--placeholder" data-index="${i}">
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>`;
      }
      return `<div class="vi-slide" data-index="${i}">
        <img src="${m.src}" alt="media ${i + 1}" loading="lazy">
      </div>`;
    }).join('');

    // dots
    if (dotsEl) {
      dotsEl.innerHTML = mediaList.map((_, i) =>
        `<span class="vi-dot${i === 0 ? ' vi-dot--on' : ''}" data-index="${i}"></span>`
      ).join('');
    }
  }

  function makeCarousel(trackId, dotsId, prevId, nextId, mediaList, onSlide) {
    let cur = 0;
    const track = document.getElementById(trackId);
    const dotsEl = document.getElementById(dotsId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const total = mediaList.length;

    function goTo(n) {
      cur = (n + total) % total;
      if (track) track.style.transform = `translateX(-${cur * 100}%)`;
      if (dotsEl) {
        dotsEl.querySelectorAll('[data-index]').forEach(d => {
          d.classList.toggle(
            trackId === 'vi-carousel' ? 'vi-dot--on' : 'vi-lb-dot--on',
            Number(d.dataset.index) === cur
          );
        });
      }
      if (onSlide) onSlide(cur);
    }

    if (prevBtn) prevBtn.addEventListener('click', e => { e.stopPropagation(); goTo(cur - 1); });
    if (nextBtn) nextBtn.addEventListener('click', e => { e.stopPropagation(); goTo(cur + 1); });

    // dots click
    if (dotsEl) {
      dotsEl.addEventListener('click', e => {
        const d = e.target.closest('[data-index]');
        if (d) goTo(Number(d.dataset.index));
      });
    }

    // touch swipe
    let tx0 = null;
    const el = track ? track.parentElement : null;
    if (el) {
      el.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, { passive: true });
      el.addEventListener('touchend', e => {
        if (tx0 === null) return;
        const dx = e.changedTouches[0].clientX - tx0;
        tx0 = null;
        if (Math.abs(dx) > 40) goTo(dx < 0 ? cur + 1 : cur - 1);
      }, { passive: true });
    }

    return { goTo: goTo, getCur: () => cur };
  }

  /* ─────────────────── init ─────────────────── */

  function init() {
    _nav.init();

    const skelEl = document.getElementById('vi-skel');
    const erroEl = document.getElementById('vi-erro');
    const tituloEl = document.getElementById('vi-titulo');


    let item = null;
    try {
      const raw = sessionStorage.getItem('ver_item');
      if (raw) item = JSON.parse(raw);
    } catch (_) {}
    // fallback: tenta recuperar último item visto do localStorage
    if (!item) {
      try {
        const raw = localStorage.getItem('ultimo_ver_item');
        if (raw) item = JSON.parse(raw);
      } catch (_) {}
    }

    skelEl.style.display = 'none';

    if (!item) {
      erroEl.style.display = 'block';
      return;
    }
    // salva o item atual como último visto
    try { localStorage.setItem('ultimo_ver_item', JSON.stringify(item)); } catch(_) {}

    tituloEl.textContent = item.nome || 'Detalhes';

    // ── Media list: imagens + vídeo no fim ──
    const mediaList = [];
    [item.imagem || item.img, item.imagem2, item.imagem3].forEach(src => {
      if (src) mediaList.push({ type: 'img', src });
    });
    if (item.video) mediaList.push({ type: 'video', src: item.video });

    // carrossel (usa placeholder se não há media)
    const wrapEl = document.getElementById('vi-carousel-wrap');

    // Se não há media real, monta 3 placeholders de imagem + 1 placeholder de vídeo
    if (mediaList.length === 0) {
      const imgPH = { type: 'img', src: null };
      const vidPH = { type: 'video', src: null };
      mediaList.push(imgPH, imgPH, imgPH, vidPH);
    }

    if (true) {
      buildSlides(mediaList);
      const carousel = makeCarousel('vi-carousel', 'vi-dots', 'vi-prev', 'vi-next', mediaList, null);

      // click num slide → abre lightbox nesse index
      document.getElementById('vi-carousel').addEventListener('click', e => {
        const slide = e.target.closest('.vi-slide');
        if (slide && !slide.classList.contains('vi-slide--placeholder')) {
          openLightbox(mediaList, carousel.getCur());
        }
      });
    }
    wrapEl.style.display = 'block';

    // ── Detalhes em texto ──
    const bodyEl = document.getElementById('vi-body');

    // nome
    const nomeEl = document.getElementById('vi-nome');
    if (nomeEl) nomeEl.textContent = item.nome || '—';

    // tipo badge
    const tipoEl = document.getElementById('vi-tipo-badge');
    if (tipoEl) tipoEl.textContent = item.tipo === 'servico' ? 'Serviço' : 'Produto';

    // estrelas (leitura — média do item)
    const estrelasEl = document.getElementById('vi-estrelas');
    if (estrelasEl) {
      estrelasEl.innerHTML = Array.from({ length: 5 }, (_, i) =>
        `<span class="vi-star${i < (item.estrelas || 0) ? ' vi-star--on' : ''}">★</span>`
      ).join('');
    }

    // estrelas interativas — classificação do utilizador
    const rateEl = document.getElementById('vi-estrelas-rate');
    if (rateEl && item.id) {
      // Chave única por produto
      const ratingKey = 'rating_produto_' + item.id;
      let ratingFixo = Number(localStorage.getItem(ratingKey)) || 0;
      const renderRate = (highlight = 0) => {
        // Sempre lê o valor salvo ao renderizar, exceto se highlight estiver ativo
        const rating = highlight ? highlight : Number(localStorage.getItem(ratingKey)) || ratingFixo;
        rateEl.innerHTML = Array.from({ length: 5 }, (_, i) => {
          const on  = i < rating ? ' vi-star--on' : '';
          const hov = highlight && i < highlight ? ' vi-star--hover' : '';
          return `<span class=\"vi-star${on}${hov}\" data-v=\"${i + 1}\">★</span>`;
        }).join('');
      };
      renderRate();
      rateEl.addEventListener('mouseover', e => {
        const s = e.target.closest('[data-v]');
        if (s) renderRate(Number(s.dataset.v));
      });
      rateEl.addEventListener('mouseleave', () => renderRate());
      rateEl.addEventListener('click', e => {
        const s = e.target.closest('[data-v]');
        if (!s) return;
        ratingFixo = Number(s.dataset.v);
        localStorage.setItem(ratingKey, ratingFixo);
        renderRate();
        // TODO: enviar classificação para a API
        // const token = localStorage.getItem('token');
        // $.post(window._api + '/Produtos/classificar.php', { token, id: item.id, estrelas: ratingFixo });
      });
    }

    // preço
    const precoEl = document.getElementById('vi-preco');
    if (precoEl) {
      if (item.preco > 0) {
        precoEl.textContent = Number(item.preco).toLocaleString('pt-AO') + ' Kz';
        precoEl.classList.remove('vi-preco--gratis');
      } else {
        precoEl.textContent = 'Gratuito';
        precoEl.classList.add('vi-preco--gratis');
      }
    }

    // descrição
    const descEl = document.getElementById('vi-desc');
    if (descEl) descEl.textContent = item.descricao || '—';

    bodyEl.style.display = 'flex';

    // TODO: fetch real da API
    // const token = localStorage.getItem('token');
    // $.get(window._api + '/Produtos/detalhe.php', { token, id: item.id })
    //   .done(dados => { /* re-render */ });
  }

  /* ─────────────────── lightbox ─────────────────── */

  function openLightbox(mediaList, startIndex) {
    const lb = document.getElementById('vi-lightbox');
    const lbTrack = document.getElementById('vi-lb-track');
    const lbDots  = document.getElementById('vi-lb-dots');
    if (!lb || !lbTrack) return;

    // build slides do lightbox
    lbTrack.innerHTML = mediaList.map((m, i) => {
      if (m.type === 'video') {
        return `<div class="vi-lb-slide"><video src="${m.src}" controls playsinline></video></div>`;
      }
      return `<div class="vi-lb-slide"><img src="${m.src}" alt="media ${i + 1}"></div>`;
    }).join('');

    // dots
    if (lbDots) {
      lbDots.innerHTML = mediaList.map((_, i) =>
        `<span class="vi-lb-dot" data-index="${i}"></span>`
      ).join('');
    }

    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    const ctrl = makeCarousel('vi-lb-track', 'vi-lb-dots', 'vi-lb-prev', 'vi-lb-next', mediaList, null);
    ctrl.goTo(startIndex);

    document.getElementById('vi-lb-close').onclick = closeLightbox;
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); }, { once: true });
  }

  function closeLightbox() {
    const lb = document.getElementById('vi-lightbox');
    if (lb) lb.style.display = 'none';
    document.body.style.overflow = '';
    // pausar vídeos
    lb && lb.querySelectorAll('video').forEach(v => v.pause());
  }

  function destroy() {
    closeLightbox();
    // mantém o último item visto no localStorage
    sessionStorage.removeItem('ver_item');
  }

  return { html: html(), init, destroy };
}
