import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (properties) => {
  return (
    <header className={styles["main-header"]}>
      <h1>User Login</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
