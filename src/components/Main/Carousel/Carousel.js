import WeatherDetailCard from '../WeatherDetailCard/WeatherDetailCard';
import Forecast from '../Forecast/Forecast';
import Alert from '../Alert/Alert';

function Carousel({ weather, isCelsius }) {
  return (
    <div className="carousel">
      <div className="carousel-background">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="8000">
              {/* <div className="container"> */}
              <WeatherDetailCard weather={weather} isCelsius={isCelsius} />
              {/* </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="8000">
              {/* <div className="container"> */}
              <Forecast weather={weather} isCelsius={isCelsius} />
              {/* </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="8000">
              {/* <div className="container"> */}
              <Alert weather={weather} />
              {/* </div> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
