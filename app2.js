function allCountryName(){
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => {
            displayCountries(data);
})
}
allCountryName();

const displayCountries = countries =>{

    const countriesDiv = document.getElementById('countriseName');
   
    countries.forEach(country => {
        // const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'
        const countryInfo = `
          <h3 class="country-name">${country.name}</h3>
        
          <button onclick="showDelailsCountryInfo('${country.name}')"><img class="image-section" src = "${country.flag}">
          </button>
        `;
        countryDiv.innerHTML = countryInfo
        countriesDiv.appendChild(countryDiv)
    });
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className = 'country'
    //     const countryInfo = `
    //       <h3 class="country-name">${country.name}</h3>
    //       <p>${country.capital},<br>
    //       ${country.region},<br>
    //       ${country.population}
    //       </p>
    //     `;
    //     countryDiv.innerHTML = countryInfo
    //     countriesDiv.appendChild(countryDiv)
    // }
}

 const showDelailsCountryInfo=name=>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]))
}

const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetails')
    countryDiv.innerHTML = `
    <p>
    ${country.subregion},<br>
    ${country.area},<br>
    ${country.alpha3Code},<br>
    ${country.numericCode}<br>
    ${country.capital},<br>
    ${country.region},<br>
    ${country.population}
    </p>
    
    `
}