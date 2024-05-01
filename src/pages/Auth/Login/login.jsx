
import Input from "../../../components/Input";
import Button from "../../../components/Buttons";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "../../../Firebase/Firebase.jsx";
import { LoginApi } from "../../../BACKEND/Backend.js";
import { useContext } from "react";
import { authContext } from "../../../Providers/index.jsx";

const Login = () => {
  const [loading,setLoading]= useState(false)
  const {authUser,setAuthUser} = useContext(authContext)
  const[showResponse,setShowResponse] = useState(false)

  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [formFilled, setFormFilled] = useState({
    email: "",
    password: "",
  });
  const formData = new FormData();

  formData.append("username", formFilled.email);
  formData.append("password", formFilled.password);

  // const headers = {
  //   "Content-Type": "multipart/form-data",
  // };
  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true)
    await axios
      .post(`${LoginApi}`, formData, { headers: {'Content-Type': 'multipart/form-data' }})
      .then(function (response) {
        console.log(response, "response from db");
        // setUser(response.data);
        setAuthUser(response.data.detail);
        setUser(response.data)
        setLoading(false)
        const token = response.data.access_token;
        localStorage.setItem("token", token);
        // console.log(authUser,'auth user updated');
        // console.log(response.data,'data from db');
        // console.log(token,'usertoken updated');
        console.log(user,'my user display error')
        navigate("/dashboard");
      })
      .catch(function (error) {
        // setUser(error.response.data.detail);
        setUser(error.response);
        setLoading(false)
        console.log(error, "error from db");
       
      })
      .finally(function(){
        setShowResponse(true)
        setTimeout(()=>{
          setShowResponse(false)
        },7000)
      })

  };
  const handleInputChange = (e) => {
    setFormFilled({
      ...formFilled,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="relative h-screen bg-cover bg-center filter bg-[url('/animation1.jpg')]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        {/* Login Form */}
        <div className="absolute inset-0 flex justify-center items-center z-10 flex-col">
          <div className="md:w-[30rem] md:h-[38rem] w-[22rem] h-[30rem] pt-[4rem] mt-[2rem] shadow-2xl bg-white/35 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg relative">
            <h1 className="md:text-3xl text-2xl text-black font-bold flex items-center justify-center">
              Hello Again
            </h1>
            <p className="text-black flex justify-center md:mt-[1rem] mt-[0.2rem] font-medium md:text-xl text-sm">
              Welcome back, you have been missed!
            </p>
            <form onSubmit={signIn}>
              <div className="flex flex-col md:w-[20rem] w-[18rem] md:ml-[5rem] ml-[2rem] md:mt-[2rem] mt-[1rem] justify-center ">
                <div>
                  <Input
                    variant="primary"
                    md:padding="12px"
                    padding="10px"
                    placeholder="Email"
                    onChange={handleInputChange}
                    name="email"
                    value={formFilled.email}
                  />
                  <Input
                    variant="primary"
                    md:padding="12px"
                    padding="10px"
                    placeholder="......"
                    onChange={handleInputChange}
                    name="password"
                    value={formFilled.password}
                    type="password"
                  />
                </div>
                <p className="hover:text-blue-700 underline hover:underline-offset-4 md:ml-[10rem] ml-[8rem] text-[#212122] md:font-medium font-normal mt-[0.5rem] ">
                  <Link to='/forgotpassword'>Forgot password</Link>
                </p>
                {showResponse && (
              <div>
                 {user?.status ===200? <p className="pt-2 text-green-200">
                  {user?.data?.detail}</p> :<p className="text-red-800 text-center pt-2"> {user?.data?.detail}</p>}
              </div>
            )}
                <div className="flex justify-center md:mt-14 mt-10">
                  <Button variant="primary" size="large" type="submit" isDisabled={loading}>
                    {loading ? <span className="loader" /> : "Sign in"}
                  </Button>
                </div>
                
                <div className="flex gap-1 font-normal text-base text-black md:ml-10 ml-2 md:mt-2 mt-1">
                  <span>Not a member?</span>
                  <p className="text-[#0E5808] hover:text-blue-600 underline hover:underline-offset-4 cursor-pointer">
                    <Link to="/Register"> Register Now</Link>
                  </p>
                </div>
              </div>
            </form>
           
            {/* <p className="text-[#212122] font-medium flex justify-center md:mt-[4.313rem] mt-[2rem]">
              Or continue with
            </p> */}

            {/* <div className="flex gap-14 w-[15rem] items-center md:ml-[8rem] ml-[4.5rem] mt-[2rem]">
              <img
                src="/facebookicon.png"
                className="w-7 h-7 cursor-pointer"
                alt=""
              />
              <img
                src="/appleicon.png"
                className="w-7 h-7 cursor-pointer"
                alt=""
              />
              <img
                src="/googleicon.png"
                className="w-7 h-7 cursor-pointer"
                alt=""
                onClick={() => GoogleLogin()}
              />
            </div> */}
          </div>
         
        </div>
      </div>
    </>
  );
};
export default Login;