 import React from 'react'
 import './header.css'
 //import coachimg from './image 20.png'
 import playstoreImage from './image 10.png'
 import applestore from './image 12.png'
 import Product from '../product'
 
 
 

const header = () => {
 

  
  return (
    
    <>
    <div className='headerContainer'>
      
      
        <h1 className='headerHeading'>CHANGING THE FUTURE, NOW</h1>
        <div className='imagecontainer'>
            <div className='coachimage'>
                <div className='headcontainer'>
                  {/*<h1 className='headingcoach' >LEARN FROM CARING EXPERTS</h1>*/}
                  <Product name="LEARN FROM CARING EXPERTS"/>
                </div>
            </div>

            <div className='readytochange'>
                <h1 className='readyHeadind'>READY TO CHANGE YOUR LIFE?</h1>
                <p className='readydescription'> Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>ut aliquam, purus sit amet luctus venenatis, <br/>lectus magna fringilla</p>
            <div className='bothplaystore'>
                <div className='playstorecontainer'>
                    <div className='googleplaystore'>
                        <img className='playstore' src={playstoreImage} alt="playstore"/>
                      <div className='aboutgoogle'>
                          <p className='avaliable'>Available on</p>
                          <h1 className='google'> Google play</h1>
                        </div>
                    </div>
                </div>
                <div className='playstorecontainer'>
                    <div className='googleplaystore'>
                        <img className='playstore' src={applestore} alt="playstore"/>
                      <div className='aboutgoogle'>
                          <p className='avaliable'>Download on</p>
                          <h1 className='google'> App store</h1>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
           </div>
        <div className='coachimage2'>
                <div className='headcontainer'>
                   {/*<h1 className='headingcoach' >TRAVEL WHERE YOU WANT</h1>*/}
                   <Product name="TRAVEL WHERE YOU WANT"/>
                   
                   
                </div>
            </div>
      </div>
    </>
  )
}

export default header