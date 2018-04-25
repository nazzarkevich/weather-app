import React, { Component } from 'react';
import './App.css';

const API_KEY = '60963678e959b53f337ac73043772f2e';

const Title = props => {
  return (
    <h2>Your city is {props.city}</h2>
  );
}

const SearchForm = props => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City"/>
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

  state = {
    city: undefined,
    temp: undefined,
    desc: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();

    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=${API_KEY}`);
    const weatherData = await data.json();
    console.log(weatherData);
    this.setState({
      city: weatherData.name,
      temp: weatherData.main.temp,
      desc: weatherData.weather[0].description
    })
  }

  render() {
    return (
      <div className="App">
        <p>Weather Seeker</p>
        <Title city={this.state.city}/>
        <SearchForm getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
