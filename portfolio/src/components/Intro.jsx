import React from 'react'
import { ProfileImage } from './ProfileImage'

export const Intro = () => {
  return (
    <div style={{display:"flex",borderBottom:"1px solid white",padding:"10% 0"}}>
      <ProfileImage/>
      <div id="intro" style={{width:"78%",padding:"0 4%"}}>
        <h1><span>H</span><span>i</span>,</h1>
        <h1><span>I</span> <span>am</span>, <span className='defaultColor'>B</span><span>i</span><span>s</span><span>h</span><span>a</span><span>l</span> <span className='defaultColor'>P</span><span>a</span><span>t</span><span>g</span><span>i</span><span>r</span><span>i</span></h1>
        <h1>Full Stack Web Developer</h1>
        <p style={{fontSize:"20px",fontFamily: "Open Sans",color:"#90A5A6",letterSpacing:"2px",paddingRight:"20%",lineHeight:"30px"}}>
          Passionate about problem solving, Frontend Web Development. Loves to buid cool projects and work in a team. I want to achieve global recognition and exposure with my skillset, toolset and mindset.
        </p>
        <div style={{marginTop:"32px"}}>
          <a style={{border:"1px solid #64FFDA",color:"#64FFDA",padding:"10px",borderRadius:"10px",textDecoration:"none", boxShadow:"#64FFDA 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}} href="https://drive.google.com/file/d/1u9hxfa35ijyX_rzoymMjTLaJvjyem5Pd/view">Resume</a>
        </div>
    </div>
    </div>
    
  )
}
