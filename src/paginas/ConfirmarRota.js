export default function ConfirmarRota() {
  function html() {
    return `
<div class="principal">
    <div>
        <div class="inputs">
            <img src="/start-finish.png" style="margin-right:1%;">
            <section class="centro">
                <div><span class="span">De</span><input type="text" class="inputde btn-select"></div>
                <div><span class="span">para</span><input type="text" class="inputpara btn-select"></div>
                <section class="basic-info">
                    <p class="basic-distancia-preco"> KM: <span>0 km</span> </p>
                    <p class="basic-tempo"> Tempo <br><span>--</span></p>
                </section>
                <div class="status-um">
                    <section class="selects">
                        <div>
                            <p>Carro ou moto?</p>
                            <select class="btn-select" id="carromoto">
                                <option>Carro</option>
                                <option>Moto</option>
                            </select>
                        </div>
                        <div>
                            <p>Nº de pessoas</p>
                            <select class="btn-select" id="npessoas">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                    </section>
                    <section class="selects">
                        <div>
                            <p>Categoria</p>
                            <select class="btn-select" id="categoria">
                                <option>Normal</option>
                                <option>VIP</option>
                                <option>Executivo</option>
                            </select>
                        </div>
                        <div>
                            <p>Ida e volta?</p>
                            <select class="btn-select" id="idavolta">
                                <option>Não</option>
                                <option>Sim</option>
                            </select>
                        </div>
                    </section>
                </div>
                <div class="cupom status-um">
                    <p class="titulo">TEM CUPOM</p>
                    <p class="descricao">Insira o código do cupom para obter desconto.</p>
                    <input type="text" id="cupom-input">
                </div>
                <div class="concluir status-um">
                    <p class="preco">Preço: 0 kz</p>
                    <p class="desconto">Desconto: 0 kz</p>
                    <p class="total">Total: 0 kz</p>
                </div>
                <div class="confirmar-sms status-um">
                    <div class="header">CONFIRMAR POR SMS</div>
                    <p class="descricao">Insira o código de confirmação que recebeu por SMS</p>
                    <div>
                        <input type="text" placeholder="Código SMS">
                    </div>
                </div>
            </section>
            <img src="/switch.png" class="switch">
        </div>
        <button class="btn-taxi-concluir status-um">CONCLUIR</button>
    </div>
</div>
<style>
    .inputs { width:100%;display:flex;align-items:flex-start;justify-content:space-around;margin-top:8vh; }
    .inputs .inputde {
        width:100%;height:44px;
        background:rgba(217,100,19,0.18);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border-radius: 4px 4px 0 0;text-align:center;
        color:#f5a623;border:1px solid rgba(245,166,35,0.4);
        font-size:14px;
    }
    .inputs .inputpara {
        width:100%;height:44px;
        background:rgba(47,217,19,0.12);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border-radius: 0 0 4px 4px;text-align:center;
        color:#6EC85F;border:1px solid rgba(110,200,95,0.4);
        font-size:14px;
    }
    .inputs .inputde::placeholder,.inputs .inputpara::placeholder { color:rgba(0,0,0,0.40); }
    .inputs div { position:relative;margin:5px 0; }
    .inputs .span { position:absolute;top:8px;left:8px;font-size:10px;color:rgba(0,0,0,0.50); }
    .switch { box-shadow:0 4px 16px rgba(0,0,0,.3);cursor:pointer;border-radius: 6px;margin-top:30px !important;opacity:.9; }
    .basic-info { width:100%;padding:2% 0;display:flex;font-size:13px;justify-content:space-between;margin:10px 0 15px 0;color:rgba(0,0,0,0.65); }
    .status-um { display:block; }
    .selects { display:flex;width:100%;align-items:center;justify-content:space-between;gap:8px; }
    .selects select {
        flex:1;height:42px;
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.22);
        border-radius: 4px;text-align:center;color:#111;font-size:13px;
    }
    .selects select option { background:#1a1a2e;color:#fff; }
    .selects p { font-size:12px;color:rgba(0,0,0,0.60);margin:0 0 4px; }
    .cupom { width:100%; }
    .cupom .titulo { font-size:12px;text-transform:uppercase;color:rgba(0,0,0,0.60);margin:0 0 4px; }
    .cupom .descricao { font-size:11px;color:rgba(0,0,0,0.45);margin:0 0 6px; }
    .cupom input {
        width:100%;height:42px;
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.22);
        border-radius: 4px;padding-left:14px;
        color:#111;font-size:14px;box-sizing:border-box;
    }
    .cupom input::placeholder { color:rgba(0,0,0,0.35); }
    .concluir { width:100%;margin-top:8px; }
    .btn-taxi-concluir {
        width:90%;height:46px;margin:14px auto 8px;display:block;
        background:linear-gradient(135deg,#e63946dd,#b71c2cdd);
        border:1px solid rgba(230,57,70,0.5);
        border-radius: 4px;cursor:pointer;
        color:#fff;font-weight:700;font-size:14px;letter-spacing:0.06em;
        box-shadow:0 4px 16px rgba(230,57,70,0.25);
        transition:transform 0.18s ease;
    }
    .btn-taxi-concluir:active { transform:scale(0.97); }
    .concluir .preco   { font-size:15px;color:rgba(0,0,0,0.55);margin:4px 0; }
    .concluir .desconto{ font-size:15px;color:#f5a623;margin:4px 0; }
    .concluir .total   { font-size:16px;color:#2FD913;font-weight:700;margin:4px 0 10px; }
    .centro { width:75%; }
    .confirmar-sms {
        background:rgba(255,255,255,0.06);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.15);
        border-radius: 6px;
        display:block;margin-top:20px !important;overflow:hidden;
    }
    .confirmar-sms .header {
        width:100%;text-align:center;padding:14px 0;
        background:rgba(255,255,255,0.12);
        font-size:15px;font-weight:600;color:#111;letter-spacing:0.06em;
    }
    .confirmar-sms .descricao { text-align:center;padding:12px 16px;font-size:12px;color:rgba(0,0,0,0.60); }
    .confirmar-sms div { width:100%;padding-bottom:16px; }
    .confirmar-sms div input {
        display:block;margin:0 auto;width:80%;height:42px;
        background:rgba(255,255,255,0.10);
        border:1px solid rgba(255,255,255,0.22);
        border-radius: 4px;padding-left:14px;
        color:#111;font-size:14px;box-sizing:border-box;
    }
    .confirmar-sms div input::placeholder { color:rgba(0,0,0,0.35); }
    @media (max-width:480px) {
        .inputs img:not(.switch) { width:18px; }
        .centro { width:80%; }
        .selects select { width:100%; }
    }
</style>`;
  }

  let _ts = [];

  function init() {
    if (window.TomSelect) {
      _ts = [
        new TomSelect('#carromoto',  { create: false, dropdownParent: 'body' }),
        new TomSelect('#npessoas',   { create: false, dropdownParent: 'body' }),
        new TomSelect('#categoria',  { create: false, dropdownParent: 'body' }),
        new TomSelect('#idavolta',   { create: false, dropdownParent: 'body' }),
      ];
    }
  }

  function destroy() {
    _ts.forEach(t => t.destroy());
    _ts = [];
  }

  return { html: html(), init, destroy };
}
