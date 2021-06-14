let fetchForecast = function (coords) {
    $.get({
        url: "https://api.openweathermap.org/data/2.5/forecast/",
        data: {
            APPID: OPEN_WEATHERMAP_TOKEN,
            lat: coords.lat,
            lon: coords.lng,
            units: "imperial"
        },
        success: function (data) {
            console.log(data)

            appendLocationName(getLocationName(data))
            appendAllWeatherData(filterWeatherObject(data))
        }
    });
}

function getLocationName(data){
    let locationName = [];
    locationName.push(data.city.name)

    return locationName;
}




function filterWeatherObject(data) {
    let weatherObjectArr = [];
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 === 0) {
            weatherObjectArr.push({
                date: data.list[i].dt_txt,
                desc: data.list[i].weather[0].description,
                temp: data.list[i].main.temp,
                humidity: data.list[i].main.humidity,
                wind: data.list[i].wind.speed,
                icon: data.list[i].weather[0].icon
            })
        }
    }


    return weatherObjectArr
}
