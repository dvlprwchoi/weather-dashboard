import WeatherDetailCard from '../WeatherDetailCard/WeatherDetailCard';

function Carousel({ weather, isCelcious }) {
  return (
    <div className="carousel">
      <div className="carousel-background">
        <WeatherDetailCard weather={weather} isCelcious={isCelcious} />
      </div>
    </div>
  );
}

export default Carousel;
