import React from 'react';

const SearchForm = props => {
    return (
      <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City" required/>
        <button className="myBtn">Get Weather</button>
      </form>
    );
  }

  export default SearchForm;