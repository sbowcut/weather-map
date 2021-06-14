requestWeather({
    lng: -111.876183,
    lat: 40.758701
});

function requestWeather(lngLat) {
    let lat, lon;
    if (!Array.isArray(lngLat)){
        lat = lngLat.lat;
        lon = lngLat.lng;
    }
    else {
        lon = lngLat[0]
        lat = lngLat[1]
    }


    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            APPID: '70a7bad7dbfa9303974a93e2268c647e',
            lat: lat,
            lon: lon,
            units: "imperial",
        },
        success: function (data) {
            console.log(data)
            $('#weatherOut').innerHTML = "";
            appendWeather(sortData(data));



        },
        error: function (request, textStatus, errorThrown) {
            alert("Status: " + textStatus);
            alert("Error: " + errorThrown);
        }
    })
}

function sortData(data) {
    let forecastList = data.list;
    let forecast = [forecastList[0], forecastList[8], forecastList[16], forecastList[24], forecastList[32]];
    let weatherObject = {
        name: data.city.name,
        country: data.city.country,
        forecast: forecast,

    }
    console.log(weatherObject);
    return weatherObject;

}


function daySort(day){
    console.log(day);
    let date = day.split(" ")[0] + "T00:00:00";


    return new Date(date).toDateString();
}
