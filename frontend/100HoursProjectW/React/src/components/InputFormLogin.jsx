import styles from "./InputFormLogin.module.css";

function InputFormLogin({
  ClassName = "email",
  type,
  name,
  id,
  placeholder,
  onChange,
  customInput,
}) {
  return (
    <>
      <input
        className={`${styles[ClassName]} ${customInput} `}
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
