import Carousel from './Carousel/Carousel';
import LocationInput from './LocationInput/LocationInput';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// console.log(WEATHER_API_KEY);

const weatherLocation = 'austin';
const forecastDays = 3;
const airQuality = 'yes';
const alerts = 'yes';

const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${weatherLocation}&days=${forecastDays}&aqi=${airQuality}&alerts=${alerts}`;
// console.log(API_URL);

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function Main() {
  return (
    <div className="Main">
      <>
        <div className="weather-icon">
          <img
            className="weather-icon-img"
            src="./android-chrome-192x192.png"
            alt="weather-icon-img"
          />
        </div>
        <div className="temperature">
          <div className="temperature-digit">73</div>
        </div>
        {/* <div className="location-input">Austin, TX</div> */}
        <LocationInput API_URL={API_URL} />
        {/* <div className="carousel">1234</div> */}
        <Carousel />
      </>
    </div>
  );
}

export default Main;
