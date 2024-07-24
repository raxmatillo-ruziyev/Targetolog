import React from 'react'
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import CardForm from '../CardForm/CardForm'
const Header = () => {
  return (
    <div className='header'>
        <div className="container">
            <Navbar/>
            <div className="header-content">
               <div>
               <h1 className="header-title">Таргетолог</h1>
               <hr className='header-hr' style={{
                width: "43%",
                marginLeft:5,
                marginTop: 10,
                marginBottom: 10,
                border: '1px solid blue',
               }} />
               <h1 className="header-title"> Антон Вакуленко</h1>
             
                <p className="header-text">Увеличу продажи с помощью рекламы в интернете и предоставлю первые обращения клиентов уже через 48 часов</p>
               </div>
        
            <CardForm cardFormText={"Напишу стратегию по Таргетированной Рекламе для Вашей компании бесплатно и презентую ее!"} cardFormTitle={"СТРАТЕГИЯ БЕСПЛАТНО"}/>
            </div>

        </div>
       
      
    </div>
  )
}

export default Header
