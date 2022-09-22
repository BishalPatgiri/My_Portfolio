import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faHtml5,faGithub,faCss3,faSquareGit,faReact,faNodeJs,faPython,faBootstrap} from "@fortawesome/free-brands-svg-icons"
import express from "../Images/sale.png"
import mongoDB from "../Images/mongo.png"
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll'
import { GithubContributions } from "react-github-graph"

export const Skills = () => {
  return (
    <div>
    <div id="skillMain" style={{}}>
      <div id='titleDiv'>
      <ScrollAnimation
        animateIn='flipInY'
        animateOut='flipOutY'>
      <h1 id='title' className='title'>The Skills I have</h1>
      </ScrollAnimation>
      </div>
      <div id="skillDiv">
        <div>
        <ScrollAnimation animateIn='flipInX'>
        <FontAwesomeIcon style={{color:"green"}} className='skillLogo' icon={faHackerrank}></FontAwesomeIcon> 
        <p>Hacherrank</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"Tomato"}} className='skillLogo' icon={faHtml5}></FontAwesomeIcon> 
        <p>HTML 5</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"red"}} className='skillLogo' icon={faCss3}></FontAwesomeIcon> 
        <p>CSS 3</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt='jsLogo'/>
          <p style={{marginTop:"15px"}}>JavaScript</p>
          </ScrollAnimation>
        </div> 
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"orange"}} className='skillLogo' icon={faSquareGit}></FontAwesomeIcon> 
        <p>Git</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"white"}} className='skillLogo' icon={faGithub}></FontAwesomeIcon> 
        <p>GitHub</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faReact}></FontAwesomeIcon> 
        <p>ReactJS</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img height="35px" width="35px" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
        <p style={{marginTop:"18px"}}>Redux</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"lightgreen"}} className='skillLogo' icon={faNodeJs}></FontAwesomeIcon> 
        <p>NodeJS</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faPython}></FontAwesomeIcon> 
        <p>Python</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"purple"}} className='skillLogo' icon={faBootstrap}></FontAwesomeIcon> 
        <p>Bootstrap</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img className='customImage' src={express} alt="" />
        <p style={{marginTop:"18px"}}>Express.js</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img className='customImage' src={mongoDB} alt="" />
        <p style={{marginTop:"18px"}}>MongoDB</p>
        </ScrollAnimation>
        </div>
      </div>
    </div>
    <div style={{border:"1px solid red",backgroundColor:"white",width:"90%",margin:"auto",marginTop:"7%",marginBottom:"7%",padding:"2% 2%"}}>
    <h2 style={{color:"black"}}>My Github Contributions</h2>
    <GithubContributions username="BishalPatgiri" />
    </div>
    </div>
  )
}

{/* <ScrollAnimation animateIn='flipInX'>
  <h1>
    afterAnimatedIn
  </h1>
</ScrollAnimation> */}
