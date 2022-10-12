import React from 'react'
import './footer.css'
import prof from './PROFESSIONAL PWD.png'
import service from './SERVICES.png'
import badge1 from './image 52.png' 
import badge2 from './Untitled-1-01 3.png' 
import badge3 from './image 53.png'
import offerImg from './image 57.png'

const footer = () => {
  return (
    <>
    
    <div className='profContainer'>
        <img className="profHeading" src={prof} alt="prog"/>
        <img src={service} alt="service"/>
    </div>
    <hr className='line'/>
    <div className='badgeContainer'>
        <img className='badge1' src={badge1} alt="b1"/>
        <img className='badge2' src={badge2} alt="b1"/>
        <img className='badge2' src={badge3} alt="b1"/>
    </div>
    <hr/>
    <div className='offercontainer'>
        <img  src={offerImg}alt="offer"/>
    </div>
    </>
  )
}

export default footer