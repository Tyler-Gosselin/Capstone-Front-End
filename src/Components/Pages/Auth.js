import React, { useContext} from 'react';

import AuthContext from "../Contexts/Authcontext"
import AuthForm from "../Auth/AuthForm"
import LogoutButton from "../Auth/LogOutButton"

const Auth = () => {
  const { loggedInStatus } = useContext(AuthContext)
  return (
    <div>
      {loggedInStatus} === "LOGGED_IN" ? <LogoutButton /> : <AuthForm />
    </div>
  )
}

export default Auth