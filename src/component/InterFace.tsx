import React from 'react'

import { useNavigate } from "react-router-dom";

function InterFace() {

    const navigate = useNavigate()


    const LogIn =()=>{
        navigate("/logIn")  
    }

    const SignUp =()=>{
      navigate("/signup")  
  }
  return (
    <div className='main color'>

        <h3 className='text'>مالحد منة، الله اللي عزنا</h3>
        <div className='btn'>
        <button onClick={LogIn}>تسجيل دخول</button>
        <button onClick={SignUp}> تسجيل جديد</button>
        </div>
      
    </div>
  )
}

export default InterFace