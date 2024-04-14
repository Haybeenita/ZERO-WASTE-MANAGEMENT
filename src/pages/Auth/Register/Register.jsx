import { useState } from "react";
// import {useNavigate} from "react-router-dom"
import Button from "../../../components/Buttons";
import Input from "../../../components/Input";
import axios from "axios";
import { RegisterApi } from "../../../BACKEND/Backend";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [user,setUser] = useState({})
  const [formFilled, setFormFilled] = useState({
    email: "",
    password: "",
    phonenumber: "",
    username: "",
  });

  const signUp = (e)=>{
    e.preventDefault();
    axios.post(`${RegisterApi}`, {
      display_name: formFilled.username,
      email: formFilled.email,
      phone_number: formFilled.phonenumber,
      password: formFilled.password
    })
    .then(function (response) {
      console.log(response,'response from db');
      setUser(response.data)
      navigate('/dashboard')
    })
    .catch(function (error) {
      setUser(error.data)
      console.log(error,'error from db');
    });
  }
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
        <div className="md:w-[30rem] md:h-[40rem] w-[22rem] h-[34rem] flex items-center justify-center pt-[2.5rem] md:mt-[0.75rem] shadow-2xl md:bg-white/35 bg-white/40 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
          <div className="justify-center shadow-2xl md:w-[30rem] md:h-[40rem] w-[25rem] h-[34rem] ">
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
                <p className="text-black font-normal md:font-medium">Name:</p>

                <Input
                  variant="primary"
                  padding="8px"
                  placeholder="name"
                  onChange={handleInputChange}
                  name="username"
                  value={formFilled.username}
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
              <div className="flex justify-center md:mt-4 mt-4">
                <Button
                  variant="primary"
                  size="large"
                  type="submit"
                 
                >
                  Register
                </Button>
              </div>
              {/* {user?.data?.status === 200? <p>Register successfull</p>:
              <p>error occured</p>
              } */}
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
