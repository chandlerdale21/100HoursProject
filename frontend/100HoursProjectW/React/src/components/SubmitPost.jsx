import InputFormLogin from "./InputFormLogin";
import styles from "./InputFormLogin.module.css";
import { useRef, useState } from "react";
import axios from "axios";

function SubmitPost() {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState();
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("caption", caption);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/createPost",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    setSelectedFileName(e.target.files[0].name);
    setFile(e.target.files[0]);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <InputFormLogin
            className=".title"
            id="email"
            placeholder="Post Title"
            customInput={styles.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className={styles.postContainer}>
            {" "}
            <InputFormLogin
              name="title"
              id="email"
              placeholder="Post Caption"
              customInput={styles.caption}
              onChange={(e) => setCaption(e.target.value)}
            />
            <div>
              <input
                type="file"
                name="file"
                id="fileInput"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
              <label
                className={styles.imgUpload}
                htmlFor="fileInput"
                onClick={() => fileInputRef.current.click()}
              >
                IMG
              </label>
              <span>{selectedFileName}</span>
            </div>
            <div className={styles.loginContainer}>
              <button type="submit" className={styles.login}>
                Post
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
export default SubmitPost;
