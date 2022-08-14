import React from 'react'
import {Link} from 'react-scroll'
//import { NameLogo } from './NameLogo'

export const Navbar = () => {
  return (
    <div style={{position: "fixed",top: "220px",width:"10%",textAlign:"center"}}>
      
        <ul>
          <li className='list'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li className='list'><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li className='list'><Link  to="skills" spy={true} smooth={true}>Skills</Link></li>
          <li className='list'><Link  to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li className='list'><Link  to="contact" spy={true} smooth={true}>Contact Me</Link></li>
        </ul>
    </div>
  )
}
