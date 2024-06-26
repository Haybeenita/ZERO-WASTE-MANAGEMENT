import { useContext } from "react";
import { authContext } from "../Providers";
import { Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import { useEffect,useState } from "react";
import { profile } from "../BACKEND/Backend";
import axios from 'axios'
const ProtectedRoute = ({ children }) => {
  const { authUser,setAuthUser,setBookingForm} = useContext(authContext);
  let [loading,setLoading] = useState(true)


  const token = localStorage.getItem('token')
// console.log(token);

  useEffect(()=>{
    // console.log(authUser,'authuser from profile')
    if(token){
        axios.get(`${profile}`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
      // handle success
      // console.log(response, 'response from user profile ');
      setAuthUser(response.data)
      setBookingForm({
        first_name:response.data?.first_name,
        last_name:response.data?.last_name,
        email:response.data?.email,
        phone:response.data?.phone_number,
      })
      setLoading(false)
      // console.log(authUser)
      })
     .catch(function (error) {
      // handle error
      console.log(error);
       });
       return
    }
     setAuthUser('')
    setLoading(false)
  },[])
  // if (!authUser)
  //   return (
  
  //     <p>
  //       <Navigate to="/login"></Navigate>
  //     </p>
  //   );
  // return <>{children}</>;
  return (
    <>
    {
      loading? <span className="loader2"></span>
      : authUser?
     <> {children}</>
      :
      <Navigate to='/login'/>
    }
    </>
  )
};
export default ProtectedRoute;
