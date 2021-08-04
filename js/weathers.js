
const API_KEY ='f3b78412cf7d29699af7e3fb10832aa4'; 

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText =`location : ${data.name}`;
        weather.innerText =`weather : ${data.weather[0].main} temp : ${data.main.temp}`;
    });
}
function onGeoError(){
    alert ("Can't find you. Where you are");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);