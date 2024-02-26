import styles from "./Large.module.css";
import InputFormLogin from "./InputFormLogin";
import { useState } from "react";
import axios from "axios";

function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(1);
    try {
      const response = await axios({
        method: "post",
        data: {
          email,
          password,
          username,
          confirmPassword,
        },
        withCredentials: true,
        url: "http://localhost:5000/signup",
      });
      const data = response.data;

      console.log(1);
      console.log("Errors:", data.errors);

      if (data.errors) {
        setErrors(data.errors);
        console.log("Errors:", data.errors);
      } else if (data.name !== "MongoError") {
        window.location.href = "/feed";
      }

      console.log(data.name);
    } catch (error) {
      console.error("Error:", error);
    }
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
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {errors.length > 0 && (
            <div className={styles.errorContainer}>
              {errors.map((error, index) => (
                <p
                  data-cy="InvalidSignup"
                  key={index}
                  className={styles.errorMsg}
                >
                  {error.msg}
                </p>
              ))}
            </div>
          )}

          <button data-cy="Signup" type="submit" className={styles.login}>
            Signup
          </button>
        </form>
      </section>
    </div>
  );
}

export default FormLogin;
