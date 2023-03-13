import styles from "./Point.module.css";

const Point = ({ point }) => {
  return <li className={styles.point}>{point}</li>;
};

export default Point;
