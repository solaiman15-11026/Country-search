const load = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
load()

const displayCountries = country => {
    console.log(country)
    const newDiv = document.getElementById('Show')
    country.forEach(count => {
        const div = document.createElement('div')
        div.innerHTML = ` 
         <div class="col shadow h-100">
         <div class="card">
             <img  src="${count.flags.png}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h4 class="card-title">Country: ${count.name.common}</h4>
                 <h5 class="card-title">Capital: ${count.capital}</h5>
                 <h6 class="card-title">Continents: ${count.continents}</h6>
                 <h6 class="card-text">Independent: ${count.independent}</h6>
                 <h6 class="card-text">Population: ${count.population}</h6>
             </div>
         </div>
     </div>`
        newDiv.appendChild(div)
    })

}