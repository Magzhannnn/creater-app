import styles from "./DarkButton.module.css";

const DarkButton = ({ title, onClick }) => {
  return (
    <div className={styles["dark-button"]} onClick={onClick}>
      {title}
    </div>
  );
};

export default DarkButton;
