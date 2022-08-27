const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries =>{
   /*  for(country of countries){
        console.log(country)
    } */
    const countriesContainer = document.getElementById("country-container");
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = ` 
            <h3>Name : ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0] : "No, Capital Find"}</p>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}
loadCountries()