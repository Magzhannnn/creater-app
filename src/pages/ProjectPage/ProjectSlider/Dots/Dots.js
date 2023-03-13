import { useDispatch, useSelector } from "react-redux";
import { goToSlide } from "../../../../store/slider/slider-actions";
import {
  selectSliderItemsLength,
  selectSliderNumber,
} from "../../../../store/slider/slider-selectors";
import styles from "./Dots.module.css";

const Dot = ({ number }) => {
  const dispatch = useDispatch();
  const slideNumber = useSelector(selectSliderNumber);

  const classes = `${styles.dot} ${
    slideNumber === number ? styles.selected : ""
  }`;

  return (
    <div className={classes} onClick={() => dispatch(goToSlide(number))} />
  );
};

const Dots = () => {
  const slidesCount = useSelector(selectSliderItemsLength);

  const renderDots = () => {
    const dots = [];

    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className={styles.dots}>{renderDots()}</div>;
};

export default Dots;
