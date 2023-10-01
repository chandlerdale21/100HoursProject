import styles from "./Login.module.css";

function Login() {
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
            <form action="/postLogin" method="POST">
              <label htmlFor="username"></label>

              <input
                className={styles.email}
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <input
                className={styles.password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button type="submit" className={styles.login}>
                Login
              </button>
            </form>
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
