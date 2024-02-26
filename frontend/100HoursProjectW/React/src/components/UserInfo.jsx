import styles from "./InputFormLogin.module.css";

function UserInfo({ children, child }) {
  return (
    <div data-cy="UserInfo">
      <h2 className={styles.user}>{children}</h2>
      <h2 className={styles.greeting}>{child}</h2>
    </div>
  );
}
export default UserInfo;
