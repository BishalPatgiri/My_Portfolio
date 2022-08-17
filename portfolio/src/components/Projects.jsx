import React from 'react'
import project1 from "../Images/p1.png"
import project2 from "../Images/p2.png"
import project3 from "../Images/p3.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCss3, faGithub, faHtml5, faReact} from "@fortawesome/free-brands-svg-icons"

export const Projects = () => {
  return (
    <div style={{display:"flex",gap:"5%",borderBottom:"1px solid white",padding:"5% 0"}}>
      <h1 style={{width:"20%"}}>
        My Projects
      </h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"5%",marginBottom:"80px",textAlign:"center",width:"70%"}}>
        <div style={{border:"1px solid green",padding:"8%"}}>
          <img height="250px" width="100%" src={project1} alt="" />
          <p style={{fontSize:"25px"}}>Sephora.nnnow.com Clone</p>
          <p>This is an E-Commerce website for selling varity of beuty products accrross the world. We have designed the project in a group of 5 people and implemented almost all the basic functionalities.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a href="" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a href="" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
        <div style={{border:"1px solid green",padding:"8%"}}>
          <img height="250px" width="100%" src={project2} alt="" />
          <p style={{fontSize:"25px"}}>Geekbuying.com Clone</p>
          <p>This is also an E-Commerce website thatr provide a wide range of product for selling. I have designed this website along with my 4 group members. We have tried to implement all the functionalities of the website with the exact syling that has been used in it.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a href="" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a href="" style={{marginTop:"4px",textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
        <div style={{border:"1px solid green",padding:"8%"}}>
          <img height="250px" width="100%" src={project3} alt="" />
          <p style={{fontSize:"25px"}}>Naturesbascket.com Clone</p>
          <p>As the name suggest this website is all about the neturel things that we have been eating in our day to day life. It provides all the varities of food and bevarages available in the marget. I have designed this website by my own withn a week. I have implemented most of the functionalities of the website.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"48px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"48px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"48px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"purple",fontSize:"48px",marginRight:"10px"}} icon={faReact}></FontAwesomeIcon>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a href="" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a href="" style={{marginTop:"4px",textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>Delployed</a>
          </div>
        </div>
      </div>
    </div>
  )
}
