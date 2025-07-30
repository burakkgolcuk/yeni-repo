import React from 'react';

export default function OfferSection() {
  return (
    <section className="offer-section" style={{ fontFamily: 'Barlow' }}>
      <div className="container">
        <h2>Öne Çıkan Lezzet</h2>
        <div className="offer">
          <img
            src="assets/iteration-2/pictures/cta/kart-1.png"
            alt="Teknolojik Pizza"
          />
          <div className="content">
            <h3>Position Absolute Acı Pizza</h3>
            <p>
              Frontend Dev olarak zor günler geçiriyorsan bu pizza tam sana göre.
              Hem acı, hem de bol malzemeli. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <button className="btn">SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </section>
  );
}
