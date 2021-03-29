import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import AuthContext from "../Contexts/Authcontext";
import { API_URL } from "../API_URL";

const AuthProvider = (props) => {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [userId, setUserId] = useState(null);
  let history = useHistory();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${API_URL}/logged-in`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.message === "User Logged in Via Cookie") {
          setUserId(res.data.user_id);
          setLoggedInStatus("LOGGED_IN");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSuccessfulLogin = (user_id) => {
    setLoggedInStatus("LOGGED_IN");
    setUserId(user_id);
    history.push("/");
  };

  const handleLogout = () => {
    console.log("logout");
    axios({
      method: "POST",
      url: `${API_URL}/logout`,
      withCredentials: true,
    })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  const state = {
    loggedInStatus,
    userId,
    setLoggedInStatus,
    handleSuccessfulLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
