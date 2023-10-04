import styles from "./InputFormLogin.module.css";

function UserInfo({ children, child }) {
  return (
    <>
      <h2 className={styles.user}>{children}</h2>
      <h2 className={styles.greeting}>{child}</h2>
    </>
  );
}
export default UserInfo;
