import axios from 'axios'
const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api'

const getCountry = (name) => {
    const req = axios.get(`${API_URL}/name/${name}`)
    return req.then(res => res.data)
}

const getAll = () => {
    const req = axios.get(`${API_URL}/all`)
    return req.then(res => res.data)
}


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


export default {getCountry, getAll}
