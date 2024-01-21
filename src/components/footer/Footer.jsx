import React from 'react'
import './footer.css'
import Navbar from '../header/navbar/Navbar'

const Footer = () => {
  return (
    <div className='footer'>
      <Navbar className="color"/>
      <div className="footer__text">
        <p>SG detal все права защищены.
</p>
        <p>2022 copiryght</p>
        <h4>+7 (928) 468-36-68
</h4>
      </div>
    </div>
  )
}

export default Footer