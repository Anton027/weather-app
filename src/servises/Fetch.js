import axios from 'axios';

const KEY = '5ef80bdbb92d19bd64dde17befa020aa';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export const baseFetch = (location) => {
    return axios.get(`${BASE_URL}q=${location}&appid=${KEY}&units=metric`)
}
