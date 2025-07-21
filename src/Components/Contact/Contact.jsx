import React from 'react'
import './Contact.css'
import Mob from '../../assets/Mob.svg'
import Whatsapp from '../../assets/Whatsapp.svg'
import Gmail from '../../assets/Gmail.svg'
const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-sections'>
        <div className='contact-1'>
        <img src={Gmail} alt='' className='gmail'/>
        <div className='mail'>
       <a href="mailto:agarwalabhay90@gmail.com">agarwalabhay90@gmail.com</a>
       </div>
        </div>
         <div className='contact-2'>
            <img src={Whatsapp} alt='' className='app'/>
            <div className='tex'><h1>7902097954</h1></div>
         </div>
      </div>
    </div>
  )
}

export default Contact
