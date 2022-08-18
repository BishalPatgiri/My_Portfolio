import React from 'react'
import { About } from './About'
import { Contact } from './Contact'
import { Intro } from './Intro'
import { Projects } from './Projects'
import { Skills } from './Skills'

export const HomePage = () => {
  return (
    <div style={{marginLeft:"15%",color:"white"}}>
        
        <div id="home">        
          <Intro/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="projects">
        <Projects/>
        </div>
        <div id="contact">
        <Contact/>
        </div>
    </div>
  )
}
