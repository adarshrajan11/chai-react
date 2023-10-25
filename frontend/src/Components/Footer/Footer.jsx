import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import insta_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} />
        <p>Shopper</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
          <img src={insta_icon} />
        </div>
        <div className='footer-icon-container'>
          <img src={pintrest_icon} />
        </div>
        <div className='footer-icon-container'>
          <img src={whatsapp_icon} />
        </div>
      </div>
      <div className='footer-copyright'>
        <hr />
        Copyright @ 2023 - All Right Reserved
      </div>
    </div>
  )
}

export default Footer
