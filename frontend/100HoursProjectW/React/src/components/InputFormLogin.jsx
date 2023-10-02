import styles from "./InputFormLogin.module.css";

function InputFormLogin({
  ClassName = "email",
  type,
  name,
  id,
  placeholder,
  onChange,
}) {
  return (
    <>
      <input
        className={styles[ClassName]}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
export default InputFormLogin;
