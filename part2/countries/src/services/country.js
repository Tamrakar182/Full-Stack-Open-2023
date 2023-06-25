import axios from 'axios'
import config from './config';
const API_URL = 'https://studies.cs.helsinki.fi/restcountries/api'
const API_KEY = config.API_KEY
const getCountry = (name) => {
    const req = axios.get(`${API_URL}/name/${name}`)
    return req.then(res => res.data)
}

const getAll = () => {
    const req = axios.get(`${API_URL}/all`)
    return req.then(res => res.data)
}

const getWeather = (capital) => {
    const req = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`)
    return req.then(res => res.data)
}

export default {getCountry, getAll, getWeather}
