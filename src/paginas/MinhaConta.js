export default function MinhaConta() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
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
        <button id="openDeleteAccount">Eliminar a minha conta</button>
        <delete-account-modal></delete-account-modal>
        <br><br>
    </div>
</div>
<style>
    #openDeleteAccount { padding:12px 24px;background-color:#ff0000;color:white;border:none;border-radius:4px;font-weight:600;cursor:pointer;margin:20px; }
</style>`;
  }

  function init() {
    if (window._conta && window._conta.set) {
      window._conta.set();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
