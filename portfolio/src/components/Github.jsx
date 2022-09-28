import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import GitHubCalendar from 'react-github-calendar'

export const Github = () => {
  return (
    <div>
    <ScrollAnimation
        animateIn='flipInY'>
      <h1 style={{marginTop:"7%"}} id='title' className='title'>My Github Statictics</h1>
      </ScrollAnimation>
    <div style={{backgroundColor:"white",color:"black",width:"90%",margin:"auto",marginBottom:"7%",padding:"1.5% 2%",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
    <h2 className='git' style={{color:"black"}}>My Github Contributions</h2>
    <GitHubCalendar style={{width:"100%",margin:"auto"}} username="BishalPatgiri" />
    </div>
    </div>
  )
}
