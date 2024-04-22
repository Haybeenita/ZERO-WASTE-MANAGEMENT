import { useState } from "react";
import Input from "./Input";

export const ChangePassword = ()=> {
    const [showReset, setShowReset] = useState(true);
    const [ResetPassword, setResetPassword] =useState("")



    const handleInputChange = (e) => {
        setResetPassword(e.target.value)
    }

    // const closeReset = (e) => {
    //     e.preventDefault();
    //     axios.post(`${ForgotPassword}`, {
    //         email: email.email
    //     }, {
    //         headers: {
    //             accept: 'application/json',
    //         },
    //     })
    //     .then(response => {
    //         console.log(response, "response from db");
    //         setShowReset(false);
    //     })
    //     .catch((error) => { 
    //         console.error('Error occurred:', error);
    //     });
    // }

    return (
        <div className="max-w-[40rem] flex justify-center mt-[13rem] m-auto">
        <div className="w-[35rem] h-[25rem] border-2 border-zero-500 bg-zero-300 rounded-xl">
            { showReset && (
                <div className="w-[30rem] h-[20rem] flex justify-center mx-auto flex-col">
                    <div className="mt-[2rem] flex flex-col"> 
                    <span className="capitalize font-normal text-[#212122] text-lg mt-[3rem]">New Password:</span>
                        <Input size="small" variant="primary" placeholder="....." type="password" onChange={handleInputChange}/>
                        <span className="capitalize font-normal text-[#212122] text-lg mt-[2rem]">Confirm Password:</span>
                        <Input size="small" variant="primary" placeholder="....." type="password" onChange={handleInputChange}/>

                        <button className="bg-[#51AD44] text-white flex items-center justify-center w-[8rem] h-[3rem] rounded-xl ml-[11rem] mt-[2rem]">Confirm</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    )};