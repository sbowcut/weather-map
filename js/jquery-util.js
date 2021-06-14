function appendAllWeatherData(weatherArr) {
    $('#forecast-container').empty()
    weatherArr.forEach(function (obj) {
        $('#forecast-container').append(getWeatherCard(obj))
    })
}

function getWeatherCard(weatherObj) {
    let weatherCard = $(`<div class="card col-2 px-3 mb-2 mt-2"></div>`);

    weatherCard.append(
        `<div class="card-header date">${weatherObj.date}</div>
		<div class="card-body">
		<div class="temp">Temperature: ${weatherObj.temp} F</div>
		<hr>
		<div class="desc-container">
			<div class="desc">${weatherObj.desc}</div>
			<img class="icon0" src="img/${weatherObj.icon}.png">
		</div>
		<hr>
		<div class="humidity">Humidity: ${weatherObj.humidity}</div>
		<hr>
		<div class="wind">Wind: ${weatherObj.wind}</div>
	</div>`
    )
    return weatherCard
}

function appendLocationName(location){
    $('#location').html("Current location: " + location)
}