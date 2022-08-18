import React from 'react'

export const About = () => {
  return (
    <div style={{display:"flex",padding:"8% 0%",borderBottom:"1px solid white"}}>
      <div style={{width:"22%"}}>
      <h1 className='title'>Who am I ?</h1>
      </div>
      <div style={{width:"68%",padding:"0 4%",fontSize:"20px",letterSpacing:"2px",lineHeight:"35px"}}>
      <p style={{color:"#96E2D8"}}>
      Hello! My name is Bishal Patgiri, I am an Electronics and Communication Engineer by degree. Currently I am doing a Full Stack web development bootcamp from MasaiSchool,Bengaluru. I am a highly passionate front-end developer who loves making some cool designs,creating APIs and creating awasome applications. I am always open to do new things, to learn new new concepts of Frontend development.
      </p>
      <p style={{color:"#ACE36D"}}>Although I'm very familiar with using frameworks like React, my websites are primarily hand-coded using HTML5, CSS3, SVG & JavaScript</p>
      <p style={{color:"#6DE39D"}}>With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website front-end code without compromising on browser support and performance.</p>
      <p style={{color:"#96E2D8"}}>In a quest for always keeping myself updated, I read books and attend conferences & meetups.</p>
      </div>
    </div>
  )
}
