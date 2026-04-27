


function localizacao(mapa) {
            //const geocoder = new google.maps.Geocoder();
   
            setInterval(function () {
                //console.log(position);
                
                var lat = window.latitude;
                var lng = window.longitude;
                var devCenter = new google.maps.LatLng(lat, lng);
                if(localStorage.getItem("zoom") != "sim" || localStorage.getItem("zoom") == null){
                    mapa.setCenter(devCenter);
                    mapa.setZoom(15); 
                }
                     
                /*markerPrincipal = new google.maps.Marker({
                    position: devCenter,
                    map: mapa,
                    icon: "/passageiro.png",
                    label: "Eu",
                    zIndex: 5
                });*/
                function clear(devCenter) {

                    if (window.markerPrincipal) {
                        markerPrincipal.setMap(null);
                    }  

                    window.markerPrincipal = new google.maps.Marker({
                        position: devCenter,
                        map: mapa,
                        icon: "/passageiro.png",
                        label: "Eu",
                        zIndex: 5
                    });
                    localStorage.setItem("zoom","sim");
                }
                clear(devCenter);
                try {
                    const geocoder = new google.maps.Geocoder();
                    geocoder
                        .geocode({ location: devCenter })
                        .then((response) => {
                            if (response.results[0]) {
                                var isActive = localStorage.getItem("corridapendente");
                                if (isActive == "sim") {

                                } else {
                                    
                                    if(corrida.shadowRoot.querySelector(".basic-info").style.display != ""){

                                    }else{
                                        document.querySelector("#from").value = (response.results[0].formatted_address);
                                        document.querySelector("#from").innerHTML = (response.results[0].formatted_address);
                                    }
                                    
                                }
                                localStorage.setItem("minhaPosicao", response.results[0].formatted_address);
                            }
                        })
                        .catch(() => {});
                } catch (_) {}

            },5000);
}


/*function initMap(){
            // The location of Uluru
            const uluru = { lat: 55.0302, lng: 29.55 };
            const ulur = { lat: 42.3601, lng: 71.0589 };
            // The map, centered at Uluru
            const map = new google.maps.Map(
                document.getElementById("mapa-global"),
                {
                zoom: 4,
                center: uluru,
                }
            );

            function addMarker(coords){
                const marker = new google.maps.Marker({
                    position: coords,
                    map: map
                });
            }

            window.add=addMarker;
            // The marker, positioned at Uluru
            const mark = new google.maps.Marker({
                position: uluru,
                map: map,
            });
        }*/
window.localizacao = localizacao;