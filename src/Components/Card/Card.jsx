import React from 'react'
import './Card.scss'
const Card = ({cardTitle,cardText,price,cardSubtext,cardBtn,price2,price3,cardSubtext2,cardSubtext3}) => {
  return (
    <div>
        <div className="card">
            <div className="card-box">
                <h1 className="card-title">{cardTitle}</h1> <br />
                <p className="card-text">{cardText}</p>
                <ul className="card-list">
                    <li className="card-item">
                        <span>{price}</span>
                        <p className="card-subtext">{cardSubtext}</p>
                    </li>
                    <li className="card-item">
                        <span>{price2}</span>
                        <p className="card-subtext">{cardSubtext2}</p>
                    </li>
                    <li className="card-item">
                        <span>{price3}</span>
                        <p className="card-subtext">{cardSubtext3}</p>
                    </li>
                </ul>
             <a href="#service">   <button className='card-btn'>{cardBtn}</button></a>
            </div>
        </div>
      
    </div>
  )
}

export default Card
