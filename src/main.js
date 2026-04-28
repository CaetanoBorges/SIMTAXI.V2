/**
 * src/main.js — Entry point da aplicação (VamosLa)
 *
 * Importa todas as dependências e inicializa os componentes.
 * O Google Maps usa callback=initMap definido em window.initMap abaixo.
 */

// ---- Vendor ----
import '../lib/jquery.js';

// ---- Core ----
import './territorios.js';
import './requests/Dados.js';
import './requests/Cadastro.js';
import './requests/CorridaApi.js';
import './requests/Rentacar.js';
import './requests/GuesthouseApi.js';
import './requests/Conta.js';
import './requests/DefinicoesApi.js';

// ---- Assets ----
import '../lib/lightSlider.js';

// ---- App modules ----
import '../js/corrida.js';
import './dados/index.js';

// ---- Router (define window.vaiTela e listener hashchange) ----
import './router.js';

// ---- Mapa e helpers ----
import '../js/mapa.js';
import '../js/inicio.js';

// ---- Polyfills ----
import '../components/polyfill/native-shim.js';
import '../components/polyfill/webcomponents-bundle.js';
import '../components/polyfill/custom-elements.min.js';

// ---- Web Components ----
import '../components/notificacao/notificacao.js';
import '../components/menu/menu.js';
import '../components/psqsa/pesquisa.js';
import '../components/pesquisaRentacar/pesquisaRentacar.js';
import '../components/corrida/corrida.js';
import '../components/loader/loader.js';
import '../components/btnCorrida/btncorrida.js';
import '../components/btnMotorista/btnmotorista.js';
import '../components/btnCheguei/btncheguei.js';
import '../components/btnCancelar/btncancelar.js';
import '../components/btnAtualizarDados/btnatualizardados.js';
import '../components/btnConcluirRent/btnconcluirrent.js';
import '../components/btnConcluirGuest/btnconcluirguest.js';
import '../components/btnPanico/btnpanico.js';
import '../components/slideImg/slideImg.js';
import '../components/pendente/pendente.js';
import '../components/infoPendente/infopendente.js';
import '../components/info/info.js';
import '../components/cardRota/cardRota.js';
import '../components/cardCorridas/cardCorridas.js';
import '../components/meusAlugueres/meusAlugueres.js';
import '../components/meusArrendamentos/meusArrendamentos.js';
import '../components/btnAtualizarPasse/btnAtualizarPasse.js';
import '../components/apagarConta/apagarConta.js';
import '../js/POLYLINE.js';

// ========================================================
// ---- Inicialização da app ----
// ========================================================

window.apikey = 'eqwzHFWDBRa9XgIEGLrbyZyLCGmO5Kb5ky6zJriUIbM';

const api = "https://api.jjgmsimtaxi.com/Passageiro";
window._api = api;

const root = document.querySelector(".root");
const notificacao = new debliwuinotificacao();
const loader = new debliwuiloader();
loader.abrir();

const corrida = new debliwuicorrida($, loader, notificacao);
window.corrida = corrida; // exposto para o router (_handleSubEstado)

const menu = new debliwuimenu();
const btncorrida = new debliwuibtncorrida();
const btnmeusalugueres = new debliwuimeusalugueres();

root.prepend(menu);
root.prepend(corrida);
root.prepend(btncorrida);
root.prepend(notificacao);
root.prepend(loader);

window.dados = criarDados(api, loader, notificacao);
window._notificacao = notificacao;
window.loader      = loader;      // exposto para router.js, menu.js e outros globais
window.notificacao = notificacao; // exposto para corrida.js, menu.js e outros globais

// Navegação inicial
const token = localStorage.getItem("token");
const _hashAtual = window.location.hash;

if (token) {
    window._DADOS.buscar();
}

if (_hashAtual && _hashAtual !== '#' && _hashAtual !== '#/') {
    vaiTela(_hashAtual);
} else if (token) {
    vaiTela("/home");
} else {
    vaiTela(".");
}

// Geolocation global — só recolhe lat/lng, sem inicializar mapa
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    }
}
function showPosition(position) {
    window.latitude = position.coords.latitude;
    window.longitude = position.coords.longitude;
}
getLocation();

// ========================================================
// ---- Inicialização exclusiva do #/taxi ----
// ========================================================

let _taxiControle  = null;
let _taxiIntervalo = null;

window.TAXI_init = function () {
    // Garante que pulling parou de iteração anterior
    CORRIDA.pararPulling();

    // Reabre o loader — será fechado apenas quando o mapa estiver pronto
    window.loader.abrir();

    let watch = 0;
    _taxiControle = setInterval(function () {
        if (!window.mapa) {
            if (watch === 1) {
                window.loader.fechar();
                vaiTela(".");
                location.reload();
            }
            notificacao.sms("Verifique a conexão de internet e se a localização está ativada", 1);
            watch++;
        } else {
            clearInterval(_taxiControle);
        }
    }, 10000);

    _taxiIntervalo = setInterval(function () {
        if (window.mapa) {
            componentPesquisar(".root", localizacao, window.mapa);
            clearInterval(_taxiIntervalo);
            clearInterval(_taxiControle);
            window.loader.fechar();
            CORRIDA.pulling();

            const corridaativa = localStorage.getItem("corridaativa");
            if (corridaativa === "sim") {
                addPolylineToMap(window.mapa);
                CORRIDA.pullingGPSmotorista();
            }
            const corridapendente = localStorage.getItem("corridapendente");
            if (corridapendente === "sim") {
                addPolylineToMap(window.mapa);
            }
        }
    }, 100);
};

