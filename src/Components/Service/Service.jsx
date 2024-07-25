import React from 'react'
import './Service.scss'
import CardForm from '../CardForm/CardForm'
const Service = () => {
  return (
    <>
     <div className='service'>
        <div className="container">
            <div className="service-content">
               <div>
               <h1 className="service-title">Готовы к потоку клиентов?</h1>
             
                <p className="service-text">Увеличу продажи с помощью рекламы в интернете и предоставлю первые обращения клиентов уже через 48 часов</p>
               </div>
        
            <CardForm cardFormText={"Заполняйте форму и получите от меня бесплатную стратегию по привлечению клиентов в Ваш бизнес!"} cardFormTitle={"СТРАТЕГИЯ БЕСПЛАТНО"}/>
            </div>

        </div>
       
      
    </div>
      
    </>
  )
}

export default Service
