const loadCountries=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(get => displayCountry(get))
}
const displayCountry=data => {
    console.log(data);
    const countryDiv=document.getElementById('countries');
    data.forEach(getData =>{
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
        <h3>${getData.name}</h3>
        <p>${getData.capital}</p>
        <button onclick="localCountryname('${getData.name}')">details</button>
        `
        countryDiv.appendChild(div);
        // console.log(getData.name);
    }) 


}
const localCountryname=(name)=>{
    console.log(name);
    const url=`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(getvalue => showDetails(getvalue[0]))

}
const showDetails=show=>{
 console.log(show);
 document.getElementById('countryname').innerText=`country name is ${show.name}`;
 document.getElementById('showdetails').innerText=`population is ${show.population}`;


}
loadCountries();