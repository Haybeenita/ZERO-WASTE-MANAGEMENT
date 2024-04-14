import { createContext, useState } from "react";

// import {useNavigate} from 'react-router-dom'
export const authContext = createContext({});
const AuthProvider = ({ children }) => {
  // const navigate = useNavigate()
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
 
  const shared = {
    authUser,
    setAuthUser,
    loading,
    setLoading,
  };
  return <authContext.Provider value={shared}>{children}</authContext.Provider>;
};
export default AuthProvider;
