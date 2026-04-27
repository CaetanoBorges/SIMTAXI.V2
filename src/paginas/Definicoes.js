export default function Definicoes() {
  function html() {
    return `
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
    </div>
</div>
<style>
    .estilo { width:80%;height:fit-content;padding:10%;background:rgba(255,255,255,.57);box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:5px;margin:2vh 0; }
</style>`;
  }

  function init() {
    if (window._definicoes && window._definicoes.set) {
      window._definicoes.set();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
