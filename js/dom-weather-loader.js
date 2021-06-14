function appendWeather(obj) {
    let house = $('#weatherOut');
    house.html("");
    house.append(`<h1 class="display-4 m-4 " >${obj.name}, ${obj.country}</h1><div class="row row-cols-5" id="weatherIn">
            </div>`)
    let inner = $('#weatherIn');
    obj.forecast.forEach(function (day, index) {
        inner.append(`<div class="col" id="day-${index}">
                        <div class="card border border-dark"> 
                            <h5 class="card-header py-2">${daySort(day.dt_txt)}</h5>
                            <ul class="card-body list-unstyled">
                            <li class="currentTemp"></li>
                                <li>High: ${parseFloat(day.main.temp_max).toFixed(0)}&deg; </li>
                                <li>Low: ${parseFloat(day.main.temp_min).toFixed(0)}&deg; </li>
                                <li>Humidity: ${parseFloat(day.main.humidity).toFixed(0)}&deg; </li>
                            </ul>
                            <div class="card-footer">${day.weather[0].description}</div>
                        </div>
                        </div>`)
    })


}