import Carousel from './Carousel/Carousel';
import LocationInput from './LocationInput/LocationInput';

function Main() {
  return (
    <div className="Main">
      <>
        <div className="weather-icon">sunny</div>
        <div className="temperature">73</div>
        {/* <div className="location-input">Austin, TX</div> */}
        <LocationInput />
        {/* <div className="carousel">1234</div> */}
        <Carousel />
      </>
    </div>
  );
}

export default Main;
