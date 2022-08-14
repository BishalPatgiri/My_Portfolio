import React from 'react'
import { About } from './About'
import { Intro } from './Intro'
//import { NameLogo } from './NameLogo'
import { ProfileImage } from './ProfileImage'
import { Skills } from './Skills'

export const HomePage = () => {
  return (
    <div style={{marginLeft:"15%",color:"white"}}>
        
        <div id="home" style={{display:"flex",gap:"25px",borderBottom:"1px solid white",paddingBottom:"100px"}}>
          <ProfileImage/>
          <Intro/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="projects" style={{height: 500}}>
        <h1>This is project section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" style={{height: 500}}>
        <h1>This is Contact section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
    </div>
  )
}
