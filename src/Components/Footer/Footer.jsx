import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h1 className="footer-title">Мои контакты</h1>
              <div className="footer-icon">
            <div className='footer-2'>
            <a href="https://wa.me/380986066667?text=%D0%9D%D1%83%D0%B6%D0%BD%D1%8B%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D1%8B!%20%D0%93%D0%BE%D1%82%D0%BE%D0%B2%20%D1%81%D0%BE%D0%B7%D0%B2%D0%BE%D0%BD%D0%B8%D1%82%D1%8C%D1%81%D1%8F"><i className='	fa fa-whatsapp'></i></a>
                <a href="https://t.me/wakula_freedom"><i className='fa fa-telegram'></i></a>
                <a href="tel:+998978654321"><i className='fa fa-phone'></i></a>
            </div>
                <a href="tel:+998978654321">+38(098) 606 66 67</a> 
                <a href="tel:+998978654321">+38(063) 240 96 79</a>
                <a href="mailto:aleksandrovich_aleksandrov@gmail.com">a.a.vakulenko@gmail.com</a> <br />
           <div className='footer-2'>
           <a href="https://www.instagram.com/a.a.vakulenko"><i className='fa fa-instagram'></i></a>
                <a href="https://www.facebook.com/a.a.vakulenko"><i className='fa fa-facebook'></i></a>
           </div>



                

              </div>

            </div>
            <div className="footer-right">
              <h1 className="footer-title">Есть вопросы? - Пишите!</h1>
              <form className="footer-form">
                <input type="text" placeholder="Ваше имя" /> <br />
                <input type="text" placeholder="Ваш телефон" /> <br />
                <textarea placeholder="Ваше сообщение" /> <br />
                <button className="footer-btn">Отправить</button>
              </form>
            </div>


          </div>

           <div className="footer-box">
            <a href="#">UA</a>
            <a href="#">RU</a>
           </div>
           <a href="#">@ 2015-2022. Все права защищеныПолитика Конфиденциальности</a>
        </div>
      </footer>

    </>
  )
}

export default Footer
