import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faHtml5,faGithub,faCss3,faSquareGit,faReact,faNodeJs,faPython,faBootstrap} from "@fortawesome/free-brands-svg-icons"

export const Skills = () => {
  return (
    <div style={{display:"flex",gap:"6%",padding:"10% 0",borderBottom:"1px solid white"}}>
      <h1 style={{width:"30%"}}>The Skills I have</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"8%",fontSize:"22px",rowGap:"50px",border:"1px solid red"}}>
      <div>
        <FontAwesomeIcon style={{color:"green"}} className='skillLogo' icon={faHackerrank}></FontAwesomeIcon> Hacherrank
        </div>
        <div>
        <FontAwesomeIcon style={{color:"Tomato"}} className='skillLogo' icon={faHtml5}></FontAwesomeIcon> HTML 5
        </div>
        <div>
        <FontAwesomeIcon style={{color:"red"}} className='skillLogo' icon={faCss3}></FontAwesomeIcon> CSS 3
        </div>
        <div style={{display:"flex"}}>
        <img src="https://img.icons8.com/color/40/000000/javascript--v1.png"/>
          <p style={{margin:"4px 0 0 8px"}}>JavaScript</p>
        </div> 
        <div>
        <FontAwesomeIcon style={{color:"orange"}} className='skillLogo' icon={faSquareGit}></FontAwesomeIcon> Git
        </div>
        <div>
        <FontAwesomeIcon style={{color:"white"}} className='skillLogo' icon={faGithub}></FontAwesomeIcon> GitHub
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faReact}></FontAwesomeIcon> ReactJS
        </div>
        <div style={{display:"flex"}}>
        <img height="35px" width="35px" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
        <p style={{margin:"4px 0 0 8px"}}>Redux</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightgreen"}} className='skillLogo' icon={faNodeJs}></FontAwesomeIcon> NodeJS
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faPython}></FontAwesomeIcon> Python
        </div>
        <div>
        <FontAwesomeIcon style={{color:"purple"}} className='skillLogo' icon={faBootstrap}></FontAwesomeIcon> Bootstrap
        </div>
      </div>
    </div>
  )
}