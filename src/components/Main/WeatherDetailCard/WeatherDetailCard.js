function WeatherDetailCard({ weather }) {
  if (weather.length === 0) {
    return (
      <>
        <div className="weather-detail-card">
          <p>No result to show. Please find a city first!</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="weather-detail-card">
          <div className="city-name">City: {weather.location.name}</div>
          <div className="state-name">State: {weather.location.region}</div>
          <div className="condition-text">
            Condition: {weather.current.condition.text}
          </div>
          <div className="feelslike">
            Feels like: {weather.current.feelslike_f + ' F'}
          </div>
        </div>
      </>
    );
  }
}

export default WeatherDetailCard;