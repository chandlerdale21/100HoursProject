import styles from "./Posts.module.css";
function SinglePosts() {
  return (
    <>
      <div className={styles.singleContainingDiv}>
        <h1 className={styles.test}>POST TITLE</h1>
        <img src="logo.jpg" className={styles.img}></img>
        <h3>POST CAPTION</h3>
      </div>
    </>
  );
}
export default SinglePosts;
