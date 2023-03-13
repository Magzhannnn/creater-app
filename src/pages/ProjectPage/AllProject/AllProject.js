import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectSliderItemsLength,
  selectSlides,
} from "../../../store/slider/slider-selectors";
import SlideItem from "../ProjectSlider/SliderList/SlideItem/SlideItem";
import styles from "./AllProject.module.css";

const AllProject = () => {
  const items = useSelector(selectSlides);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className={styles["all-slide"]}>
      {items.map((slide, index) => (
        <SlideItem key={`all-slide_${index}`} data={slide} type="all" />
      ))}
    </div>
  );
};

export default AllProject;
