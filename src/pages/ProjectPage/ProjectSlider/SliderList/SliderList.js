import { useSelector } from "react-redux";
import { selectSlides } from "../../../../store/slider/slider-selectors";
import SlideItem from "./SlideItem/SlideItem";
import styles from "./SliderList.module.css";

const SliderList = () => {
  const items = useSelector(selectSlides);

  return (
    <div className={styles["slide-list"]}>
      {items.map((slide, index) => (
        <SlideItem
          key={`slide-item_${index}`}
          data={slide}
          number={index}
          type="slider"
        />
      ))}
    </div>
  );
};

export default SliderList;
