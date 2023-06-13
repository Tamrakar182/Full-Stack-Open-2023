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

export default {getCountry, getAll}
