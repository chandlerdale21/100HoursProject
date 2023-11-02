import UserInfo from "./UserInfo";
import PersonalPosts from "./PersonalPosts";
import SubmitPost from "./SubmitPost";
import { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import poststyles from "./Posts.module.css";
import axios from "axios";
import NavBar from "./NavBar";
function ProfilePage() {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/profile", {
        withCredentials: true,
      });
      if (response.status === 200) {
        const data = response.data;
        setPostData([data[0].username]);
        console.log(data);
        setUserData(data[1].matchingPosts);
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
      <NavBar />
      <div style={{ marginTop: "4rem" }}>
        {postData.length === 0 ? (
          <p></p>
        ) : (
          postData.map((post, index) => (
            <UserInfo
              children={`Hello, ${post}`}
              child={`Create a new post below!`}
              key={index}
            />
          ))
        )}
      </div>
      <SubmitPost />
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          fontSize: "1.5rem",
        }}
      >
        Your personal posts are below
      </p>
      <div>
        <div className={poststyles.personalContainingDiv}>
          {userData.length === 0 ? (
            <p>Create your first post above!</p>
          ) : (
            userData.map((post, index) => (
              <SinglePost
                style={{ height: "27rem", width: "23rem" }}
                imgStyle={{
                  height: "21rem",
                  width: "22rem",
                }}
                backdropStyle={{ height: "16rem", width: "22rem" }}
                key={index}
                post={post}
                captionStyle={{
                  fontSize: "1rem",
                  maxWidth: "22rem",
                  overflowWrap: "break-word",
                }}
                titleStyle={{
                  fontSize: "1.5rem",
                  maxWidth: "22rem",
                  overflow: "hidden",
                  paddingBottom: "2.5rem",
                }}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
