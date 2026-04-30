/**
 * components/searchBar/searchBar.js
 * Barra de pesquisa com filtros reutilizável.
 *
 * Uso:
 *   import SearchBar from '../../components/searchBar/searchBar.js';
 *   const search = SearchBar();
 *   // search.html  — string HTML para injetar
 *   // search.init  — chama depois de injetar no DOM
 */

export default function SearchBar(onSearch) {

  const filtrosSegs = '';

  const html = `
<div class="sb-wrap">
  <div class="sb-input-row">
    <svg class="sb-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
    <input
      id="sb-input"
      class="sb-input"
      type="search"
      placeholder="O que você procura?"
      autocomplete="off"
      maxlength="80"
    />
    <button type="button" class="sb-clear" id="sb-clear" aria-label="Limpar" hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  </div>
</div>

<style>
  .sb-wrap {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 5px;
  }

  /* ── Input row ── */
  .sb-input-row {
    display: flex;
    align-items: center;
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.10);
    padding: 0 14px;
    gap: 10px;
    height: 50px;
    transition: box-shadow 0.2s;
  }
  .sb-input-row:focus-within {
    box-shadow: 0 4px 20px rgba(192, 57, 43, 0.22);
    outline: 2px solid rgba(192, 57, 43, 0.35);
  }

  .sb-input-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: #c0392b;
  }

  .sb-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 15px;
    font-weight: 500;
    color: #222;
    min-width: 0;
  }
  .sb-input::placeholder {
    color: #aaa;
    font-weight: 400;
  }
  /* Remove o ícone nativo de "x" do input[type=search] */
  .sb-input::-webkit-search-cancel-button,
  .sb-input::-webkit-search-decoration { display: none; }

  .sb-clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    background: #eee;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0;
    transition: background 0.15s;
  }
  .sb-clear svg { width: 14px; height: 14px; color: #666; }
  .sb-clear:hover { background: #ddd; }

  /* ── legado ── */
  .sb-filters, .sb-select-wrap, .sb-segmented { display: none; }
</style>`;

  function init() {
    const input = document.getElementById('sb-input');
    const clear = document.getElementById('sb-clear');

    let termo = '';

    function emitir() {
      if (typeof onSearch === 'function') {
        onSearch({ termo: termo.trim() });
      }
    }

    input.addEventListener('input', () => {
      termo = input.value;
      clear.hidden = termo.length === 0;
      emitir();
    });

    clear.addEventListener('click', () => {
      input.value = '';
      termo = '';
      clear.hidden = true;
      input.focus();
      emitir();
    });
  }

  return { html, init };
}
