import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css";

export const Contact = () => {
  const handleSend=(e)=>{
    e.preventDefault()
    alert("Message Sent Successfully")
  }
  return (
    <div id="contactMain">
      <div id='contactMe'>
      <ScrollAnimation animateIn='flipInY'>
      <h1 id='title' className='title'>Contact Me</h1>
      </ScrollAnimation>
      
      <p style={{marginBottom:"40px",fontFamily: "Open Sans",fontSize:"18px",lineHeight:"26px"}}>I'm interested in making new projects,freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.</p>
      <form action="">
        <div id='inLine'>
          <input type="text" placeholder='Name'/>
          <input type="text" placeholder='Email'/>
        </div>
        <div>
          <input type="text" name="" id="" placeholder='Subject'/>
        </div>
        <div>
          <input id="message" type="text" name="" placeholder='Message'/>
        </div>
        <div>
          <button onClick={handleSend}>Send Message</button>
        </div>
      </form>
      </div>
      <div id='location'>
      <ScrollAnimation
        animateIn='flipInY'
        animateOut='flipOutY'>
        <h1 id='title' className='title'>Locate Me</h1>
      </ScrollAnimation>
        <div width="100%">
          <iframe style={{boxShadow: "rgba(0, 0, 0, 0.8) 0px 20px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",borderRadius:"15px"}} title='map' width="100%" height="400" id="gmap_canvas" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=Guwahati&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed">
          </iframe>
        </div>
      
      </div>
    </div>
  )
}
