import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function Home() {
  const _nav = BottomNav('inicio');
  let _autoPlay = null;

  /* ── dados dos slides ── */
  const PRINCIPAL = [
    { bg: 'linear-gradient(135deg,#f5a623,#e05b00)', icon: '🚖', titulo: 'Taxi',       sub: 'Chame um táxi agora',           rota: '/taxi'       },
    { bg: 'linear-gradient(135deg,#4a90d9,#1a4fa0)', icon: '🚗', titulo: 'Rent a Car', sub: 'Alugue um carro',               rota: '/rentacar'   },
    { bg: 'linear-gradient(135deg,#7ed321,#3a7a00)', icon: '🏠', titulo: 'Guesthouse', sub: 'Encontre hospedagem',           rota: '/guesthouse' },
    { bg: 'linear-gradient(135deg,#9b59b6,#6c2fa0)', icon: '📋', titulo: 'Corridas',   sub: 'Histórico das suas corridas',   rota: '/corridas'   },
    { bg: 'linear-gradient(135deg,#1abc9c,#0e6655)', icon: '🗺️', titulo: 'Rotas',      sub: 'Veja as suas rotas guardadas',  rota: '/rotas'      },
  ];

  const SECUNDARIO = [
    { bg: 'linear-gradient(135deg,#f5a623,#e05b00)', icon: '🚖', label: 'Taxi',        rota: '/taxi'        },
    { bg: 'linear-gradient(135deg,#4a90d9,#1a4fa0)', icon: '🚗', label: 'Rent a Car',  rota: '/rentacar'    },
    { bg: 'linear-gradient(135deg,#7ed321,#3a7a00)', icon: '🏠', label: 'Guesthouse',  rota: '/guesthouse'  },
    { bg: 'linear-gradient(135deg,#9b59b6,#6c2fa0)', icon: '📋', label: 'Corridas',    rota: '/corridas'    },
    { bg: 'linear-gradient(135deg,#1abc9c,#0e6655)', icon: '🗺️', label: 'Rotas',       rota: '/rotas'       },
    { bg: 'linear-gradient(135deg,#e74c3c,#922b21)', icon: '👤', label: 'Minha Conta', rota: '/conta'       },
    { bg: 'linear-gradient(135deg,#7f8c8d,#2c3e50)', icon: '⚙️', label: 'Definições',  rota: '/definicoes'  },
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

  const cardsS = SECUNDARIO.map(d => `
    <div class="ss-card" data-rota="${d.rota}">
      <div class="ss-card__thumb" style="background:${d.bg};">${d.icon}</div>
      <span class="ss-card__label">${d.label}</span>
    </div>`).join('');

  function html() {
    return `
<div class="home-page">

  <!-- ── Slide principal ── -->
  <div class="sp-wrap">
    <div class="sp-viewport">
      <div class="sp-track" id="sp-track">${cardsP}</div>
    </div>
    <button class="sp-btn sp-btn--prev" id="sp-prev">&#8249;</button>
    <button class="sp-btn sp-btn--next" id="sp-next">&#8250;</button>
    <div class="sp-dots" id="sp-dots">${dotsP}</div>
  </div>

  <!-- ── Slide secundário ── -->
  <div class="ss-wrap">
    <button class="ss-btn ss-btn--prev" id="ss-prev">&#8249;</button>
    <div class="ss-viewport">
      <div class="ss-track" id="ss-track">${cardsS}</div>
    </div>
    <button class="ss-btn ss-btn--next" id="ss-next">&#8250;</button>
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
    padding: 60px 12px 88px;
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
    gap: 8px;
    transition: transform .35s ease;
    will-change: transform;
  }
  .ss-card {
    min-width: calc((100% - 32px) / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select: none;
    flex-shrink: 0;
  }
  .ss-card__thumb {
    width: 52px; height: 52px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,.18);
    margin-bottom: 5px;
  }
  .ss-card__label {
    font-size: 9px;
    font-weight: 600;
    color: rgba(0,0,0,0.65);
    text-shadow: none;
    text-align: center;
    line-height: 1.25;
    max-width: 58px;
  }

  /* setas secundário */
  .ss-btn {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.25);
    border-radius: 50%;
    width: 30px; height: 30px;
    font-size: 18px;
    cursor: pointer;
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    padding: 0;
    color: #111;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: background 0.2s;
  }
  @media (hover: hover) and (pointer: fine) {
    .ss-btn:hover { background: rgba(255,255,255,0.28); }
  }
  .ss-btn:disabled { opacity: .35; cursor: default; }
</style>`;
  }

  function init() {
    _nav.init();

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

    /* ── Slide secundário ── */
    const ssTrack    = document.getElementById('ss-track');
    const ssViewport = ssTrack ? ssTrack.parentElement : null;
    const ssPrev     = document.getElementById('ss-prev');
    const ssNext     = document.getElementById('ss-next');
    const VISIBLE    = 5;

    if (ssTrack && ssTrack.children.length) {
      const ssOrig  = Array.from(ssTrack.children);
      const ssTotal = ssOrig.length;

      for (let i = 0; i < VISIBLE; i++) {
        ssTrack.appendChild(ssOrig[i].cloneNode(true));
      }
      for (let i = VISIBLE - 1; i >= 0; i--) {
        ssTrack.insertBefore(ssOrig[ssTotal - 1 - i].cloneNode(true), ssTrack.firstChild);
      }

      let ssBusy = false;
      let ssPos  = VISIBLE;

      function ssCardWidth() {
        const allCards = Array.from(ssTrack.children);
        return allCards.length ? allCards[0].getBoundingClientRect().width + 8 : 0;
      }

      function ssBaseX() {
        return -(ssPos * ssCardWidth());
      }

      function ssMove(newPos) {
        if (ssBusy) return;
        ssBusy = true;
        const cw = ssCardWidth();
        ssTrack.style.transition = 'transform .35s ease';
        ssTrack.style.transform  = `translateX(-${newPos * cw}px)`;
        ssPos = newPos;
      }

      ssTrack.addEventListener('transitionend', () => {
        ssBusy = false;
        const cw      = ssCardWidth();
        const maxReal = ssTotal + VISIBLE - 1;
        if (ssPos < VISIBLE) {
          ssTrack.style.transition = 'none';
          ssPos = ssPos + ssTotal;
          ssTrack.style.transform  = `translateX(-${ssPos * cw}px)`;
        } else if (ssPos > maxReal) {
          ssTrack.style.transition = 'none';
          ssPos = ssPos - ssTotal;
          ssTrack.style.transform  = `translateX(-${ssPos * cw}px)`;
        }
      });

      ssTrack.style.transition = 'none';
      ssTrack.style.transform  = `translateX(-${ssPos * ssCardWidth()}px)`;

      ssPrev.disabled = false;
      ssNext.disabled = false;
      ssPrev.addEventListener('click', () => ssMove(ssPos - 1));
      ssNext.addEventListener('click', () => ssMove(ssPos + 1));
      ssTrack.addEventListener('click', e => {
        const c = e.target.closest('.ss-card');
        if (c && c.dataset.rota) window.vaiTela(c.dataset.rota);
      });

      makeDraggable(
        ssViewport, ssTrack,
        ssBaseX,
        px => { ssTrack.style.transform = `translateX(${px}px)`; },
        () => ssMove(ssPos + 1),
        () => ssMove(ssPos - 1),
        40,   // threshold menor para o slide pequeno
      );
    }
  }

  function destroy() {
    clearInterval(_autoPlay);
    _autoPlay = null;
  }

  return { html: html(), init, destroy };
}
