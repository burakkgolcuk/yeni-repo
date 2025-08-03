import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeFooter from './components/HomeFooter'; // sadece anasayfa için

import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';

import './style.css';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/success" element={<Success />} />
      </Routes>

      {/* 🔥 Footer sadece anasayfada olacak */}
      {isHomePage && <HomeFooter />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
