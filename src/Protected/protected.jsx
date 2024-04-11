import { useContext } from "react";
import { authContext } from "../Providers";
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({children})=>{
    const {authUser}= useContext(authContext)
    if(!authUser?.email) return  <p><Navigate to ='/Register'></Navigate></p>
    return <div>{children}</div>
}
export default ProtectedRoute