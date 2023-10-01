import styles from "./Posts.module.css";
import SinglePost from "./SinglePost";
function Posts() {
  return (
    <>
      <div className={styles.containingDiv}>
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
    </>
  );
}
export default Posts;
