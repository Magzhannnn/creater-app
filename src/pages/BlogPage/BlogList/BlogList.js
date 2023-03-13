import BlogItem from "./BlogItem";
import styles from "./BlogListItem.module.css";

const BlogList = ({ blogsData }) => {
  return (
    <div className={styles["blog-list"]}>
      {blogsData.map((blog, index) => (
        <BlogItem key={`blog-item_${index}`} {...blog} />
      ))}
    </div>
  );
};

export default BlogList;
