import React, { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./LoginPopup.css"

const LoginPopUp = ({setShowLogin}) => {
    const [curreState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
     <form className='login-popup-container'>
        <div className='login-popup-title'>
            <h2>{curreState} </h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>
        </div>
        <div className='login-popup-inputs'>
        {curreState==="Login"?<></>:<input type='text' placeholder='Your Name' required/> }
            
            <input type='email' placeholder='Email'
            required/>
            <input type='password' placeholder='Password' required />
        </div>

        <button>{curreState==="Sing up" ? "Create account" : "Login"}</button>

        <div className='login-popup-condition'>
            <input type='checkbox'   required/>
            <p>By Continuing, I agree to the terms of use & Privacy policy </p>
         </div>

         {curreState==="Login" ?<p> Create a new account?  <span onClick={()=>setCurrState("Sing Up")}> Click here</span></p>: <p>Already have an account? <span onClick={()=> setCurrState ("Login")}>Log in </span></p> }
            
           
               
           
       
     </form>
    </div>
  )
}

export default LoginPopUp
