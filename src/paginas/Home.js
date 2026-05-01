import BottomNav from '../../components/bottomNav/bottomNav.js';
import TopNav from '../../components/topNav/topNav.js';
import SearchBar from '../../components/searchBar/searchBar.js';

export default function Home() {
  const _nav = BottomNav('inicio');
  const _topNav = TopNav();
  const _search = SearchBar();
  let _autoPlay    = null;
  let _autoPlaySec = null;
  let _autoPlayTer = null;
  let _autoPlayQua = null;

  /* ── dados dos slides ── */
  const PRINCIPAL = [
    { bg: 'linear-gradient(135deg,#f5a623,#e05b00)', icon: '🚖', titulo: 'Taxi',       sub: 'Chame um táxi agora',           rota: '/taxi'       },
    { bg: 'linear-gradient(135deg,#4a90d9,#1a4fa0)', icon: '🚗', titulo: 'Rent a Car', sub: 'Alugue um carro',               rota: '/rentacar'   },
    { bg: 'linear-gradient(135deg,#7ed321,#3a7a00)', icon: '🏠', titulo: 'Guesthouse', sub: 'Encontre hospedagem',           rota: '/guesthouse' },
    { bg: 'linear-gradient(135deg,#9b59b6,#6c2fa0)', icon: '📋', titulo: 'Corridas',   sub: 'Histórico das suas corridas',   rota: '/corridas'   },
    { bg: 'linear-gradient(135deg,#1abc9c,#0e6655)', icon: '🗺️', titulo: 'Rotas',      sub: 'Veja as suas rotas guardadas',  rota: '/rotas'      },
  ];

  const SECUNDARIO = [
    { id: 101, img: 'https://placehold.co/80x60/f5a623/fff?text=Taxi',       nome: 'Taxi Executivo',    estrelas: 5, preco: 3500,  novo: true,  rota: '/taxi'       },
    { id: 102, img: 'https://placehold.co/80x60/4a90d9/fff?text=Rent',       nome: 'Rent a Car',        estrelas: 4, preco: 15000, novo: true,  rota: '/rentacar'   },
    { id: 103, img: 'https://placehold.co/80x60/7ed321/fff?text=Guest',      nome: 'Guesthouse Plus',   estrelas: 4, preco: 8000,  novo: false, rota: '/guesthouse' },
    { id: 104, img: 'https://placehold.co/80x60/9b59b6/fff?text=Corrida',    nome: 'Corrida Rápida',    estrelas: 3, preco: 2500,  novo: false, rota: '/corridas'   },
    { id: 105, img: 'https://placehold.co/80x60/1abc9c/fff?text=Rota',       nome: 'Rota Personalizada',estrelas: 5, preco: 1000,  novo: true,  rota: '/rotas'      },
    { id: 106, img: 'https://placehold.co/80x60/e74c3c/fff?text=Conta',      nome: 'Minha Conta',       estrelas: 4, preco: 0,     novo: false, rota: '/conta'      },
    { id: 107, img: 'https://placehold.co/80x60/2c3e50/fff?text=Config',     nome: 'Definições',        estrelas: 3, preco: 0,     novo: false, rota: '/definicoes' },
  ];

  const TERCEIRO = [
    { id: 201, img: 'https://placehold.co/80x60/e67e22/fff?text=Promo',      nome: 'Promo Taxi 20%',    estrelas: 5, preco: 2800,  novo: true,  rota: '/taxi'       },
    { id: 202, img: 'https://placehold.co/80x60/2980b9/fff?text=Oferta',     nome: 'Oferta Rent',       estrelas: 4, preco: 12000, novo: true,  rota: '/rentacar'   },
    { id: 203, img: 'https://placehold.co/80x60/27ae60/fff?text=Guest',      nome: 'Guest Económico',   estrelas: 3, preco: 5000,  novo: false, rota: '/guesthouse' },
    { id: 204, img: 'https://placehold.co/80x60/8e44ad/fff?text=Frete',      nome: 'Frete Expresso',    estrelas: 4, preco: 1800,  novo: true,  rota: '/corridas'   },
    { id: 205, img: 'https://placehold.co/80x60/16a085/fff?text=Pack',       nome: 'Pacote Família',    estrelas: 5, preco: 20000, novo: false, rota: '/rentacar'   },
    { id: 206, img: 'https://placehold.co/80x60/c0392b/fff?text=VIP',        nome: 'Serviço VIP',       estrelas: 5, preco: 8500,  novo: true,  rota: '/taxi'       },
    { id: 207, img: 'https://placehold.co/80x60/34495e/fff?text=Mensal',     nome: 'Plano Mensal',      estrelas: 4, preco: 30000, novo: false, rota: '/rentacar'   },
  ];

  const QUARTO = [
    { id: 301, img: 'https://placehold.co/80x60/d35400/fff?text=Rec',         nome: 'Último Taxi',       estrelas: 4, preco: 3200,  novo: false, rota: '/corridas'   },
    { id: 302, img: 'https://placehold.co/80x60/1f618d/fff?text=Rec',         nome: 'Último Rent',       estrelas: 3, preco: 14000, novo: false, rota: '/corridas'   },
    { id: 303, img: 'https://placehold.co/80x60/1e8449/fff?text=Rec',         nome: 'Última Guest',      estrelas: 5, preco: 7500,  novo: false, rota: '/corridas'   },
    { id: 304, img: 'https://placehold.co/80x60/6c3483/fff?text=Rec',         nome: 'Corrida Recente',   estrelas: 4, preco: 2100,  novo: false, rota: '/corridas'   },
    { id: 305, img: 'https://placehold.co/80x60/117a65/fff?text=Rec',         nome: 'Rota Recente',      estrelas: 3, preco: 900,   novo: false, rota: '/rotas'      },
    { id: 306, img: 'https://placehold.co/80x60/922b21/fff?text=Rec',         nome: 'Vista Conta',       estrelas: 4, preco: 0,     novo: false, rota: '/conta'      },
    { id: 307, img: 'https://placehold.co/80x60/1a252f/fff?text=Rec',         nome: 'Config Recente',    estrelas: 3, preco: 0,     novo: false, rota: '/definicoes' },
  ];

  /* ── HTML dos slides ── */
  const cardsP = PRINCIPAL.map((d, i) => `
    <div class="sp-slide" data-rota="${d.rota}" style="background:${d.bg};">
      <span class="sp-slide__icon">${d.icon}</span>
      <span class="sp-slide__titulo">${d.titulo}</span>
      <span class="sp-slide__sub">${d.sub}</span>
    </div>`).join('');

  const dotsP = PRINCIPAL.map((_, i) =>
    `<span class="sp-dot${i === 0 ? ' sp-dot--ativo' : ''}" data-idx="${i}"></span>`
  ).join('');

  function estrelas(n) {
    return Array.from({ length: 5 }, (_, i) =>
      `<span class="ss-star${i < n ? ' ss-star--on' : ''}">★</span>`
    ).join('');
  }

  function buildCards(list) {
    return list.map(d => `
    <div class="ss-card" data-id="${d.id}" data-item='${JSON.stringify(d).replace(/'/g, '&#39;')}'>
      ${d.novo ? '<span class="ss-card__badge">Novo</span>' : ''}
      <img class="ss-card__img" src="${d.img}" alt="${d.nome}" loading="lazy">
      <span class="ss-card__nome">${d.nome}</span>
      <span class="ss-card__estrelas">${estrelas(d.estrelas)}</span>
      <span class="ss-card__preco">${d.preco > 0 ? d.preco.toLocaleString('pt-AO') + ' Kz' : '—'}</span>
    </div>`).join('');
  }

  const cardsS = buildCards(SECUNDARIO);
  const cardsT = buildCards(TERCEIRO);
  const cardsQ = buildCards(QUARTO);

  function html() {
    return `
${_topNav.html}
<div class="home-page">

  <!-- ── Barra de pesquisa ── -->
  ${_search.html}

  <!-- ── Slide principal ── -->
  <div class="sp-wrap">
    <div class="sp-viewport">
      <div class="sp-track" id="sp-track">${cardsP}</div>
    </div>
    <button class="sp-btn sp-btn--prev" id="sp-prev">&#8249;</button>
    <button class="sp-btn sp-btn--next" id="sp-next">&#8250;</button>
    <div class="sp-dots" id="sp-dots">${dotsP}</div>
  </div>

  <!-- ── Slide secundário 1 ── -->
  <div class="ss-wrap">
    <div class="ss-viewport">
      <div class="ss-track" id="ss-track">${cardsS}</div>
    </div>
  </div>

  <!-- ── Slide secundário 2 ── -->
  <div class="ss-wrap">
    <div class="ss-viewport">
      <div class="ss-track" id="ss-track2">${cardsT}</div>
    </div>
  </div>

  <!-- ── Slide secundário 3 ── -->
  <div class="ss-wrap">
    <div class="ss-viewport">
      <div class="ss-track" id="ss-track3">${cardsQ}</div>
    </div>
  </div>

</div>

${_nav.html}
<style>
  .home-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 76px 12px 88px;
    box-sizing: border-box;
    gap: 18px;
  }

  /* ──── Slide principal ──── */
  .sp-wrap {
    position: relative;
    width: 100%;
    max-width: 520px;
  }
  .sp-viewport {
    overflow: hidden;
    border-radius: 4px;
    box-shadow: 0 6px 24px rgba(0,0,0,.20);
  }
  .sp-track {
    display: flex;
    transition: transform .4s ease;
    will-change: transform;
  }
  .sp-slide {
    min-width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #111;
    gap: 6px;
    user-select: none;
  }
  .sp-slide__icon   { font-size: 56px; line-height: 1; }
  .sp-slide__titulo { font-size: 22px; font-weight: 700; text-shadow: 0 1px 4px rgba(0,0,0,.3); }
  .sp-slide__sub    { font-size: 13px; opacity: .9; }

  /* setas principais */
  .sp-btn {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% - 14px));
    background: rgba(255,255,255,0.18);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.30);
    border-radius: 50%;
    width: 36px; height: 36px;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    z-index: 2;
    display: flex; align-items: center; justify-content: center;
    padding: 0;
    color: #111;
    transition: background 0.2s;
  }
  .sp-btn--prev { left:  6px; }
  .sp-btn--next { right: 6px; }
  @media (hover: hover) and (pointer: fine) {
    .sp-btn:hover { background: rgba(255,255,255,0.32); }
  }

  /* dots */
  .sp-dots {
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 10px;
  }
  .sp-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
    border: 1px solid rgba(255,255,255,0.5);
    cursor: pointer;
    transition: background .25s, transform .25s;
  }
  .sp-dot--ativo { background: #f5a623; border-color: #f5a623; transform: scale(1.35); }

  /* ──── Slide secundário ──── */
  .ss-wrap {
    width: 100%;
    max-width: 520px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ss-viewport {
    flex: 1;
    overflow: hidden;
  }
  .ss-track {
    display: flex;
    gap: 10px;
    transition: transform .35s ease;
    will-change: transform;
  }
  .ss-card {
    min-width: 120px;
    max-width: 120px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 3px 12px rgba(0,0,0,.12);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
    position: relative;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  @media (hover: hover) and (pointer: fine) {
    .ss-card:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.18); }
  }
  .ss-card__badge {
    position: absolute;
    top: 6px;
    left: 6px;
    background: #c0392b;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 20px;
    letter-spacing: 0.3px;
    z-index: 1;
  }
  .ss-card__img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
    flex-shrink: 0;
  }
  .ss-card__nome {
    font-size: 11px;
    font-weight: 700;
    color: #222;
    padding: 6px 8px 2px;
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ss-card__estrelas {
    padding: 0 8px 2px;
    display: flex;
    gap: 1px;
  }
  .ss-star {
    font-size: 11px;
    color: #ddd;
    line-height: 1;
  }
  .ss-star--on { color: #f5a623; }
  .ss-card__preco {
    font-size: 11px;
    font-weight: 700;
    color: #c0392b;
    padding: 2px 8px 8px;
  }

  /* setas secundário removidas */
</style>`;
  }

  function init() {
    _nav.init();
    _topNav.init();
    _search.init();

    /*
     * ── Helper: adiciona suporte a arrastar (mouse + touch) num track.
     *    getBase()   → posição base actual em px
     *    setBase(px) → aplica sem transição
     *    onLeft()    → callback quando arrasta para a esquerda (avança)
     *    onRight()   → callback quando arrasta para a direita (recua)
     *    threshold   → pixels mínimos para considerar swipe (default 50)
     */
    function makeDraggable(viewport, track, getBase, setBase, onLeft, onRight, threshold = 50) {
      let startX   = 0;
      let dragging = false;
      let dragged  = false;   // flag para cancelar click depois de arrastar

      function clientX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

      function onStart(e) {
        startX   = clientX(e);
        dragging = true;
        dragged  = false;
        track.style.transition = 'none';
      }

      function onMove(e) {
        if (!dragging) return;
        const delta = clientX(e) - startX;
        if (Math.abs(delta) > 5) {
          dragged = true;
          e.preventDefault();   // evita scroll vertical enquanto arrasta
        }
        track.style.transform = `translateX(${getBase() + delta}px)`;
      }

      function onEnd(e) {
        if (!dragging) return;
        dragging = false;
        const delta = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - startX;
        if (Math.abs(delta) >= threshold) {
          delta < 0 ? onLeft() : onRight();
        } else {
          // snap de volta
          track.style.transition = 'transform .3s ease';
          track.style.transform  = `translateX(${getBase()}px)`;
        }
      }

      // touch
      viewport.addEventListener('touchstart',  onStart, { passive: true });
      viewport.addEventListener('touchmove',   onMove,  { passive: false });
      viewport.addEventListener('touchend',    onEnd);

      // mouse
      viewport.addEventListener('mousedown',   onStart);
      window.addEventListener('mousemove',     onMove);
      window.addEventListener('mouseup',       onEnd);

      // cancela click se houve drag (evita navegar acidentalmente)
      viewport.addEventListener('click', e => { if (dragged) { e.stopPropagation(); dragged = false; } }, true);
    }

    /* ── Slide principal ── */
    const track    = document.getElementById('sp-track');
    const viewport = track ? track.parentElement : null;
    const dots     = Array.from(document.querySelectorAll('.sp-dot'));

    if (track && track.children.length) {
      const orig  = Array.from(track.children);
      const total = orig.length;

      track.appendChild(orig[0].cloneNode(true));
      track.insertBefore(orig[total - 1].cloneNode(true), orig[0]);

      let pos  = 1;
      let cur  = 0;
      let busy = false;

      function updateDots(idx) {
        dots.forEach((d, i) => d.classList.toggle('sp-dot--ativo', i === idx));
      }

      function spBaseX() {
        return -(pos * viewport.offsetWidth);
      }

      function move(newPos) {
        if (busy) return;
        busy = true;
        track.style.transition = 'transform .4s ease';
        track.style.transform  = `translateX(-${newPos * 100}%)`;
        pos = newPos;
        cur = newPos === 0         ? total - 1
            : newPos === total + 1 ? 0
            : newPos - 1;
        updateDots(cur);
      }

      track.addEventListener('transitionend', () => {
        busy = false;
        if (pos === 0) {
          track.style.transition = 'none';
          track.style.transform  = `translateX(-${total * 100}%)`;
          pos = total;
        } else if (pos === total + 1) {
          track.style.transition = 'none';
          track.style.transform  = 'translateX(-100%)';
          pos = 1;
        }
      });

      track.style.transition = 'none';
      track.style.transform  = 'translateX(-100%)';

      document.getElementById('sp-prev').addEventListener('click', () => move(pos - 1));
      document.getElementById('sp-next').addEventListener('click', () => move(pos + 1));
      dots.forEach(d => d.addEventListener('click', () => move(+d.dataset.idx + 1)));
      track.addEventListener('click', e => {
        const s = e.target.closest('.sp-slide');
        if (s && s.dataset.rota) window.vaiTela(s.dataset.rota);
      });

      makeDraggable(
        viewport, track,
        spBaseX,
        px => { track.style.transform = `translateX(${px}px)`; },
        () => move(pos + 1),
        () => move(pos - 1),
      );

      _autoPlay = setInterval(() => move(pos + 1), 3500);
    }

    /* ── Helper: inicializa slide secundário ── */
    function initSmallSlide(trackId, intervalMs) {
      const t  = document.getElementById(trackId);
      const vp = t ? t.parentElement : null;
      if (!t || !t.children.length) return null;
      const VIS   = 3;
      const orig  = Array.from(t.children);
      const total = orig.length;

      for (let i = 0; i < VIS; i++) t.appendChild(orig[i].cloneNode(true));
      for (let i = VIS - 1; i >= 0; i--) t.insertBefore(orig[total - 1 - i].cloneNode(true), t.firstChild);

      let busy = false;
      let pos  = VIS;

      function cw() {
        return t.children[0] ? t.children[0].getBoundingClientRect().width + 8 : 0;
      }
      function baseX() { return -(pos * cw()); }
      function go(newPos) {
        if (busy) return;
        busy = true;
        const w = cw();
        t.style.transition = 'transform .35s ease';
        t.style.transform  = `translateX(-${newPos * w}px)`;
        pos = newPos;
      }

      t.addEventListener('transitionend', () => {
        busy = false;
        const w = cw(); const maxReal = total + VIS - 1;
        if (pos < VIS) {
          t.style.transition = 'none'; pos += total;
          t.style.transform  = `translateX(-${pos * w}px)`;
        } else if (pos > maxReal) {
          t.style.transition = 'none'; pos -= total;
          t.style.transform  = `translateX(-${pos * w}px)`;
        }
      });

      t.style.transition = 'none';
      t.style.transform  = `translateX(-${pos * cw()}px)`;

      t.addEventListener('click', e => {
        const c = e.target.closest('.ss-card');
        if (c && c.dataset.id) {
          try { sessionStorage.setItem('ver_item', c.dataset.item); } catch (_) {}
          window.vaiTela('#/ver-item?id=' + c.dataset.id);
        }
      });

      makeDraggable(vp, t, baseX,
        px => { t.style.transform = `translateX(${px}px)`; },
        () => go(pos + 1), () => go(pos - 1), 40);

      return setInterval(() => go(pos + 1), intervalMs);
    }

    _autoPlaySec = initSmallSlide('ss-track',  2800);
    _autoPlayTer = initSmallSlide('ss-track2', 3100);
    _autoPlayQua = initSmallSlide('ss-track3', 3400);
  }

  function destroy() {
    clearInterval(_autoPlay);    _autoPlay    = null;
    clearInterval(_autoPlaySec); _autoPlaySec = null;
    clearInterval(_autoPlayTer); _autoPlayTer = null;
    clearInterval(_autoPlayQua); _autoPlayQua = null;
  }

  return { html: html(), init, destroy };
}
