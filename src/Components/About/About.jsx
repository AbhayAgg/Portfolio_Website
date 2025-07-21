import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="Profile" className="profile-img" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I have developed a strong command over Data Structures and Algorithms, particularly using Java.I’ve completed several hands‑on projects using HTML, CSS, JavaScript, and React.js, where I’ve built responsive, modern web interfaces and single‑page applications that focus on clean UI and smooth user experiences. </p>
                    <p>Additionally, I served as an SDE Intern at HARMAN India, working with C# and ASP.NET Core in a professional development environment. During that internship, I contributed to backend services by designing and developing APIs, collaborating with team members, and integrating front‑end components—bridging the gap between server‑side logic and client‑side implementation using a full‑stack approach</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML  &  CSS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>JavaScript </p><hr style={{width:"60%"}}/></div>
                     <div className="about-skill"><p>React JS </p><hr style={{width:"55%"}}/></div>
                     <div className="about-skill"><p>JAVA </p><hr style={{width:"80%"}}/></div>
                     <div className="about-skill"><p>C# </p><hr style={{width:"50%"}}/></div>
                      <div className="about-skill"><p>DSA</p><hr style={{width:"80%"}}/></div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
