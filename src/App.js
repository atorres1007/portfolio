import { useState } from 'react';
import emailjs from '@emailjs/browser';
import bonsai from './Photos/bonsai-screenshot.jpeg';
import profilePicture from './Photos/profile.jpg';
import linkedin from './Photos/linkedin.png';
import github from './Photos/github.png';
import met from './Photos/met-museum.jpeg';
import roomies from './Photos/roomies.jpeg'

export default function App () {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = () => {
    const data = {
      phone: `${phone}`,
      message: `${message}`,
      contactEmail: `${email}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`
      }
    emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, data, `${process.env.REACT_APP_PUBLIC_KEY}`)
    .then((result) => {
      console.log(result.text);
    })
  }

  return (
    <div className="portfolio-wrap">
      <div className='sidebar'>
        <hr/>
        <a href='https://www.linkedin.com/in/andrew-torres13/'
         target='blank'><img src={linkedin}/>
        </a>
        <a href='https://github.com/atorres1007'
         target='blank'><img src={github}/>
        </a>
      </div>
      <div className="title">
        <h1>ANDREW TORRES</h1>
        <img className='portfolio-photo' src={profilePicture} />
      </div>
      <div className="section">
        <div className='sub-section'>
          <p>
          <span className='hidden'>IIIIII</span>Welcome! My name is Andrew Torres. I am a software engineer 
          with a focus in <span className='focus'>front-end design</span> and <span className='focus'>application creation</span>. I started my 
          journey to becoming a software engineer in Fall of 2021. I found the creativity
          of front-end software engineering very appealing and decided to make it my focus. I originally started with <span className='focus'>Flask</span> and <span className='focus'>Python</span> but 
          quickly transitioned to <span className='focus'> React</span>, <span className='focus'>Node</span>, and <span className='focus'>Javascript</span>. Furthermore,  I also have a good understanding of  
          <span className='focus'> PostgreSQL databases</span> and <span className='focus'> React Native</span>. Please feel free to view my projects and contact me with any questions 
          you may have.  
          </p>
        </div>
      </div>
      <div className="section">
        <h1>PROJECTS</h1>
        <div className='projects'>
          <h3><a href='https://bonsai-clone.herokuapp.com/' target='blank'>BONSAI CLONE</a></h3>
          <img className='project-photo' src={bonsai}/>
          <div className='project-description'>
            <p>A simple clone of an interesting <a href= 'http://www.mikiyakobayashi.com/projects' target='blank'> website</a>. 
            Instead, replacing the images with photos of 
            bonsai trees along with descriptions of each bonsai taken 
            from <a href='https://www.thespruce.com/popular-types-of-bonsai-trees-5025687' target='blank'>here</a>.
            </p> 
            <hr/>
            <h4>React | Multi-component | Clone | CSS</h4>
          </div>
        </div>
        <div className='projects'>
          <h3><a href='https://met-museum.herokuapp.com/' target='_blank'>MET MUSEUM PROJECT</a></h3>
          <img className='project-photo' src={met}/>
          <div className='project-description'>
            <p>
              Simple random image generator which uses the <a href='https://github.com/metmuseum/openaccess' target='blank'>MET Museum's API</a> to 
              produce a random piece of work from their 19 different departments. 
            </p> 
            <hr/>
            <h4>React | API | Image-Generator | RNG</h4>
          </div>
        </div>
        <div className='projects'>
          <h3>ROOMIES APP</h3>
          <img className='project-photo' src={roomies}/>
          <div className='project-description'>
            <p>
              Mobile application designed to find roomates using a Tinder-like 
              swipe feature with a simple login/sign up feature.
            </p> 
            <hr/>
            <h4>React Native | Express | PosgreSQL | Sign-up</h4>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className='form'>
          <h1>CONTACT FORM</h1>
          <input className="first-name" placeholder='First Name' 
            value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          <input className="last-name"placeholder='Last Name' 
            value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          <input className="email" placeholder='Email'
            value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input className="phone"placeholder='Phone Number' 
            type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
          <textarea className="message" placeholder='Message' 
            value={message} onChange={(e) => setMessage(e.target.value)}/>
          <div className='btn'><button onClick={sendEmail}>Submit</button></div>
        </div>
      </div>
    </div>

  );
}
