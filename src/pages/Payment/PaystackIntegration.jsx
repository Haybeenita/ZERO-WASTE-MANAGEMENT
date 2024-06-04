
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Providers";
import PaystackPop from "@paystack/inline-js";
import { getPrice } from "../../utils";
import axios from "axios";
import { VerifyPayment } from "../../BACKEND/Backend";

const PaystackIntegration = () => {
  const { authUser,bookingform, processingBooking, } = useContext(authContext);
  const [email, setEmail] = useState(authUser.email);
  const [firstName, setFirstName] = useState(authUser.first_name);
  const [lasttName, setLastName] = useState(authUser.last_name);
  console.log(getPrice(bookingform),'price');

  const navigate = useNavigate()
 
  const payWithPayStack = (e) => {
    console.log("paybooking",processingBooking);
  
    e.preventDefault();

    const payStack = new PaystackPop();

    //old key:pk_test_907eb64312b409f14c9d14559c314ff3aaf6554e
    payStack.newTransaction({
      key: "pk_live_93da2e5f3cc2c7afa7da15c6056f3742151bafcf",
      amount: getPrice(bookingform) * 100,
      ref:processingBooking.id.toString(),
      email,
      firstName,
      lasttName,
      onSuccess(transaction) {
        let message = `Payment complete! Reference ${transaction.reference}`;
        console.log(message);
        axios.post(`${VerifyPayment}${transaction.reference}`)
        .then(function (response) {
          console.log(response,'sucess response');
          navigate('dashboard/orders', { replace: true });
        })
        .catch(function (error) {
          console.log(error,'error response');
          navigate('dashboard/orders', { replace: true });
        });
        navigate('dashboard/orders', { replace: true });
        alert("success");

        setEmail("");
        setFirstName("");
        setLastName("");
        // setAmount("");
      },
      onCancel() {
        alert("You have cancelled the transaction");
        navigate('/dashboard/orders', { replace: true });
      },
    });
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="bg-cover xl:w-[50rem] w-auto lg:h-[51.7rem] filter lg:bg-[url('/Animation2.jpg')]  "></div> 
        <div className="lg:w-[50rem] mx-auto w-auto flex justify-center">
          <div className="pt-[2rem] lg:w-[45rem] w-[25rem] mx-auto shadow-2xl lg:ml-[2rem] mt-[3rem] mb-[3rem] p-[2rem]">
            
          <h3 className=" text-3xl font-bold py-[1rem] flex justify-center text-[#212122]">
              Make Payments
            </h3>
            <form id="paymentForm" onSubmit={payWithPayStack}>
              <div className="">
                <label htmlFor="email" className="text-[#212122]">Email Address</label>
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
                {/* <label htmlFor="amount" className="text-[#212122]">Amount</label>
                <input
                  type="tel"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w3-input border-2 border-zero-200 bg-transparent"
                  required
                /> */}
              </div>
              <div className="">
                <label htmlFor="first-name" className="text-[#212122]">First Name</label>
                <input
                  type="text"
                  className="w3-input bg-transparent  border-2 border-zero-200"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first-name"
                />
              </div>
              <div className="">
                <label htmlFor="last-name" className="text-[#212122]">Last Name</label>
                <input
                  type="text"
                  className="w3-input bg-transparent  border-2  border-zero-200"
                  id="last-name"
                  value={lasttName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <p className="mt-[1rem] text-2xl">Amount:{getPrice(bookingform)}</p>
              <div className="">
                <button
                  className="text-white mx-auto mt-[5rem] mb-[2rem] h-[3rem] w3-block bg-zero-500 rounded-md w-[10rem]"
                  type="submit"
                  onClick="payWithPaystack()"
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
