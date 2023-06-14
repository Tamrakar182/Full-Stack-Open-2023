import countryService from "../services/country";
import { useState, useEffect } from "react";

const CountryDetails = ({ country }) => {
  const [countryObj, setCountryObj] = useState(null);
  useEffect(() => {
    if (country) {
      countryService.getCountry(country).then((singleCountry) => {
        const countryObj = {
          Name: singleCountry.name.official,
          Capital: singleCountry.capital,
          Area: singleCountry.area,
          Languages: singleCountry.languages,
          Flag: singleCountry.flags.png
        };
        setCountryObj(countryObj);
      });
    }
  }, [country]);
  
  if (!countryObj) {
    return <p>Loading country details...</p>;
  }

  return (
    <div>
      <p>Capital: {countryObj.Capital}</p>
      <p>Area: {countryObj.Area}</p>

      <h2>Languages: </h2>
      <ul>
        {Object.entries(countryObj.Languages).map(([code, language]) => (
          <li key={code}>
            {language}
          </li>
        ))}
      </ul>

      <img src={countryObj.Flag} alt="Country Flag" />
    </div>
  );
};

const Countries = ({ countryList }) => {
  if (countryList.length > 10) {
    return <p>Too Many Countries, specify a filter</p>;
  }

  if (countryList.length < 10 && countryList.length !== 1) {
    return (
      <ul>
        {countryList.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    );
  }

  if (countryList.length === 1) {
    return <CountryDetails country={countryList[0]} />;
  }

  return null;
};

export default Countries;

// Object Format is like this

// {
//     "name": {},
//     "tld": [],
//     "cca2": "KW",
//     "ccn3": "414",
//     "cca3": "KWT",
//     "cioc": "KUW",
//     "independent": true,
//     "status": "officially-assigned",
//     "unMember": true,
//     "currencies": {},
//     "idd": {},
//     "capital": [],
//     "altSpellings": [],
//     "region": "Asia",
//     "subregion": "Western Asia",
//     "languages": {},
//     "translations": {},
//     "latlng": [],
//     "landlocked": false,
//     "borders": [],
//     "area": 17818,
//     "demonyms": {},
//     "flag": "🇰🇼",
//     "maps": {},
//     "population": 4270563,
//     "fifa": "KUW",
//     "car": {},
//     "timezones": [
//     "UTC+03:00"
//     ],
//     "continents": [],
//     "flags": {},
//     "coatOfArms": {},
//     "startOfWeek": "sunday",
//     "capitalInfo": {},
//     "postalCode": {}
//    }

