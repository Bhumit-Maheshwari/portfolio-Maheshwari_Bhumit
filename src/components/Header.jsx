function Header({ name, themeColor }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p className="subtitle">Student Portfolio</p>
      <div
        className="accent-line"
        style={{ backgroundColor: themeColor }}
      ></div>
    </header>
  );
}

export default Header;