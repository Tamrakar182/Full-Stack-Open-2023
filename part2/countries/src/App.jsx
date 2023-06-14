import Title from "./components/Title"
import countryService from "./services/country"
import { useState, useEffect } from "react"


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(countryList => {
        const nameList = countryList.map((item) => item.name)
        const filteredCountries = nameList.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
        );
        setCountries(filteredCountries)
      })
  }, [searchText])

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
    console.log(searchText)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchCountries();
  };

  const fetchCountries = async () => {
    try {
      const response = await fetch(`https://restcountries.com/v2/name/${searchQuery}`);
      const data = await response.json();

      if (data.length > 10) {
        alert('Too many countries match your search. Please be more specific.');
        setCountries([]);
        setSelectedCountry(null);
      } else if (data.length > 1) {
        setCountries(data);
        setSelectedCountry(null);
      } else if (data.length === 1) {
        setSelectedCountry(data[0]);
        setCountries([]);
      } else {
        setCountries([]);
        setSelectedCountry(null);
      }
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };


  return(
    <>
      <Title textData="Find Countries" />
      <form>
        <input type="text" placeholder="Search for a country..." value={searchText} onChange={handleSearchTextChange} />
        <button type="submit">Search</button>
      </form>
      
      {countries.length > 0 && (
        <ul className="country-list">
          {countries.map((country) => (
            <li key={country.alpha3Code} className="country-list-item">
              {country.name}
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && (
        <div className="country-details">
          <h2>{selectedCountry.name}</h2>
          <p>Capital: {selectedCountry.capital}</p>
          <p>Area: {selectedCountry.area} sq km</p>
          <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} />
          <h3>Languages:</h3>
          <ul>
            {selectedCountry.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
        </div>
      )}
    
    </>
  )
}

export default App