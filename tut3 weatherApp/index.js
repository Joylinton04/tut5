const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apiKey = "09cb23b7f8638a33ff2cdf837b12b27f"
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button ')
const weatherIcon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')
const animate = document.querySelector('.container')

async function checkweather(location) {
    const response =  await fetch(apiUrl + location + `&appid=${apiKey}`);
    if(response.status === 404) {
        weather.style.display = "none"
        error.style.display = "block"
    } else {
    let data = await response.json()
    city.innerHTML = data.name
    temp.innerHTML = Math.round(data.main.temp) + "°c"
    humidity.innerHTML = data.main.humidity + "%"
    wind.innerHTML = data.wind.speed + " km/h"
    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png"
    } else if(data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png"
    } else if(data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    } else if(data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png"
    } else if(data.weather[0].main === "Snow") {
        weatherIcon.src = "images/snow.png"
    } else if(data.weather[0].main === "Wind") {
        weatherIcon.src = "images/wind.png" 
    }  else if(data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    console.log(data)
    weather.style.display = "block"
    error.style.display = "none"
}
}

searchBtn.addEventListener('click', function() {
    if(searchBox.value != "") {
        checkweather(searchBox.value)
    }
});


searchBox.addEventListener("keydown", function(event) {
    if(searchBox.value !== "") {
        if(event.keyCode === 13) {
            event.preventDefault();
              searchBtn.click();
          }
    }
})


