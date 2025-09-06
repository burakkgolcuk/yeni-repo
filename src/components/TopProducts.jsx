// src/components/TopProducts.jsx
import React from 'react';
import p1 from "../assets/iteration-2/pictures/products/1.png";
import p2 from "../assets/iteration-2/pictures/products/2.png";
import p3 from "../assets/iteration-2/pictures/products/3.png";

export default function TopProducts() {
  return (
    <section className="products-section" style={{ fontFamily: 'Barlow' }}>
      <div className="container">
        <h2>En Çok Satanlar</h2>
        <div className="products">
          <div className="product">
            <img src={p1} alt="Product 1" />
            <h4>Terminal Pizza</h4>
            <p>4.9 ⭐ (200)</p>
            <p>60₺</p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
          <div className="product">
            <img src={p2} alt="Product 2" />
            <h4>Position Pizza</h4>
            <p>4.7 ⭐ (150)</p>
            <p>70₺</p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
          <div className="product">
            <img src={p3} alt="Product 3" />
            <h4>Relative Burger</h4>
            <p>4.8 ⭐ (180)</p>
            <p>55₺</p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </section>
  );
}
