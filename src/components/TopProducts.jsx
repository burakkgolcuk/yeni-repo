import React from 'react';

export default function TopProducts() {
  return (
    <section className="products-section" style={{ fontFamily: 'Barlow' }}>
      <div className="container">
        <h2>En Çok Satanlar</h2>
        <div className="products">
          <div className="product">
            <img src="assets/iteration-2/pictures/products/1.png" alt="Product 1" />
            <h4>Terminal Pizza</h4>
            <p>4.9 ⭐ (200)</p>
            <p>60₺</p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
          <div className="product">
            <img src="assets/iteration-2/pictures/products/2.png" alt="Product 2" />
            <h4>Position Pizza</h4>
            <p>4.7 ⭐ (150)</p>
            <p>70₺</p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
          <div className="product">
            <img src="assets/iteration-2/pictures/products/3.png" alt="Product 3" />
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
