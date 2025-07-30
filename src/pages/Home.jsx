import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Teknolojik Yemekler</h1>
        <p>Lezzetin teknolojik hali!</p>
        <Link to="/siparis" className="order-button">
          Hemen Sipariş Ver
        </Link>
      </header>

      <section className="features">
        <h2>Popüler Ürünler</h2>
        <ul>
          <li>Terminal Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Testler Geçti Mutlu Burger</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
