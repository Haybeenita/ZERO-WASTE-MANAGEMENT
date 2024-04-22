import { useState } from "react";
import Input from "../Input";
import axios from "axios";
import { ForgotPassword } from "../../BACKEND/Backend";
// import React from "react";
export const ForgotPasswordReset = () => {
    const [showReset, setShowReset] = useState(true);
    const [email, setEmail] = useState({
        email: "",
    });

    const handleInputChange = (e) => {
        const {value} = e.target;
        setEmail({ email: value });
    }

    const closeReset = (e) => {
        e.preventDefault();
        axios.post(`${ForgotPassword}`, {
            email: email.email
        }, {
            headers: {
                accept: 'application/json',
            },
        })
        .then(response => {
            console.log(response, "response from db");
            setShowReset(false);
        })
        .catch((error) => { 
            console.error('Error occurred:', error);
        });
    }

    return (
        <div className="max-w-[30rem] flex justify-center mt-[8rem] m-auto">
        <div className="w-[30rem] h-[20rem] border-2 border-zero-500 bg-zero-300 rounded-xl">
            {showReset && (
                <div className="w-[25rem] h-[15rem] flex justify-center mx-auto flex-col">
                     <span className="capitalize font-normal text-[#212122] text-lg mt-[2rem]">verify your email</span>
                    <div className="mt-[2rem] flex flex-col"> 
                        <Input size="small" variant="primary" placeholder="Email" onChange={handleInputChange}/>
                        <button className="bg-[#51AD44] text-white flex items-center justify-center w-[8rem] h-[3rem] rounded-xl ml-[8rem] mt-[3rem]" onClick={closeReset}>Send</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}
