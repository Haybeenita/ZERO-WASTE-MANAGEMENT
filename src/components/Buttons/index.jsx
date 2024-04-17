import styles from "./button.module.css";
import PropType from "prop-types"
const Button = ({ variant, size, padding, children, type, handleClick, isDisabled }) => {
  return (
    <div>
      <button
        data-variant={variant}
        data-size={size}
        type={type}
        className={styles.btn}
        onClick={handleClick}
        disabled={isDisabled}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;

//style={{padding: padding ? padding: '20px'}}

Button.propTypes = {
  variant: PropType.string,
  size: PropType.string,
  padding: PropType.string,
  children: PropType.node,
  type: PropType.string,
  handleClick: PropType.func,
  isDisabled: PropType.bool,
}