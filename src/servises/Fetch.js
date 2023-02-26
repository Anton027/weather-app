import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export const baseFetch = (location) => {
    return axios.get(`${BASE_URL}q=${location}&appid=90792bd8e1024cd9cf8bda710105a342&units=metric`)
}
