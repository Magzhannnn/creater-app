import styles from "./WhiteButton.module.css";

const WhiteButton = (props) => {
  const classes = `${styles["white-button"]} ${props.className}`;
  return (
    <div className={classes} onClick={props.onClickModal}>
      {props.title} 🡪
    </div>
  );
};

export default WhiteButton;
