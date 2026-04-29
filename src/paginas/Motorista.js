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
    .detalhes { width:100%;display:flex;justify-content:space-between;gap:12px; }
    .detalhes .ficha-tecnica p { font-size:12px;line-height:1.5;color:rgba(0,0,0,0.70); }
    .detalhes .imagens { width:50%; }
    .detalhes .imagens img { width:100%;border-radius: 4px; }
    .detalhesveiculo h3 {
        padding:12px 0;
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border-top:1px solid rgba(255,255,255,0.15);
        border-bottom:1px solid rgba(255,255,255,0.15);
        text-align:center;color:#111;letter-spacing:0.08em;font-size:13px;
    }
    .descricao { display:flex;justify-content:space-between;font-size:12px;color:rgba(0,0,0,0.65);margin:8px 0; }
    .classificacao { display:flex;justify-content:space-between;align-items:center; }
    .classificacao .reagir { display:flex;width:30%;justify-content:space-between;gap:8px; }
    .classificacao .reagir img { width:40px;height:40px;cursor:pointer;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.4)); }
    .classificacao .reacoes { display:flex;width:34%;justify-content:space-between;align-items:center;font-size:12px; }
    .classificacao .reacoes p { margin:0;color:rgba(0,0,0,0.65); }
    .classificacao .reacoes img { width:20px;height:20px; }
    .motorista { width:100%;height:84vh;padding:14vh 0 0 0; }
    .card {
        width:90%;margin:0 auto;padding:16px 20px;
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
        border:1px solid rgba(255,255,255,0.22);
        box-shadow:0 8px 32px rgba(0,0,0,0.35);
        border-radius: 4px;
    }
    .card .identificacao { width:100%;display:flex;flex-direction:row;align-content:center;align-items:center;justify-content:space-around;gap:12px; }
    .card .identificacao img { width:68px;height:68px;border-radius:50%;border:2px solid rgba(255,255,255,0.3); }
    .card .identificacao p { margin:3px 0;font-size:16px;color:#111; }
    .genero { font-size:12px !important;color:rgba(0,0,0,0.50) !important; }
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
