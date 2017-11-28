import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends React.Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temp = cityData.list.map(weather=>weather.main.temp);
    const pressure = cityData.list.map(weather=>weather.main.pressure);
    const humidity = cityData.list.map(weather=>weather.main.humidity);

    return(
      <tr key = {name}>
        <td>{name}</td>
        <td>
          <Chart data={temp} color="blue" units="K" />
        </td>
        <td>
          <Chart data={pressure} color="red" units="hPa" />
        </td>
        <td>
          <Chart data={humidity} color="orange" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Kalvin)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return { weather: state.weather};
}
export default connect(mapStateToProps)(WeatherList);
