function WeatherOutput({ weather }) {
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
          <div className="temperature-digit">100</div>
        </div>
      </div>
    </>
  );
}

export default WeatherOutput;
