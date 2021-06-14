
const mapBoxToken = 'pk.eyJ1Ijoic2Jvd2N1dCIsImEiOiJja3BwcGN3ZHcyeDZ2Mndtd3AzdGlkZTE1In0.B11vhML51Z-JmiVHlB7Jcg'
mapboxgl.accessToken = mapBoxToken

var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-98.4936, 29.4241],
    zoom: 12
});

let geocoder = setGeoCoder()
let marker = setMarker([-98.4936, 29.4241])
fetchForecast(marker._lngLat)
addGeocoderToMap(geocoder)
addGeocoderEvent(geocoder)
getMarkerCoords()

function setGeoCoder() {
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })
}

function addGeocoderEvent(geocoder) {
    geocoder.on("result", function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
        fetchForecast(marker._lngLat)
    })
}

function addGeocoderToMap(geocoder) {
    map.addControl(geocoder)
}

function setMarker(point) {
    return new mapboxgl.Marker().setLngLat(point)
        .addTo(map)
        .setDraggable(true);
}

function getMarkerCoords() {
    marker.on('dragend', function () {
        fetchForecast(marker._lngLat)
    })
}
