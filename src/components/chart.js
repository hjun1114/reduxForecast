import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = function(props){
  return (
    <div>
      <Sparklines height = {120} width = {180} data = {props.temp}>
        <SparklinesLine color={props.color}/>
      </Sparklines>
    </div>
  );
}

export default Chart;
