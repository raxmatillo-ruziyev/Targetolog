import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';
import Button from '../Button/Button';

const Footer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = '7027326228:AAHE5ePNUpvgI5uSE6sL1Y4a61Xcw9GzC6Y'; // Tokeningizni bu yerga qo'ying
    const chatId = '6771255129'; // Chat ID'nizi bu yerga qo'ying
    const text = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
      setName('');
      setPhone('');
      setMessage('');
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h1 className="footer-title">Мои контакты</h1>
            <div className="footer-icon">
              <div className="footer-2">
                <a href="https://wa.me/380986066667?text=%D0%9D%D1%83%D0%B6%D0%BD%D1%8B%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B!%20%D0%93%D0%BE%D1%82%D0%BE%D0%B2%20%D1%81%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F">
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a href="https://t.me/wakula_freedom">
                  <i className="fa fa-telegram"></i>
                </a>
                <a href="tel:+998978654321">
                  <i className="fa fa-phone"></i>
                </a>
              </div>
              <div>
                <a href="tel:+998978654321">+38(098) 606 66 67</a>
                <a href="tel:+998978654321">+38(063) 240 96 79</a>
                <a href="mailto:aleksandrovich_aleksandrov@gmail.com">a.a.vakulenko@gmail.com</a>
              </div>
              <div className="footer-2">
                <a href="https://www.instagram.com/a.a.vakulenko">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/a.a.vakulenko">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h1 className="footer-title">Есть вопросы? - Пишите!</h1>
            <form className="footer-form" onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <input
                type="number"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <br />
              <textarea
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <button className='footer-btn' htmlType="submit" loading={loading}> 
              {
                loading ?  "Отправка...": "Отправить"
              }            
              </button>
            </form>
          </div>
        </div>
        <div className="footer-box">
          <a href="#">UA</a>
          <a href="#">RU</a>
        </div>
        <a href="#">@ 2015-2022. Все права защищены Политика Конфиденциальности</a>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
