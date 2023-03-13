import Arrows from "./Arrows/Arrows";
import Dots from "./Dots/Dots";
import styles from "./ProjectSlider.module.css";
import SliderList from './SliderList/SliderList';

const ProjectSlider = ({ projectData }) => {
  return (
    <div className={styles["project-slider"]}>
      <Arrows />
      <SliderList />
      <Dots />
    </div>
  );
};

export default ProjectSlider;
