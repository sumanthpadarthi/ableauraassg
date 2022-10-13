import React from 'react'
import Header from './Header/header'
import MiddlePart from './middle/middle'
import Footer from './Footer/footer'
import Details from './details'


import  './App.css'

const App = () => {
  return (
    <>
    <div className='bgContainer'>
        <div className='bgcontainer2'>
            <h1 className='mainHeading'>A PWD ECOSYSTEM</h1>
            <p className='description'>an app. a forum. a lifestyle</p>
        </div>

        <div className='bgcontainer3'>
            <Header/>
            <MiddlePart/>
            <Footer/>
            <Details/>
            
        </div>
    </div>
    </>
  )
}

export default App