import axios from 'axios';
const API_KEY = "5f90250145ecaae34d622ef8078fec26";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER'; // Extracting type variable like this is good for refactoring later on

export function fetchWeather(city){

  const theURL = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(theURL);
  // this request variable at this point only contains a promise. it is NOT an actual data.
  // thus, it needs to be unwrapped by a middleware, redux-promise.

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
