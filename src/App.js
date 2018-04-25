import React, { Component } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Title from './components/Title';
import Weather from './components/Weather';

// Please don't judge me
const API_KEY = '60963678e959b53f337ac73043772f2e';

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
      desc: weatherData.weather[0].description,
    })
  }

  getCityImages = async () => {
    const city = this.state.city.toLowerCase();
    const api_data = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`);
    const imageData = await api_data.json();
    const cityImage = imageData.photos[0].image.mobile;
    this.setState({
      img: cityImage
    })
  }

  toCelcius = (f) => {
    return Math.round(f-273.15);
  }

  render() {
    return (
      <div className="App">
        <p onClick={this.getCityImages}>Weather Seeker</p>
        <img src={this.state.img} alt="" width='160px'/>

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
