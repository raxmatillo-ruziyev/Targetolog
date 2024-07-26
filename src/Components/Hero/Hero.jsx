import React from 'react'
import './Hero.scss'
import Card from '../Card/Card'
import Card2 from '../Card/Card2'
const Hero = () => {
    return (
        <div>
            <div id='hero' className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Результаты моих клиентов</h1>
                        <p className="hero-text">Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал более 1 000 000$ прибыли клиентам</p>
                        <br /><br />
                        <div className='hero-box'>

                          <div className='hero-box1'>
                          <Card cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>
                          <div className='hero-box2'>
                          <Card2 cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>

                          <div className='hero-box3'>
                          <Card cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>
                          <div className='hero-box4'>
                          <Card2 cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>

                          <div className='hero-box5'>
                          <Card cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>
                          <div className='hero-box6'>
                          <Card2 cardTitle={"Пригон элитных авто"} cardText={"Пригон элитных автомобилей под заказ"} price={"2800$ "} cardSubtext={"Инвестиции в рекламу"} cardBtn={"ХОЧУ ТАК ЖЕ"} price2={"90"} price3={" 3,6 м $"} cardSubtext2={"Продажи"} cardSubtext3={"Продали авто на"} /> 
                          </div>
                          
                          
                          
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero
