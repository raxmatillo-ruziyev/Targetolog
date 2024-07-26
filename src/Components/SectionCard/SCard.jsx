import React from 'react'
import './SCard.scss'
import scard from '../../assets/333.png'
import { useTranslation } from 'react-i18next'
const SCard = () => {
    const {t,i18n} = useTranslation();
  return (
    <>
    <div className="scard">
        <ul className="scard-list-one">
            <li className="scard-item-one">
<h1 className="scard-title">{t("31")}</h1>
<p className="scard-text">{t("32")}</p>

            </li>
            <li className="scard-item-one">
                <img src={scard} alt=""  width={80}/>
            </li>
        </ul>
        <ul className="scard-list-two">
            <li className="scard-item-two">
                <p className='scard-subtext'>7400</p>
                <p className='scard-text-two'>{t("33")}</p>
            </li>
            <li className="scard-item-two">
                <p className='scard-subtext'>0,51$</p>
                <p className='scard-text-two'>{t("34")}</p>
            </li>
            <li className="scard-item-two">
                <p className='scard-subtext'>3600$</p>
                <p className='scard-text-two'>{t("35")}</p>
            </li>
        </ul>
    </div>
      
    </>
  )
}

export default SCard
