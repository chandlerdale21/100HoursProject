import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <img src="logo.jpg" className={styles.logo} alt="logo" />
          </div>
          <ul className={styles.links}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/feed">feed</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <a href="https://github.com/chandlerdale21">contact</a>
            </li>
          </ul>
          <div>
            <button
              className={styles.btnsignup}
              onClick={(e) => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
