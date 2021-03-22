import React from "react";
import { NavLink } from "react-router-dom";

function NavContainer() {
  return (
    <div className="navigation-wrapper">
      <div className="logo-wrapper">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
      <div className="nav-links-wrapper">
        <NavLink exact to="/blog">
          Blog
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default NavContainer;
