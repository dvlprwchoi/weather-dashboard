// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
// require('dotenv').config();

// const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// // console.log(WEATHER_API_KEY);

// const weatherLocation = 'austin';
// const forecastDays = 3;
// const airQuality = 'yes';
// const alerts = 'yes';

// const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${weatherLocation}&days=${forecastDays}&aqi=${airQuality}&alerts=${alerts}`;
// // console.log(API_URL);

// fetch(API_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
