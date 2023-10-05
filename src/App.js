import { useState } from 'react';
import emailjs from '@emailjs/browser';
import bonsai from './Photos/bonsai-screenshot.jpeg';
import met from './Photos/met-museum.jpeg';
import countries from './Photos/countriesAppPreview.PNG';
import resume from './Photos/Resume.PNG'

import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaReact} from 'react-icons/fa';

import AnchorLink from "react-anchor-link-smooth-scroll";




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

  const headerLinks = ['Home','About', 'Projects', 'Resume', 'Contact']

  const projects = [
    {name:'Bonsai', photo: bonsai, url: 'https://bonsai-website-clone-ufv9.vercel.app/', keywords: ['React, ', 'Multi-component, ', 'Clone, ', 'CSS '], 
    description: 'A simple clone of an interesting website. Instead, replacing the images with photos of bonsai trees along with descriptions of each bonsai taken from here'},

    {name:'MET Museum', photo: met, url: 'https://met-museum-project.vercel.app/', keywords: ['React, API, Image-Generator, RNG'], 
    description: 'Simple random image generator which uses the MET Museums API to produce a random piece of work from their 19 different departments.' }, 

    {name:'Countries Search', photo: countries, url: 'https://countries-app-wine-two.vercel.app/', keywords: ['React, API, User-Search'], 
    description:  'Simple React app that uses REST Countries API to allow users to search for a country and receive some information about that country.'}, 
  ]

  return (
    <div className="portfolio">


      <div className='navbarLinks'>
        {headerLinks.map((link, index) => {
          return (
            <AnchorLink className='link' href={`#${link}`}>
              {link}
            </AnchorLink>
          )
        })}
      </div>



      <div className='sidebar'>

        <div>
          <a href='https://www.linkedin.com/in/andrew-torres13/'target='blank'>
            <BsLinkedin color='white' size='3vw' style={{marginTop: '50px'}}/>
          </a>
        </div>

        <div>
          <a href='https://github.com/atorres1007' target='blank'>
            <BsGithub color='white' size='3vw' style={{marginTop: '50px'}}/>
          </a>
        </div>

      </div>



   

      <div className="home-section" id='Home'>

        <p className="title" >ANDREW TORRES</p>

        <div className='home'>
          
          <p>

            Software Engineer / Web Developer

          </p>


        </div>
        <FaReact  size='50vw' color='black' style={{position: 'absolute', top: '0px', left: '0px', zIndex:'0'}}/>

      </div>




      <div className='about-section' id='About'>

        <p className='section-header'>

          ABOUT ME

        </p>

        <p className='about'>

          Hello! My name is Andrew Torres and I am a <span className='focus'>software engineer</span> who has a passion for creating <span className='focus'> innovative</span> and <span className='focus'> dependable </span> 
          web applications with amazing <span className='focus'> user interfaces</span>.
          I consider myself an expert in front-end laguages like <span className='focus'> Javascript</span>, <span className='focus'> HTML</span>, and <span className='focus'>CSS</span>.
          While I have used several front-end frameworks and libraries, I have the most experience with <span className='focus'> React</span> and <span className='focus'> Next.JS</span>. 
          In terms of back-end experience, I have used several databases and frameworks such as <span className='focus'> Express.JS</span> and <span className='focus'> MongoDB</span>.
          Although I lack a formal education in Computer Science or a related field, I have an unrivaled passion for front-end development and alot to prove.
          Furthermore, I love learning new skills/technologies, taking on new challenges, and becoming a better software developer each and every day.
          Please take a look at my projects and shoot me an email with any questions.

        </p>

      </div>




       
      <div className="projects-section" id='Projects'>

        <div style={{display: 'flex', justifyContent: 'center'}}>

          <p className='section-header'>PROJECTS</p>

        </div>

        <div className='projectsContainer'>
        {projects.map((project, index) => {
          return (
            <div className='project'>
          
              <p className='projectTitle'>
                <a href={project.url} style={{textDecoration: 'none', color: '#8B008B'}} target='blank'>
                  {project.name}
                </a>
              </p>

              <img src={project.photo} alt='project'/>

              <div className='projectDescription'>

                <p>
                  {project.description}
                </p> 

                <hr style={{border: '1px solid #8B008B'}}/>

                <h4>{project.keywords}</h4>

              </div>

            </div>
          )

        })}
        </div>

      </div>





      <div className='resume-section' id='Resume' >

      <div style={{display: 'flex', justifyContent: 'center'}}>

        <p className='section-header'>RESUME</p> 

      </div>

        <div className='resume'>

          <img src={resume} alt='resume'/>

        </div>

      </div>





      <div className="contact-section" id='Contact'>

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

          <div className='btn'>
            <button onClick={sendEmail}>Submit</button>
          </div>

        </div>

      </div>

    </div>

  );
}
