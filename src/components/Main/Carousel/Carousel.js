import Forecast from '../Forecast/Forecast';
import WeatherDetailCard from '../WeatherDetailCard/WeatherDetailCard';

function Carousel({ weather, isCelcious }) {
  return (
    <div className="carousel">
      <div className="carousel-background">
        <WeatherDetailCard weather={weather} isCelcious={isCelcious} />
        <Forecast weather={weather} isCelcious={isCelcious} />
      </div>
    </div>
  );
}

export default Carousel;
