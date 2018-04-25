import React from 'react';

const SearchForm = props => {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City"/>
        <button>Get Weather</button>
      </form>
    );
  }

  export default SearchForm;