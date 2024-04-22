import { createContext, useState } from "react";

// import {useNavigate} from 'react-router-dom'
export const authContext = createContext({});
const AuthProvider = ({ children }) => {
  // const navigate = useNavigate()
  const [authUser, setAuthUser] = useState({});
  const [bookingDetails,setBookingDetails] = useState([])
  const [loading, setLoading] = useState(true);
  const [formFilled, setFormFilled] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    pickup_date: "",
    waste_type: "",
  });
const [amt,setAmt]=useState()
  const shared = {
    authUser,
    setAuthUser,
    loading,
    setLoading,
    bookingDetails,
    setBookingDetails,
    formFilled, 
    setFormFilled
  };
  return <authContext.Provider value={shared}>{children}</authContext.Provider>;
};
export default AuthProvider;
