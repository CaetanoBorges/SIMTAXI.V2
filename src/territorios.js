const territorios = {

    Bengo: { capital: "Caxito", municipios: ["Ambriz", "Bula Atumba", "Dande", "Dembos", "Nambuangongo", "Pango Aluquém"] },
    Benguela: { capital: "Benguela", municipios: ["Balombo", "Baía Farta", "Benguela", "Bocoio", "Caimbambo", "Catumbela", "Chongorói", "Cubal", "Ganda", "Lobito"] },
    Bie: { capital: "Cuíto", municipios: ["Andulo", "Camacupa", "Catabola", "Chinguar", "Chitembo", "Cuemba", "Cunhinga", "Cuíto", "Nharea"] },
    Cabinda: { capital: "Cabinda", municipios: ["Belize", "Buco-Zau", "Cabinda", "Cacongo"] },
    Cuando_Cubango: { capital: "Menongue", municipios: ["Calai", "Cuangar", "Cuchi", "Cuito Cuanavale", "Dirico", "Mavinga", "Menongue", "Nancova", "Rivungo"] },
    Cuanza_Norte: { capital: "Ndalatando", municipios: ["Ambaca", "Banga", "Bolongongo", "Cambambe", "Cazengo", "Golungo Alto", "Gonguembo", "Lucala", "Quiculungo", "Samba Caju"] },
    Cuanza_Sul: { capital: "Sumbe", municipios: ["Amboim", "Cassongue", "Cela", "Conda", "Ebo", "Libolo", "Mussende", "Porto Amboim", "Quibala", "Quilenda", "Seles", "Sumbe"] },
    Cunene: { capital: "Ondjiva", municipios: ["Cahama", "Cuanhama", "Curoca", "Cuvelai", "Namacunde", "Ombadja"] },
    Huambo: { capital: "Huambo", municipios: ["Bailundo", "Cachiungo", "Caála", "Ecunha", "Huambo", "Londuimbali", "Longonjo", "Mungo", "Chicala-Choloanga", "Chinjenje", "Ucuma"] },
    Huila: { capital: "Lubango", municipios: ["Caconda", "Cacula", "Caluquembe", "Chiange", "Chibia", "Chicomba", "Chipindo", "Cuvango", "Humpata", "Jamba", "Lubango", "Matala", "Quilengues", "Quipungo"] },
    Luanda: { capital: "Luanda", municipios: ["Belas", "Cacuaco", "Cazenga", "Ícolo e Bengo", "Luanda", "Quilamba Quiaxi", "Quissama", "Talatona", "Viana"] },
    Lunda_Norte: { capital: "Dundo", municipios: ["Cambulo", "Capenda-Camulemba", "Caungula", "Chitato", "Cuango", "Cuílo", "Lóvua", "Lubalo", "Lucapa", "Xá-Muteba"] },
    Lunda_Sul: { capital: "Saurimo", municipios: ["Cacolo", "Dala", "Muconda", "Saurimo"] },
    Malanje: { capital: "Malanje", municipios: ["Cacuso", "Calandula", "Cambundi-Catembo", "Cangandala", "Caombo", "Cuaba Nzoji", "Cunda-Dia-Baze", "Luquembo", "Malanje", "Marimba", "Massango", "Mucari", "Quela", "Quirima"] },
    Moxico: { capital: "Luena", municipios: ["Alto Zambeze", "Bundas", "Camanongue", "Léua", "Luau", "Luacano", "Luchazes", "Cameia", "Moxico"] },
    Namibe: { capital: "Moçamedes", municipios: ["Bibala", "Camucuio", "Moçâmedes", "Tômbua", "Virei"] },
    Uige: { capital: "Uíge", municipios: ["Alto Cauale", "Ambuíla", "Bembe", "Buengas", "Bungo", "Damba", "Milunga", "Mucaba", "Negage", "Puri", "Quimbele", "Quitexe", "Sanza Pombo", "Songo", "Uíge", "Zombo"] },
    Zaire: { capital: "Mbanza Congo", municipios: ["Cuimba", "Mabanza Congo", "Nóqui", "Nezeto", "Soio", "Tomboco"] }

};

const provincias = Object.keys(territorios);

// Expõe globalmente (usado por Cadastro.js e Conta.js)
window.territorios = territorios;
window.provincias = provincias;

function geocodeLatLng(inicial) {
    try {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'location': inicial }, function (results, status) {
            if (status == 'OK') {

            }
        });
    } catch (_) {}
}


function doGeocode() {
    var addr = document.querySelector("#to");
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        'address': addr.value
    }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
            calculaRota();
        } else {

        }
    });
};

window.docode = doGeocode;
setTimeout(function () {}, 1500);
