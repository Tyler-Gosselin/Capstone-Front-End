import React,  { useContext } from 'react'

import AuthContext from '../Contexts/Authcontext'



function Login() {
  return (
    <div className="login-form-wrapper">
    <form className="login-form">
      <input 
      type="text"
      name= "username"
      placeholder= 'Your Username'
      />
      <input 
      type="email"
      name= "email"
      placeholder= 'Your Email'
      />
      <input 
      type="password"
      name= "password"
      placeholder= 'Your Password'
      />
    </form>
    <button className="account-btn" type="submit">
      Login
    </button>
  </div>
  )
}

export default Login