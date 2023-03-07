import React, { useState, useEffect } from "react";

const AuthenticationContext = React.createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthenticationContextProvider = (properties) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {properties.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
