import React from 'react';
import Aux from '../hoc/Aux';

const Weather = props => {
    return (
      <div className='weather-details'>
        {props.temp && <p>Temperature C&#176;: <span className="red-text">{props.convertToCelcius(props.temp)}&#176;</span></p>}
        {props.desc && <p>Conditions: <span className="red-text">{props.desc}</span></p>}
      </div>
  
    );
  }

export default Weather;