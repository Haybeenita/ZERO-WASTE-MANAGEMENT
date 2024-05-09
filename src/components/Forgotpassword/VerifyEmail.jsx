import { useState } from "react";
import Input from "../Input";
import axios from "axios";
import { ForgotPassword } from "../../BACKEND/Backend";
import { useNavigate } from "react-router-dom";
// import React from "react";
export const ForgotPasswordReset = () => {
    const [showReset, setShowReset] = useState(true);
    const [email, setEmail] = useState('');
    const [response,setResponse]=useState('')
    const navigate = useNavigate()
    const closeReset = (e) => {
        
        e.preventDefault();
        axios.post(`https://api.zerowastebin.com.ng/api/v1/forgotpassword/password-recovery/${email}`, {
        }, {
            headers: {
                accept: 'application/json',
            },
        })
        .then(response => {
            console.log(response, "response from recover password");
            setResponse(response.data.message)
            setEmail(" ")
            navigate("/login")
            // setShowReset(false);
        })
        .catch((error) => { 
            console.error('Error occurred:', error);
            console.log(email);
        });
    }

    return (
        <div className="w-full h-screen bg-white flex items-center justify-center m-auto">
        <div className="w-[15rem] h-[auto] md:w-[30rem] md:h-[20rem] lg:w-[30rem] lg:h-[20rem] border-2 border-zero-500 bg-zero-300 rounded-xl pt-[1.5rem]">
            {showReset && (
                <div className=" px-[2rem] flex justify-center mx-auto flex-col">
                     <span className="capitalize font-normal text-[#212122] text-lg mt-[2rem]">Enter your email</span>
                    <div className="mt-[2rem] flex flex-col"> 
                        <Input size="small" variant="primary" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <p className="text-[#212122] mt-[0.5rem]">{response}</p>
                        <button className="bg-[#51AD44] text-white flex items-center justify-center w-[8rem] h-[3rem] rounded-xl lg:ml-[8rem]  md:ml-[8rem] my-[2rem]" onClick={closeReset}>Send</button>
                    </div>
                    {response.status=== 200?<p>{response}</p> :''}
                </div>
               
            )}
        </div>
        </div>
    );
}
