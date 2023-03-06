import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (properties) => {
  return (
    <header className={styles["main-header"]}>
      <h1>User Login</h1>
      <Navigation
        isLoggedIn={properties.isAuthenticated}
        onLogout={properties.onLogout}
      />
    </header>
  );
};

export default MainHeader;
