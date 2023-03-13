import styles from "./Container.module.css";

const Container = (props) => {
  const classes = props.className;

  return (
    <div className={`${styles.container} ${classes}`}>{props.children}</div>
  );
};

export default Container;
