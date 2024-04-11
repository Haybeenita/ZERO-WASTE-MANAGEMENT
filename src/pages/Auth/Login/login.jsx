import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Buttons";

const Login = () => {
  return (
    <>
      <div className="relative h-screen bg-cover bg-center filter bg-[url('../../../src/assets/images/animation1.jpg')]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-black/40"
        ></div>
        {/* Login Form */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <div className="md:w-[30rem] md:h-[40rem] w-[22rem] h-[32rem] pt-[2.5rem] mt-[2rem] shadow-2xl bg-white/35 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
            <h1 className="md:text-3xl text-2xl text-black font-bold flex items-center justify-center">
              Hello Again
            </h1>
            <p className="text-black flex justify-center md:mt-[1rem] mt-[0.2rem] font-medium md:text-xl text-sm">
              Welcome back, you have been missed!
            </p>

            <div className="flex flex-col md:w-[20rem] w-[18rem] md:ml-[5rem] ml-[2rem] md:mt-[2rem] mt-[1rem] justify-center ">
              <div>
                <Input variant="primary" md:padding="12px" padding="10px" placeholder="Username" />
                <Input variant="primary" md:padding="12px" padding="10px" placeholder="Password" />
              </div>
              <p className="hover:text-blue-700 underline hover:underline-offset-4 md:ml-[12rem] ml-[10rem] text-[#212122] md:font-medium font-normal sm:">
                Forgot password
              </p>
              <div className="flex justify-center md:mt-6 mt-4">
                <Button variant="primary" size="large">
                  Sign in
                </Button>
              </div>
              <div className="flex gap-1 font-normal text-base text-black md:ml-6 ml-2 md:mt-2 mt-1">
                <span>Not a member?</span>
                <p className="text-[#0E5808] hover:text-blue-600 underline hover:underline-offset-4 cursor-pointer">Register Now</p>
              </div>
            </div>
            <p className="text-[#212122] font-medium flex justify-center md:mt-[4.313rem] mt-[2rem]">
              Or continue with
            </p>

            <div className="flex gap-14 w-[15rem] items-center md:ml-[8rem] ml-[4.5rem] mt-[2rem]">
              <img src="/facebookicon.png" className="w-7 h-7" alt="" />
              <img src="/appleicon.png" className="w-7 h-7" alt="" />
              <img src="/googleicon.png" className="w-7 h-7" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;