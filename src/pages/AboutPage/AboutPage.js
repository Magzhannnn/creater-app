import { useState } from "react";
import Container from "../../UI/Container/Container";
import DarkButton from "../../UI/DarkButton/DarkButton";
import Modal from "../../UI/Modal/Modal";
import WhiteButton from "../../UI/WhiteButton/WhiteButton";
import styles from "./AboutPage.module.css";

const images = [
  `${styles.img1}`,
  `${styles.img2}`,
  `${styles.img3}`,
  `${styles.img4}`,
];

const AboutPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Container className={styles.about}>
        <div className={styles["about-left"]}>
          <div className={styles["about-left_title"]}>
            <span className={styles["title-highlighted"]}>
              I design products
            </span>
            <br />
            that delight and <br /> inspire people.
          </div>
          <div className={styles["about-left_text"]}>
            Hi! I’m Jake, a product designer based in Berlin. I create
            user-friendly interfaces for fast-growing startups.
          </div>
          <div className={styles["about-left_button"]}>
            <DarkButton title="Book a call" />
            <WhiteButton
              title="Download CV"
              onClickModal={() => setModalActive(true)}
            />
          </div>
        </div>
        <div className={styles["about-right"]}></div>
      </Container>
      <div className={styles["about-foot"]}>
        <div className={styles["foot-title"]}>Trusted by</div>
        <div className={styles["foot-images"]}>
          {images.map((image, index) => (
            <div className={image} key={`about-image_${index}`}></div>
          ))}
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <a
          href="./../../images/img1.png"
          style={{ textDecoration: "none" }}
          download
        >
          <h1>Download CV</h1>
        </a>
      </Modal>
    </>
  );
};

export default AboutPage;
