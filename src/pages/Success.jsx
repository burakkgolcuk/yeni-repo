import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <main style={{ padding: '1rem', fontFamily: "'Barlow', sans-serif", color: '#292929' }}>
      <h1 style={{ color: '#CE2829' }}>Sipariş Onayı</h1>
      <p>Siparişiniz başarıyla alındı. Teşekkür ederiz!</p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          backgroundColor: '#FDC913',
          color: '#292929',
          padding: '0.7rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Anasayfaya Dön
      </Link>
    </main>
  );
}
