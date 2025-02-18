import "../../styles/Header.css";
import { NavLink } from "react-router-dom";
import icon from "../../assets/Icon.png";
function Header() {
  return (
    <header>
      <h1 className="mainH1">Reseplaneraren x2</h1>
      <img className="icon" src={icon} alt="Reseplanerarens Ikon" />
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
    </header>
  );
}

export default Header;
