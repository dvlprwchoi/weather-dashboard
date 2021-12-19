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
  const [isCelcious, setIsCelcious] = useState(false);
  function _unitToggle() {
    setIsCelcious(isCelcious ? false : true);
  }
  // console.log(isCelcious);

  return (
    <>
      <div className="App" theme={isDark ? 'dark' : 'light'}>
        <Header
          _themeToggle={_themeToggle}
          _unitToggle={_unitToggle}
          isDark={isDark}
          isCelcious={isCelcious}
        />
        <Main isCelcious={isCelcious} />
        <Footer />
      </div>
    </>
  );
}

export default App;
