export default function Motorista() {
  function html() {
    return `
<div class="motorista">
    <div class="card">
        <div class="identificacao">
            <div id="foto"></div>
            <div id="nomegenero"></div>
        </div>
        <br>
        <div class="descricao">
            <p>CLASSIFICAÇÕES</p>
            <p style="margin-right:10px">CLASSIFICAR</p>
        </div>
        <div class="classificacao">
            <div class="reacoes">
                <div>
                    <img src="/thumbs-down-reacoes.svg" alt="">
                    <p id="reacaonegativa">0</p>
                </div>
                <div>
                    <img src="/thumbs-up-reacoes.svg" alt="">
                    <p id="reacaopositiva">0</p>
                </div>
            </div>
            <div class="reagir">
                <img src="/thumbs-down-regular.svg" alt="" class="thumbs-down">
                <img src="/thumbs-up-regular.svg" alt="" class="thumbs-up">
            </div>
        </div>
    </div>
    <div class="detalhesveiculo">
        <h3>DETALHES DO VEICULO</h3>
        <div class="detalhes">
            <div class="ficha-tecnica"></div>
            <div class="imagens"></div>
        </div>
    </div>
</div>
<style>
    .detalhesveiculo { margin-top:13vh; }
    .detalhes { width:100%;display:flex;justify-content:space-between; }
    .detalhes .ficha-tecnica p { font-size:12px;line-height:15px; }
    .detalhes .imagens { width:50%; }
    .detalhes .imagens img { width:100%; }
    .detalhesveiculo h3 { padding:1vh 0;background:rgba(217,217,217,.45);text-align:center; }
    .descricao { display:flex;justify-content:space-between;font-size:12px; }
    .classificacao { display:flex;justify-content:space-between; }
    .classificacao .reagir { display:flex;width:30%;justify-content:space-between; }
    .classificacao .reagir img { width:42px;height:42px;cursor:pointer; }
    .classificacao .reacoes { display:flex;width:32%;justify-content:space-between;font-size:12px;margin-left:0; }
    .classificacao .reacoes p { margin:0; }
    .classificacao .reacoes img { width:20px;height:20px; }
    .motorista { width:100%;height:84vh;padding:14vh 0 0 0; }
    .card { width:90%;padding:5%;background:#ffffff90;box-shadow:0px 0px 5px 2px rgba(0,0,0,.25);border-radius:10px; }
    .card .identificacao { width:100%;display:flex;flex-direction:row;align-content:center;align-items:center;justify-content:space-around; }
    .card .identificacao img { width:70px;height:70px;border-radius:50%; }
    .card .identificacao p { margin:2px 0;font-size:17px;line-height:19px; }
    .genero { font-size:12px !important; }
</style>`;
  }

  function init() {
    if (window._corrida) {
      if (window._corrida.verMotorista) window._corrida.verMotorista();
      if (window._corrida.classificarMotorista) window._corrida.classificarMotorista();
    }
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
