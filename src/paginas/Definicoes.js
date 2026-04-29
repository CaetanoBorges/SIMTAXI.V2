export default function Definicoes() {
  function html() {
    return `
<div class="def-page">
  <header class="nf-header">
    <button class="nf-back" onclick="history.back()">&#8249;</button>
    <h1 class="nf-title">Definições</h1>
  </header>
<div class="principal">
    <div class="principal-corpo">
        <div class="info-perfil estilo">
            <div class="div-user-image">
                <img src="" id="foto-perfil" style="width:150px;height:150px;border-radius:75px;">
                <p id="nome" style="text-align:center;"></p>
            </div>
        </div>
        <div class="linguagem estilo">
            <p style="text-align:center;">Mudar Idioma</p>
            <select class="input-telas-inicio" id="lingua" style="text-align:center;">
                <option value="pt">Portugues</option>
                <option value="fr">French</option>
            </select>
        </div>
        <div class="mudar-passe estilo">
            <debliwui-btnatualizarpasse></debliwui-btnatualizarpasse>
        </div>
        <div class="eliminar-conta estilo">
            <button id="openDeleteAccount">Eliminar a minha conta</button>
            <delete-account-modal></delete-account-modal>
        </div>
    </div>
</div>
</div>
<style>
    .def-page {
        width: 100%;
        min-height: 100vh;
        background: #f0f0f0;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }
    .nf-header {
        width: 100%;
        background: #ffffff;
        padding: 20px 20px 16px;
        box-sizing: border-box;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .nf-back {
        background: none;
        border: none;
        font-size: 28px;
        line-height: 1;
        cursor: pointer;
        color: #111;
        padding: 0 4px;
        font-weight: 300;
    }
    .nf-title {
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        color: #111;
    }
    .estilo {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        background: rgba(255,255,255,0.75);
        border: 1px solid rgba(255,255,255,0.90);
        box-shadow: 0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.90);
        border-radius: 4px;
        margin: 10px 0;
        color: #111;
    }
    .estilo p { color: rgba(0,0,0,0.70); text-align: center; }
    #nome { color: #111; text-align: center; font-size: 15px; margin-top: 8px; }
    #openDeleteAccount {
        display: block;
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, rgba(230,57,70,0.88), rgba(183,28,44,0.88));
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(230,57,70,0.50);
        border-radius: 6px;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.04em;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(230,57,70,0.30);
        transition: transform 0.18s ease;
    }
    #openDeleteAccount:hover { transform: translateY(-1px); }
</style>`;
  }

  let _ts = [];

  function init() {
    if (window._definicoes && window._definicoes.set) {
      window._definicoes.set();
    }

    const btn = document.getElementById('openDeleteAccount');
    const modal = document.querySelector('delete-account-modal');
    if (btn && modal) {
      btn.addEventListener('click', () => modal.open());
    }

    if (window.TomSelect) {
      _ts.push(new TomSelect('#lingua', { create: false, dropdownParent: 'body' }));
    }
  }

  function destroy() {
    _ts.forEach(t => t.destroy());
    _ts = [];
  }

  return { html: html(), init, destroy };
}
