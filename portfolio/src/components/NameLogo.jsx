import React from 'react'
import nameLogo from "../Images/LogoMe.png"

export const NameLogo = () => {
  return (
    <div id='nameLogo' >
        <div id="image" >
            <div>
                <img src={nameLogo} alt="b" />
            </div>
        </div>
        <div className="content" >
            <div className="main">
                <a href="/">
                    <div className="name">
                        <span>BP</span>          
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}
