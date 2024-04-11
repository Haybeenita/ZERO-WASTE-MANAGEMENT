import { createContext, useState } from "react"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import {auth} from '../Firebase/Firebase.jsx'
// import {useNavigate} from 'react-router-dom'
export const authContext = createContext({})
const AuthProvider=({children})=>{
    // const navigate = useNavigate()
    const [authUser,setAuthUser] = useState({})
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth,async (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
              setAuthUser(user)
            //  navigate ('/Bookus')
            } else {
              // User is signed out
              // ...
              setAuthUser({})
            }
            setLoading(false)
          });
    },[])
    const shared= {
        authUser,
        setAuthUser,
        loading,
        setLoading
    }
    return <authContext.Provider value={shared}>

        {children}
    </authContext.Provider>
}
export default AuthProvider;