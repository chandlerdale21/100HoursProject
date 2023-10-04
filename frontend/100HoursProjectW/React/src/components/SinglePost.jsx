import React, { useState, useEffect } from "react";

import styles from "./Posts.module.css";

function SinglePosts({
  post,
  style,
  imgStyle,
  backdropStyle,
  titleStyle,
  captionStyle,
}) {
  return (
    <>
      <div className={styles.singleContainingDiv} style={style}>
        <h1 className={styles.title} style={titleStyle}>
          {post.title}
        </h1>
        <div className={styles.backdrop} style={backdropStyle}>
          <img
            src={post.image ? post.image : "logo.jpg"}
            className={styles.img}
            style={imgStyle}
          ></img>
        </div>
        <h3 className={styles.caption} style={captionStyle}>
          {post.caption}
        </h3>
      </div>
    </>
  );
}
export default SinglePosts;
