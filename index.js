let place = document.querySelector("#location");
let search = document.querySelector("#search");

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
  console.log(weatherInfo);
});
