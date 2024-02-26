import { useState } from "react";
import axios from "axios";
import styles from "../components/Large.module.css";

import InputFormLogin from "../components/InputFormLogin";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios({
      method: "post",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: "http://localhost:5000/postLogin",
    });
    const data = res.data;
    console.log(res);
    if (data === "this backend has succesfully authenticated") {
      localStorage.setItem("success", "good job");
      window.location.href = "http://localhost:5173/feed";
    }
    if (data.errors) {
      setErrors(data.errors);
      console.log("Errors:", data.errors);
    } else if (data.name !== "MongoError") {
      window.location.href = "/feed";
    }
  };

  return (
    <>
      <div className={styles.loginGrid}>
        <div className={styles.loginImgContainer}>
          <img src="/logo.jpg" className={styles.logo} />
          <p className={styles.imgCaption}>
            Linkitary helps you connect with other active duty service members,
            veterans, and their families.
          </p>
        </div>
        <div className={styles.loginFormGridContainer}>
          <section className={styles.loginForm}>
            <form onSubmit={handleSubmit} action="/" method="POST">
              <label htmlFor="username"></label>

              <InputFormLogin
                className="signup"
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <InputFormLogin
                className="signup"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button data-cy="LoginTest"type="submit" className={styles.login}>
                Login
              </button>
            </form>
            {errors.length > 0 && (
              <div className={styles.errorContainer}>
                {errors.map((error, index) => (
                  <p data-cy="InvalidEmail" key={index} className={styles.errorMsg}>
                    {error.msg}
                  </p>
                ))}
              </div>
            )}
            <section className={styles.signup}>
              <a href="/signup">
                <button className={styles.btnsignup}>Signup</button>
              </a>
            </section>
          </section>
        </div>
      </div>
    </>
  );
}
export default Login;
