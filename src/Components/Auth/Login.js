import React,  { useContext } from 'react'

import AuthContext from '../Contexts/Authcontext'



function Login() {
  return (
    <div className="login-form-wrapper">
    <form className="login-form">
      <div>
      <input 
      type="text"
      name= "username"
      placeholder= 'Your Username'
      />
      </div>
      <div>
      <input 
      type="email"
      name= "email"
      placeholder= 'Your Email'
      />
      </div>
      <div>
      <input 
      type="password"
      name= "password"
      placeholder= 'Your Password'
      />
    </div>
    <div>
    <button className="account-btn" type="submit">
      Login
    </button>
    </div>
    </form>
  </div>
  )
}

export default Login