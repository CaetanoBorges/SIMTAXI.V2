

function addPolylineToMap(map) {
   // Encoded polyline
    const encodedPath = JSON.parse(localStorage.polyline); // Exemplo

    // Decodifique a polyline
    const path = google.maps.geometry.encoding.decodePath(encodedPath[0]);

    // Crie a Polyline e adicione ao mapa
    const polyline = new google.maps.Polyline({
        path: path,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3.3,
    });

    polyline.setMap(map);
}

window.addPolylineToMap = addPolylineToMap;