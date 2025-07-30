// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-link">Anasayfa</Link>
      <Link to="/order" className="navbar-link">Sipariş Formu</Link>
      <Link to="/success" className="navbar-link">Sipariş Onayı</Link>
    </nav>
  );
}
