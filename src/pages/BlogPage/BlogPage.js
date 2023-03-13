import Container from "../../UI/Container/Container";
import WhiteButton from "../../UI/WhiteButton/WhiteButton";
import blogsData from "../../db/blog-db.json";
import styles from "./BlogPage.module.css";
import BlogList from "./BlogList/BlogList";
import { useState } from "react";
import Modal from "../../UI/Modal/Modal";

const BlogPage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <Container className={styles.blog}>
      <div className={styles["blog-left"]}>
        <div className={styles["blog-left_title"]}>Blogs</div>
        <div className={styles["blog-left_text"]}>Latest Blogs</div>
      </div>
      <BlogList blogsData={blogsData} />
    </Container>
  );
};

export default BlogPage;
