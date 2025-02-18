import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/header/header";
import "../styles/RootLayout.css";

function RootLayout() {
  return (
    <div>
      <Header></Header>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}

export default RootLayout;
