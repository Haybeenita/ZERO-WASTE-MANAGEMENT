import { useState } from "react";
// import {useNavigate} from "react-router-dom"
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../components/Buttons";
import Input from "../../../components/Input";
import axios from "axios";
import { RegisterApi } from "../../../BACKEND/Backend";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../../Providers/index.jsx";
const Register = () => {
  const { authUser, setAuthUser } = useContext(authContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [formFilled, setFormFilled] = useState({
    email: "",
    password: "",
    phonenumber: "",
    first_name: "",
    last_name: "",
  });
  // const notify = () => toast("Wow so easy!");
  // const notifySucces=()=>toast.success('🦄 Registration Succesful!', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Slide,
  //   });
  // const errorToast = () => {
  //   toast.error('🦄 Wow so easy!', {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     transition: Bounce,
  //     });
  // };

  const signUp = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post(`${RegisterApi}`, {
        first_name: formFilled.first_name,
        last_name: formFilled.last_name,
        email: formFilled.email,
        phone_number: formFilled.phonenumber,
        password: formFilled.password,
      })
      .then(function (response) {
        console.log(response, "response from db");
        setAuthUser(response.data);
        console.log(authUser, "from register");
        setLoading(false);
        // notifySucces()
        navigate("/login");
      })
      .catch(function (error) {
        setUser(error.data);
        console.log(error, "error from db");
        setLoading(false);
        // errorToast()
      });
  };
  const handleInputChange = (e) => {
    setFormFilled({
      ...formFilled,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative h-screen bg-cover bg-center filter bg-[url('../../../src/assets/images/animation1.jpg')]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="md:w-[30rem] md:h-[45rem] w-[22rem] h-[39rem] flex items-center justify-center pt-[2.5rem] md:mt-[0.75rem] shadow-2xl md:bg-white/35 bg-white/40 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg">
          <div className="justify-center shadow-2xl md:w-[30rem] md:h-[45rem] w-[25rem] h-[39rem] ">
            <h1 className="flex items-center justify-center font-bold md:text-3xl text-2xl text-black mb-2">
              Register
            </h1>
            <hr className="md:w-[25rem] w-[15rem] border-black flex items-center justify-center m-auto"></hr>
            <p className="flex font-semibold text-black items-center justify-center gap-1 md:mt-[1rem] mt-[0.5rem] text-base md:text-lg">
              Create an
              <span className="text-[#0E5808] font-normal md:font-medium">
                Account
              </span>
              to access features
            </p>
            <div className="flex relative flex-col w-[18rem] md:w-[22rem] ml-[1.8rem] md:ml-[4rem] md:mt-[2rem] mt-[0.5rem]">
              <form onSubmit={signUp}>
                <p className="text-black font-normal md:font-medium">
                  Firstname:
                </p>

                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="name"
                  onChange={handleInputChange}
                  name="first_name"
                  value={formFilled.first_name}
                />

                <p className="text-black font-normal md:font-medium">
                  Lastname:
                </p>

                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="name"
                  onChange={handleInputChange}
                  name="last_name"
                  value={formFilled.last_name}
                />

                <p className="text-black font-normal md:font-medium">Email:</p>
                <Input
                  variant="primary"
                  md:padding="8px"
                  padding="6px"
                  placeholder="@"
                  onChange={handleInputChange}
                  name="email"
                  value={formFilled.email}
                />

                <p className="text-black font-normal md:font-medium">
                  Phone Number:
                </p>
                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="+234"
                  onChange={handleInputChange}
                  name="phonenumber"
                  value={formFilled.phonenumber}
                />

                <p className="text-black font-normal md:font-medium">
                  Password:
                </p>
                <Input
                  type="password"
                  variant="primary"
                  padding="8px"
                  placeholder="....."
                  onChange={handleInputChange}
                  name="password"
                  value={formFilled.password}
                />
                <div className="flex justify-center md:mt-2 mt-2">
                  <Button
                    variant="primary"
                    size="large"
                    type="submit"
                    isDisabled={loading}
                  >
                    {loading ? <span className="loader" /> : "Register"}
                  </Button>
                  {/* <ToastContainer
                      position="top-right"
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                      transition={Bounce}
                    /> */}
                  {/* <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                      /> */}
                </div>
                <div className="">
                  <p className="mt-2 text-[#212122] font-medium text-md md:ml-[3.5rem] ml-[1.5rem] ">
                    Already have an Account?{" "}
                    <span className="text-[#0E5808] underline cursor-pointer">
                      <Link to="/login">Sign in</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
