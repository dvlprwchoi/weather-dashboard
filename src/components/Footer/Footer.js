function Footer() {
  return (
    <div className="Footer">
      <div className="footer-content">
        <p className="main-footer">
          Built by{' '}
          <a
            className="portfolio-link"
            href="https://woosikchoi.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            WOO-SIK CHOI
          </a>{' '}
          in December 2021
        </p>
        <p className="credit">
          Powered by
          <a
            className="credit-link"
            href="https://www.weatherapi.com/"
            title="Weather API"
          >
            WeatherAPI.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
