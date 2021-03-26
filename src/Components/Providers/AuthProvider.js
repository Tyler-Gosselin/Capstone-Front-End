import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import AuthContext from "../Contexts/Authcontext";

const AuthProvider = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  let history = useHistory()

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:5000/api/logged-in`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data === "User Logged in Via Cookie") {
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSuccessfulLogin = () => {
    setLoggedInStatus("LOGGED_IN");
    history.push('./')
  };

  const handleLogout = () => {
    axios({
      method: "POST",
      url: `http://localhost:5000/api/logout`,
      withCredentials: true,
    })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        history.push('./')
      })
      .catch((err) => console.log(err));
  };

  const state = {
    loggedInStatus,
    setLoggedInStatus,
    handleSuccessfulLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
