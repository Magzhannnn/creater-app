import { useDispatch, useSelector } from "react-redux";
import { changeSlide } from "../../../../store/slider/slider-actions";
import {
  selectSliderItemsLength,
  selectSliderNumber,
} from "../../../../store/slider/slider-selectors";
import styles from "./Arrows.module.css";

const Arrows = () => {
  const dispatch = useDispatch();
  const slideNumber = useSelector(selectSliderNumber);
  const sliderLength = useSelector(selectSliderItemsLength);

  return (
    <div className={styles.arrows}>
      <div
        className={`${styles.arrow} ${styles.left}`}
        onClick={() => dispatch(changeSlide(-1, slideNumber, sliderLength))}
      >
        ⇦
      </div>
      <div
        className={`${styles.arrow} ${styles.right}`}
        onClick={() => dispatch(changeSlide(1, slideNumber, sliderLength))}
      >
        ⇨
      </div>
    </div>
  );
};

export default Arrows;
