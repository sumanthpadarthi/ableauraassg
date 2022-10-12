import React from 'react'
import './product.css'

const product = (props) => {
  return (
    <div>
        <h1 className='headingcoach'>{props.name}</h1>
        <h1 className='fundescription'>{props.description}</h1>
        <p className='fundescription'>{props.description1}</p>
        <p className='fundescription'>{props.description2}</p>
      </div>
  )
}

export default product