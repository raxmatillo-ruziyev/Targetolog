import React, { useState } from 'react';
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('i18nextLng') || 'RU'); // Default til
  const { t, i18n } = useTranslation();

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
    const lang = language === 'UA' ? 'ua' : 'ru';
    i18n.changeLanguage(lang); // Tilni o'zgartirish
    localStorage.setItem('i18nextLng', language); // Tilni localStoragega saqlash
  };

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item1">
              <a href="#" className="navbar-link1">
                <img src={logo} alt="Logo" width={100} />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">КЕЙСЫ</a>
              <a href="#" className="navbar-link">ОТЗЫВЫ</a>
              <a href="#" className="navbar-link">КОНТАКТЫ</a>
            </li>
            <li className="navbar-item2">
              <button 
                className={`navbar-link2 ${activeLanguage === 'UA' ? 'active' : ''}`}
                onClick={() => handleLanguageClick('UA')}
              >
                UA
              </button>
              <button 
                className={`navbar-link2 ${activeLanguage === 'RU' ? 'active' : ''}`}
                onClick={() => handleLanguageClick('RU')}
              >
                RU
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
