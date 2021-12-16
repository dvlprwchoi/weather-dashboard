function WeatherOutput({ weather }) {
  if (weather.length === 0) {
    return (
      <>
        <div className="weather-output">
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
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="weather-output">
          <div className="weather-icon">
            <img
              className="weather-icon-img"
              src="./android-chrome-192x192.png"
              alt="weather-icon-img"
            />
          </div>
          <div className="temperature">
            <div className="temperature-digit">{weather.current.temp_f}</div>
          </div>
        </div>
      </>
    );
  }
}

export default WeatherOutput;
