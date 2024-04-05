let place = document.querySelector("#location");
let search = document.querySelector("#search");

// async function weather api

async function getWeather() {
  let newLocation = `https://api.weatherapi.com/v1/current.json?key=03afc14dc67c4d7c95d83610241803&q=${place.value}`;
  console.log(newLocation);
  const response = await fetch(newLocation, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
}

search.addEventListener("click", getWeather);
