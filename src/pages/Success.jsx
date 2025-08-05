import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";
import logo from "../assets/iteration-1-images/logo.svg";

export default function Success() {
  const { state } = useLocation();
  const {
    name,
    size,
    dough,
    toppings = [],
    notes,
    quantity,
    totalPrice, // ✅ artık direkt bu var
  } = state || {};

  return (
    <div className="success-container">
      <img src={logo} alt="Teknolojik Yemekler" className="success-logo" />
      <h1>TEBRİKLER!</h1>
      <p>SİPARİŞİNİZ ALINDI!</p>

      <div className="order-summary-box">
        <h2>Sipariş Özeti</h2>
        <ul>
          <li><strong>İsim:</strong> {name}</li>
          <li><strong>Boyut:</strong> {size}</li>
          <li><strong>Hamur:</strong> {dough}</li>
          <li><strong>Ek Malzemeler:</strong> {toppings.length > 0 ? toppings.join(", ") : "Yok"}</li>
          <li><strong>Not:</strong> {notes || "Yok"}</li>
          <li><strong>Adet:</strong> {quantity}</li>
          <li className="total-price"><strong>Toplam Tutar:</strong> {totalPrice}₺</li>
        </ul>
      </div>
    </div>
  );
}
