import AboutPage from "../../pages/AboutPage/AboutPage";
import AppRouter from "../AppRouter";
import Navbar from "../Navbar/Navbar";
import styles from "./App.module.css";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h1 className={styles["mini_error"]}>
        There must be a minimum screen width of 480px!!!
      </h1>
      <div className={styles.app}>
        <Navbar />
        <AppRouter />
      </div>
    </>
  );
}

export default App;
