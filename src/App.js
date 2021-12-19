import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.css';
// require('dotenv').config();

function App() {
  const [isDark, setIsDark] = useState(false);

  function _themeToggle() {
    setIsDark(isDark ? false : true);
  }
  // console.log(isDark);

  return (
    <>
      <div className="App" theme={isDark ? 'dark' : 'light'}>
        <Header _themeToggle={_themeToggle} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
