import React from 'react'
import project1 from "../Images/p1.png"
import project2 from "../Images/p2.png"
import project3 from "../Images/p3.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCss3, faGithub, faHtml5, faReact} from "@fortawesome/free-brands-svg-icons"

export const Projects = () => {
  return (
    <div style={{padding:"10% 0"}}>
      <div style={{width:"25%"}}>
      <h1 id='title' style={{marginBottom:"20px"}} className='title'>
        My Projects
      </h1>
      </div>
      <div id='projectRes' style={{}}>
        <div className='projectDiv'>
          <img className='projectImp' src={project1} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Sephora.nnnow.com Clone</p>
          <p>This is an E-Commerce website for selling varity of beuty products accrross the world. We have designed the project in a group of 5 people and implemented almost all the basic functionalities.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt=""/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a target={"blank"} href="https://github.com/BishalPatgiri/SEPHORA-E-commerce-Website" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://storied-marzipan-b1c3f6.netlify.app/" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
        <div className='projectDiv'>
          <img className='projectImp' src={project2} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Geekbuying.com Clone</p>
          <p>This is also an E-Commerce website thatr provide a wide range of product for selling. I have designed this website along with my 4 group members. We have tried to implement all the functionalities of the website with the exact syling that has been used in it.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt=''/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a target={"blank"} href="https://github.com/BishalPatgiri/Geekbuying-E-Commerce" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://endearing-lebkuchen-37c83d.netlify.app/" style={{marginTop:"4px",textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
        <div className='projectDiv'>
          <img className='projectImp' src={project3} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Naturesbascket.com Clone</p>
          <p>As the name, this website is all about the neturel things that we have been eating in our day to day life. It provides all the varities of food and bevarages available in the marget. I have designed this website by my own withn a week by implementing most of the functionalities of the website.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"purple",fontSize:"48px",marginRight:"10px"}} icon={faReact}></FontAwesomeIcon>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a target={"blank"} href="https://github.com/BishalPatgiri/Naturesbasket-Clone" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://beautiful-empanada-207bf8.netlify.app/" style={{marginTop:"4px",textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
      </div>
    </div>
  )
}
