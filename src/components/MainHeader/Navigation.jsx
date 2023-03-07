import styles from "./Navigation.module.css";
import AuthenticationContext from "../../../AuthenticationContext/authentication-context";
import { useContext } from "react";

const Navigation = () => {
  const navigationAuthenticationContext = useContext(AuthenticationContext);
  return (
    <nav className={styles.nav}>
      <ul>
        {navigationAuthenticationContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {navigationAuthenticationContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {navigationAuthenticationContext.isLoggedIn && (
          <li>
            <button onClick={navigationAuthenticationContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
