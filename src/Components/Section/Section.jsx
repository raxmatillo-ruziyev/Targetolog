import React, { useEffect } from 'react'
import './Section.scss'
import SCard from '../SectionCard/SCard'
import Button from '../Button/Button'
import { useTranslation } from 'react-i18next'
const Section = () => {
  const {t,i18n}= useTranslation();
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <>
    <div className="section">
        <div className="container">
            <div className="section-content">
         <div className="section-left">
            <h1 className='section-title'>{t("29")}</h1>
            <p className='section-text'>{t("30")}</p>
            <SCard/> <br />
            <SCard/>
        
         </div>
         <div className="section-right">
            <SCard/> <br />
            <SCard/>
            <p className='section-text2'>{t("36")}</p>
         
        <a href="#service">  <Button name={t("37")}/></a>

         </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Section
