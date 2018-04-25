import React from 'react';
import Aux from '../hoc/Aux';

const Weather = props => {
    return (
      <Aux>
        {props.temp && props.desc && <p>Weather details</p>}
        {props.temp && <p>Temperature C&#176;: {props.toCelcius(props.temp)}&#176;</p>}
        {props.desc && <p>Descripiton: {props.desc}</p>}
      </Aux>
  
    );
  }

export default Weather;