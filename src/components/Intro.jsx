import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { ProfileImage } from './ProfileImage'

export const Intro = () => {
  return (
    <div id='introMain'>
      <ProfileImage/>
      <div id="intro">
      <ScrollAnimation 
      duration={3.5}
      animateIn='fadeIn'>
        <ScrollAnimation 
        animateIn='tada'
       duration={1.5}
        >
          <h1 style={{width:"12%"}}><span>H</span><span>i</span><span>,</span></h1>
        </ScrollAnimation>
        <h1 style={{width:"80%"}}><span>I</span> <span>am</span><span>,</span> <span className='defaultColor'>B</span><span>i</span><span>s</span><span>h</span><span>a</span><span>l</span> <span className='defaultColor'>P</span><span>a</span><span>t</span><span>g</span><span>i</span><span>r</span><span>i</span></h1>
        <div id='container'>
            <h1 id='work' style={{width:"100%"}}>
              <span>F</span><span>u</span><span>ll</span> <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span> <span>W</span><span>e</span><span>b</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span>
            </h1>
        </div>
        <ScrollAnimation 
      duration={2}
      animateIn='fadeIn'>
        <p>
          Passionate about problem solving, Frontend Web Development. Loves to build cool projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset. I believe in continuous learning and growth.
        </p>
        </ScrollAnimation>
        <div style={{marginTop:"32px"}}>
          <a target={"blank"} style={{border:"1px solid #64FFDA",color:"#64FFDA",padding:"10px",borderRadius:"10px",textDecoration:"none", boxShadow:"#64FFDA 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} href="https://drive.google.com/file/d/1_RBqbBLQgdrjdfeBvxLY3z-LV0cSiExV/view">Resume</a>
        </div>
        </ScrollAnimation>
    </div>
    </div>
    
  )
}
