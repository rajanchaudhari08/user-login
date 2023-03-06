import styles from "./Navigation.module.css";

const Navigation = (properties) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {properties.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {properties.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {properties.isLoggedIn && (
          <li>
            <button onClick={properties.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
