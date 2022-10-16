import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHackerrank,faHtml5,faGithub,faCss3,faSquareGit,faReact,faNodeJs,faPython,faBootstrap} from "@fortawesome/free-brands-svg-icons"
import express from "../Images/sale.png"
import mongoDB from "../Images/mongo.png"
import "animate.css/animate.compat.css";
import ScrollAnimation from 'react-animate-on-scroll'

export const Skills = () => {
  return (
    <div >
      <ScrollAnimation 
        duration={3.5}
        animateIn='fadeIn'>
        <div id="skillMain">
          <div id='titleDiv'>
            <ScrollAnimation
              animateIn='flipInY'
              animateOut='flipOutY'>
              <h1 id='title' className='title'>The Skills I have</h1>
            </ScrollAnimation>
          </div>
      <div id='skillNew'>
        <div>
        <div id='titleDiv' style={{width:"100%",textAlign:"center"}}>
            <ScrollAnimation
              animateIn='flipInX'>
              <h1 id='title' className='title'>-- Front End --</h1>
            </ScrollAnimation>
        </div>
        <div id="skillDiv">
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
          <FontAwesomeIcon style={{color:"purple"}} className='skillLogo' icon={faBootstrap}></FontAwesomeIcon> 
        <p>Bootstrap</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
        <svg height={"35px"} width="40px" viewBox="0 0 257 257" xmlns="http://www.w3.org/2000/svg" class="css-89iovl"><rect width="257" height="257" rx="128.5" fill="url(#mark)"></rect><path d="M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z" fill="#fff"></path><defs><linearGradient id="mark" x1="128.5" x2="128.5" y2="257" gradientUnits="userSpaceOnUse"><stop stop-color="#7BCBD4"></stop><stop offset="1" stop-color="#29C6B7"></stop></linearGradient></defs></svg> 
        <p>Chakra UI</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
        <svg height="30px" viewBox="0 0 27 26" width="30" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m.98608 0h24.32332c.5446 0 .9861.436522.9861.975v24.05c0 .5385-.4415.975-.9861.975h-24.32332c-.544597 0-.98608-.4365-.98608-.975v-24.05c0-.538478.441483-.975.98608-.975zm13.63142 13.8324v-2.1324h-9.35841v2.1324h3.34111v9.4946h2.6598v-9.4946zm1.0604 9.2439c.4289.2162.9362.3784 1.5218.4865.5857.1081 1.2029.1622 1.8518.1622.6324 0 1.2331-.0595 1.8023-.1784.5691-.1189 1.0681-.3149 1.497-.5879s.7685-.6297 1.0187-1.0703.3753-.9852.3753-1.6339c0-.4703-.0715-.8824-.2145-1.2365-.1429-.3541-.3491-.669-.6186-.9447-.2694-.2757-.5925-.523-.9692-.7419s-.8014-.4257-1.2743-.6203c-.3465-.1406-.6572-.2771-.9321-.4095-.275-.1324-.5087-.2676-.7011-.4054-.1925-.1379-.3409-.2838-.4454-.4379-.1045-.154-.1567-.3284-.1567-.523 0-.1784.0467-.3392.1402-.4824.0935-.1433.2254-.2663.3959-.369s.3794-.1824.6269-.2392c.2474-.0567.5224-.0851.8248-.0851.22 0 .4523.0162.697.0486.2447.0325.4908.0825.7382.15.2475.0676.4881.1527.7218.2555.2337.1027.4495.2216.6475.3567v-2.4244c-.4015-.1514-.84-.2636-1.3157-.3365-.4756-.073-1.0214-.1095-1.6373-.1095-.6268 0-1.2207.0662-1.7816.1987-.5609.1324-1.0544.3392-1.4806.6203s-.763.6392-1.0104 1.0743c-.2475.4352-.3712.9555-.3712 1.5609 0 .7731.2268 1.4326.6805 1.9785.4537.546 1.1424 1.0082 2.0662 1.3866.363.146.7011.2892 1.0146.4298.3134.1405.5842.2865.8124.4378.2282.1514.4083.3162.5403.4946s.198.3811.198.6082c0 .1676-.0413.323-.1238.4662-.0825.1433-.2076.2676-.3753.373s-.3766.1879-.6268.2473c-.2502.0595-.5431.0892-.8785.0892-.5719 0-1.1383-.0986-1.6992-.2959-.5608-.1973-1.0805-.4933-1.5589-.8879z" fill="#91d5f0ed" fill-rule="evenodd"></path></svg>
        <p>Typescript</p>
        </ScrollAnimation>
        </div>
      </div>
      </div>
      <div style={{marginTop:"60px"}}>
        <div id='titleDiv' style={{width:"100%",textAlign:"center"}}>
            <ScrollAnimation
              animateIn='flipInX'>
              <h1 id='title' className='title'>-- Back End --</h1>
            </ScrollAnimation>
        </div>
        <div id='skillDiv'>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <FontAwesomeIcon style={{color:"lightgreen",marginTop:"15px"}} className='skillLogo' icon={faNodeJs}></FontAwesomeIcon> 
        <p>NodeJS</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img className='customImage' src={express} alt="" />
        <p style={{marginTop:"5px"}}>Express.js</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img className='customImage' src={mongoDB} alt="" />
        <p style={{marginTop:"10px"}}>MongoDB</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
          <img height={"50px"} width="60px" src="https://super-advice.com.au/wp-content/uploads/sites/7/2013/12/api-logo-web-3.png" alt="" />
        <p style={{marginTop:"10px"}}>API</p>
        </ScrollAnimation>
        </div>
      </div>
      </div>
      <div style={{marginTop:"60px"}}>
        <div id='titleDiv' style={{width:"100%",textAlign:"center"}}>
            <ScrollAnimation
              animateIn='flipInX'>
              <h1 id='title' className='title'>-- Tools --</h1>
            </ScrollAnimation>
        </div>
        <div id='skillDiv'>
        <div>
        <ScrollAnimation animateIn='flipInX'>
        <FontAwesomeIcon style={{color:"green"}} className='skillLogo' icon={faHackerrank}></FontAwesomeIcon> 
        <p>Hacherrank</p>
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
        <svg height={30} viewBox="0 0 780 250"><path fill="#91d5f0ed" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
        <p>npm</p>
        </ScrollAnimation>
        </div>
        <div>
        <ScrollAnimation animateIn='flipInX'>
        <img height={"35px"} width="35px" src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8" alt="" />
        <p>Postman</p>
        </ScrollAnimation>
        </div>
      </div>
      </div>
      </div>
    </div>
    </ScrollAnimation>
    </div>
  )
}

