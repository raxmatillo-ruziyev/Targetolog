import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import './Navbar.scss';
import i18n from '../../i18n';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    onClose();
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    onClose();
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
              <a href="#hero" className="navbar-link">{t("welcome")}</a>
              <a href="#slider" className="navbar-link">{t("1")}</a>
              <a href="#service" className="navbar-link">{t("2")}</a>
            </li>
            <li className="navbar-item2">
              <button 
                className="language-button"
                onClick={() => changeLanguage('uz')}
              >
                UZ
              </button>
              <button 
                className="language-button"
                onClick={() => changeLanguage('ru')}
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
        <a href="#hero" className="navbar-link3" onClick={handleLinkClick}>{t("welcome")}</a> <br />
        <a href="#slider" className="navbar-link3" onClick={handleLinkClick}>{t("1")}</a> <br />
        <a href="#service" className="navbar-link3" onClick={handleLinkClick}>{t("2")}</a> <br />
        <button
          className="language-button2"
          onClick={() => changeLanguage('uz')}
        >
          UZ
        </button>
        <button
          className="language-button2"
          onClick={() => changeLanguage('ru')}
        >
          RU
        </button>
      </Drawer>
    </div>
  );
};

export default Navbar;
