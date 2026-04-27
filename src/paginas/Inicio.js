export default function Inicio() {
  function html() {
    return `
<div class="principal">
    <br><br><br>
    <div class="principal-corpo" style="width:90% !important">
        <button class="btn-iniciar" onclick='vaiTela("entrar")'>INICIAR</button>
    </div>
</div>
<style>
    .btn-iniciar {
        width: 80%;
        height: 31px;
        display: block;
        margin: 100px auto 0 auto;
        border: 1px solid #d9d9d9;
        cursor: pointer;
        background: #FFFFFF;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        font-weight: bold;
        font-size: 12pt;
        line-height: 14pt;
        position: fixed;
        bottom: 10vh;
        left: 10%;
    }
</style>`;
  }
  function init() {}
  function destroy() {}
  return { html: html(), init, destroy };
}
