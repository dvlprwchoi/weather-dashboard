import Carousel from './Carousel/Carousel';
import LocationInput from './LocationInput/LocationInput';

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
        <LocationInput />
        {/* <div className="carousel">1234</div> */}
        <Carousel />
      </>
    </div>
  );
}

export default Main;
