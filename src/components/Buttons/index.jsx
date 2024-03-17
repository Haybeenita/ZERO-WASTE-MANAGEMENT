import styles from "./button.module.css"
const Button =({variant,size,children})=>{
    return <div>
        <button data-variant={variant} data-size={size} className={styles.btn} >{children}</button>
    </div>
}
export default Button;