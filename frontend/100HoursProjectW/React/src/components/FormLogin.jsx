import styles from "./Large.module.css";
import InputFormLogin from "./InputFormLogin";
import { useState } from "react";
import axios from "axios";

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        email,
        password,
        username,
        confirmPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/signup",
    }).then((res) => console.log(res));
    //   try {
    //     const res = await fetch("http://localhost:5000/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, username, password, confirmPassword }),
    //     });
    //     console.log("Response status:", res.status);
    //     window.location.href = "http://localhost:5000/feeds";
    //   } catch (err) {
    //     console.log(err);
    //   }
  };
  return (
    <div
      className={styles.loginFormGridContainer}
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <section className={styles.loginForm}>
        <form onSubmit={handleSubmit} action="/signup" method="POST">
          <label htmlFor="username"></label>

          <InputFormLogin
            className="signup"
            type="text"
            name="email"
            id="email"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputFormLogin
            className="signup"
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputFormLogin
            className="signup"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputFormLogin
            className="signup"
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className={styles.login}>
            Signup
          </button>
        </form>
      </section>
    </div>
  );
}

export default FormLogin;
