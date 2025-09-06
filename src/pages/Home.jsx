// src/components/Home.jsx
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

// ICONLAR
import icon1 from "../assets/iteration-2-images/icons/1.svg";
import icon2 from "../assets/iteration-2-images/icons/2.svg";
import icon3 from "../assets/iteration-2-images/icons/3.svg";
import icon4 from "../assets/iteration-2-images/icons/4.svg";
import icon5 from "../assets/iteration-2-images/icons/5.svg";
import icon6 from "../assets/iteration-2-images/icons/6.svg";

// KART GÖRSELLERİ (CTA)
import kart1 from "../assets/iteration-2-images/cta/kart-1.png";
import kart2 from "../assets/iteration-2-images/cta/kart-2.png";
import kart3 from "../assets/iteration-2-images/cta/kart-3.png";

// ÜRÜN GÖRSELLERİ
import food1 from "../assets/iteration-2-images/pictures/food-1.png";
import food2 from "../assets/iteration-2-images/pictures/food-2.png";
import food3 from "../assets/iteration-2-images/pictures/food-3.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="banner">
        <div className="container">
          <h1 className="logo-title">Teknolojik Yemekler</h1>
          <h3 className="tagline">fırsatı kaçırma</h3>
          <h1 className="main-title">
            KOD ACIKTIRIR
            <br />
            PİZZA, DOYURUR
          </h1>
          <button className="btn" onClick={() => navigate("/order")}>
            ACIKTIM
          </button>
        </div>
      </header>

      {/* Kategoriler */}
      <nav className="categories">
        <span className="active">
          <img src={icon1} alt="Ramen" /> Yeni! Kore
        </span>
        <span>
          <img src={icon2} alt="Pizza" /> Pizza
        </span>
        <span>
          <img src={icon3} alt="Burger" /> Burger
        </span>
        <span>
          <img src={icon4} alt="Fries" /> Kızartmalar
        </span>
        <span>
          <img src={icon5} alt="Fast Food" /> Fast food
        </span>
        <span>
          <img src={icon6} alt="Drinks" /> Gazlı İçecek
        </span>
      </nav>

      {/* Öne çıkan teklifler (arka planı import ile veriyoruz) */}
      <section className="offer-section">
        <div
          className="offer-card"
          style={{ backgroundImage: `url(${kart1})` }}
        >
          <div className="offer-text">
            <h2>Özel Lezzetus</h2>
            <p>Position:Absolute Acı Burger</p>
            <button className="btn">Sipariş Ver</button>
          </div>
        </div>

        <div className="offer-right">
          <div
            className="offer-card black"
            style={{ backgroundImage: `url(${kart2})` }}
          >
            <div className="offer-text">
              <h3>Hackathon Burger Menü</h3>
              <button className="btn small">Sipariş Ver</button>
            </div>
          </div>

          <div
            className="offer-card yellow"
            style={{ backgroundImage: `url(${kart3})` }}
          >
            <div className="offer-text">
              <p>
                <span style={{ color: "red", fontWeight: 400 }}>Çooook</span>{" "}
                hızlı<br />npm gibi kurye
              </p>
              <button className="btn small">Sipariş Ver</button>
            </div>
          </div>
        </div>
      </section>

      {/* En çok satanlar */}
      <section className="top-products">
        <div className="section-subtitle">en çok paketlenen menüler</div>
        <h2 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="categories">
          <span className="active">
            <img src={icon1} alt="Ramen Icon" /> Ramen
          </span>
          <span style={{ backgroundColor: "black", color: "white" }}>
            <img src={icon2} alt="Pizza Icon" /> Pizza
          </span>
          <span>
            <img src={icon3} alt="Burger Icon" /> Burger
          </span>
          <span>
            <img src={icon4} alt="Fries Icon" /> French fries
          </span>
          <span>
            <img src={icon5} alt="Fast Food Icon" /> Fast food
          </span>
          <span>
            <img src={icon6} alt="Soft Drinks Icon" /> Soft drinks
          </span>
        </div>

        <div className="product-list">
          <div className="product-card">
            <img src={food1} alt="Terminal Pizza" />
            <h4>Terminal Pizza</h4>
            <div className="product-info">
              <span>4.9</span>
              <span>(200)</span>
              <span>60₺</span>
            </div>
          </div>

          <div className="product-card">
            <img src={food2} alt="Acı Pizza" />
            <h4>Position Absolute Acı Pizza</h4>
            <div className="product-info">
              <span>4.9</span>
              <span>(200)</span>
              <span>60₺</span>
            </div>
          </div>

          <div className="product-card">
            <img src={food3} alt="Tavuklu Burger" />
            <h4>useEffect Tavuklu Burger</h4>
            <div className="product-info">
              <span>4.9</span>
              <span>(200)</span>
              <span>60₺</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
