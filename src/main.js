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
import './requests/Corrida.js';
import './requests/Rentacar.js';
import './requests/Guesthouse.js';
import './requests/Conta.js';
import './requests/Definicoes.js';

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
import '../components/cardRota/rota.js';
import '../components/cardCorridas/corridas.js';
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

// Navegação inicial
const token = localStorage.getItem("token");
if (token) {
    window._DADOS.buscar();
    vaiTela("/home");
} else {
    vaiTela(".");
}

let watch = 0;
const controle = setInterval(function () {
    if (!window.mapa) {
        if (watch === 1) {
            vaiTela(".");
            location.reload();
        }
        notificacao.sms("Verifique a conexão de internet e se a localização está ativada", 1);
        watch++;
    }
}, 10000);

const intervalo = setInterval(function () {
    if (window.mapa) {
        componentPesquisar(".root", localizacao, window.mapa);
        clearInterval(intervalo);
        clearInterval(controle);
        loader.fechar();
        CORRIDA.pulling();

        const corridaativa = localStorage.getItem("corridaativa");
        if (corridaativa === "sim") {
            addPolylineToMap(window.mapa);
            const corridaAtual = JSON.parse(localStorage.getItem("corridaatual"));
            CORRIDA.pullingGPSmotorista();
        }
        const corridapendente = localStorage.getItem("corridapendente");
        if (corridapendente === "sim") {
            addPolylineToMap(window.mapa);
        }
    }
}, 100);

// ========================================================
// ---- Google Maps callback ----
// ========================================================

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    }
}

function showPosition(position) {
    window.latitude = position.coords.latitude;
    window.longitude = position.coords.longitude;
}

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
};

// Se o Google Maps já chamou o stub antes deste módulo terminar de carregar,
// executa o initMap real imediatamente.
if (window._mapsReadyPending) {
    window.initMap();
}

getLocation();
