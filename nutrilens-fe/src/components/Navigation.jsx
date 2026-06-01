import React from "react"; //eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";
import "../styles/navigation.css";

function Navigation() {
  return (
    <nav className="nutrilens-navbar">
      <div className="nav-container">
        <Link to="/">
          <img src="./image/NutriLens.png" alt="nutrilens-logo" />
        </Link>
        <ul>
          <li className="nav-list">
            <Link to="/" className="nav-link">
              Beranda
            </Link>
          </li>
          <li className="nav-list">
            <a href="#cara-kerja" className="nav-link">
              Cara Kerja
            </a>
          </li>
        </ul>
        <Link to="/coba-gratis" className="nutrilens-btn">
          Coba Gratis
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
