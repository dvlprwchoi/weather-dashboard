# WEATHER DASHBOARD

Weather Dashboard is a single page web application built with ReactJS and 3rd party weather API. A user can get weather information by typing a city name or a zip code. This app has a carousel view that displays weather detail page, 3 days forecast, and weather alert messages. This app has a mobile responsive design depends on a device's screen size. It also features toggling dark/light mode and toggling celsius/fahrenheit function.

# Preview

Responsive design depends on device's screen size

<p align = 'center'>
<img align = 'center' src='https://raw.githubusercontent.com/dvlprwchoi/weather-dashboard/main/src/img/weather-dashboard-preview-screenshot-20211219.png' width='90%' alt='Weather Dashboard screenshot' />
</p>

# Technologies used

- ReactJS
- JavaScript
- HTML
- CSS

# Deployment

- Netlify

# Installation

Visit https://www.weatherapi.com/ and get an API key.

```shell
Download the repo using git
git clone https://github.com/dvlprwchoi/weather-dashboard.git
```

Navigate into the site's directory and install dependencies.

```shell
cd weather-dashboard
yarn install
```

Create .env file in your local directory and put your API key as following code.

```shell
REACT_APP_WEATHER_API_KEY = YOUR_API_KEY
```

Start the Server.

```shell
yarn start
```

**Open the source code and start editing!**
Your site is now running at `http://localhost:3000`!

### Links

- GitHub URL: [Github](https://github.com/dvlprwchoi/weather-dashboard)
- Live Site URL: [Live Site](https://woosik-weather-dashboard.netlify.app/)
