import React from "react";

const AuthenticationContext = React.createContext({
  isLoggedIn: false,
});

export default AuthenticationContext;
