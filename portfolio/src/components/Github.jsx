import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import GitHubCalendar from 'react-github-calendar'
//import Chart from './Chart.jsx'

export const Github = () => {
  return (
    <div style={{padding:"4% 0 2% 0"}}>
      <ScrollAnimation 
      duration={3.5}
      animateIn='fadeIn'>
    <div id='titleDiv' style={{width:"30%"}}>
      <ScrollAnimation
        animateIn='flipInY'>
      <h1 id='title' style={{marginBottom:"20px"}} className='title'>
        My Statistics
      </h1>
      </ScrollAnimation>
      </div>
    {/* <Chart/> */}
    <div id='calenderDiv' style={{backgroundColor:"white",color:"black",width:"90%",margin:"auto",marginTop:"5%",padding:"1.5% 2%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
    <h2 className='git' style={{color:"black"}}>My Github Contributions</h2>
    <GitHubCalendar style={{width:"100%",margin:"auto"}} username="BishalPatgiri" />
    </div>
    <div>
    <div id="gitStatis" >
    
      <div style={{height:"100%",width:"100%"}}>
      <ScrollAnimation 
      duration={1.5}
        animateIn='bounceInRight'>
          <img height="100%" id='git1'  src="https://github-readme-streak-stats.herokuapp.com/?user=BishalPatgiri&" alt="bishalpatgiri" />
      </ScrollAnimation>
        </div>
      <div style={{height:"100%",width:"100%"}}>
      <ScrollAnimation 
      duration={1.5}
        animateIn='bounceInLeft'
        animateOut='bounceOutRight'
        >
      <img height="100%" id='git2'  src="https://github-readme-stats.vercel.app/api?username=bishalpatgiri&show_icons=true&locale=en" alt="bishalpatgiri" />
      </ScrollAnimation>
      </div>
      
    </div>
    </div>
    </ScrollAnimation>
    </div>
  )
}
