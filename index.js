let place = document.querySelector("#location");
let search = document.querySelector("#search");
let weather = document.querySelector(".weatherShow");

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
  let weatherObject = weatherShowcase(weatherData);
  return weatherObject;
}

search.addEventListener("click", () => {
  let weatherInfo = getWeather();

  let name = document.querySelector(".name");
  let temp = document.querySelector(".temp");
  let feels = document.querySelector(".feels");
  let humidity = document.querySelector(".humidity");
  let wind = document.querySelector(".wind");

  name.textContent = `${weatherInfo.place}, ${weatherInfo.placeLocation}`;
  temp.textContent = weatherInfo.temp;
  feels.textContent = weatherInfo.feelsLike;
  humidity.textContent = weatherInfo.humidity;
  wind.textContent = weatherInfo.wind;
});
