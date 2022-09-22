import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
// import "animate.css/animate.compat.css";
// import "animate.css/animate.min.css";

export const About = () => {
  return (
    <div className='about' style={{}}>
      <div id='titleDiv' style={{}}>
      <ScrollAnimation 
        animateIn='flipInY'
        animateOut='flipOutY'>
          <h1 id='title' className='title'>Who am I ?</h1>
      </ScrollAnimation>
      </div>
      <div id='des' style={{}}>
      <ScrollAnimation 
      animateIn='bounceInRight'
      animateOut='bounceOutLeft'>
      <p style={{color:"#96E2D8"}}>
      Hello! My name is Bishal Patgiri, I am an Electronics and Communication Engineer by degree. Currently I am doing a Full Stack web development bootcamp from MasaiSchool,Bengaluru. I am a highly passionate front-end developer who loves making some cool designs,creating APIs and creating awasome applications. I am always open to do new things, to learn new new concepts of Frontend development.
      </p>
      <p style={{color:"#ACE36D"}}>Although I'm very familiar with using frameworks like React, my websites are primarily hand-coded using HTML5, CSS3, SVG & JavaScript</p>
      <p style={{color:"#6DE39D"}}>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</p>
      <p style={{color:"#96E2D8"}}>In a quest for always keeping myself updated, I read books and attend conferences & meetups.</p>
      </ScrollAnimation>
{/* <ScrollAnimation animateIn='bounceInRight'
  animateOut='bounceOutLeft'>
  <h2>
    <a href='https://daneden.github.io/animate.css/'>
      Animate.css
    </a>
  </h2>
</ScrollAnimation>
<ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
  <h1>
    React Animate On Scroll
  </h1>
  <h2>
    Using:
  </h2>
</ScrollAnimation> */}
      </div>
      
    </div>
  )
}
