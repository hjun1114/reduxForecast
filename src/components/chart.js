import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function kalvinToCelsius(kalvin){
  const celsius = kalvin - 273;
  return celsius;
}

function average(data){
  return _.round(_.sum(data)/data.length)
}


const Chart = function(props){
  return (
    <div>
      <Sparklines height = {120} width = {180} data = {props.data}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type ="avg"/>
      </Sparklines>
      <div>{average(props.data) + props.units}</div>
    </div>
  );
}

export default Chart;
