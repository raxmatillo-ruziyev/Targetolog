import React from 'react'
import './Contact.scss'
import { Slider } from 'antd'
import Button from '../Button/Button'
import antonjon from '../../assets/antonjon.jpeg'
const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-left">
                            <h1 className="contact-title"> Есть конкретная цель?</h1>
                            <p className="contact-text">Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей</p>
                            <div className="contact-form">
                                <form  className='contact-formjon'>
                                    <input className='contact-input' type="text" placeholder=" Имя" /> <br />
                                    <input className='contact-input' type="text" placeholder="+380(99) 999-99-99" /> <br />
                                    <input className='contact-input' type="text" placeholder=" Регион продвижения" /> <br />
                                    <input className='contact-input' type="text" placeholder="Средний чек" />
                                </form>
                                <h5 className='contact-subtitle'>Сколько клиентов необходимо до цели?</h5>
                                <Slider/>
                                <Button name={"УЗНАТЬ РЕЗУЛЬТАТ"}/>
                            </div>
                        </div>
                        <div className="contact-right">
                            <img className='antonjon' src={antonjon} alt=""  />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
