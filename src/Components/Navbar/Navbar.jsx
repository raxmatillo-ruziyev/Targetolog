import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(localStorage.getItem('i18nextLng') || 'RU'); // Default til
  const { t, i18n } = useTranslation();

  const handleLanguageClick = (language) => {
    setActiveLanguage(language);
    const lang = language === 'UA' ? 'ua' : 'ru';
    i18n.changeLanguage(lang); // Tilni o'zgartirish
    localStorage.setItem('i18nextLng', language); // Tilni localStoragega saqlash
    onClose(); // Til o'zgartirilganda drawer yopiladi
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    onClose(); // Link bosilganda drawer yopiladi
  };

  return (
    <div>
      <div className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item1">
              <a href="#header" className="navbar-link1">
                <img src={logo} alt="Logo" width={80} className="logojon" />
              </a>
            </li>
            <li className="navbar-item">
              <a href="#hero" className="navbar-link">КЕЙСЫ</a>
              <a href="#slider" className="navbar-link">ОТЗЫВЫ</a>
              <a href="#service" className="navbar-link">КОНТАКТЫ</a>
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
            <li className="modal-item">
              <button className="modalBtn" onClick={showDrawer}>
                <i className="fa fa-align-justify"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Drawer
        className="navbar-drawer"
        placement="top"
        width={500}
        onClose={onClose}
        open={open}
      >
        <a href="#header" className="navbar-link3" onClick={handleLinkClick}>КЕЙСЫ</a> <br />
        <a href="#hero" className="navbar-link3" onClick={handleLinkClick}>КЕЙСЫ</a> <br />
        <a href="#slider" className="navbar-link3" onClick={handleLinkClick}>ОТЗЫВЫ</a> <br />
        <a href="#service" className="navbar-link3" onClick={handleLinkClick}>КОНТАКТЫ</a> <br />
        <button
          id="btnjon"
          className={`navbar-link2 ${activeLanguage === 'UA' ? 'active' : ''}`}
          onClick={() => handleLanguageClick('UA')}
        >
          UA
        </button>
        <button
          id="btnjon"
          className={`navbar-link2 ${activeLanguage === 'RU' ? 'active' : ''}`}
          onClick={() => handleLanguageClick('RU')}
        >
          RU
        </button>
      </Drawer>
    </div>
  );
};

export default Navbar;
