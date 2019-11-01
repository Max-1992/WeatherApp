const { weather } = require('./Weather')

const { Store } = require('./Store');

const store = new Store()

const { city, countryCode } = store.getLocationData();

const Weather = new weather(city, countryCode);

const { UI } = require('./UI');

const ui = new UI()



async function fetchWeather() {
    const data = await Weather.getWeather()
    ui.render(data);

}


document.getElementById('w-change-btn').addEventListener('click', e => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    store.setLocationData(city, countryCode);
    Weather.changeLocation(city, countryCode);
    fetchWeather()
    e.preventDefault();
})


document.addEventListener('DOMContentLoaded', fetchWeather());