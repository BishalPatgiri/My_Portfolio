import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faHtml5,faGithub,faCss3,faSquareGit,faReact,faNodeJs,faPython,faBootstrap} from "@fortawesome/free-brands-svg-icons"

export const Skills = () => {
  return (
    <div style={{display:"flex",padding:"10% 0",borderBottom:"1px solid white"}}>
      <div style={{width:"22%"}}>
      <h1 className='title'>The Skills I have</h1>
      </div>
      <div id="skillDiv" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"8%",fontSize:"22px",rowGap:"30px",textAlign:"center",width:"68%",padding:"0 4%"}}>
        <div>
        <FontAwesomeIcon style={{color:"green"}} className='skillLogo' icon={faHackerrank}></FontAwesomeIcon> 
        <p>Hacherrank</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"Tomato"}} className='skillLogo' icon={faHtml5}></FontAwesomeIcon> 
        <p>HTML 5</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"red"}} className='skillLogo' icon={faCss3}></FontAwesomeIcon> 
        <p>CSS 3</p>
        </div>
        <div>
        <img src="https://img.icons8.com/color/40/000000/javascript--v1.png" alt='jsLogo'/>
          <p style={{marginTop:"15px"}}>JavaScript</p>
        </div> 
        <div>
        <FontAwesomeIcon style={{color:"orange"}} className='skillLogo' icon={faSquareGit}></FontAwesomeIcon> 
        <p>Git</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"white"}} className='skillLogo' icon={faGithub}></FontAwesomeIcon> 
        <p>GitHub</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faReact}></FontAwesomeIcon> 
        <p>ReactJS</p>
        </div>
        <div>
        <img height="35px" width="35px" src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="" />
        <p style={{marginTop:"18px"}}>Redux</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightgreen"}} className='skillLogo' icon={faNodeJs}></FontAwesomeIcon> 
        <p>NodeJS</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"lightblue"}} className='skillLogo' icon={faPython}></FontAwesomeIcon> 
        <p>Python</p>
        </div>
        <div>
        <FontAwesomeIcon style={{color:"purple"}} className='skillLogo' icon={faBootstrap}></FontAwesomeIcon> 
        <p>Bootstrap</p>
        </div>
      </div>
    </div>
  )
}
