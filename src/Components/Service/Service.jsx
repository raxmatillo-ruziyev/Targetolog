import React, { useEffect } from 'react'
import './Service.scss'
import CardForm from '../CardForm/CardForm'
import { useTranslation } from 'react-i18next'
const Service = () => {
  const {t,i18n} =useTranslation()
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    i18n.changeLanguage(savedLanguage);
  }, []);
  return (
    <>
     <div id='service' className='service'>
        <div className="container">
            <div className="service-content">
               <div>
               <h1 className="service-title">{t("39")}</h1>
             
                <p className="service-text">{t("5")}</p>
               </div>
        
            <CardForm cardFormText={t("40")} cardFormTitle={t("6")}/>
            </div>

        </div>
       
      
    </div>
      
    </>
  )
}

export default Service
