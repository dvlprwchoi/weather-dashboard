function Header() {
  return (
    <div className="Header">
      <div className="titleAndLogo">
        <img
          className="app-logo"
          src="./android-chrome-192x192.png"
          // width="15%"
          alt="app-logo"
        />
        <div className="app-title">Weather Dashboard</div>
      </div>
      <div className="toggles">
        <div className="theme-toggle">D/L</div>
        <div className="unit-toggle">C/F</div>
      </div>
    </div>
  );
}

export default Header;
