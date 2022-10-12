import React from 'react'
import './middle.css'
import Havefunimg from './Rectangle 223.png'
import Rare from './Rectangle 224.png'
import Learn from './Rectangle 225.png'
import AllinOne from './Rectangle 226.png'
import sportsman from './image 19.png'
import medicalcare from './image 24.png'
import leftArrow from './Untitled-1-01-01 5.png'
import cricle from './Ellipse 64.png'
import fullcricle from './Ellipse 65.png'
import rightArrow from './Untitled-1-01-01 6.png'
import bar from './Rectangle 384.png'
import Product from '../product'



const middle = () => {
  return (
    <>
    <div className='joincontainer'>
        <h1 className='joinheading'>JOIN THE COMMUNITY NOW</h1>
        <p className='joindescription'>HELP OTHERS OR GET HELP- EARN POINTS TOWARDS YOUR PURCHASE</p>
    </div>
    <div className='joinimagecontainer'>
        <div className='funcontainer' >
            <img className='havefunimage' src={Havefunimg} alt="haveFun"/>
            <Product description="HAVE FUN WITH ALL"/>
            
        </div>

        <div className='funcontainer' >
            <img className='havefunimage'   src={Rare} alt="haveFun"/>
            <Product description="RARE KNOWLEDGE"/>
        </div>
        <div className='funcontainer' >
            <img className='havefunimage' src={Learn} alt="haveFun"/>
            <Product description="LEARN FROM EXPERIENCE"/>
        </div>
        <div className='funcontainer' >
            <img className='havefunimage' src={AllinOne} alt="haveFun"/>
            <Product description="ALL FOR ONE"/>
            
        </div>
     </div>
     <div>
       <h1 className='serviceheading'>SERVICES</h1>

       <div className='joinimagecontainer'>
        <div className='funcontainer' >
            <img className='havefunimage' src={sportsman} alt="haveFun"/>
            <Product description1="SPORTS COACH"/>
            
        </div>

        <div className='funcontainer' >
            <img className='havefunimage'   src={medicalcare} alt="haveFun"/>
            <Product description2="MEDICAL CARE"/>
        </div>
        <div className='funcontainer' >
            <img className='havefunimage' src={sportsman} alt="haveFun"/>
            <Product description1="SPORTS COACH"/>
        </div>
        <div className='funcontainer' >
            <img className='havefunimage' src={sportsman} alt="haveFun"/>
            <Product description1="SPORTS COACH"/>
        </div>
     </div>
    </div> 
    <div className='arrowcontainer'>
        <div>
        <img className='leftArrow' src={leftArrow} alt="left"/>
        <img className='circle' src={cricle} alt="circle"/>
        <img className='circle'  src={fullcricle} alt="fullcircle"/>
        <img className='circle' src={bar} alt="bar"/>
        <img className='leftArrow' src={rightArrow} alt="right"/>
        </div>
    </div>
</>
  )
}

export default middle