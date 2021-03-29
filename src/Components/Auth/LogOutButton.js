import React, { useContext } from "react";
import AuthContext from "../Contexts/Authcontext";

const LogOutButton = () => {
  const { handleLogout } = useContext(AuthContext);
  return (
    <div>
      <button className="nav-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogOutButton;
