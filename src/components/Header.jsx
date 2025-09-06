// src/components/Header.jsx
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="banner">
      <div className="container">
        <h1 className="title">Teknolojik Yemekler</h1>
        <h3 className="subtitle">fırsatı kaçırma</h3>
        <h1 className="main-slogan">KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>
        <button className="btn-order">ACIKTIM</button>
      </div>
    </header>
  );
}