window.TAXI_destroy = function () {
    if (_taxiControle)  { clearInterval(_taxiControle);  _taxiControle  = null; }
    if (_taxiIntervalo) { clearInterval(_taxiIntervalo); _taxiIntervalo = null; }
    CORRIDA.pararPulling();
    localStorage.setItem("controlaMotoristasProximos", 0);
    try { CORRIDA.deletaMarcadorDoMapa(); } catch (e) {}
};

function formatN(num) {
    return num
        .toFixed(0)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
window.formataPreco = formatN;

function timestampToDate(unix_timestamp) {
    const date = new Date(unix_timestamp);
    const dia = date.getDate();
    const ano = date.getFullYear();
    const mes = date.getMonth() + 1;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${dia}/${mes}/${ano} ${hours}:${minutes}`;
}
window.timestampToDate = timestampToDate;

function fazSom() {
    navigator.vibrate([500, 1000, 800]);
    const mp3Source = '<source src="./03.mp3" type="audio/mpeg">';
    document.getElementById("sound").innerHTML = '<audio autoplay="autoplay">' + mp3Source + '</audio>';
}
window.fazSom = fazSom;

window.initMap = function () {
    // O elemento #mapa-global só existe quando a rota #/taxi está activa.
    // Se ainda não estiver no DOM, guarda o flag e aguarda que Taxi.js o injete.
    if (!document.getElementById('mapa-global')) {
        window._mapsReadyPending = true;
        return;
    }

    getLocation();

    const inicial = { lat: window.latitude, lng: window.longitude };
    window.inicial = inicial;

    const opcoes = {
        zoom: 12,
        center: inicial,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL },
        overviewMapControl: false,
        overviewMapControlOptions: { opened: false },
        mapTypeControl: false
    };

    const map = new google.maps.Map(document.getElementById("mapa-global"), opcoes);

    const servicoDirecoes = new google.maps.DirectionsService();
    window.serveDirecoes = servicoDirecoes;
    const direcoesDisplay = new google.maps.DirectionsRenderer();
    window.mostraDirecoes = direcoesDisplay;
    direcoesDisplay.setMap(map);

    function calcRoute() {
        const request = {
            origin: window.from.value,
            destination: window.to.value,
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC
        };

        servicoDirecoes.route(request, function (result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                direcoesDisplay.setDirections(result);
                const precoPorKilometro = localStorage.getItem("precoPorKilometroCarro");
                const distancia = result.routes[0].legs[0].distance.text;

                localStorage.setItem("dest_coord", result.routes[0].legs[0]["end_location"].lat() + "," + result.routes[0].legs[0]["end_location"].lng());
                localStorage.setItem("part_coord", result.routes[0].legs[0]["start_location"].lat() + "," + result.routes[0].legs[0]["start_location"].lng());
                localStorage.setItem("doc_rota", JSON.stringify(result.routes[0].legs[0]));

                const dis = distancia.split(' ')[0];
                const dist = dis.replaceAll(",", '.');
                const duracao = result.routes[0].legs[0].duration.text;
                const preco = Number(dist) * Number(precoPorKilometro);
                const pol = [result.routes[0].overview_polyline];

                localStorage.setItem("distanciaCorrida", distancia);
                localStorage.setItem("polyline", JSON.stringify(pol));
                localStorage.setItem("duracaoCorrida", duracao);
                localStorage.setItem("precoCorrida", preco);
                localStorage.setItem("totalCorrida", preco);

                const prec = formatN(preco);

                corrida.shadowRoot.querySelector(".basic-info").style.display = "flex";
                corrida.shadowRoot.querySelector(".status-um").style.display = "block";
                corrida.shadowRoot.querySelector(".cupom").style.display = "block";
                corrida.shadowRoot.querySelector(".concluir").style.display = "block";
                corrida.shadowRoot.querySelector(".btn-taxi-concluir").style.display = "none";
                corrida.shadowRoot.querySelector(".btn-chamar-taxi").style.display = "none";
                corrida.shadowRoot.querySelector(".btn-concluir-sms").style.display = "block";
                corrida.shadowRoot.querySelector(".total").innerHTML = "Total: " + prec + " kz";
                corrida.shadowRoot.querySelector(".preco").innerHTML = "Preco: " + prec + " kz";
                vaiTela("#chamarotaxi");
                corrida.shadowRoot.querySelector(".basic-distancia-preco").innerHTML = ' Distância: ' + distancia + ' <br><span>Preço: ' + prec + ' kz</span>';
                corrida.shadowRoot.querySelector(".basic-tempo").innerHTML = 'Tempo <br><span>' + duracao + '</span>';
                corrida.shadowRoot.querySelector("#cupom").removeAttribute("disabled");
                corrida.shadowRoot.querySelector(".btn-chamar-taxi").removeAttribute("disabled");
                corrida.shadowRoot.querySelector("#cupom").value = "";
                corrida.shadowRoot.querySelector(".desconto").innerHTML = 'Desconto: <b>' + formatN(0) + ' kz</b>';
            } else {
                direcoesDisplay.setDirections({ routes: [] });
                map.setCenter(inicial);
            }
        });
    }

    window.mapa = map;
    window.calculaRota = calcRoute;
    localizacao(map);

    // Após o mapa estar pronto, inicializa os recursos do taxi se já estiver nessa rota
    if (window.location.hash === '#/taxi') {
        window.TAXI_init();
    }
};

// Se o Google Maps já chamou o stub antes deste módulo terminar de carregar,
// executa o initMap real imediatamente.
if (window._mapsReadyPending) {
    window.initMap();
}
