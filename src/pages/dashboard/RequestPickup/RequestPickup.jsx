import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Buttons";
import axios from "axios";
import { booking } from "../../../BACKEND/Backend";
import { useContext } from "react";
import { authContext } from "../../../Providers";
import { getPrice } from "../../../utils";

const BookingPage = () => {
  const [loading, setLoading] = useState(false);
  const {bookingform,setBookingForm } = useContext(authContext);
  console.log(bookingform)
  // const { formFilled, setFormFilled } = useContext(authContext);
  
  

  const navigate = useNavigate();
  // const [paymentForm, setPaymentForm] = useState({});

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingform,
      [e.target.name]: e.target.value,
    });
  };

 

  const BookUs = (e) => {
    const token = localStorage.getItem("token");
    console.log(token);
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${booking}`,
        {
          first_name: bookingform.first_name,
          last_name: bookingform.last_name,
          phone: bookingform.phone,
          address: bookingform.address,
          pickup_date: bookingform.pickup_date,
          waste_type: bookingform.waste_type,
          amount: getPrice(bookingform),
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
            ContentType: "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response, "response from db");
        setLoading(false);
        navigate("/payment");
      })
      .catch(function (error) {
        console.log(error, "error from db");
        // setPaymentForm(error.data);
        setLoading(false);
      });
  };

  return (
    <div className=" lg:w-[60rem] md:w-[40rem] w-[20rem] flex flex-col m-auto relative mt-[3rem] shadow-xl lg:h-[35rem] items-center pt-[2rem]">
      <h1 className="flex items-center justify-center font-bold text-2xl text-black mb-2">
        Booking Details
      </h1>
      <hr className="lg:w-[40rem] md:w-[35rem] w-[15rem] my-[1rem] border-black m-auto" />
      <div className="flex flex-col lg:w-[50rem] md:w-[30rem] w-[15rem]">
        <form onSubmit={BookUs}>
          <div className="flex justify-between">
            <label className="text-black font-medium mr-[1.5rem] lg:text-[16px] text-sm">
              First Name
              <Input
                className="bg-[#dbe6da]"
                variant="primary"
                padding="8px"
                placeholder="name"
                onChange={handleInputChange}
                name="first_name"
                value={bookingform.first_name}
              />
            </label>
            <label className="text-black font-medium lg:text-[16px] text-sm">
              Last Name
              <Input
                variant="primary"
                padding="8px"
                placeholder="name"
                onChange={handleInputChange}
                name="last_name"
                value={bookingform.last_name}
              />
            </label>
          </div>
          <div className="flex justify-between">
            <label className="text-black font-medium mr-[1.5rem] lg:text-[16px] text-sm">
              Phone Number
              <Input
                variant="primary"
                padding="8px"
                placeholder="+234"
                onChange={handleInputChange}
                name="phone"
                value={bookingform.phone}
              />
            </label>
            <label className="text-black font-medium lg:text-[16px] text-sm">
              Email
              <Input
                variant="primary"
                padding="8px"
                placeholder="@"
                onChange={handleInputChange}
                name="email"
                value={bookingform.email}
              />
            </label>
          </div>
          <p className="text-black font-medium lg:text-[16px] text-sm">
            Address
          </p>
          <Input
            variant="primary"
            padding="8px"
            placeholder="Address"
            onChange={handleInputChange}
            name="address"
            value={bookingform.address}
          />
          <div className="flex items-center justify-between lg:gap-0 gap-1 ">
            <label className="text-black font-medium lg:w-[10rem] lg:text-[16px] text-sm lg:mr-[2rem]">
              PickUp Date
              <Input
                className="lg:placeholder-text-[14px] placeholder-text-[8px]"
                variant="primary"
                padding="14px"
                placeholder="dd/mm/yy"
                type="date"
                onChange={handleInputChange}
                name="pickup_date"
                value={bookingform.pickup_date}
              />
            </label>
            <select
              className="select w-full lg:max-w-xs max-w-xs text-xs items-center bg-zero-100"
              onChange={handleInputChange}
              value={bookingform.waste_type}
              name="waste_type"
            >
              <option disabled value="" className="font-semibold text-md">
                Type of Waste
              </option>
              <option value="Organic">Organic</option>
              <option value="Plastic">Plastic </option>
              <option value="Medical">Medical </option>
              <option value="Industrial">Industrial</option>
            </select>
            <p className="font-medium text-2xl">
              Amount:{getPrice(bookingform)}
            </p>
          </div>
          <div className="flex justify-center mt-4 font-bold">
            <Button
              type="submit"
              variant="primary"
              size="large"
              isDisabled={loading}
            >
              {loading ? <span className="loader" /> : "Request pickup"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
