function Header({ _themeToggle, _unitToggle, isDark, isCelsius }) {
  let themeButtonText = '';
  if (isDark) {
    themeButtonText = 'Light Mode';
  } else {
    themeButtonText = 'Dark Mode';
  }
  let unitButtonText = '';
  if (isCelsius) {
    unitButtonText = 'Fahrenheit ℉';
  } else {
    unitButtonText = 'Celsius ℃';
  }
  return (
    <div className="Header">
      {/* <div className="titleAndLogo"> */}
      <div className="app-logo">
        <img
          // className="app-logo"
          src="./android-chrome-192x192.png"
          // width="15%"
          alt="app-logo"
        />
      </div>
      <div className="app-title">Weather Dashboard</div>
      {/* </div> */}
      <div className="toggles">
        <div className="theme-toggle">
          <button className="theme-toggle-button button" onClick={_themeToggle}>
            {themeButtonText}
          </button>
        </div>
        <div className="unit-toggle">
          <button className="unit-toggle-button button" onClick={_unitToggle}>
            {unitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
