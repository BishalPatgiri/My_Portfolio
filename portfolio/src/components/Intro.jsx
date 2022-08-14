import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faLinkedin,faGithub,faFacebook} from "@fortawesome/free-brands-svg-icons"

export const Intro = () => {
  return (
    <div id="intro" style={{marginTop:"7%",width:"70%"}}>
        <h1>Hi,</h1>
        <h1>I am, <span className='defaultColor'>B</span>ishal <span className='defaultColor'>P</span>atgiri</h1>
        <h1>Full Stack Web Developer</h1>
        <p style={{fontSize:"18px",fontFamily:"serif",color:"#90A5A6",letterSpacing:"2px",paddingRight:"25%",lineHeight:"24px"}}>
          Passionate about problem solving, Frontend Web Development. Loves to buid cool projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset.
        </p>
        <div style={{marginTop:"32px"}}>
          <a style={{border:"1px solid #64FFDA",color:"#64FFDA",padding:"6px 20px",borderRadius:"20%",textDecoration:"none"}} href="">Resume</a>
          <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
            <a className='logo' href="https://github.com/BishalPatgiri">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
            <a className='logo' href="https://www.linkedin.com/in/bishal-patgiri-a80704198/">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a className='logo' href="https://www.hackerrank.com/bishalpatgiri67">
            <FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon>
            </a>
            <a className='logo' href="">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
          </div>
        </div>
    </div>
  )
}
