import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
            <img src={logo} alt='' className='logo'/>
            <p>I am a FullStackDeveloper</p>
            <hr/>
        </div>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>@ 2025 Abhay Agrawal. All rights reserved</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      </div>
  )
}

export default Footer
