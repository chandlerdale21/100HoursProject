import React, { useState, useEffect } from "react";

import styles from "./Posts.module.css";

function SinglePosts({ post }) {
  return (
    <>
      <div className={styles.singleContainingDiv}>
        <h1 className={styles.test}>{post.title}</h1>
        <img
          src={post.image ? post.image : "logo.jpg"}
          className={styles.img}
        ></img>
        <h3>{post.caption}</h3>
      </div>
    </>
  );
}
export default SinglePosts;
