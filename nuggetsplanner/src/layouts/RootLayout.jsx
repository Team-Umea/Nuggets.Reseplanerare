import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import "../styles/RootLayout.css";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <div>
      <Header></Header>

      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default RootLayout;
