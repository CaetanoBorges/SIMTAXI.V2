export default function Inicio() {
  function html() {
    return `
<div class="inicio-page">
    <br>
    <div class="inicio-slide-wrap">
        <div class="inicio-slide-viewport">
            <div class="inicio-slide-track" id="inicioSlideTrack">
                <div class="inicio-slide-item">
                    <img src="https://placehold.co/600x280/e63946/ffffff?text=SIM+TAXI" alt="Slide 1">
                </div>
                <div class="inicio-slide-item">
                    <img src="https://placehold.co/600x280/b71c2c/ffffff?text=Mobilidade" alt="Slide 2">
                </div>
                <div class="inicio-slide-item">
                    <img src="https://placehold.co/600x280/111111/ffffff?text=Explore" alt="Slide 3">
                </div>
            </div>
        </div>
        <div class="inicio-slide-dots" id="inicioSlideDots">
            <span class="i-dot i-dot--ativo" data-idx="0"></span>
            <span class="i-dot" data-idx="1"></span>
            <span class="i-dot" data-idx="2"></span>
        </div>
    </div>
    <h1 class="inicio-titulo">SIM TAXI</h1>
    <p class="inicio-sub">O seu parceiro de mobilidade</p>
    <button class="button-telas-inicio btn-iniciar" onclick='vaiTela("entrar")'>INICIAR</button>
</div>
<style>
    .inicio-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 0 48px;
        box-sizing: border-box;
        gap: 14px;
    }
    .inicio-slide-wrap {
        width: 90%;
        position: relative;
        flex-shrink: 0;
    }
    .inicio-slide-viewport {
        overflow: hidden;
        box-shadow: 0 6px 24px rgba(0,0,0,0.15);
    }
    .inicio-slide-track {
        display: flex;
        transition: transform 0.4s ease;
        will-change: transform;
    }
    .inicio-slide-item {
        flex-shrink: 0;
    }
    .inicio-slide-item img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        display: block;
    }
    .inicio-slide-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        padding: 10px 0 4px;
    }
    .i-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(0,0,0,0.20);
        cursor: pointer;
        transition: background 0.2s, transform 0.2s;
    }
    .i-dot--ativo { background: #e63946; transform: scale(1.35); }
    .inicio-titulo {
        color: #111;
        font-size: clamp(28px, 8vw, 48px);
        font-weight: 800;
        letter-spacing: 0.12em;
        margin: 0;
    }
    .inicio-sub {
        color: rgba(0,0,0,0.55);
        font-size: clamp(13px, 3vw, 16px);
        margin: 0;
    }
    .btn-iniciar {
        margin-top: 24px;
        width: clamp(220px, 60%, 320px);
        background: linear-gradient(135deg, #e63946dd, #b71c2cdd);
        border-color: rgba(230, 57, 70, 0.50);
        font-size: 15px;
        height: 50px;
    }
</style>`;
  }
  function init() {
    const track    = document.getElementById('inicioSlideTrack');
    const viewport = track ? track.parentElement : null;
    const dots     = Array.from(document.querySelectorAll('#inicioSlideDots .i-dot'));
    if (!track || !track.children.length) return;

    const orig  = Array.from(track.children);
    const total = orig.length;

    // clones para loop infinito
    track.appendChild(orig[0].cloneNode(true));
    track.insertBefore(orig[total - 1].cloneNode(true), orig[0]);

    // definir largura fixa em pixels para evitar distorção
    const W = viewport.offsetWidth;
    Array.from(track.children).forEach(item => {
      item.style.width = W + 'px';
    });

    let pos  = 1;
    let cur  = 0;
    let busy = false;

    function updateDots(idx) {
      dots.forEach((d, i) => d.classList.toggle('i-dot--ativo', i === idx));
    }

    function move(newPos) {
      if (busy) return;
      busy = true;
      track.style.transition = 'transform .4s ease';
      track.style.transform  = `translateX(-${newPos * viewport.offsetWidth}px)`;
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
        track.style.transform  = `translateX(-${total * viewport.offsetWidth}px)`;
        pos = total;
      } else if (pos === total + 1) {
        track.style.transition = 'none';
        track.style.transform  = 'translateX(-' + viewport.offsetWidth + 'px)';
        pos = 1;
      }
    });

    // posição inicial (sem animação)
    track.style.transition = 'none';
    track.style.transform  = `translateX(-${viewport.offsetWidth}px)`;

    dots.forEach(d => d.addEventListener('click', () => {
      move(+d.dataset.idx + 1);
      clearInterval(window._inicioSlideTimer);
      window._inicioSlideTimer = setInterval(() => move(pos + 1), 3500);
    }));

    clearInterval(window._inicioSlideTimer);
    window._inicioSlideTimer = setInterval(() => move(pos + 1), 3500);
  }
  function destroy() {
    clearInterval(window._inicioSlideTimer);
    window._inicioSlideTimer = null;
  }
  return { html: html(), init, destroy };
}
