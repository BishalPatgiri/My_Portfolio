import React from 'react'
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faLinkedin,faGithub,faFacebook} from "@fortawesome/free-brands-svg-icons"

export const Navbar = () => {
  return (
    <div id='nav' style={{}}>
      
        <ul>
          <li className='list'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li className='list'><Link activeClass='active' to="about" spy={true} smooth={true}>About</Link></li>
          <li className='list'><Link activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link></li>
          <li className='list'><Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li className='list'><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></li>
        </ul>
        <div style={{display:"flex",flexDirection: "column",gap:"10px",marginTop:"25px"}}>
            <a className='logo' target={"blank"} href="https://github.com/BishalPatgiri">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a className='logo' target={"blank"} href="https://www.linkedin.com/in/bishal-patgiri-a80704198/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className='logo' target={"blank"} href="https://www.hackerrank.com/bishalpatgiri67">
            <FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon>
            </a>
            <a className='logo' target={"blank"} href="https://www.facebook.com/bishal.p.9">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </div>
    </div>
  )
}
