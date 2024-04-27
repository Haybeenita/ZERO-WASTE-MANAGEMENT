import styles from "./input.module.css";
const Input = ({
  label,
  placeholder,
  name,
  value,
  size,
  variant,
  fullWidth = true,
  type,
  padding,
  onChange,
  required,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label>{label}</label>
      <input
        data-size={size}
        style={{ padding: padding ? padding : "21px 0 21px 18px" }}
        data-variant={variant}
        data-fullWidth={fullWidth}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
export default Input;
