export default function PrivacidadeTermos() {
  function html() {
    return `
<div class="principal"><br><br>
    <h3 style="text-align:center;text-transform:uppercase">Politicas de privacidade <br>e Termos de uso</h3><br><br>
    <button type="button" class="collapsible">POLÍTICA DE PRIVACIDADE</button>
    <div class="content" style="display:block;">
        <p>POLÍTICA DE PRIVACIDADE – SIM TAXI</p>
        <p>A J.J.G.M COMERCIAL SU LDA, proprietária da marca Sim Taxi, está comprometida com a privacidade e proteção dos dados pessoais dos usuários do aplicativo.</p>
        <ol>
        <li><strong>Informações Coletadas</strong></li>
        </ol>
        <ul>
        <li>Informações Pessoais: Nome, telefone, endereço de e-mail, foto de perfil e dados de pagamento.</li>
        <li>Informações de Localização: Dados de GPS para facilitar a busca e fornecimento de serviços de transporte.</li>
        <li>Dados de Dispositivo: Tipo de dispositivo, sistema operacional e identificadores únicos.</li>
        <li>Histórico de Viagens e Pagamentos.</li>
        </ul>
        <ol start="2">
        <li><strong>Uso das Informações</strong></li>
        </ol>
        <ul>
        <li>Fornecer, operar e melhorar os serviços do aplicativo Sim Taxi.</li>
        <li>Processar pagamentos e gerenciar solicitações de transporte.</li>
        <li>Garantir a segurança e proteção dos usuários e motoristas.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        <ol start="3">
        <li><strong>Responsabilidades e Penalidades em Caso de Evasão</strong></li>
        </ol>
        <ul>
        <li>Qualquer uso indevido resultará em suspensão imediata da conta.</li>
        <li>Contato: jjgmsimtaxi68@gmail.com | +244 927003395</li>
        </ul>
    </div>
    <br>
    <button type="button" class="collapsible">Termos de uso táxi normal</button>
    <div class="content">
        <p>TERMOS DE COMPROMISSO E OBRIGAÇÕES DO CLIENTE DE TÁXI DE CARRO DO SIM TAXI</p>
        <p>O cliente compromete-se a: usar cinto de segurança, tratar o motorista com respeito, pagar conforme o valor indicado no aplicativo, e cumprir todas as leis e regulamentações vigentes.</p>
    </div>
    <br>
    <button type="button" class="collapsible">Termos de uso moto-táxi</button>
    <div class="content">
        <p>TERMOS DE COMPROMISSO E OBRIGAÇÕES DO CLIENTE DE MOTO-TÁXI DO SIM TAXI</p>
        <p>O cliente compromete-se a: utilizar o capacete fornecido, tratar o motoqueiro com respeito, pagar conforme o valor indicado no aplicativo, e cumprir todas as leis e regulamentações vigentes.</p>
    </div>
    <br>
    <button type="button" class="collapsible">Termos de uso rent-a-car</button>
    <div class="content">
        <p>TERMOS DE COMPROMISSO E OBRIGAÇÕES DO CLIENTE DE RENT-A-CAR DO SIM TAXI</p>
        <p>O cliente compromete-se a: usar o veículo de forma segura, devolvê-lo em condições adequadas, pagar o valor conforme contrato, e cumprir todas as leis e regulamentações de trânsito vigentes.</p>
    </div>
    <br><br>
</div>
<style>
    .collapsible {
        background:rgba(255,255,255,0.10);
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
        border:1px solid rgba(255,255,255,0.18);border-bottom:none;
        border-radius:8px 8px 0 0;
        color:#111;cursor:pointer;padding:16px 18px;
        width:100%;text-align:left;outline:none;
        font-size:14px;margin-top:10px;text-transform:uppercase;font-weight:600;
        transition:background 0.2s;
    }
    .active, .collapsible:hover { background:rgba(255,255,255,0.18); }
    .content {
        padding:0 18px;display:none;overflow:hidden;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.15);border-top:none;
        border-radius:0 0 8px 8px;margin-bottom:4px;
    }
    .content p, .content li { color:rgba(0,0,0,0.70);font-size:13px;line-height:1.6; }
    .content strong { color:#111; }
    h3 { color:#111; }
</style>`;
  }

  function init() {
    var coll = document.querySelectorAll('.collapsible');
    coll.forEach(function (btn) {
      btn.addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content) {
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
      });
    });
  }

  function destroy() {}

  return { html: html(), init, destroy };
}
