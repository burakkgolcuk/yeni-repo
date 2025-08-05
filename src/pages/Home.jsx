import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

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

      <nav className="categories">
        <span className="active">
          <img src="src\assets\iteration-2-images\icons\1.svg" alt="Ramen" /> Yeni! Kore
        </span>
        <span>
          <img src="src\assets\iteration-2-images\icons\2.svg" alt="Pizza" /> Pizza
        </span>
        <span>
          <img src="src\assets\iteration-2-images\icons\3.svg" alt="Burger" /> Burger
        </span>
        <span>
          <img src="src\assets\iteration-2-images\icons\4.svg" alt="Fries" /> Kızartmalar
        </span>
        <span>
          <img src="src\assets\iteration-2-images\icons\5.svg" alt="Fast Food" /> Fast food
        </span>
        <span>
          <img src="src\assets\iteration-2-images\icons\6.svg" alt="Drinks" /> Gazlı İçecek
        </span>
      </nav>

      <section className="offer-section">
        <div
          className="offer-card"
          style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-1.png')" }}

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
            style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-2.png')" }}

          >
            <div className="offer-text">
              <h3>Hackathon Burger Menü</h3>
              <button className="btn small">Sipariş Ver</button>
            </div>
          </div>

          <div
            className="offer-card yellow"
            style={{ backgroundImage: "url('/images/iteration-2-images/cta/kart-3.png')" }}


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

      <section className="top-products">
        <div className="section-subtitle">en çok paketlenen menüler</div>
        <h2 className="section-title">Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="categories">
          <span className="active">
            <img src="src\assets\iteration-2-images\icons\1.svg" alt="Ramen Icon" /> Ramen
          </span>
          <span style={{ backgroundColor: "black", color: "white" }}>
            <img src="/src\assets\iteration-2-images\icons\2.svg" alt="Pizza Icon" /> Pizza
          </span>
          <span>
            <img src="src\assets\iteration-2-images\icons\3.svg" alt="Burger Icon" /> Burger
          </span>
          <span>
            <img src="/src\assets\iteration-2-images\icons\4.svg" alt="Fries Icon" /> French fries
          </span>
          <span>
            <img src="src\assets\iteration-2-images\icons\5.svg" alt="Fast Food Icon" /> Fast food
          </span>
          <span>
            <img src="src\assets\iteration-2-images\icons\6.svg" alt="Soft Drinks Icon" /> Soft drinks
          </span>
        </div>

        <div className="product-list">
          <div className="product-card">
            <img src="src\assets\iteration-2-images\pictures\food-1.png" alt="Terminal Pizza" />
            <h4>Terminal Pizza</h4>
            <div className="product-info">
              <span>4.9</span>
              <span>(200)</span>
              <span>60₺</span>
            </div>
          </div>

          <div className="product-card">
            <img src="src\assets\iteration-2-images\pictures\food-2.png" alt="Acı Pizza" />
            <h4>Position Absolute Acı Pizza</h4>
            <div className="product-info">
              <span>4.9</span>
              <span>(200)</span>
              <span>60₺</span>
            </div>
          </div>

          <div className="product-card">
            <img src="src\assets\iteration-2-images\pictures\food-3.png" alt="Tavuklu Burger" />
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
