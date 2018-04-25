import React from 'react';
import Aux from '../hoc/Aux';

const Title = props => {
    return (
      <Aux>
        {props.city && <h2>Your city is {props.city}</h2>}
      </Aux>
    );
  }

  export default Title;