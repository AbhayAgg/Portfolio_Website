import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <div class="profile-pic-wrapper">
  <img src={profile_img} alt="Profile photo" className="profile-img"/>
</div>
      <h1><span>I’m Abhay Agrawal</span></h1>
      <p>I'm a versatile full-stack developer with hands-on 
        experience in frontend (HTML, CSS, JavaScript, React.js) and 
        backend development (C#, .NET, Microservices).</p>
        <p> During my internship at Harman Connected Services (Feb–June 2025), 
            I contributed to the Domino’s UK project, building RESTful APIs.</p>
    <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
    </div>
    </div>
  )
}
export default Hero
