import React, { useState } from 'react';
import './CardForm.scss';
import Button from '../Button/Button';
import axios from 'axios';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const CardForm = ({ cardFormTitle, cardFormText }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();

  const openNotification = (message, type) => {
    notification[type]({
      message: message,
      duration: 4, // 4 soniya davomida ko'rsatish
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      openNotification(t("19"), 'error'); // Xato xabari
      return;
    }

    const messageText = `Ism: ${name}\nTelefon: ${phone}`;
    const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y';
    const chatId = '6771255129';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    setLoading(true);
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: messageText
      });
      openNotification(t("20"), 'success'); // Muvaffaqiyatli yuborish xabari
      setName('');
      setPhone('');
    } catch (error) {
      console.error(t("21"), error);
      openNotification(t("22"), 'error'); // Xato xabari
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card-form">
        <h1 className="card-form-title">{cardFormTitle}</h1>
        <p className="card-form-text">{cardFormText}</p>
        <form className="card-form-form" onSubmit={handleSubmit}>
          <input
            className="card-form-input"
            type="text"
            placeholder={t("8")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="card-form-input"
            type="number"
            placeholder="+380"
            min="1" // faqat 0 dan katta raqamlar qabul qilinadi
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button name={loading ? t("10") : t("9")} loading={loading} />
        </form>
      </div>
    </div>
  );
}

export default CardForm;
