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
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = ` 
            <h3>Name : ${country.name.common} </h3>
            <p>Capital: ${
              country.capital ? country.capital[0] : "No, Capital Find"
            }</p>
            <button onclick = "LoadCountryDetails('${
              country.cca2
            }')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}
const LoadCountryDetails = (code) =>{
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log(code);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country =>{
    console.log(country)
    const countryDetailsContainer = document.getElementById(
      "country-details-container");
    countryDetailsContainer.innerHTML = `
        <h2>Country Name: ${country.name.common}</h2>
        <img src = "${country.flags.png}">
    `
}
loadCountries()
