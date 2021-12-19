import { useState } from 'react';
import Carousel from './Carousel/Carousel';
import LocationInput from './LocationInput/LocationInput';
import WeatherOutput from './WeatherOutput/WeatherOutput';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// console.log(WEATHER_API_KEY);

// const weatherLocation = 'austin';
const forecastDays = 3;
const airQuality = 'yes';
const alerts = 'yes';

function Main({ isCelcious }) {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState([]);

  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=${forecastDays}&aqi=${airQuality}&alerts=${alerts}`;
  console.log(API_URL);

  async function getWeather() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setWeather(data);
      // console.log(weather);
    } catch (error) {
      console.error(error);
    }
  }
  // console.log(weather.current.temp_f);
  // const temp_f = weather.current.temp_f;

  function _change(e) {
    setLocation(e.target.value);
  }

  function _submit(e) {
    e.preventDefault();
    getWeather(location);
  }

  return (
    <div className="Main">
      <>
        {/* <div className="weather-icon">
          <img
            className="weather-icon-img"
            src="./android-chrome-192x192.png"
            alt="weather-icon-img"
          />
        </div>
        <div className="temperature">
          <div className="temperature-digit">50</div>
        </div> */}
        <WeatherOutput weather={weather} isCelcious={isCelcious} />
        {/* <div className="location-input">Austin, TX</div> */}
        <LocationInput
          location={location}
          _change={_change}
          _submit={_submit}
        />
        {/* <div className="carousel">1234</div> */}
        <Carousel weather={weather} isCelcious={isCelcious} />
      </>
    </div>
  );
}

export default Main;
