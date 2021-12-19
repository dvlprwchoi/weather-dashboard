function Header({ _themeToggle, _unitToggle }) {
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
          <button className="theme-toggle-button" onClick={_themeToggle}>
            Theme
          </button>
        </div>
        <div className="unit-toggle">
          <button className="unit-toggle-button" onClick={_unitToggle}>
            C/F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
