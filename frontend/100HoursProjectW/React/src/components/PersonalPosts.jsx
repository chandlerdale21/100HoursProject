import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Posts.module.css";
import SinglePost from "./SinglePost";
function PersonalPosts() {
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
      <p
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        Your personal posts are below
      </p>
      <div>
        <div className={styles.personalContainingDiv}>
          {postData.length === 0 ? (
            <p>Loading...</p>
          ) : (
            postData.map((post, index) => (
              <SinglePost
                style={{ height: "27rem", width: "23rem" }}
                imgStyle={{
                  height: "21rem",
                  width: "22rem",
                }}
                backdropStyle={{ height: "16rem", width: "22rem" }}
                key={index}
                post={post}
                captionStyle={{ fontSize: "1rem" }}
                titleStyle={{ fontSize: "2rem" }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default PersonalPosts;
