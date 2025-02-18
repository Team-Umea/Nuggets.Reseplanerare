import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "../../styles/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Reseplaneraren</h4>
          <ul className="footer-list">
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
        </div>

        <div className="footer-section">
          <h4>Följ oss</h4>
          <div className="footer-social">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-section footer-copyright">
          <p>
            © {new Date().getFullYear()} Reseplaneraren. Alla rättigheter
            förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
