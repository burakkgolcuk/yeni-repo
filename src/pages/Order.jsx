import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Order() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    isim: '',
    size: '',
    pizzaType: '',
    toppings: [],
    notlar: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        toppings: checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://reqres.in/api/pizza', formData)
      .then((res) => {
        console.log('POST başarılı:', res.data);
        navigate('/success');
      })
      .catch((err) => {
        console.error('POST hatası:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
      <h2>Pizza Siparişi</h2>

      {/* İsim */}
      <label>
        İsim:
        <input
          type="text"
          name="isim"
          value={formData.isim}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      {/* Boyut */}
      <p>Boyut:</p>
      {['Küçük', 'Orta', 'Büyük'].map((boyut) => (
        <label key={boyut}>
          <input
            type="radio"
            name="size"
            value={boyut}
            checked={formData.size === boyut}
            onChange={handleChange}
            required
          />
          {boyut}
        </label>
      ))}
      <br />

      {/* Pizza türü */}
      <label>
        Pizza Türü:
        <select
          name="pizzaType"
          value={formData.pizzaType}
          onChange={handleChange}
          required
        >
          <option value="">-- Seçin --</option>
          <option value="4 Peynirli">4 Peynirli</option>
          <option value="Sucuklu">Sucuklu</option>
          <option value="Sebzeli">Sebzeli</option>
        </select>
      </label>
      <br />

      {/* Ekstra malzemeler */}
      <p>Ekstra Malzemeler:</p>
      {['Zeytin', 'Mantar', 'Mısır', 'Peynir'].map((malzeme) => (
        <label key={malzeme}>
          <input
            type="checkbox"
            name="toppings"
            value={malzeme}
            checked={formData.toppings.includes(malzeme)}
            onChange={handleChange}
          />
          {malzeme}
        </label>
      ))}
      <br />

      {/* Not */}
      <label>
        Notlar:
        <textarea
          name="notlar"
          value={formData.notlar}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />

      <button type="submit">Sipariş Ver</button>
    </form>
  );
}
