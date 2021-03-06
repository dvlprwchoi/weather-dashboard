function Forecast({ weather, isCelsius }) {
  if (weather.length === 0) {
    return (
      <>
        <div className="no-forecast">
          <p>No result to show. Please find a city first!</p>
        </div>
      </>
    );
  } else if (weather.length !== 0 && isCelsius === false) {
    return (
      <>
        <div className="forecast">
          <div className="dayOne">
            <p>{weather.forecast.forecastday[0].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[0].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[0].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[0].day.avgtemp_f + ' ℉'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[0].day.avghumidity + ' %'}
            </p>
          </div>
          <div className="dayTwo">
            <p>{weather.forecast.forecastday[1].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[1].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[1].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[1].day.avgtemp_f + ' ℉'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[1].day.avghumidity + ' %'}
            </p>
          </div>
          <div className="dayThree">
            <p>{weather.forecast.forecastday[2].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[2].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[2].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[2].day.avgtemp_f + ' ℉'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[2].day.avghumidity + ' %'}
            </p>
          </div>
        </div>
      </>
    );
  } else if (weather.length !== 0 && isCelsius === true) {
    return (
      <>
        <div className="forecast">
          <div className="dayOne">
            <p>{weather.forecast.forecastday[0].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[0].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[0].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[0].day.avgtemp_c + ' ℃'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[0].day.avghumidity + ' %'}
            </p>
          </div>
          <div className="dayTwo">
            <p>{weather.forecast.forecastday[1].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[1].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[1].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[1].day.avgtemp_c + ' ℃'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[1].day.avghumidity + ' %'}
            </p>
          </div>
          <div className="dayThree">
            <p>{weather.forecast.forecastday[2].date}</p>
            <p>
              <img
                src={weather.forecast.forecastday[2].day.condition.icon}
                alt="weather-icon-img"
              />
            </p>
            <p>{weather.forecast.forecastday[2].day.condition.text}</p>
            <p>
              Average Temp:{' '}
              {weather.forecast.forecastday[2].day.avgtemp_c + ' ℃'}
            </p>
            <p>
              Average Humidity:{' '}
              {weather.forecast.forecastday[2].day.avghumidity + ' %'}
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Forecast;
