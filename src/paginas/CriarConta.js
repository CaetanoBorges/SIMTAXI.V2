export default function CriarConta() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <img src="/Map.svg" class="header-img">
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
    .tp { font-weight:bold;text-decoration:italic }
    .label-tp { color:red; }
    .btn-criar-conta { margin:30px auto 0 auto;border:1px solid #d9d9d9;background:#FFFFFF; }
    .switch { position:relative;display:inline-block;width:60px;height:34px; }
    .switch input { opacity:0;width:0;height:0; }
    .slider { position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:red;-webkit-transition:.4s;transition:.4s; }
    .slider:before { position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s; }
    input:checked + .slider { background-color:#2196F3; }
    input:focus + .slider { box-shadow:0 0 1px #2196F3; }
    input:checked + .slider:before { -webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px); }
    .slider.round { border-radius:34px; }
    .slider.round:before { border-radius:50%; }
</style>`;
  }

  function init() {
    if (window.CADASTRO && window.CADASTRO.setDados) {
      window.CADASTRO.setDados();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
