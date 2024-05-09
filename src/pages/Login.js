import React from 'react'
import Template from '../Components/Template'
import loginImg from "../assets/login.png"


const Login=({setIsLoggedIn})=> {
  return (
    <Template
    title="welcome Back"
    desc1="Build Skills for Today,tomorrow,and beyond"
    desc2="Education to future-proof your carreer."
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    
    
    
    
    
    />
  )
}

export default Login