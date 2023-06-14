import Countries from "./components/Countries"
import Title from "./components/Title"
import countryService from "./services/country"
import { useState, useEffect } from "react"


const App = () => {
  const [searchText, setSearchText] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
      .getAll()
      .then(countryList => {
        const nameList = countryList.map((item) => item.name.common)
        const filteredCountries = nameList.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
        );
        setCountries(filteredCountries)
        console.log(filteredCountries)
      })
  }, [searchText])

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
    console.log(searchText)
  }

  return(
    <>
      <Title textData="Find Countries" />
      <form>
        <input type="text" placeholder="Search for a country..." value={searchText} onChange={handleSearchTextChange} />
      </form>

      <Countries countryList={countries} />
    
    </>
  )
}

export default App