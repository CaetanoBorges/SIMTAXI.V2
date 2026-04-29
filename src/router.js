/**
 * src/router.js — SPA com hash routing (VamosLa)
 *
 * Rotas usam formato "#/pagina" (ex: #/home, #/entrar).
 * Sub-estados da home (ex: #chamarotaxi) têm hash sem barra
 * e são tratados sem recarregar a página.
 *
 * Lifecycle:
 *   init()    → chamado após HTML da página ser injetado
 *   destroy() → chamado antes de sair da página atual
 */

// ---- Registro de páginas com lifecycle ----
window.Paginas = {};

// ---- Navegação ----
const vaiTela = (rota) => {
    if (rota === '.' || rota === '/') {
        rota = '#/';
    } else if (rota.startsWith('#/') || (rota.startsWith('#') && !rota.startsWith('#/'))) {
        // já formatado: "#/home" ou sub-estado "#chamarotaxi"
    } else {
        // "/home" → "#/home"  |  "corrida" → "#/corrida"
        const clean = rota.startsWith('/') ? rota : '/' + rota;
        rota = '#' + clean;
    }

    if (window.location.hash === rota) {
        // Hash já é o destino — hashchange não dispara, forçamos manualmente
        handleLocation();
    } else {
        window.location.hash = rota;
    }
};

// ---- Cache de módulos já importados ----
const _moduleCache = new Map();

const routes = {
    404:                          () => import('./paginas/NotFound.js'),
    "#/":                         () => import('./paginas/Inicio.js'),
    "#/entrar":                   () => import('./paginas/Entrar.js'),
    "#/esqueceuapasse":           () => import('./paginas/EsqueceuApasse.js'),
    "#/confirmaresqueceuapasse":  () => import('./paginas/ConfirmarRecuperacao.js'),
    "#/novapalavrapasse":         () => import('./paginas/NovaPalavraPasse.js'),
    "#/criarconta":               () => import('./paginas/CriarConta.js'),
    "#/verificarcadastro":        () => import('./paginas/VerificarCadastro.js'),
    "#/concluircadastro":         () => import('./paginas/ConcluirCadastro.js'),

    "#/home":                     () => import('./paginas/Home.js'),
    "#/mercado":                  () => import('./paginas/Mercado.js'),
    "#/pedidos":                  () => import('./paginas/Pedidos.js'),
    "#/mensagens":                () => import('./paginas/Mensagens.js'),
    "#/taxi":                     () => import('./paginas/Taxi.js'),
    "#/corridas":                 () => import('./paginas/Corridas.js'),
    "#/rotas":                    () => import('./paginas/Rotas.js'),
    "#/conta":                    () => import('./paginas/MinhaConta.js'),
    "#/termosdeuso":              () => import('./paginas/TermosDeUso.js'),
    "#/privacidade":              () => import('./paginas/PoliticasPrivacidade.js'),
    "#/privacidadetermos":        () => import('./paginas/PrivacidadeTermos.js'),
    "#/taxiacaminho":             () => import('./paginas/TaxiAcaminho.js'),
    "#/corrida":                  () => import('./paginas/Corrida.js'),
    "#/rota":                     () => import('./paginas/Rota.js'),
    "#/motorista":                () => import('./paginas/Motorista.js'),
    "#/confirmarrota":            () => import('./paginas/ConfirmarRota.js'),

    "#/rentacar":                 () => import('./paginas/RentACar.js'),
    "#/car":                      () => import('./paginas/Carro.js'),
    "#/rent":                     () => import('./paginas/Rent.js'),
    "#/confirmarrent":            () => import('./paginas/ConfirmarRent.js'),
    "#/rentacaminho":             () => import('./paginas/RentAcaminho.js'),

    "#/definicoes":               () => import('./paginas/Definicoes.js'),
    "#/corridaatual":             () => import('./paginas/CorridaAtual.js'),

    "#/guesthouse":               () => import('./paginas/Guesthouse.js'),
    "#/apartamento":              () => import('./paginas/Apartamento.js'),
    "#/arrendar":                 () => import('./paginas/Arrendar.js'),
    "#/arrendarpendente":         () => import('./paginas/ArrendamentoPendente.js'),

    "#/sobre":                    () => import('./paginas/Sobre.js')
};

