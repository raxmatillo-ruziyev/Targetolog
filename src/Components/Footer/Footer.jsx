import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

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

      toast.success(t("20")); // Muvaffaqiyatli yuborish xabari
      setName('');
      setPhone('');
      setMessage('');
    } catch (error) {
      toast.error(t("21")); // Xato xabari
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h1 className="footer-title">{t("41")}</h1>
            <div className="footer-icon">
              <div className='footer-link-title'>
                <a className='footer-link' href="tel:+998978654321">+38(098) 606 66 67</a>
                <a className='footer-link' href="tel:+998978654321">+38(063) 240 96 79</a>
                <a className='footer-link' href="mailto:aleksandrovich_aleksandrov@gmail.com">a.a.vakulenko@gmail.com</a>
              </div>
              <div className="footer-2">
                <a className='footer-link' href="https://wa.me/380986066667?text=%D0%9D%D1%83%D0%B6%D0%BD%D1%8B%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B!%20%D0%93%D0%BE%D1%82%D0%BE%D0%B2%20%D1%81%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F">
                  <i id='footer-icons' className="fa fa-whatsapp"></i>
                </a>
                <a className='footer-link' href="https://t.me/wakula_freedom">
                  <i id='footer-icons' className="fa fa-telegram"></i>
                </a>
                <a className='footer-link' href="tel:+998978654321">
                  <i id='footer-icons' className="fa fa-phone"></i>
                </a>
                <a className='footer-link' href="https://www.instagram.com/a.a.vakulenko">
                  <i id='footer-icons' className="fa fa-instagram"></i>
                </a>
                <a className='footer-link' href="https://www.facebook.com/a.a.vakulenko">
                  <i id='footer-icons' className="fa fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h1 className="footer-title">{t("42")}</h1>
            <form className="footer-form" onSubmit={sendMessage}>
              <input
                className='footer-input'
                type="text"
                placeholder={t("43")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <br />
              <input
                className='footer-input'
                type="number"
                min={1}
                placeholder={t("44")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <br />
              <textarea
                className='footer-textarea'
                placeholder={t("45")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <br />
              <button  className='footer-btn' loading={loading} htmlType="submit" >{loading ? t("10") : t("46")}</button>
            </form>
          </div>
        </div>
        <a className='footer-link' href="#">{t("47")}</a>
      </div>
      <ToastContainer />
    </footer>
  );
};

export default Footer;
