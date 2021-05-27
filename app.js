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

    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText =  country.capital

        const h4 = document.createElement('h4');
        h4.innerText =  country.region

        const h5  = document.createElement('h5');
        h5.innerText =  country.population

        countryDiv.appendChild(h3)
        countryDiv.appendChild(p)
        countryDiv.appendChild(h4)
        countryDiv.appendChild(h5)
       
        countriesDiv.appendChild(countryDiv);


        // countryDiv.innerText = country.name;
        // countriesDiv.appendChild(countryDiv);
        
        
    }
}