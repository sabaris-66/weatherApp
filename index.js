let place = document.querySelector("#location");
let search = document.querySelector("#search");
let weather = document.querySelector(".weatherShow");
let locationName = document.querySelector(".name");
let temp = document.querySelector(".temp");
let feels = document.querySelector(".feels");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let weatherDetails = document.querySelectorAll(".weatherDetails");

function weatherShowcase(weatherData) {
  let place = weatherData.location.name;
  let placeLocation = weatherData.location.country;
  let temp = weatherData.current.temp_c;
  let feelsLike = weatherData.current.feelslike_c;
  let humidity = weatherData.current.humidity;
  let wind = weatherData.current.wind_kph;

  return { place, placeLocation, temp, feelsLike, humidity, wind };
}

// async function weather api

async function getWeather() {
  let newLocation = `https://api.weatherapi.com/v1/current.json?key=03afc14dc67c4d7c95d83610241803&q=${place.value}`;
  const response = await fetch(newLocation, { mode: "cors" });
  const weatherData = await response.json();
  // json to weather object
  let weatherInfo = weatherShowcase(weatherData);

  locationName.textContent = `${weatherInfo.place}, ${weatherInfo.placeLocation}`;
  temp.textContent = `Temperature: ${weatherInfo.temp}°C`;
  feels.textContent = `Feels Like: ${weatherInfo.feelsLike}°C`;
  humidity.textContent = `Humidity: ${weatherInfo.humidity}%`;
  wind.textContent = `Wind: ${weatherInfo.wind} km/h`;

  weather.style.padding = "20px";
  weather.style.width = "40vw";
  for (const detail of weatherDetails) {
    detail.style.padding = "15px";
  }
}

search.addEventListener("click", getWeather);
