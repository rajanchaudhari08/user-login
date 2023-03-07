import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthenticationContext from "../AuthenticationContext/authentication-context";

function App() {
  const appAuthenticationContext = useContext(AuthenticationContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!appAuthenticationContext.isLoggedIn && <Login />}
        {appAuthenticationContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
