import React from "react";
import { NavLink } from "react-router-dom";

function NavContainer() {
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
        <NavLink exact to = "/login">
          Sign In
        </NavLink>
        <button className= "nav-button">
        <NavLink exact to = "/register">
          Sign Up
        </NavLink>
        </button>

      </div>
    </div>
  );
}

export default NavContainer;
