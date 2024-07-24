import React, { useState } from 'react';
import './CardForm.scss';
import Button from '../Button/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardForm = ({cardFormTitle,cardFormText}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false); // Loading holatini boshqarish

  const handleSubmit = async (e) => {
    e.preventDefault(); // Formaning avtomatik yuborilishini oldini olish

    // Inputlarni to'ldirilganligini tekshirish
    if (!name.trim() || !phone.trim()) {
      toast.error('Пожалуйста, заполните все поля.'); // Xato xabari
      return;
    }

    const messageText = `Имя: ${name}\nТелефон: ${phone}`;
    const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Tokeningizni bu yerga qo'ying
    const chatId = '6771255129'; // Chat ID'nizi bu yerga qo'ying
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    setLoading(true); // Loading holatini yoqish
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: messageText
      });
      toast.success('Сообщение успешно отправлено!'); // Muvaffaqiyatli yuborish xabari
      // Inputlarni tozalash
      setName('');
      setPhone('');
    } catch (error) {
      console.error('Произошла ошибка:', error);
      toast.error('Ошибка при отправке сообщения.'); // Xato xabari
    } finally {
      setLoading(false); // Loading holatini o'chirish
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="card-form">
        <h1 className="card-form-title">{cardFormTitle}</h1>
        <p className="card-form-text">{cardFormText}</p>
        <form className="card-form-form" onSubmit={handleSubmit}>
          <input
            className="card-form-input"
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="card-form-input"
            type="number"
            placeholder="+380"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button name={loading ? "Отправка..." : "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"} loading={loading} />
        </form>
      </div>
    </div>
  );
}

export default CardForm;
