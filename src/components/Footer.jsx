// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

import insta0 from "../assets/iteration-2-images/footer/insta/li-0.png";
import insta1 from "../assets/iteration-2-images/footer/insta/li-1.png";
import insta2 from "../assets/iteration-2-images/footer/insta/li-2.png";
import insta3 from "../assets/iteration-2-images/footer/insta/li-3.png";
import insta4 from "../assets/iteration-2-images/footer/insta/li-4.png";
import insta5 from "../assets/iteration-2-images/footer/insta/li-5.png";

export default function Footer() {
  const instaImages = [insta0, insta1, insta2, insta3, insta4, insta5];

  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>İletişim</h4>
        <p>📍 İstanbul, Türkiye</p>
        <p>📞 +90 555 555 5555</p>
        <p>📧 info@teknolojik.com</p>
      </div>

      <div className="footer-section">
        <h4>Hızlı Linkler</h4>
        <p>Anasayfa</p>
        <p>Sipariş Formu</p>
        <p>Sipariş Onayı</p>
      </div>

      <div className="footer-section">
        <h4>Instagram</h4>
        <div className="insta-gallery">
          {instaImages.map((img, index) => (
            <img key={index} src={img} alt={`insta-${index}`} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
