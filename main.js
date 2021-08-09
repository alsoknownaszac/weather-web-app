const apiInitUrl = `api.openweathermap.org/data/2.5/weather?q=`;
const APIkey = `7da6ccecc2e374476aaa3cd7697316ec`;
const units = `&units=metric`;
const apiID = `&appid=${APIkey}`;
const cityInput = document.getElementById("cityInput");
const tempInput = document.getElementById("Deg-field");
const mainInput = document.getElementById("Main-field");
const descInput = document.getElementById("Desc-field");
const humInput = document.getElementById("Humd-field");

var btnSearch = document.getElementById("submitBtn");

// const apiUrl = `https://${apiInitUrl}${cityInput.value}${apiID}`;

const generateHtml = (temp) => {
  const temperature = temp.main.temp;
  const mainTemp = temp.weather[0].main;
  const description = temp.weather[0].description;
  const humidity = temp.main.humidity;
  tempInput.innerHTML = `${Math.floor(temperature)}	&#8451;`;
  mainInput.innerHTML = mainTemp;
  descInput.innerHTML = description;
  humInput.innerHTML = humidity;
};

btnSearch.addEventListener("click", () => {
  fetch(`https://${apiInitUrl}${cityInput.value}${units}${apiID}`)
    .then((data) => data.json())
    .then((temp) => generateHtml(temp));
});
