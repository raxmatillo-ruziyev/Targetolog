import React, { useEffect } from 'react'
import './Hero.scss'
import Card from '../Card/Card'
import Card2 from '../Card/Card2'
import { useTranslation } from 'react-i18next'
const Hero = () => {
    const {t,i18n} =useTranslation()
    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
        i18n.changeLanguage(savedLanguage);
      }, []);
    return (
        <div>
            <div id='hero' className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">{t("11")}</h1>
                        <p className="hero-text">{t("12")}</p>
                        <br /><br />
                        <div className='hero-box'>

                          <div className='hero-box1'>
                          <Card cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>
                          <div className='hero-box2'>
                          <Card2 cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>

                          <div className='hero-box3'>
                          <Card cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>
                          <div className='hero-box4'>
                          <Card2 cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>

                          <div className='hero-box5'>
                          <Card cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>
                          <div className='hero-box6'>
                          <Card2 cardTitle={t("13")} cardText={t("14")} price={"2800$ "} cardSubtext={t("15")} cardBtn={t("18")} price2={"90"} price3={" 3,6 м $"} cardSubtext2={t("16")} cardSubtext3={t("17")} /> 
                          </div>
                          
                          
                          
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero
