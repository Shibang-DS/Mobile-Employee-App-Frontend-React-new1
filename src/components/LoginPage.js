import React from 'react'
import "./styleLogin.css"
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {

  const navigate = useNavigate();

  function handleClick(){
    navigate("/EmpProd")
  }


  return (
    <div className='login'>
        <div className='login-logo'>
        </div>
        <div className='name'>
            <p>#We are Electric</p>
        </div>
        <input type="email" placeholder="      E-mail" className="emails" pattern=".+@example\.com" size="30" required />
        <input type="password" placeholder="      Password" className="password" name="password" minlength="8" required />
        <button onClick={handleClick} className='loginbtn'><p className='okl'>Login</p></button>
        <p className='forgot'>Forgot Password?</p>
    </div>
  )
}

export default LoginPage