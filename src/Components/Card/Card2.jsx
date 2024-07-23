import React from 'react'
import './Card.scss'
const Card2 = ({cardTitle,cardText,price,cardSubtext,cardBtn,price2,price3,cardSubtext2,cardSubtext3}) => {
  return (
    <div>
        <div className="card2">
            <div className="card2-box">
                <h1 className="card2-title">{cardTitle}</h1> <br />
                <p className="card2-text">{cardText}</p> 
                <ul className="card2-list">
                    <li className="card2-item">
                        <p className='span2'>{price}</p>
                        <p className="card2-subtext">{cardSubtext}</p>
                    </li>
                    <li className="card2-item">
                        <p className='span2'>{price2}</p>
                        <p className="card2-subtext">{cardSubtext2}</p>
                    </li>
                    <li className="card2-item">
                        <p className='span2'>{price3}</p>
                        <p className="card2-subtext">{cardSubtext3}</p>
                    </li>
                </ul>
                <button className="card2-btn">{cardBtn}</button>
            </div>
        </div>
      
    </div>
  )
}

export default Card2
