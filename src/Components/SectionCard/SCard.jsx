import React from 'react'
import './SCard.scss'
import scard from '../../assets/333.png'
const SCard = () => {
  return (
    <>
    <div className="scard">
        <ul className="scard-list-one">
            <li className="scard-item-one">
<h1 className="scard-title">Сергей</h1>
<p className="scard-text">Основатель крупнейшего ивент комьюнити.
Open Event Club</p>

            </li>
            <li className="scard-item-one">
                <img src={scard} alt=""  width={80}/>
            </li>
        </ul>
        <ul className="scard-list-two">
            <li className="scard-item-two">
                <p className='scard-subtext'>7400</p>
                <p className='scard-text-two'>целевых обращений </p>
            </li>
            <li className="scard-item-two">
                <p className='scard-subtext'>0,51$</p>
                <p className='scard-text-two'>стоимость заявки </p>
            </li>
            <li className="scard-item-two">
                <p className='scard-subtext'>3600$</p>
                <p className='scard-text-two'>рекламный бюджет</p>
            </li>
        </ul>
    </div>
      
    </>
  )
}

export default SCard
