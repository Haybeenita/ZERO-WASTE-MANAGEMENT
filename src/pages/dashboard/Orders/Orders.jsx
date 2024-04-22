
import axios from "axios";
import { useState,useEffect } from "react";
import { Bookingsorder } from "../../../BACKEND/Backend";
import { useContext } from "react";
import { authContext  } from "../../../Providers";
// const {authUser,setAuthUser} = useContext(authContext)
// const [loading, setLoading] = useState(false);
const Order = () => {
const {bookingDetails,setBookingDetails} = useContext(authContext )
const token = localStorage.getItem('token')
// console.log(token);

  useEffect(()=>{
    if(token){
        axios.get(`${Bookingsorder}`,{
          headers:{
            accept:'application/json',
            Authorization: `Bearer ${token}`
          }
        })
       .then(function (response) {
      // handle success
      console.log(response, 'response from order page ');
      console.log(response.data, ' response.data');
      setBookingDetails(response.data)
      console.log(bookingDetails[0],'booking details')
      // console.log(bookingDetails[0].address)
      console.log(bookingDetails,'my booking details')
      })
     .catch(function (error) {
      // handle error
      console.log(error);
       });
       return
    }
    // setBookingDetails('')
  },[])
  // useEffect(() => {
  //   console.log(bookingDetails, 'my booking details');
  // }, [bookingDetails]);
  const totalOrders = bookingDetails.length;
  return (
    <div>
      <div className="flex lg:ml-[2rem] ml-[0.5rem] mr-[0.5rem] gap-2 lg:gap-[4rem] mt-[2rem] relative">
        <div className="lg:w-[14rem] w-[12rem] h-[6rem] border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] flex flex-col text-[#212122]">
          <span className="lg:ml-[1rem] ml-[0.3rem]">Total Orders:</span>
          <span className="font-bold w-[5rem] mt-[0.5rem] lg:text-4xl text-2xl lg:ml-[2rem] ml-[1rem]">{totalOrders}</span>
        </div>
        <div className="lg:w-[14rem] w-[12rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="lg:ml-[1rem] ml-[0.3rem]">Total Pickups:</span>
          <span className="font-bold w-[5rem] mt-[0.5rem] lg:text-4xl text-2xl lg:ml-[2rem] ml-[1rem]">0</span>
        </div>
        <div className="lg:w-[14rem] w-[12rem] h-[6rem]  border-2 bg-zero-200 border-zero-300 lg:text-xl text-sm font-semibold rounded-2xl pt-[0.5rem] text-[#212122] flex flex-col">
          <span className="lg:ml-[1rem] ml-[0.2rem]">Total Expenditure:</span>
          <span className="mt-[0.5rem] lg:text-4xl text-2xl lg:ml-[2rem] ml-[0.5rem] font-bold">#2000</span>
        </div>
      </div>

      <div className="ml-[2rem]">
        <h1 className="text-2xl font-bold text-[#212122] mt-[2rem] ">Order</h1>
        <h3 className="text-xl font-semibold text-[#212122] capitalize my-[1rem]">
          history
        </h3>
        <div className="overflow-x-auto lg:mr-[2rem] mr-[1rem]">
          <table className="table lg:table-md table-sm text-[#212122] font-medium">
            <thead className="text-[#212122] font-semibold capitalize text-lg">
              <tr>
                <th>s/n</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {bookingDetails.map((book, index)=>{
              return (
                <tr key={index}>
                <th>{index + 1}</th>
                <td>{book.address}</td>
                <td>{book.pickup_date}</td>
                <td>{book.order_status}</td>
              </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Order;
