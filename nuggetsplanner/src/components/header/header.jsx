import "../../styles/Header.css";
import { NavLink } from "react-router-dom";
import icon from "../../assets/Icon.png";
import DarkModeToggle from "../darkmode/darkModeButton"

function Header() {
  return (
    <header>
      <img className="icon" src={icon} alt="Reseplanerarens Ikon" />
      <h1 className="mainH1">Reseplaneraren</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Om
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tripdetails"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Detaljer
            </NavLink>
          </li>
        </ul>
      </nav>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
