import styles from "./button.module.css";
const Button = ({ variant, size, padding, children, type, handleClick }) => {
  return (
    <div>
      <button
        data-variant={variant}
        data-size={size}
        type={type}
        className={styles.btn}
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;

//style={{padding: padding ? padding: '20px'}}
