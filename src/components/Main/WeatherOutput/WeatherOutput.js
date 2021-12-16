function WeatherOutput({ weather }) {
  if (weather.length === 0) {
    return (
      <>
        {/* <div className="weather-output"> */}
        <div className="weather-icon">
          <img
            className="weather-icon-img"
            src="./android-chrome-192x192.png"
            alt="weather-icon-img"
          />
        </div>
        <div className="temperature">
          <div className="temperature-digit">???</div>
        </div>
        {/* </div> */}
      </>
    );
  } else {
    return (
      <>
        {/* <div className="weather-output"> */}
        <div className="weather-icon">
          <img
            className="weather-icon-img"
            src={weather.current.condition.icon}
            alt="weather-icon-img"
          />
        </div>
        <div className="temperature">
          <div className="temperature-digit">
            {weather.current.temp_f + ' F'}
          </div>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default WeatherOutput;
