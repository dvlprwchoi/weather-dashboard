import WeatherDetailCard from '../WeatherDetailCard/WeatherDetailCard';

function Carousel({ weather }) {
  return (
    <div className="carousel">
      <div className="carousel-background">
        <WeatherDetailCard weather={weather} />
      </div>
    </div>
  );
}

export default Carousel;
