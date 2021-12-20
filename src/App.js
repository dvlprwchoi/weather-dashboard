import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
// require('dotenv').config();

function App() {
  /////////////////
  // Theme toggle
  /////////////////
  const [isDark, setIsDark] = useState(false);
  function _themeToggle() {
    setIsDark(isDark ? false : true);
  }
  // console.log(isDark);

  /////////////////
  // Unit toggle
  /////////////////
  const [isCelsius, setIsCelsius] = useState(false);
  function _unitToggle() {
    setIsCelsius(isCelsius ? false : true);
  }
  // console.log(isCelsius);

  return (
    <>
      <div className="App" theme={isDark ? 'dark' : 'light'}>
        <Header
          _themeToggle={_themeToggle}
          _unitToggle={_unitToggle}
          isDark={isDark}
          isCelsius={isCelsius}
        />
        <Main isCelsius={isCelsius} />
        <Footer />
      </div>
    </>
  );
}

export default App;
