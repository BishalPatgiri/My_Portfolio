import React from 'react'
import profilePic from "../Images/Mine2.jpg"

export const ProfileImage = () => {
  return (
    <div id='profileDiv'>
        <img className='profile' src={profilePic} alt="" />
    </div>
  )
}
