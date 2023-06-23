import countryService from "../services/country";
import { useState, useEffect } from "react";

const CountryDetails = ({ country }) => {
  const [countryObj, setCountryObj] = useState(null);
  const [weatherObj, setWeatherObj] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const singleCountry = await countryService.getCountry(country);
        const countryObj = {
          Name: singleCountry.name.official,
          Capital: singleCountry.capital,
          Area: singleCountry.area,
          Languages: singleCountry.languages,
          Flag: singleCountry.flags.png,
        };
        setCountryObj(countryObj);
      } catch (error) {
        console.log("Error fetching country data:", error);
      }
    };

    if (country) {
      fetchCountryData();
    }
  }, [country]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherData = await countryService.getWeather(countryObj.Capital);
        console.log(weatherData);
        const weatherObj = {
          Temperature: weatherData.main.temp,
          Icon: weatherData.weather[0].icon,
          Wind: weatherData.wind.speed,
        };
        setWeatherObj(weatherObj);
      } catch (error) {
        console.log("Error fetching weather data:", error);
      }
    };
    if (countryObj && countryObj.Capital) {
      fetchWeatherData();
    }
  }, [countryObj]);

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
          <li key={code}>{language}</li>
        ))}
      </ul>

      <img src={countryObj.Flag} alt="Country Flag" />

      {!weatherObj ? (
        <div>Loading weather</div>
      ) : (
        <div>
          <h2>Weather in {countryObj.Capital}</h2>
          <p>Temperature: {weatherObj.Temperature} Celsius</p>
          <img src={`https://openweathermap.org/img/wn/${weatherObj.Icon}@2x.png`} alt="Weather Icon" />
          <p>wind: {weatherObj.Wind} m/s</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;

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
