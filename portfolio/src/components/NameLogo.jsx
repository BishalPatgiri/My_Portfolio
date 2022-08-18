import React from 'react'

export const NameLogo = () => {
  return (
    <div id='nameLogo'>
        <div id="image">
            <div style={{height:"75px",width:"150px",padding:"5px"}}></div>
            {/* <img height="75px" width="125px" src="../" alt=""/> */}
        </div>
        <div className="content">
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
