"use strict";

const mapboxToken = 'pk.eyJ1Ijoic2Jvd2N1dCIsImEiOiJja3BwcGN3ZHcyeDZ2Mndtd3AzdGlkZTE1In0.B11vhML51Z-JmiVHlB7Jcg'

mapboxgl.accessToken = mapboxToken

let map;
let marker;
let geocoder = createGeocoder();


drawMap();
function drawMap(){
    map = new mapboxgl.Map( {
        container: "mapMain",
        center: [-111.876183, 40.758701],
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 10
    })
}

function createGeocoder(){
    return new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    })

}

appendGeocoder(geocoder);
function appendGeocoder(geocoder){
    document.getElementById('search-bar').appendChild(geocoder.onAdd(map));
}
geocoderResultEvent(geocoder);
function geocoderResultEvent(geocoder){
    geocoder.on('result', function(e){

        console.log(e.result);
        createMarker(e.result.geometry.coordinates);
        requestWeather(e.result.geometry.coordinates);
    })

}

mapClick();
function mapClick(){
    map.on('click', function(e){
        console.log(e.lngLat);
        createMarker(e.lngLat)
        requestWeather(e.lngLat);

    })
}


createMarker([-98.49523561316934, 29.428026803961302]);
function createMarker(point){
    if (map._markers.length !== 0){
        marker.remove();

    }
    marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
}


