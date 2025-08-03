// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import banner from "../assets/iteration-1-images/home-banner.png";

export default function Home() {
  return (
    <div className="home-container">
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-content">
          <span className="tagline">fırsatı kaçırma</span>
          <h3>KOD ACIKTIRIR</h3>
          <h1>PIZZA, DOYURUR</h1>
          <Link to="/order">
            <button className="btn">ACIKTIM</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
