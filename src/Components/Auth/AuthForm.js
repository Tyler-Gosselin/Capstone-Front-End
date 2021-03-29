import React, { useState, useContext } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

import AuthContext from "../Contexts/Authcontext";

const AuthForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formToShow, setFormToShow] = useState("login");

  const { handleSuccessfulLogin } = useContext(AuthContext);
  let history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/api/${formToShow}`,
      data: {
        username: username,
        email: email,
        password: password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.message === "User Verified") {
          handleSuccessfulLogin(res.data.user_id)
          history.push("/")
        }
    
      })
      .catch((err) => console.log(err));
  };

  const handleFormToShow = () => {
    if (formToShow === "login") {
      setFormToShow("register-user");
    } else {
      setFormToShow("login");
    }
  };

  const formQuestionText = () => {
    if (formToShow === "login") {
      return "Create your account here.";
    } else {
      return "Alreay have and account? Login here.";
    }
  };

  return (
    <div className="login-form-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Your Username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className="account-btn" type="submit">
            {formToShow}
          </button>
          <button className="account-btn" onClick={handleFormToShow}>{formQuestionText()}</button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
