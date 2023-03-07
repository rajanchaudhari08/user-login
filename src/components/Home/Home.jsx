import Card from "../UserInterface/Card/Card";
import styles from "./Home.module.css";
import Button from "../UserInterface/Button/Button";

const Home = (properties) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={properties.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
