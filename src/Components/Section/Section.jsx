import React from 'react'
import './Section.scss'
import SCard from '../SectionCard/SCard'
import Button from '../Button/Button'
const Section = () => {
  return (
    <>
    <div className="section">
        <div className="container">
            <div className="section-content">
         <div className="section-left">
            <h1 className='section-title'>Меня рекомендуют</h1>
            <p className='section-text'>Сейчас у меня находится более 10 проектов на постоянном обслуживании, которым я ежемесячно привлекаю максимальное количество целевых обращений</p>
            <SCard/> <br />
            <SCard/>
        
         </div>
         <div className="section-right">
            <SCard/> <br />
            <SCard/>
            <p className='section-text2'>Хотите такой же результат?</p>
         
          <Button name={"ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ"}/>

         </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Section
