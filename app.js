const _0x49ef=['89809vSZmSC','218JiwSNY','43891YXWSxo','3631ptfsLp','939470a93685a435c10b8a3e9b3ff37d','39105fJXlMb','1iKEUhY','397875CWOeKH','7cPJJUz','989644wzKpvP','1047wDLHjI','http://api.openweathermap.org/data/2.5/','45LAMkGa'];const _0x3d6d=function(_0x5a46d8,_0x17e4a3){_0x5a46d8=_0x5a46d8-0x1e4;let _0x49ef7b=_0x49ef[_0x5a46d8];return _0x49ef7b;};const _0x543cf7=_0x3d6d;(function(_0xdda39c,_0x5b0fe9){const _0x3b755e=_0x3d6d;while(!![]){try{const _0x2e5f25=-parseInt(_0x3b755e(0x1ed))+-parseInt(_0x3b755e(0x1eb))+-parseInt(_0x3b755e(0x1e5))*-parseInt(_0x3b755e(0x1e9))+parseInt(_0x3b755e(0x1ee))*-parseInt(_0x3b755e(0x1e8))+-parseInt(_0x3b755e(0x1ec))*-parseInt(_0x3b755e(0x1e6))+-parseInt(_0x3b755e(0x1f0))*parseInt(_0x3b755e(0x1e7))+parseInt(_0x3b755e(0x1ef));if(_0x2e5f25===_0x5b0fe9)break;else _0xdda39c['push'](_0xdda39c['shift']());}catch(_0x2a5fa4){_0xdda39c['push'](_0xdda39c['shift']());}}}(_0x49ef,0x42031));const api={'key':_0x543cf7(0x1ea),'baseurl':_0x543cf7(0x1e4)};

alert("Connect to Port: 5500");
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})
const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}
function getResults(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&appid=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".current .temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>C</span>`;
  let weatherElement = document.querySelector(".current .weather");
  weatherElement.innerHTML = weather.weather[0].main;

  let hiLow = document.querySelector(".hi-low");
  hiLow.innerHTML = `${weather.main.temp_min} C / ${weather.main.temp_max} C`;
}
function dateBuilder(d) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
