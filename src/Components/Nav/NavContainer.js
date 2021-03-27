import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import LogOutButton from "../Auth/LogOutButton";
import AuthContext from "../Contexts/Authcontext";

const NavContainer = () => {
  const {loggedInStatus } = useContext(AuthContext)

  return (
    <div className="navigation-wrapper">
      <div className="logo-wrapper">
        <NavLink exact to="/">
          The Half-Glass SportsCast
        </NavLink>
      </div>
      <div className="nav-links-wrapper">
        <NavLink exact to="/blog">
          Blog
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <button className= "nav-button">
        {loggedInStatus === "LOGGED_IN"}
        <NavLink exact to = "/auth">
          Login/Create Account
        </NavLink>
        </button>
        <LogOutButton />

      </div>
    </div>
  );
}

export default NavContainer;
