/**
 * src/dados/index.js — Camada centralizada de serviços (VamosLa)
 *
 * Expõe window.dados com todas as instâncias de serviço.
 * Mantém aliases retrocompatíveis (window._corrida, window._conta…).
 *
 * Deve ser carregado APÓS:
 *   - _requests/*.js (define as classes)
 *   - O bloco que cria loader, notificacao e window._api
 *
 * Uso:
 *   window.dados = criarDados(api, loader, notificacao);
 */
function criarDados(apiUrl, loader, notificacao) {
    var d = {
        corrida:    new Corrida($, apiUrl, loader, notificacao),
        conta:      new Conta($, apiUrl, loader, notificacao),
        rentacar:   new Rentacar($, apiUrl, loader, notificacao),
        guesthouse: new Guesthouse($, apiUrl, loader, notificacao),
        cadastro:   new Cadastro($, apiUrl, loader, notificacao),
        definicoes: new Definicoes($, apiUrl, loader, notificacao),
        geral:      new Dados($, apiUrl, loader, notificacao),
    };

    // Aliases retrocompatíveis — código existente continua funcionando
    window._corrida    = d.corrida;
    window._conta      = d.conta;
    window._rentacar   = d.rentacar;
    window._guesthouse = d.guesthouse;
    window._definicoes = d.definicoes;
    window.CADASTRO    = d.cadastro;
    window._DADOS      = d.geral;

    return d;
}

window.criarDados = criarDados;
