function Alert({ weather }) {
  if (weather.length === 0) {
    return (
      <>
        <div className="no-alert">
          <p>No result to show. Please find a city first!</p>
        </div>
      </>
    );
  } else if (weather.alerts.alert.length === 0) {
    return (
      <>
        <div className="no-alert">
          <p>No alert available.</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="alert">
          <div className="alert-event">
            Event: {weather.alerts.alert[0].event}
          </div>
          <div className="alert-headline">
            Headline: {weather.alerts.alert[0].headline}
          </div>
          <div className="alert-description">
            Description: {weather.alerts.alert[0].desc}
          </div>
          <div className="alert-effective">
            Effective: {weather.alerts.alert[0].effective}
          </div>
          <div className="alert-expires">
            Expires: {weather.alerts.alert[0].expires}
          </div>
        </div>
      </>
    );
  }
}

export default Alert;
