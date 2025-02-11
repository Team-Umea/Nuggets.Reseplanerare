import { Outlet, NavLink } from "react-router-dom";
import "../styles/RootLayout.css";

function RootLayout() {
  return (
    <div>
      <header>
        <h1>Reseplaneraren</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Hem</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>Om</NavLink>
            </li>
            <li>
              <NavLink to="/tripdetails" className={({ isActive }) => (isActive ? "active" : "")}>Detaljer</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}

export default RootLayout;
