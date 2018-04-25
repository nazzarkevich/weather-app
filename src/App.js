import React, { Component } from 'react';
import './App.css';

const API_KEY = '60963678e959b53f337ac73043772f2e';

const Title = () => {
  return (
    <h2>City name</h2>
  );
}

const SearchForm = () => {
  return (
    <form>
      <input type="text" name="city" placeholde="City"/>
      <input type="text" name="country" placeholde="Country"/>
      <button>Get Weather</button>
    </form>
  );
}

const Weather = () => {
  return (
    <p>Weather details</p>
  );
}

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const data = await fetch('api.openweathermap.org/data/2.5/weather?q=London');
  }

  render() {
    return (
      <div className="App">
        <p>Weather Seeker</p>
        <Title />
        <SearchForm />
        <Weather />
      </div>
    );
  }
}

export default App;
