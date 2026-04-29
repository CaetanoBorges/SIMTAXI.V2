export default function Entrar() {
  function html() {
    return `
<div class="">
    <div class="principal-corpo">
        <img src="/inicio/logo.svg" class="entrar-logo">
        <h1 class="entrar-titulo">Faz LogIn e<br>Explore o Melhor</h1>
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
    .d2fa {
        display: none;
        width: min(88%, 420px);
        max-height: 85vh;
        background: rgba(15, 15, 35, 0.85);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
        border: 1px solid rgba(255,255,255,0.22);
        border-radius: 4px;
        box-shadow: 0 16px 48px rgba(0,0,0,0.5);
        z-index: 9999;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .dentro {
        width: 100%;
        padding: 24px;
        box-sizing: border-box;
        position: relative;
        color: #111;
    }
    .fechar {
        padding: 8px 14px;
        background: rgba(231,76,60,0.75);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(231,76,60,0.4);
        border-radius: 6px;
        position: absolute;
        top: 14px;
        right: 14px;
        cursor: pointer;
        font-size: 12px;
        color: #fff;
        font-weight: 700;
    }
    .esqueci-password {
        font-size: 12px;
        text-align: right;
        cursor: pointer;
        color: rgba(0,0,0,0.55);
        margin: 4px 0 10px;
    }
    .esqueci-password:hover { color: #e63946; }
    .btn-entrar {
        margin: 24px auto 0;
        background: linear-gradient(135deg, #e63946dd, #b71c2cdd);
        border-color: rgba(230, 57, 70, 0.50);
    }
    .entrar-logo {
        display: block;
        width: 120px;
        height: 120px;
        object-fit: contain;
        margin: 16px auto 8px;
    }
    .entrar-titulo {
        color: #111;
        font-size: clamp(20px, 5.5vw, 28px);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-align: center;
        margin: 16px 0 24px;
        line-height: 1.3;
    }
    .btn-criar-conta {
        margin: 12px auto 0;
        background: rgba(255,255,255,0.88);
        border-color: rgba(255,255,255,0.95);
        color: #111;
    }
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
