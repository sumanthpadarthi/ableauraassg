import React  from 'react'
import './details.css'
import { useState } from 'react'

const Details = () => {
    const[data,setData]=useState({
        username:"",
        email:"",
        phonenumber:""

    })
    const{username,email,phonenumber}=data
    const onChnagehandler = e => {
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const sumbithandler =e => {
        e.preventDefault()
        if(username==="" || email==="" || phonenumber===""){
            alert("please fill the details")
        }
        else{
            console.log(data)
            alert("detailsfillsucessfully")
        }
    }

return (
    <>
    
    <div className='inputcontainer'>
        <h1 className='detailsheading'>FILL YOUR DETAILS</h1>
        <form autoComplete='off' onSubmit={sumbithandler}>
        <input onChange={onChnagehandler} value={username} name="username" type="text" placeholder='ENTERYOURNAME'/> <br/>
        <input onChange={onChnagehandler} value={email} name="email"  type="email" placeholder='ENTERYOUREMAIL'/> <br/>
        <input onChange={onChnagehandler} value={phonenumber} name="phonenumber" type="phone" placeholder='ENTERYOURNUMBER'/> <br/>
        {
            
        }



        <button onChange={onChnagehandler} type="submit" className='button'>Submit</button>
        

        </form>
        
       
    </div>
       

    
    </>
  )
}

export default Details