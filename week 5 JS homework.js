function updateInterface(response) {
    document.querySelector(".current-city").innerHTML = response.data.name;
    document.querySelector(".current-temp").innerHTML = Math.round(response.data.main.temp);
    console.log(response.data.weather[0].main);
    document.querySelector(".current-stats").innerHTML = `${response.data.weather[0].main} </br>
      Humidity: ${response.data.main.humidity}% </br>
      Wind: ${response.data.wind.speed}`;
  }

function createApiUrlFromPosition(position) {
    let apiKey = "0938aaea4eb798390f9b1df3fa43323f";
    let units = "imperial";
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(updateInterface);
  }

  function createApiUrlFromForm(event) {
    event.preventDefault();
    let apiKey = "0938aaea4eb798390f9b1df3fa43323f";
    let units = "imperial";
    let city = document.querySelector(".search-city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(updateInterface);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(createApiUrlFromPosition);
  }
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentPosition);
  
  let form = document.querySelector("form");
  let submitButton = document.querySelector(".search-button");
  form.addEventListener("submit", createApiUrlFromForm);
  submitButton.addEventListener("click", createApiUrlFromForm);
  