import React from "react";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const PaystackIntegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");
  const payWithPayStack = (e) => {
    e.preventDefault();
    const payStack = new PaystackPop();
    payStack.newTransaction({
      key: "pk_test_907eb64312b409f14c9d14559c314ff3aaf6554e",
      amount: amount * 100,
      email,
      firstName,
      lasttName,
      onSucess(transaction) {
        let message = `Payment complete! Reference ${transaction.reference}`;
        console.log(message);
        alert(message);
        alert("success");

        setEmail("");
        setFirstName("");
        setLastName("");
        setAmount("");
      },
      oncancel() {
        alert("You have cancelled the transaction");
      },
    });
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="bg-cover w-[50rem] h-[51.7rem] filter bg-[url('/Animation2.jpg')]"></div> 
        <div className="w-[50rem] flex justify-center">
          <div className="pt-[2rem] w-[45rem] shadow-2xl ml-[2rem] mt-[3rem] mb-[3rem] p-[2rem]">
            
          <h3 className=" text-3xl font-bold py-[1rem] flex justify-center text-[#212122]">
              Make Payments
            </h3>
            <form id="paymentForm" onSubmit={payWithPayStack}>
              <div className="">
                <label for="email" className="text-[#212122]">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w3-input bg-transparent  border-2 border-zero-200"
                  id="email-address"
                  required
                />
              </div>
              <div className="text-[#212122]">
                <label for="amount" className="text-[#212122]">Amount</label>
                <input
                  type="tel"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w3-input border-2 border-zero-200 bg-transparent"
                  required
                />
              </div>
              <div className="">
                <label for="first-name" className="text-[#212122]">First Name</label>
                <input
                  type="text"
                  className="w3-input bg-transparent  border-2 border-zero-200"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first-name"
                />
              </div>
              <div className="">
                <label for="last-name" className="text-[#212122]">Last Name</label>
                <input
                  type="text"
                  className="w3-input bg-transparent  border-2  border-zero-200"
                  id="last-name"
                  value={lasttName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="">
                <button
                  className="text-white mx-auto mt-[5rem] mb-[2rem] h-[3rem] w3-block bg-zero-500 rounded-md w-[10rem]"
                  type="submit"
                  onclick="payWithPaystack()"
                >
                  Pay
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
