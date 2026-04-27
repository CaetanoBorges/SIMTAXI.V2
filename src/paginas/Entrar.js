export default function Entrar() {
  function html() {
    return `
<div class="principal">
    <div class="principal-corpo">
        <img src="/Travel Distance.svg" class="header-img">
        <input type="text" class="input-telas-inicio entrar-telefone" placeholder="Telefone" id="telefone">
        <input type="password" class="input-telas-inicio entrar-password" placeholder="Palavra-passe" id="palavra-passe">
        <p class="esqueci-password" onclick='vaiTela("esqueceuapasse")'>Esqueci a palavra-passe</p>
        <button class="button-telas-inicio btn-entrar" onclick='CADASTRO.login()'>ENTRAR</button>
        <button class="button-telas-inicio btn-criar-conta" onclick='vaiTela("criarconta")'>CRIAR CONTA</button>
    </div>
</div>
<section class="d2fa">
    <div class="dentro">
        <span class="fechar">FECHAR</span>
        <br><br><br>
        <h4 style="text-align:center;opacity:.8">PARA A SUA SEGURANÇA<br>CONFIRME O CÓDIGO QUE RECEBEU POR EMAIL</h4>
        <br><br>
        <input class="input-telas-inicio" id="confirmar-codigo" placeholder="Insira o código aqui..." autocomplete="off">
        <button class="button-telas-inicio" onclick='CADASTRO.login2FA()'>CONFIRMAR CÓDIGO</button>
    </div>
</section>
<style>
    .d2fa { display:none;width:80%;height:80vh;background-color:white;z-index:999;position:fixed;left:10%;top:10vh; }
    .dentro { width:80%;height:80%;position:relative;padding:10%; }
    .fechar { padding:10px;background-color:red;position:absolute;top:10px;right:10px;cursor:pointer;font-size:13px; }
    .esqueci-password { font-size:12px;text-align:right;cursor:pointer; }
    .btn-entrar { margin:40px auto 0 auto;border:1px solid #2FD913;background:#2FD913; }
    .btn-criar-conta { margin:30px auto 0 auto;border:1px solid #d9d9d9;background:#FFFFFF; }
</style>`;
  }

  function init() {
    var fechar = document.querySelector('.fechar');
    if (fechar) {
      fechar.addEventListener('click', function () {
        var d2fa = document.querySelector('.d2fa');
        if (d2fa) d2fa.style.display = 'none';
      });
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
