import React, { Component } from 'react';
import './App.css';

// Please don't judge me
const API_KEY = '60963678e959b53f337ac73043772f2e';

const Title = props => {
  return (
    <div>
      {props.city && <h2>Your city is {props.city}</h2>}
    </div>
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

const Weather = props => {
  return (
    <div>
      {props.temp && props.desc && <p>Weather details</p>}
      {props.temp && <p>Temperature C&#176;: {props.toCelcius(props.temp)}&#176;</p>}
      {props.desc && <p>Descripiton: {props.desc}</p>}
    </div>

  );
}

class App extends Component {
  state = {
    city: '',
    temp: '',
    desc: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const weatherData = await data.json();

    this.setState({
      city: weatherData.name,
      temp: weatherData.main.temp,
      desc: weatherData.weather[0].description
    })
  }

  toCelcius = (f) => {
    return Math.round(f-273.15);
  }

  render() {
    return (
      <div className="App">
        <p>Weather Seeker</p>
        <SearchForm getWeather={this.getWeather}/>
        <Title city={this.state.city}/>
        <Weather 
          toCelcius={this.toCelcius}
          temp={this.state.temp}
          desc={this.state.desc}
        />
      </div>
    );
  }
}

export default App;
