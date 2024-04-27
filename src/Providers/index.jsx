import { createContext, useState } from "react";

// import {useNavigate} from 'react-router-dom'
export const authContext = createContext({});
const AuthProvider = ({children}) => {
  // const navigate = useNavigate()
  const [authUser, setAuthUser] = useState({});
  const [bookingDetails, setBookingDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingform, setBookingForm] = useState({});
  const [processingBooking, setProcessingBooking] = useState({});
  const [updateStatus,setUpdateStatus] = useState({})

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };


  const shared = {
    authUser,
    setAuthUser,
    loading,
    setLoading,
    bookingDetails,
    setBookingDetails,
    bookingform,
    setBookingForm,
    showModal,
    toggleModal,
    processingBooking,
    setProcessingBooking,
    updateStatus,
    setUpdateStatus,
  
  
    setShowModal
  };
  return <authContext.Provider value={shared}>{children}</authContext.Provider>;
};
export default AuthProvider;
