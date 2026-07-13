import { NavLink } from "react-router-dom";

function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Home
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
          Contact
        </NavLink>
      </div>

      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default NavBar;