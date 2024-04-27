import React from "react"
import { MdForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Providers";

const Verify = ()=>{
    const { authUser} = useContext(authContext);
    console.log(authUser);
   
    return (
        <>
        <div className="flex flex-col justify-center items-center bg-[#f9fafb] h-[100vh]">
            <div className="border-4 border-black md:h-[30rem] h-[25rem] md:w-[35rem] w-[25rem] flex flex-col  items-center">
                <MdForwardToInbox className="text-[#316c29] size-[50px] mt-[5rem]"   />
                <h3 className="font-bold text-xl py-[1rem]">Verify Your email address</h3>
                <p className="pb-[3rem] px-[3rem] text-center">Please click on the link that was sent to <span className="font-bold ">{authUser?.data?.email} </span>to verify your email</p>
                <p>Didnt get the mail?</p>
                <p className="text-[#316c29] cursor-pointer font-bold" ><Link to='/Register'>Click here to resend</Link></p>
            </div>
            </div>
            </>
    )
}
export default Verify




