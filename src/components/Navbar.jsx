// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/iteration-1-images/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Teknolojik Yemekler" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Anasayfa</Link>
          </li>
          <li>
            <Link to="/order" className={location.pathname === "/order" ? "active" : ""}>Sipariş Formu</Link>
          </li>
          <li>
            <Link to="/success" className={location.pathname === "/success" ? "active" : ""}>Sipariş Onayı</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
