import React from 'react'
import './header.css'
import img1 from './imgs/zigzag.png'
import Navbar from './navbar/Navbar'

const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
     <div  className="header__info">
      <h1>SG <span>dental <br /> clinic</span></h1>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <button className='btn'>Записаться  на   прием</button>
     </div>
     <div className='header__img'>
     <img src={img1} alt="" />
     </div>
    </div>
  )
}

export default Header