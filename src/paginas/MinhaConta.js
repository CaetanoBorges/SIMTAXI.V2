import BottomNav from '../../components/bottomNav/bottomNav.js';

export default function MinhaConta() {
  const _nav = BottomNav('perfil');

  function html() {
    return `
<div class="mc-page">

  <header class="nf-header">
    <h1 class="nf-title">Perfil</h1>
  </header>

<div class="principal">
    <div class="principal-corpo" style="margin-top:20px;">
        <button id="btn-produtos" onclick="window.vaiTela('#/meus-produtos')">Meus Produtos e Serviços</button>
        <button id="btn-definicoes" onclick="window.vaiTela('#/definicoes')">Definições</button>
        <br><br>
        <div class="div-user-image">
            <label for="imagem">
                <img src="/pen-solid.svg">
            </label>
            <img src="" id="foto-perfil" style="width:150px;height:150px;border-radius:75px;">
        </div>
        <input id="imagem" type="file" accept="image/*" style="visibility:hidden;">
        <input type="text" class="input-telas-inicio" placeholder="Nome" id="nome">
        <input type="number" class="input-telas-inicio" placeholder="Telefone" id="telefone">
        <input type="email" class="input-telas-inicio" placeholder="Email" id="email">
        <select class="input-telas-inicio" id="genero">
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
        </select>
        <select class="input-telas-inicio" id="provincia">
            <option value="Bengo">Bengo</option>
            <option value="Benguela">Benguela</option>
            <option value="Bie">Bié</option>
            <option value="Cabinda">Cabinda</option>
            <option value="Cuando_Cubango">Cuando_Cubango</option>
            <option value="Cuanza_Norte">Cuanza_Norte</option>
            <option value="Cuanza_Sul">Cuanza_Sul</option>
            <option value="Cunene">Cunene</option>
            <option value="Huambo">Huambo</option>
            <option value="Huila">Huíla</option>
            <option value="Luanda">Luanda</option>
            <option value="Lunda_Norte">Lunda_Norte</option>
            <option value="Lunda_Sul">Lunda_Sul</option>
            <option value="Malanje">Malanje</option>
            <option value="Moxico">Moxico</option>
            <option value="Namibe">Namibe</option>
            <option value="Uige">Uíge</option>
            <option value="Zaire">Zaire</option>
        </select>
        <select class="input-telas-inicio" id="municipio"></select>
        <debliwui-btnatualizardados></debliwui-btnatualizardados>
        <br><br>
    </div>
</div>
</div>

${_nav.html}
<style>
  .mc-page {
    width: 100%;
    min-height: 100vh;
    background: #f0f0f0;
    display: flex;
    flex-direction: column;
    padding-bottom: 88px;
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
    justify-content: space-between;
  }

  .nf-title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: #111;
  }

    #btn-definicoes, #btn-produtos {
        display: block;
        width: 100%;
        padding: 14px;
        background: rgba(255,255,255,0.70);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255,255,255,0.95);
        border-radius: 6px;
        color: #333;
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.04em;
        cursor: pointer;
        margin-top: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.95);
        transition: transform 0.18s ease;
        text-align: left;
    }
    #btn-definicoes::after, #btn-produtos::after { content: ' ›'; float: right; font-size: 18px; line-height: 1; }
    #btn-definicoes:hover, #btn-produtos:hover { transform: translateY(-1px); }
</style>`;
  }

  let _ts = [];

  function init() {
    _nav.init();
    if (window._conta && window._conta.set) {
      window._conta.set();
    }
    if (window.TomSelect) {
      const tsGen  = new TomSelect('#genero',   { create: false, dropdownParent: 'body' });
      const tsProv = new TomSelect('#provincia', { create: false, dropdownParent: 'body' });
      const tsMun  = new TomSelect('#municipio', { create: false, dropdownParent: 'body' });
      _ts = [tsGen, tsProv, tsMun];

      // After Conta.set() listener updates #municipio innerHTML on province change, sync TomSelect
      document.getElementById('provincia').addEventListener('change', function () {
        tsMun.clearOptions();
        tsMun.sync();
        document.getElementById('municipio').disabled ? tsMun.disable() : tsMun.enable();
      });
    }
  }

  function destroy() {
    _ts.forEach(t => t.destroy());
    _ts = [];
  }

  return { html: html(), init, destroy };
}
