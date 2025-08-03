// src/components/HomeFooter.jsx
import React from "react";
import logo from "../assets/iteration-1-images/logo.svg";
import "./Footer.css";

export default function HomeFooter() {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo ve İletişim */}
        <div className="footer-section footer-logo">
          <img src={logo} alt="Teknolojik Yemekler" />
          <p>📍 341 Londonderry Road, İstanbul Türkiye</p>
          <p>📧 aciktim@teknolojikyemekler.com</p>
          <p>📞 +90 216 123 45 67</p>
        </div>

        {/* Menü */}
        <div className="footer-section">
          <h4>Hot Menu</h4>
          <p>Terminal Pizza</p>
          <p>5 Kişilik Hackathon Pizza</p>
          <p>useEffect Tavuklu Pizza</p>
          <p>Beyaz Console Frosty</p>
          <p>Testler Geçti Mutlu Burger</p>
          <p>Position Absolute Acı Burger</p>
        </div>

        {/* Instagram */}
        <div className="footer-section">
          <h4>Instagram</h4>
          <div className="insta-gallery">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <img
                key={i}
                src={`/src/assets/iteration-2-images/footer/insta/li-${i}.png`}
                alt={`Insta ${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
      </div>
    </footer>
  );
}
