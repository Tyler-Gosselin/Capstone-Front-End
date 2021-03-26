import React from "react";

function Register() {
  return (
    <div className="register-form-wrapper">
      <form className="register-form">
        <div>
          <input type="text" name="username" placeholder="Your Username" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Your Password" />
        </div>
        <div>
          <button className="account-btn" type="submit">
            Create Your Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
