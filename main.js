const inputValue = document.getElementById("search");
const cityName = document.getElementById("maincity");
const mainTemp = document.getElementById("maintemp");
const maxTempElement = document.getElementById("maxtemp");
const minTempElement = document.getElementById("mintemp");
const humidityElement = document.getElementById("humadity");
const cloudsElement = document.getElementById("cloud");
const windElement = document.getElementById("wind");

const BASE_URL = {
  api: "https://api.openweathermap.org/data/2.5/weather",
  api_key: "396ecce459190fea28f72dacc8b1ed9c",
  units: "metric",
};

const searchInfo = (e) => {
  const inputVal = e.target.value.trim();
  fetch(
    `${BASE_URL.api}?q=${inputVal}&appid=${BASE_URL.api_key}&units=${BASE_URL.units}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      cityName.textContent = data.name;
      mainTemp.textContent = data.main.temp;
      maxTempElement.textContent = data.main.temp_max;
      minTempElement.textContent = data.main.temp_min;
      humidityElement.textContent = data.main.humidity;
      cloudsElement.textContent = data.clouds.all;
      windElement.textContent = data.wind.speed;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
};

inputValue.addEventListener("input", searchInfo);

function updateClock() {
  const clockElement = document.getElementById("clock");
  const currentTime = new Date();
  const currentDate = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} - Thursday, ${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;

  clockElement.textContent = formattedTime;
}
setInterval(updateClock, 1000);
updateClock();
