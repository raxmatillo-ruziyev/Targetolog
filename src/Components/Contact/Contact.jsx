import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { Slider, notification } from 'antd';
import Button from '../Button/Button';
import antonjon from '../../assets/antonjon.jpeg';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [check, setCheck] = useState('');
  const [clients, setClients] = useState(0);
  const [loading, setLoading] = useState(false); // Loading holatini boshqarish
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const openNotification = (message, type) => {
    notification[type]({
      message: message,
      duration: 4, // 4 soniya davomida ko'rsatish
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !region.trim() || !check.trim()) {
      openNotification(t("19"), 'error'); // Xato xabari
      return;
    }

    const messageText = `Имя: ${name}\nТелефон: ${phone}\nРегион: ${region}\nСредний чек: ${check}\nКлиенты: ${clients}`;
    const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Tokeningizni bu yerga qo'ying
    const chatId = '6771255129'; // Chat ID'nizi bu yerga qo'ying
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    setLoading(true); // Loading holatini yoqish
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: messageText
      });
      openNotification(t("20"), 'success'); // Muvaffaqiyatli yuborish xabari
      // Inputlarni tozalash
      setName('');
      setPhone('');
      setRegion('');
      setCheck('');
      setClients(0);
    } catch (error) {
      console.error(t("21"), error);
      openNotification(t("22"), 'error'); // Xato xabari
    } finally {
      setLoading(false); // Loading holatini o'chirish
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <h1 className="contact-title">{t("23")}</h1>
            <p className="contact-text">{t("24")}</p>
            <div className="contact-form">
              <form className='contact-formjon' onSubmit={handleSubmit}>
                <input
                  className='contact-input'
                  type="text"
                  placeholder={t("8")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                /> <br />
                <input
                  className='contact-input'
                  type="number"
                  min={1}
                  placeholder="+380(99) 999-99-99"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                /> <br />
                <input
                  className='contact-input'
                  type="text"
                  placeholder={t("25")}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  required
                /> <br />
                <input
                  className='contact-input'
                  type="text"
                  placeholder={t("26")}
                  value={check}
                  onChange={(e) => setCheck(e.target.value)}
                  required
                />
                <h5 className='contact-subtitle'>{t("27")}</h5>
                <Slider value={clients} onChange={(value) => setClients(value)} />
                <Button name={loading ? t("10") : t("28")} loading={loading} />
              </form>
            </div>
          </div>
          <div className="contact-right">
            <img className='antonjon' src={antonjon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
