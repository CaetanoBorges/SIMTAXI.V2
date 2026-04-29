export default function CriarConta() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <h1 class="criar-conta-titulo">Criar Conta</h1>
        <input type="text" class="input-telas-inicio" placeholder="Nome" id="nome" autocomplete="off">
        <input type="number" class="input-telas-inicio" placeholder="Telefone" id="telefone">
        <input type="email" class="input-telas-inicio" placeholder="Email" id="email" autocomplete="off">
        <select class="input-telas-inicio" id="genero">
            <option value="0">Gênero</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
        </select>
        <select class="input-telas-inicio" id="provincia">
            <option value="0">Província</option>
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
        <select class="input-telas-inicio" disabled id="municipio">
            <option value="0">Município</option>
        </select>
        <p class="label-tp">LI E ACEITO OS <span onclick='vaiTela("/privacidadetermos")' class="tp">TERMOS DE USO</span> E AS <span onclick='vaiTela("/privacidadetermos")' class="tp">POLÍTICAS DE PRIVACIDADE</span></p>
        <label class="switch">
          <input type="checkbox" name="aceito-tp" id="aceito-tp">
          <span class="slider round"></span>
        </label>
        <button class="button-telas-inicio btn-criar-conta" onclick='CADASTRO.continuarCadastro()' disabled id="btn-seguinte">SEGUINTE</button>
        <br><br><br>
    </div>
</div>
<style>
    .tp { font-weight: 700; color: #7ec8ff; }
    .criar-conta-titulo {
        color: #111;
        font-size: clamp(22px, 6vw, 30px);
        font-weight: 700;
        letter-spacing: 0.06em;
        text-align: center;
        margin: 16px 0 24px;
    }
    .label-tp { color: rgba(255,100,100,0.9); font-size: 12px; margin: 10px 0 6px; }
    .btn-criar-conta {
        margin: 20px auto 0;
        background: linear-gradient(135deg, #4a90d9cc, #1a4fa0cc);
        border-color: rgba(74,144,217,0.5);
    }
    .switch { position: relative; display: inline-block; width: 56px; height: 30px; }
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider {
        position: absolute; cursor: pointer;
        inset: 0;
        background: rgba(231,76,60,0.7);
        border: 1px solid rgba(255,255,255,0.2);
        transition: .4s;
    }
    .slider:before {
        position: absolute; content: "";
        height: 22px; width: 22px;
        left: 3px; bottom: 3px;
        background: white;
        transition: .4s;
    }
    input:checked + .slider { background: rgba(33,150,243,0.8); border-color: rgba(33,150,243,0.5); }
    input:focus  + .slider { box-shadow: 0 0 0 3px rgba(33,150,243,0.3); }
    input:checked + .slider:before { transform: translateX(26px); }
    .slider.round { border-radius: 30px; }
    .slider.round:before { border-radius: 50%; }
</style>`;
  }

  let _ts = [];

  function init() {
    if (window.CADASTRO && window.CADASTRO.setDados) {
      window.CADASTRO.setDados();
    }
    if (window.TomSelect) {
      const tsGen  = new TomSelect('#genero',   { create: false, dropdownParent: 'body' });
      const tsProv = new TomSelect('#provincia', { create: false, dropdownParent: 'body' });
      const tsMun  = new TomSelect('#municipio', { create: false, dropdownParent: 'body' });
      _ts = [tsGen, tsProv, tsMun];

      // After Cadastro.setDados() listener updates #municipio innerHTML on province change, sync TomSelect
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
