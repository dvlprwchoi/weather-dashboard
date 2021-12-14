function Header() {
  return (
    <div className="Header">
      <img
        className="app-logo"
        src="./android-chrome-192x192.png"
        width="5%"
        alt="app-logo"
      />
      <div className="app-title">Weather Dashboard</div>
      <div className="theme-toggle">Dark/Light</div>
      <div className="unit-toggle">C/F</div>
    </div>
  );
}

export default Header;
