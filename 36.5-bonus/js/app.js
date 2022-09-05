// Do Not Show API Key in Your JS File Like This
const API_KEY = `24afa0ac52d94687f5a3aa21a9f22ca8`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayTemperature(data));

}
const displayTemperature = data =>{
    // const temperature = document.getElementById("temperature");
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
}
const setInnerTextById = (id, text) =>{
    const elementId = document.getElementById(id);
    elementId.innerText = text;
}
document.getElementById("btn-search").addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const cityName = searchField.value;
    document.getElementById("city-name").innerText = cityName;
    loadTemperature(cityName);
});

loadTemperature('dhaka')