// ---- Sub-estados internos da home (painel de corrida) ----
const _handleSubEstado = (hash) => {
    const corrida = window.corrida;
    if (hash === "" || hash === "#/taxi") {
        corrida ? corrida.fecharChamarFn(corrida) : "";
        corrida ? corrida.abrirChamarUmFn(corrida) : "";
        if (document.querySelector("#to")) {
            document.querySelector("#to").removeAttribute("disabled");
        }
        return;
    }
    if (hash === "#chamarotaxi") {
        corrida ? corrida.fecharConcluirFn(corrida) : "";
        corrida ? corrida.abrirChamarFn(corrida) : "";
        var distancia = localStorage.getItem("distanciaCorrida");
        if (distancia) {
            var dister = distancia.split(" ")[0].split(",");
            if (Number(dister[0]) >= 5) {
                corrida.shadowRoot.querySelector("#cupom").removeAttribute("disabled");
            } else {
                corrida.shadowRoot.querySelector("#cupom").setAttribute("disabled", "disabled");
            }
        }
        return;
    }
    if (hash === "#concluirpedidodotaxi") {
        corrida ? corrida.fecharConfirmarFn(corrida) : "";
        corrida ? corrida.abrirConcluirFn(corrida) : "";
        return;
    }
    if (hash === "#confirmarpedidodotaxi") {
        corrida ? corrida.fecharConcluirFn(corrida) : "";
        corrida ? corrida.abrirConcluirFn(corrida) : "";
        return;
    }
    if (hash === "#pedidoconcluido") {
        corrida ? corrida.abrirConcluirSMSFn(corrida) : "";
        return;
    }
};

// ---- Roteamento principal ----
var _rotaAtual = null;
var _paginaAtual = null;

const handleLocation = async () => {
    const hash = window.location.hash || '#/';

    // Sub-estados: hash sem barra após "#" (ex: #chamarotaxi)
    if (hash !== '' && !hash.startsWith('#/')) {
        _handleSubEstado(hash);
        return;
    }

    // Lifecycle: destroy da página atual (inclui TAXI_destroy se vier do #/taxi)
    if (_rotaAtual === '#/taxi') {
        try { if (window.TAXI_destroy) window.TAXI_destroy(); } catch (e) {}
        // Reseta o mapa para ser recriado na próxima vez que #/taxi for visitado
        window.mapa = null;
    }

    if (_paginaAtual && _paginaAtual.destroy) {
        try { _paginaAtual.destroy(); } catch (e) { console.warn("destroy:", e); }
    }

    document.querySelector("#main").innerHTML = "";
    try { window.loader.abrir(); } catch (e) {}

    const loadPage = routes[hash] || routes[404];

    try {
        const mod = _moduleCache.get(hash) ?? await (async () => {
            const m = await loadPage();
            _moduleCache.set(hash, m);
            return m;
        })();
        const resultado = mod.default(hash);

        document.querySelector("#main").innerHTML = resultado.html;
        window.scrollTo({ top: 0, behavior: 'instant' });
        _rotaAtual = hash;
        _paginaAtual = resultado;

        // Lifecycle: init da nova página
        try { resultado.init(); } catch (e) { console.error("page init:", e); }
        _aplicarEstadoRota(hash);

    } catch (e) {
        console.error("Erro ao carregar rota:", hash, e);
        document.querySelector("#main").innerHTML =
            '<p style="padding:2rem;text-align:center;color:#c0392b">Erro ao carregar a página. Verifique sua conexão.</p>';
        try { window.loader.fechar(); } catch (e) {}
    } finally {
        // Para #/taxi o loader é gerido pelo TAXI_init (fecha quando o mapa estiver pronto)
        if (hash !== '#/taxi') {
            try { window.loader.fechar(); } catch (e) {}
        }
    }
};

