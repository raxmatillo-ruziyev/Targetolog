import React, { useEffect } from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import CardForm from '../CardForm/CardForm'
import { useTranslation } from 'react-i18next'
const Header = () => {
  const {t,i18n} = useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <div className='header' id='header'>
        <div className="container">
            <Navbar/>
            <div className="header-content">
               <div>
               <h1 className="header-title">{t("3")}</h1>
               <hr className='header-hr' style={{
                width: "43%",
                marginLeft:5,
                marginTop: 10,
                marginBottom: 10,
                border: '1px solid blue',
               }} />
               <h1 className="header-title">{t("4")}</h1>
             
                <p className="header-text">{t("5")}</p>
               </div>
        
            <CardForm cardFormText={t("7")} cardFormTitle={t("6")}/>
            </div>

        </div>
       
      
    </div>
  )
}

export default Header
