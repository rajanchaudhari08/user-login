import Card from "../UserInterface/Card/Card";
import styles from "./Home.module.css";

const Home = (properties) => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
