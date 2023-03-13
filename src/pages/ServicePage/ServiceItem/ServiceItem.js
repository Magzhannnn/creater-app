import Point from "../../../UI/Point/Point";
import styles from "./ServiceItem.module.css";

const ServiceItem = ({ img, title, text, points }) => {
  return (
    <div className={styles["service-item"]}>
      <div className={styles[`service-item_${img}`]}></div>
      <div className={styles[`service-item_title`]}>{title}</div>
      <div className={styles[`service-item_text`]}>{text}</div>
      <ul className={styles[`service-item_points`]} type="square">
        {points.map((point, index) => (
          <Point point={point} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default ServiceItem;
