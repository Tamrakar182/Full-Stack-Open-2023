import Title from "./components/Title"
import countryService from "./services/country"
import { useState } from "react"


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [countries, setCountries] = useState([])


  

  const countriesfunct = () => {
    countryService
      .getAll()
      .then(countryList => {
        const newcountries = countryList.map(countryList => countryList.name === searchText)
        console.log(newcountries)
      })
  }

  const handleSearchTextChange = (event) => {
    event.preventDefault()
    setSearchText(event.target.value)
    console.log(searchText)

    countriesfunct()
  }

  return(
    <div>
      <Title text="Find Countries" />
      <form>
        <input type="text" value={searchText} onChange={handleSearchTextChange} />
      </form>
      <ul>
      {countries
        .map((country) => (
          <li key={country}>
            {country}
          </li>
        ))}

      </ul>
      
    </div>
  )
}

export default App