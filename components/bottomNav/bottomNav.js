/**
 * components/bottomNav/bottomNav.js
 * Barra de navegação inferior reutilizável.
 *
 * Uso:
 *   import BottomNav from '../../components/bottomNav/bottomNav.js';
 *   const nav = BottomNav('inicio');
 *   // nav.html  — string HTML para injetar
 *   // nav.init  — chama depois de injetar no DOM
 */

const NAV_ITEMS = [
  {
    id: 'inicio',
    label: 'Início',
    rota: '#/home',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
             <path d="M9 21V12h6v9"/>
           </svg>`,
  },
  {
    id: 'mercado',
    label: 'Mercado',
    rota: '#/mercado',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
             <line x1="3" y1="6" x2="21" y2="6"/>
             <path d="M16 10a4 4 0 0 1-8 0"/>
           </svg>`,
  },
  {
    id: 'pedidos',
    label: 'Pedidos',
    rota: '#/pedidos',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
             <line x1="8" y1="7" x2="16" y2="7"/>
             <line x1="8" y1="11" x2="16" y2="11"/>
             <line x1="8" y1="15" x2="13" y2="15"/>
           </svg>`,
  },
  {
    id: 'mensagens',
    label: 'Mensagens',
    rota: '#/mensagens',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
           </svg>`,
  },
  {
    id: 'perfil',
    label: 'Perfil',
    rota: '#/conta',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
             <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
             <circle cx="12" cy="7" r="4"/>
           </svg>`,
  },
];

export default function BottomNav(activeId = 'inicio') {

  const itens = NAV_ITEMS.map(item => `
    <button
      type="button"
      class="bn-item${item.id === activeId ? ' bn-item--ativo' : ''}"
      data-id="${item.id}"
      aria-label="${item.label}"
      onclick="window.vaiTela('${item.rota}')"
    >
      <span class="bn-icon">${item.icon}</span>
      <span class="bn-label">${item.label}</span>
    </button>
  `).join('');

  function html() {
    return `
<nav class="bottom-nav" id="bottom-nav" role="navigation" aria-label="Navegação principal">
  ${itens}
</nav>
<style>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;
    background: #ffffff;
    border-top: 1.5px solid rgba(0, 0, 0, 0.10);
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.13);
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1000;
    padding: 0 4px;
    padding-bottom: env(safe-area-inset-bottom, 0px);
  }

  .bn-item {
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 4px;
    border-radius: 0;
    color: #6b7280;
    transition: color 0.2s, background 0.2s;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    min-width: 0;
    touch-action: manipulation;
  }

  .bn-item:active {
    background: rgba(245, 166, 35, 0.1);
  }

  .bn-item--ativo {
    color: #f5a623;
  }

  .bn-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    pointer-events: none;
  }

  .bn-icon svg {
    width: 26px;
    height: 26px;
    pointer-events: none;
  }

  .bn-label {
    pointer-events: none;
  }

  .bn-item--ativo .bn-icon svg {
    stroke-width: 2.5;
  }

  .bn-label {
    font-size: 11px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    pointer-events: none;
  }

  .bn-item--ativo .bn-label {
    font-weight: 700;
  }

  /* Indicador ativo */
  .bn-item--ativo .bn-icon::after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #f5a623;
  }
</style>`;
  }

  function init() {
    // O onclick está embutido em cada botão; nada adicional necessário.
  }

  return { html: html(), init };
}
