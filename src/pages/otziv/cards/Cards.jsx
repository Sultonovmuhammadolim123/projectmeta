import React from 'react'
import './cards.css'
import img1 from './imgs/image.png'
const Cards = () => {
  return (
    <div className='otziv__card'>
        <div className="otziv__card__header">
            <img src={img1} alt="" />
            <h1>Pol Wan <br /><span>doctor</span></h1>
        </div>
        <div className="otziv__card__footer">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    </div>
  )
}

export default Cards