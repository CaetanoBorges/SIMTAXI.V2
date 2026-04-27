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
    .inputs .inputde { width:100%;height:31px;background:rgba(217,217,217,.35);border-radius:5px 5px 0 0;text-align:center;color:#d97e13;border:1px solid rgba(217,217,217,.35); }
    .inputs .inputpara { width:100%;height:31px;background:rgba(217,217,217,.35);border-radius:0 0 5px 5px;text-align:center;color:#6EC85F;border:1px solid rgba(217,217,217,.35); }
    .inputs div { position:relative;margin:5px 0; }
    .inputs .span { position:absolute;top:6px;left:6px;font-size:10px;line-height:12px;color:rgba(0,0,0,.5); }
    .switch { box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);cursor:pointer;border-radius:10px;margin-top:30px !important; }
    .basic-info { width:100%;padding:2% 0;display:flex;font-size:13px;justify-content:space-between;margin:10px 0 15px 0; }
    .status-um { display:block; }
    .selects { display:flex;width:100%;align-items:center;justify-content:space-between; }
    .selects select { width:87px;height:31px;background:#FFFFFF;border:1px solid rgba(0,0,0,.41);border-radius:5px;text-align:center; }
    .selects p { height:15px;font-size:12px;line-height:15px;color:rgba(0,0,0,.67); }
    .cupom { width:100%; }
    .cupom .titulo { font-size:12px;text-transform:uppercase;line-height:15px;color:rgba(0,0,0,.67); }
    .cupom .descricao { font-size:10px;line-height:12px;color:rgba(0,0,0,.51);margin:0 0 5px 0; }
    .cupom input { width:98%;height:31px;background:#FFFFFF;border:1px solid rgba(0,0,0,.41);border-radius:5px;padding-left:2%; }
    .concluir { width:100%; }
    .btn-taxi-concluir { width:75%;height:31px;background:#2FD913;border-radius:5px;margin:15px 0 5px 10.5%;border:1px solid #2FD913;cursor:pointer; }
    .concluir .preco { font-size:16px;line-height:19px;color:rgba(0,0,0,.53);margin-top:10px; }
    .concluir .desconto { font-size:16px;line-height:19px;color:#D97E13; }
    .concluir .total { font-size:16px;line-height:19px;color:#2FD913;margin-bottom:10px; }
    .centro { width:75%; }
    .confirmar-sms { background:rgba(217,217,217,.1);display:block;margin-top:20px !important; }
    .confirmar-sms .header { width:100%;text-align:center;padding:15px 0;background:rgba(217,217,217,.45);border-radius:5px 5px 0 0;font-size:16pt; }
    .confirmar-sms .descricao { text-align:center;padding:15px 0;font-size:12px;line-height:15px;color:#000;margin-top:15px; }
    .confirmar-sms div { width:100%;border-radius:0 0 5px 5px;padding-bottom:15px; }
    .confirmar-sms div input { display:block;margin:0 auto;width:80%;height:31px;background:#FFFFFF;border:1px solid rgba(0,0,0,.41);border-radius:5px;padding-left:10px; }
</style>`;
  }

  function init() {}
  function destroy() {}

  return { html: html(), init, destroy };
}
