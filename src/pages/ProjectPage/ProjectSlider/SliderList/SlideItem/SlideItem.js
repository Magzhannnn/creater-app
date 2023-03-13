import { useState } from "react";
import { useSelector } from "react-redux";
import { selectSliderNumber } from "../../../../../store/slider/slider-selectors";
import Modal from "../../../../../UI/Modal/Modal";
import WhiteButton from "../../../../../UI/WhiteButton/WhiteButton";
import styles from "./SlideItem.module.css";

const SlideItemWrap = ({ data }) => {
  return (
    <>
      <div className={styles[`slide-item_${data.img}`]}></div>
      <div className={styles["slide-item_title"]}>{data.title}</div>
      <div className={styles["slide-item_text"]}>{data.text}</div>
    </>
  );
};

const SlideItem = ({ data, number, type }) => {
  const [modalActive, setModalActive] = useState(false);
  const slideNumber = useSelector(selectSliderNumber);

  const classes =
    type === "slider"
      ? `${styles["slide-item"]} ${
          slideNumber === number ? styles.selected : ""
        }`
      : styles["all-slide-item"];

  return (
    <div className={classes}>
      <SlideItemWrap data={data} />
      <WhiteButton
        title="View Project"
        className={styles["slide-item_btn"]}
        onClickModal={() => setModalActive(true)}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <SlideItemWrap data={data} />
      </Modal>
    </div>
  );
};

export default SlideItem;
