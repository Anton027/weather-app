import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export const baseFetch = (location) => {
    return axios.get(`${BASE_URL}q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
}
