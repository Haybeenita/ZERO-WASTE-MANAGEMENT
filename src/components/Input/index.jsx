import styles from './input.module.css'
const Input = ({size})=>{
    return <div>
        <input placeholder ='Enter your email' data-size={size}/>
    </div>
}
export default Input;