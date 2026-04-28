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
    .estilo {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        background: rgba(255,255,255,0.10);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.22);
        box-shadow: 0 8px 32px rgba(0,0,0,0.30);
        border-radius: 14px;
        margin: 10px 0;
        color: #111;
    }
    .estilo p { color: rgba(0,0,0,0.70); text-align: center; }
    #nome { color: #111; text-align: center; font-size: 15px; margin-top: 8px; }
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
