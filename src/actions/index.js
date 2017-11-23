import axios from 'axios';
const API_KEY = "5f90250145ecaae34d622ef8078fec26";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'; // Extracting type variable like this is good for refactoring

export function fetchWeather(city){

  const theURL = `${ROOT_URL}&q=${city},us`;
  console.log(theURL);
  const request = axios.get(theURL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
  
}
