import React from 'react'

function Register() {
  return (
    <div className="register-form-wrapper">
      <form className="register-form">
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
        Create Your Account
      </button>
    </div>
  )
}

export default Register