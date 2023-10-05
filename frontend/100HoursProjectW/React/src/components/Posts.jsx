import { useEffect, useState } from "react";
import styles from "./Posts.module.css";

import SinglePost from "./SinglePost";
import axios from "axios";
function Posts() {
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feeds", {
        withCredentials: true,
      });
      if (response.status === 200) {
        const data = response.data;
        setPostData(data);
      } else {
        console.error("error fetching data. Status code: ", response.status);
      }
    } catch (error) {
      console.error("errror fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.containingDiv}>
        {postData.length === 0 ? (
          <p></p>
        ) : (
          postData.map((post, index) => <SinglePost key={index} post={post} />)
        )}
      </div>
    </>
  );
}
export default Posts;
