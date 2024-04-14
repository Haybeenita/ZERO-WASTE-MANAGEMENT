
import React from 'react'
import Input from '../../../components/Input'
import Button from '../../../components/Buttons'

const BookingPage =()=> {
  return (
    <div className='flex justify-between w-full'>
      <div className=" flex">
        <div className=" w-[70rem] mr-[4rem] pt-[2.5rem] mt-[0.75rem] ">
          <div className=" w-[70rem] flex flex-col items-center pt-[1rem]  shadow-xl ">
            <h1 className="flex items-center justify-center font-bold text-2xl text-black mb-2">
              Booking Details
            </h1>
            <hr className="w-[35rem] my-[1rem] border-black"></hr>
            <div className="flex flex-col w-[30rem]">
              <div>
                <div className='flex justify-between'>
                  <label className="text-black font-medium mr-[1.5rem] text-[16px]">First Name
                    <Input className='bg-[#dbe6da]' variant="primary" padding="8px" placeholder="name" />
                  </label>
                  <label className="text-black font-medium text-[16px]">Last Name
                    <Input variant="primary" padding="8px" placeholder="name" />
                  </label>
                </div>
                <div className='flex justify-between'>
                  <label className="text-black font-medium mr-[1.5rem] text-[16px]">Email
                    <Input variant="primary" padding="8px" placeholder="@" />
                  </label>
                  <label className="text-black font-medium text-[16px]">Phone Number
                    <Input variant="primary" padding="8px" placeholder="+234" />
                  </label>
                </div>
                <p className="text-black font-medium">Address</p>
                <Input variant="primary" padding="8px" placeholder="Address" /> 
               <div className='flex items-center '>
                  <label className="text-black font-medium w-[10rem] text-[16px] mr-[2rem]">PickUp Date
                    <Input className="placeholder-text-[10px] px-[10px]" variant="primary" padding="6px" placeholder="dd/mm/yy" />
                  </label>
                  <select className="select w-full max-w-xs bg-[#fff]">
                    <option disabled selected>Type of Waste</option>
                    <option>Organic waste</option>
                    <option>Plastics</option>
                    <option>Medical waste</option>
                    <option>Biodegradable waste</option>
                    <option>Industrial waste</option>
                  </select> 
               </div>
              </div>
              <div className="flex justify-center mt-4 font-bold">
                <Button variant="primary" size="large">
                 Request Pickup
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
export default BookingPage
