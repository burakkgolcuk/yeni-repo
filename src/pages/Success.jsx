import React from "react";
import "./Success.css";
import logo from "../assets/iteration-1-images/logo.svg";

export default function Success() {
  return (
    <div className="success-container">
      <img src={logo} alt="Teknolojik Yemekler" className="success-logo" />
      <h1>TEBRİKLER!</h1>
      <p>SİPARİŞİNİZ ALINDI!</p>
    </div>
  );
}
