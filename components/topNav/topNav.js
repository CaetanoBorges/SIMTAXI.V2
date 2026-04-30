/**
 * components/topNav/topNav.js
 * Barra de navegação superior reutilizável.
 *
 * Uso:
 *   import TopNav from '../../components/topNav/topNav.js';
 *   const nav = TopNav();
 *   // nav.html  — string HTML para injetar
 *   // nav.init  — chama depois de injetar no DOM
 */

const NAV_ITEMS = [
  {
    id: 'taxi',
    label: 'Taxi',
    rota: '#/taxi',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <rect x="1" y="9" width="22" height="11" rx="2"/>
             <path d="M5 9V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>
             <circle cx="7.5" cy="16.5" r="1.5"/>
             <circle cx="16.5" cy="16.5" r="1.5"/>
           </svg>`,
  },
  {
    id: 'rentacar',
    label: 'Rent a Car',
    rota: '#/rentacar',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h13l4 4v4a2 2 0 0 1-2 2h-2"/>
             <circle cx="8.5" cy="17" r="2.5"/>
             <circle cx="17.5" cy="17" r="2.5"/>
             <path d="M3 9h13"/>
           </svg>`,
  },
  {
    id: 'guincho',
    label: 'Guincho',
    rota: '#/guincho',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M4 17l4-8 4 8"/>
             <path d="M12 17l1-4 3 4"/>
             <path d="M3 21h18"/>
             <path d="M17 7l3 4H4l4-4"/>
           </svg>`,
  },
  {
    id: 'servicos',
    label: 'Serviços',
    rota: '#/mercado',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <circle cx="12" cy="12" r="3"/>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
             <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
             <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
           </svg>`,
  },
  {
    id: 'wallet',
    label: 'Wallet',
    rota: '#/wallet',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <rect x="2" y="5" width="20" height="14" rx="2"/>
             <path d="M16 12h.01"/>
             <path d="M2 10h20"/>
           </svg>`,
  },
];

export default function TopNav(activeId = '') {

  const itens = NAV_ITEMS.map(item => `
    <button
      type="button"
      class="tn-item${item.id === activeId ? ' tn-item--ativo' : ''}"
      data-id="${item.id}"
      aria-label="${item.label}"
      onclick="window.vaiTela('${item.rota}')"
    >
      <span class="tn-icon">${item.icon}</span>
      <span class="tn-label">${item.label}</span>
    </button>
  `).join('');

  const html = `
<nav class="top-nav" role="navigation" aria-label="Navegação principal">
  <div class="tn-items-wrap">
    <div class="tn-items" id="tn-items">${itens}</div>
    <div class="tn-fade-right" id="tn-fade-right"></div>
  </div>
  <button
    type="button"
    class="tn-sair"
    id="tn-sair-btn"
    aria-label="Sair"
    title="Sair"
  >
    <svg class="tn-sair__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
    <span class="tn-sair__label">Sair</span>
  </button>
</nav>

<style>
  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 68px;
    background: #c0392b;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    box-sizing: border-box;
  }

  .tn-items-wrap {
    position: relative;
    flex: 1;
    min-width: 0;
    overflow: hidden;
  }

  .tn-items {
    display: flex;
    align-items: center;
    gap: 2px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tn-items::-webkit-scrollbar { display: none; }

  /* fade gradiente à direita */
  .tn-fade-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 52px;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(150, 20, 10, 0.95));
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 6px;
    box-sizing: border-box;
    transition: opacity 0.25s;
  }
  .tn-fade-right::after {
    content: '›';
    color: #ffffff;
    font-size: 22px;
    font-weight: 700;
    line-height: 1;
    animation: tn-bounce 1s ease-in-out infinite;
  }
  @keyframes tn-bounce {
    0%, 100% { transform: translateX(0); }
    50%       { transform: translateX(4px); }
  }
  .tn-fade-right--oculto {
    opacity: 0;
  }

  .tn-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 12px;
    border: none;
    background: transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.18s, color 0.18s, transform 0.15s;
    color: rgba(255, 255, 255);
    min-width: 64px;
    flex-shrink: 0;
  }
  .tn-icon {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tn-icon svg {
    width: 26px;
    height: 26px;
    stroke-width: 2.2;
  }
  .tn-label {
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.25);
  }

  .tn-item--ativo {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.20);
  }

  @media (hover: hover) and (pointer: fine) {
    .tn-item:hover {
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
      transform: translateY(-1px);
    }
  }

  /* Botão Sair */
  .tn-sair {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 6px 10px;
    border: none;
    background: transparent;
    border-radius: 10px;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.85);
    flex-shrink: 0;
    transition: background 0.18s;
  }
  .tn-sair__icon {
    width: 26px;
    height: 26px;
    stroke-width: 2.2;
  }
  .tn-sair__label {
    font-size: 11px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1;
    letter-spacing: 0.3px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.25);
  }
  @media (hover: hover) and (pointer: fine) {
    .tn-sair:hover {
      background: rgba(255, 255, 255, 0.18);
      color: #ffffff;
      transform: translateY(-1px);
    }
  }
</style>`;

  function init() {
    const btnSair  = document.getElementById('tn-sair-btn');
    const items    = document.getElementById('tn-items');
    const fadeRight = document.getElementById('tn-fade-right');

    // oculta o fade quando chega ao fim do scroll
    if (items && fadeRight) {
      function actualizarFade() {
        const atFim = items.scrollLeft + items.clientWidth >= items.scrollWidth - 4;
        fadeRight.classList.toggle('tn-fade-right--oculto', atFim);
      }
      items.addEventListener('scroll', actualizarFade, { passive: true });
      actualizarFade();
    }
    if (btnSair) {
      btnSair.addEventListener('click', () => {
        localStorage.clear();
        location.href = '.';
      });
    }
  }

  return { html, init };
}