// ---- HOME helpers ----
const HOME = {
    smsschrol: false,
    fechaCorridaPendente() {
        const el = document.querySelector(".todo-pendente");
        if (el) el.style.display = "none";
    },
    abreCorridaPendente() {
        const el = document.querySelector(".todo-pendente");
        if (el) el.style.display = "block";
    },
    fechaCorridaAtual() {
        const el = document.querySelector(".corrida-atual");
        if (el) el.style.display = "none";
    },
    abreCorridaAtual() {
        const el = document.querySelector(".corrida-atual");
        if (el) el.style.display = "block";
    }
};
window.HOME = HOME;

// ---- Estado da home — chamado pelo router e pelas requests ----
const _atualizarHome = () => {
    const corridaAtiva = localStorage.getItem("corridaativa");
    const corridaPendente = localStorage.getItem("corridapendente");
    if (corridaAtiva === "sim") {
        try { window.corrida && window.corrida.fechar(); } catch (e) {}
        try { fechaBarraDePesquisas(); } catch (e) {}
        HOME.abreCorridaAtual();
        HOME.fechaCorridaPendente();
    } else {
        HOME.fechaCorridaAtual();
    }
    if (corridaPendente === "sim") {
        HOME.abreCorridaPendente();
        HOME.fechaCorridaAtual();
        try { window.corrida && window.corrida.fechar(); } catch (e) {}
        try { fechaBarraDePesquisas(); } catch (e) {}
        try { CORRIDA.detalhesCorridaPendente(); } catch (e) {}
    } else {
        HOME.fechaCorridaPendente();
    }
    if (corridaPendente !== "sim" && corridaAtiva !== "sim") {
        try { abreBarraDePesquisas(); } catch (e) {}
        try { window.corrida && window.corrida.abrir(); } catch (e) {}
    }
    if (localStorage.getItem('token')) {
        try { menu.abrir(); } catch (e) {}
    }
};
window.atualizarEstadoHome = _atualizarHome;

// ---- UI por rota (substitui corridaStatus) ----
const _aplicarEstadoRota = (hash) => {
    if (hash === '#/') {
        try { INICIO.slide(); } catch (e) {}
        try { menu.fechar(); } catch (e) {}
        try { window.corrida && window.corrida.fechar(); } catch (e) {}
        try { fechaBarraDePesquisas(); } catch (e) {}
        return;
    }
    // Rotas sem menu (autenticação / fluxos iniciais)
    const rotasSemMenu = [
        '#/entrar', '#/esqueceuapasse', '#/confirmaresqueceuapasse',
        '#/novapalavrapasse', '#/criarconta', '#/verificarcadastro',
        '#/concluircadastro'
    ];
    if (rotasSemMenu.includes(hash)) {
        try { menu.fechar(); } catch (e) {}
        try { window.corrida && window.corrida.fechar(); } catch (e) {}
        try { fechaBarraDePesquisas(); } catch (e) {}
    } else {
        if (localStorage.getItem('token')) {
            try { menu.abrir(); } catch (e) {}
        } else {
            try { menu.fechar(); } catch (e) {}
        }
    }
    if (hash === '#/home') {
        _atualizarHome();
    }
    if (hash === '#/corrida') {
        HOME.smsschrol = false;
        setTimeout(() => {
            const msgs = document.querySelector(".mensagens");
            if (msgs) msgs.scrollTo(0, msgs.scrollHeight);
        }, 100);
    }
};

window.addEventListener('hashchange', handleLocation);
window.vaiTela = vaiTela;

// ---- Pre-fetch de todas as rotas em background ----
const _prefetchRoutes = () => {
    Object.entries(routes).forEach(([r, fn]) => {
        if (_moduleCache.has(r)) return;
        fn().then(m => _moduleCache.set(r, m)).catch(() => {});
    });
};
if ('requestIdleCallback' in window) {
    requestIdleCallback(_prefetchRoutes, { timeout: 3000 });
} else {
    setTimeout(_prefetchRoutes, 2000);
}
// A navegação inicial é disparada pelo main.js após inicializar os componentes
