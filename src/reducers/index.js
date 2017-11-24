import { combineReducers } from 'redux';
import weatherReducer from './reducer_weatherData';

const rootReducer = combineReducers({
  weather: weatherReducer
});

export default rootReducer;
