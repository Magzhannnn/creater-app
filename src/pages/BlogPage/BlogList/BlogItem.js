import { useState } from "react";
import Modal from "../../../UI/Modal/Modal";
import WhiteButton from "../../../UI/WhiteButton/WhiteButton";
import styles from "./BlogListItem.module.css";

const BlogItemWrap = ({ date, content }) => {
  return (
    <>
      <div className={styles["blog-item_data"]}>{date}</div>
      <div className={styles["blog-item_content"]}>{content}</div>
    </>
  );
};

const BlogItem = ({ date, content }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={styles["blog-item"]}>
      <BlogItemWrap date={date} content={content} />
      <WhiteButton
        title="Read the article"
        className={styles["blog-item_btn"]}
        onClickModal={() => setModalActive(true)}
      />
      <Modal active={modalActive} setActive={setModalActive}>
        <BlogItemWrap date={date} content={content} />
      </Modal>
    </div>
  );
};

export default BlogItem;
