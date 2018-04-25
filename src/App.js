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

    const city = e.target.city.value.toLowerCase();
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const weatherData = await data.json();

    // request for city image
    const api_data = await fetch(`https://api.teleport.org/api/urban_areas/slug:${city}/images/`);
    const imageData = await api_data.json();
    const cityImage = imageData.photos[0].image.mobile;

    if(city) {
      this.setState({
        city: weatherData.name,
        temp: weatherData.main.temp,
        desc: weatherData.weather[0].description,
        img: cityImage
      })
    } else {
      this.setState({
        error: 'Please enter city.'
      })
    }


  }

  convertToCelcius = f => {
    return Math.round(f-273.15);
  }

  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-6">
            <div>
              <img className="img-responsive" src={this.state.img} alt={this.state.city}/>
            </div>
          </div>
          <div className="col-sm-6">
            <p className="header">Weather Seeker</p>
            <SearchForm getWeather={this.getWeather}/>
            <Title city={this.state.city}/>
            <Weather 
              convertToCelcius={this.convertToCelcius}
              temp={this.state.temp}
              desc={this.state.desc}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
