import React from 'react'
import project1 from "../Images/p1.png"
import project2 from "../Images/p2.png"
import project3 from "../Images/p3.png"
import project4 from "../Images/p4.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCss3, faGithub, faHtml5, faReact} from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll'

export const Projects = () => {
  return (
    <div style={{padding:"4% 0 6% 0",borderTop:"1px solid white"}}>
      <div id='titleDiv' style={{}}>
      <ScrollAnimation
        animateIn='flipInY'>
      <h1 id='title' style={{marginBottom:"20px"}} className='title'>
        My Projects
      </h1>
      </ScrollAnimation>
      </div>
      <div id='projectRes' style={{}}>
      <ScrollAnimation 
      animateIn='bounceInRight'
  
  duration={1.5}>
      <ScrollAnimation 
      duration={4}
      animateIn='fadeIn'>
      <div className='projectDiv'>
          <img className='projectImp' src={project4} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>booking.com Clone</p>
          <p>Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. Along with that you can directly book your flits here. The website has over 28 million listings
          </p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"42px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"42px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"42px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"purple",fontSize:"42px",marginRight:"10px"}} icon={faReact}></FontAwesomeIcon>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a target={"blank"} href="https://github.com/BishalPatgiri/Clone-of-Booking.com" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://booking-com-clone.netlify.app/" style={{textDecoration:"none",color:"black",backgroundColor:"#4BCFD4",padding:"6px 10px",borderRadius:"8px",fontWeight:"bold"}}>Live
            <FontAwesomeIcon style={{marginLeft:"10px",fontSize:"22px"}} icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
          </div>
        </div>
      </ScrollAnimation>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInLeft'
      animateOut='bounceOutRight'>
      <ScrollAnimation 
      duration={4}
      animateIn='fadeIn'>
      <div className='projectDiv'>
          <img className='projectImp' src={project3} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Naturesbascket.com Clone</p>
          <p>As the name, this website is all about the neturel things that we have been eating in our day to day life. It provides all the varities of food and bevarages available in the marget. I have designed this website by my own withn a week by implementing most of the functionalities of the website.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"42px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"42px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"42px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"purple",fontSize:"42px",marginRight:"10px"}} icon={faReact}></FontAwesomeIcon>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a target={"blank"} href="https://github.com/BishalPatgiri/Naturesbasket-Clone" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://beautiful-empanada-207bf8.netlify.app/" style={{textDecoration:"none",color:"black",backgroundColor:"#4BCFD4",padding:"6px 10px",borderRadius:"8px",fontWeight:"bold"}}>Live
            <FontAwesomeIcon style={{marginLeft:"10px",fontSize:"22px"}} icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
          </div>
        </div>
      </ScrollAnimation>
      </ScrollAnimation>
      <ScrollAnimation animateIn='bounceInRight'
      duration={1.5}>
      <ScrollAnimation 
      duration={4}
      animateIn='fadeIn'>
        <div className='projectDiv'>
          <img className='projectImp' src={project2} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Geekbuying.com Clone</p>
          <p>This is also an E-Commerce website thatr provide a wide range of product for selling. I have designed this website along with my 4 group members. We have tried to implement all the functionalities of the website with the exact syling that has been used in it.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"42px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"42px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"42px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt=''/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          <a target={"blank"} href="https://github.com/BishalPatgiri/Geekbuying-E-Commerce" style={{textDecoration:"none",padding:"6px",border:"1px solid white",color:"white",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://endearing-lebkuchen-37c83d.netlify.app/" style={{textDecoration:"none",backgroundColor:"#4BCFD4",color:"black",padding:"6px 10px",borderRadius:"8px",fontWeight:"bold"}}>Live
            <FontAwesomeIcon style={{marginLeft:"10px",fontSize:"22px"}} icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
        </ScrollAnimation>
        </ScrollAnimation>
        <ScrollAnimation animateIn='bounceInLeft'
        animateOut='bounceOutRight'>
        <ScrollAnimation 
      duration={5}
      animateIn='fadeIn'>
        <div className='projectDiv'>
          <img className='projectImp' src={project1} alt="" />
          <p style={{fontSize:"25px",fontStyle:"italic"}}>Sephora.nnnow.com Clone</p>
          <p>This is an E-Commerce website for selling varity of beuty products accrross the world. We have designed the project in a group of 5 people and implemented almost all the basic functionalities.</p>
          <div style={{marginBottom:"20px"}}>
          <FontAwesomeIcon style={{color:"white",fontSize:"42px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> 
          <FontAwesomeIcon style={{color:"tomato",fontSize:"42px",marginRight:"10px"}} icon={faHtml5}></FontAwesomeIcon>
          <FontAwesomeIcon style={{color:"yellowgreen",fontSize:"42px",marginRight:"10px"}} icon={faCss3}></FontAwesomeIcon>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt=""/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <a target={"blank"} href="https://github.com/BishalPatgiri/SEPHORA-E-commerce-Website" style={{textDecoration:"none",border:"1px solid white",color:"white",padding:"6px",borderRadius:"8px"}}>
            <FontAwesomeIcon style={{color:"white",fontSize:"25px",marginRight:"10px"}} icon={faGithub}></FontAwesomeIcon> GitHub
            </a>
            <a target={"blank"} href="https://storied-marzipan-b1c3f6.netlify.app/" style={{textDecoration:"none",color:"black",backgroundColor:"#4BCFD4",padding:"6px 10px",borderRadius:"8px",fontWeight:"bold"}}>Live<FontAwesomeIcon style={{marginLeft:"10px",fontSize:"22px"}} icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a>
          </div>
        </div>
        </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </div>
  )
}
