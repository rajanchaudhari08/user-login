import Card from "../UserInterface/Card/Card";
import styles from "./Home.module.css";
import Button from "../UserInterface/Button/Button";
import { useContext } from "react";
import AuthenticationContext from "../../../AuthenticationContext/authentication-context";

const Home = (properties) => {
  const homeAuthenticationContext = useContext(AuthenticationContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={homeAuthenticationContext.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
