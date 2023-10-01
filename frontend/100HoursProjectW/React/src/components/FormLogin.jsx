import styles from "./Large.module.css";
import InputFormLogin from "./InputFormLogin";

function FormLogin() {
  return (
    <div
      className={styles.loginFormGridContainer}
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <section className={styles.loginForm}>
        <form action="/postLogin" method="POST">
          <label htmlFor="username"></label>

          <InputFormLogin
            className="signup"
            type="text"
            name="email"
            id="email"
            placeholder="Username"
          />
          <InputFormLogin
            className="signup"
            type="text"
            name="email"
            id="email"
            placeholder="Email address"
          />
          <InputFormLogin
            className="signup"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <InputFormLogin
            className="signup"
            type="password"
            name="password"
            id="password"
            placeholder="Confirm Password"
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
