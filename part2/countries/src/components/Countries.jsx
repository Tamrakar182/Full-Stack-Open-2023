import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const Countries = ({ countryList }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

  const showCountry = (country) => {
    setSelectedCountry(country);
  };
  
    if (countryList.length > 10) {
      return <p>Too Many Countries, specify a filter</p>;
    }
  
    if (countryList.length < 10 && countryList.length !== 1) {
      return (
        <ul>
          {countryList.map((country) => (
            <React.Fragment key={country}>
              <li>{country}</li>
              <button onClick={() => showCountry(country)} >Show</button>
            </React.Fragment>
            
          ))}
        </ul>
      );
    }
  
    if (countryList.length === 1 || selectedCountry) {
        const countryToShow = selectedCountry || countryList[0];
        return <CountryDetails country={countryToShow} />;
      }
  
    return null;
  };
  
  export default Countries;