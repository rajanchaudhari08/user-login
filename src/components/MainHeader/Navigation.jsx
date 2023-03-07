import styles from "./Navigation.module.css";
import AuthenticationContext from "../../../AuthenticationContext/authentication-context";

const Navigation = (properties) => {
  return (
    <AuthenticationContext.Consumer>
      {(navigationAuthenticationContext) => {
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
                  <button onClick={properties.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};

export default Navigation;
