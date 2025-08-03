import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

export default function Order() {
  const navigate = useNavigate();
  const basePrice = 85.5;
  const toppingPrice = 5;

  const [formData, setFormData] = useState({
    name: "",
    size: "",
    dough: "",
    toppings: [],
    notes: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        toppings: checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((t) => t !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleQuantity = (type) => {
    setFormData((prev) => {
      let newQty = type === "increase" ? prev.quantity + 1 : prev.quantity - 1;
      if (newQty < 1) newQty = 1;
      return { ...prev, quantity: newQty };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sipariş Verildi:", formData);
    navigate("/success", { state: formData });
  };

  const selectedToppingsPrice = formData.toppings.length * toppingPrice;
  const totalPrice = (basePrice + selectedToppingsPrice) * formData.quantity;

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h1>Position Absolute Acı Pizza</h1>
      <div className="pizza-meta">
        <span className="price">{basePrice.toFixed(2)}₺</span>
        <span className="rating"> 4.9 (200)</span>
      </div>
      <p className="desc">
        FrontEnd Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
      </p>

      {/* ✅ Boyut ve Hamur Seç yan yana */}
      <div className="form-row">
        <div className="form-group">
          <label>Boyut Seç<span>*</span></label>
          <div className="radio-group vertical">
            {["Küçük", "Orta", "Büyük"].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={handleChange}
                  required
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Hamur Seç<span>*</span></label>
          <select name="dough" value={formData.dough} onChange={handleChange} required>
            <option value="">Hamur Kalınlığı Seç</option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
        </div>
      </div>

      {/* ✅ Ek Malzemeler */}
      <div className="form-group">
        <label>Ek Malzemeler</label>
        <p className="topping-limit">En fazla 10 malzeme seçebilirsiniz. <strong>5₺</strong></p>
        <div className="checkbox-group">
          {[
            "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan",
            "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"
          ].map((topping) => (
            <label key={topping}>
              <input
                type="checkbox"
                name="toppings"
                value={topping}
                checked={formData.toppings.includes(topping)}
                onChange={handleChange}
                disabled={
                  !formData.toppings.includes(topping) &&
                  formData.toppings.length >= 10
                }
              />
              {topping}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Notlar */}
      <div className="form-group">
        <label>Sipariş Notu</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Siparişine eklemek istediğin bir not var mı?"
        ></textarea>
      </div>

      {/* ✅ Sipariş Özeti */}
      <div className="order-summary">
        <div className="adet-group">
          <label>Adet:</label>
          <div className="quantity-buttons">
            <button type="button" onClick={() => handleQuantity("decrease")}>-</button>
            <span>{formData.quantity}</span>
            <button type="button" onClick={() => handleQuantity("increase")}>+</button>
          </div>
        </div>

        <div className="summary">
          <p>Seçimler: <strong>{selectedToppingsPrice.toFixed(2)}₺</strong></p>
          <p>Sipariş Toplamı: <strong>{totalPrice.toFixed(2)}₺</strong></p>
        </div>

        <button className="order-button" type="submit">Sipariş Ver</button>
      </div>
    </form>
  );
}
