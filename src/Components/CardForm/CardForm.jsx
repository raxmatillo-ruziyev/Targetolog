import React from 'react'
import './CardForm.scss'
import Button from '../Button/Button'
const CardForm = () => {
  return (
    <div>
      <div className="card-form">
        <h1 className="card-form-title">СТРАТЕГИЯ БЕСПЛАТНО</h1>
        <p className="card-form-text">Напишу стратегию по Таргетированной Рекламе для Вашей компании бесплатно и презентую ее!</p>
        <form className="card-form-form">
            <input className="card-form-input" type="text" placeholder="Имя"/>
            <input className="card-form-input" type="number" placeholder="+380"/>
        <Button name={"ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"}/>
        </form>
      </div>
    </div>
  )
}

export default CardForm
