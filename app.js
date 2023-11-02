
const apiKey = "fa182b64b0302d1355a6290d430beec0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            // style.background-image=url("images/bg_clouds.png");
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_cloud.jpg")`;
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_clear.jpg")`;
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_drizzle.jfif")`;
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_mist.jpg")`;
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_rain.jpeg")`;
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
            document.querySelector(".weatherContainer").style.backgroundImage=`url("images/bg_snow.jpg")`;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
