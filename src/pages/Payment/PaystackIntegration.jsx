import React from "react";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const PaystackIntegration = () => {
    const [email,setEmail] = useState('')
    const [amount,setAmount] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lasttName,setLastName] = useState('')
    const payWithPayStack=(e)=>{
        e.preventDefault();
       const payStack = new PaystackPop()
       payStack.newTransaction({
        key:'pk_test_907eb64312b409f14c9d14559c314ff3aaf6554e',
        amount:amount *100,
        email,
        firstName,
        lasttName,
        onSucess(transaction){
            let message =`Payment complete! Reference ${transaction.reference}`
            console.log(message)
            alert(message)
            alert('success')
          
            setEmail('')
            setFirstName('')
            setLastName('')
            setAmount('')
        },
        oncancel(){
            alert('You have cancelled the transaction')
        }
       })
    }
  return (
    <>
      <div className="">
        <div className=" bg-cover filter bg-[url('public\Bookingpage 1.png')]">
            <h3 className=" text-2xl font-bold flex justify-center py-[1rem] text-[#212122]">Make Payments</h3>
        </div>
        <div className=" "></div>
        <div className="w3-container w3-half ">
        <div className="w3-container w3-card-4 pt-[2rem]">
        <form id="paymentForm" onSubmit={payWithPayStack}>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w3-input bg-transparent" id="email-address" required />
          </div>
          <div class="form-group">
            <label for="amount">Amount</label>
            <input type="tel" id="amount"  value={amount} onChange={(e)=>setAmount(e.target.value)} className="w3-input bg-transparent" required />
          </div>
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" className="w3-input bg-transparent"  value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="first-name" />
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" className="w3-input bg-transparent" id="last-name"  value={lasttName} onChange={(e)=>setLastName(e.target.value)} />
          </div>
          <div class="form-submit">
            <button className="w3-btn mx-auto mt-[5rem] mb-[2rem] w3-block w3-blue rounded-md w-[10rem]" type="submit" onclick="payWithPaystack()">
              {" "}
              Pay{" "}
            </button>
          </div>
        </form>
        </div>
      </div>
      </div>
    </>
  );
};
export default PaystackIntegration;
