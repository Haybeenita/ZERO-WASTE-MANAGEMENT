import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Buttons'

const BookingPage =()=> {
  return (
    <div>
         <div className="relative h-screen bg-cover bg-center filter bg-[url('../../../src/assets/images/animation1.jpg')]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="w-[30rem] h-[40rem] pt-[2.5rem] mt-[0.75rem] shadow-2xl bg-white/35 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg">
          <div className="shadow-2xl w-[30rem] h-[40rem]">
            <h1 className="flex items-center justify-center font-bold text-2xl text-black mb-2">
              Booking Details
            </h1>
            <hr className="w-[25rem] border-black flex items-center justify-center m-auto"></hr>
            <p className="flex font-semibold text-black items-center justify-center gap-1 mt-[1rem] text-lg">
              Create an
              <span className="text-[#0E5808] font-medium"> Account </span> to
              access features
            </p>
            <div className="flex flex-col w-[24rem] ml-[4rem] mt-[2rem]">
              <div>
               <div className='flex justify-between'>
                <label className="text-black font-medium">Profile Name
                  <Input variant="primary" padding="8px" placeholder="name" />
                  </label>
                  <label className="text-black font-medium">Last Name
                  <Input variant="primary" padding="8px" placeholder="name" />
                  </label>
               </div>
               
                <p className="text-black font-medium">Email address</p>
                <i
                  src="/emailogoregister.png"
                  alt=""
                  className="absolute w-4 h-4 mt-4 ml-2"
                />
                <Input variant="primary" padding="8px" placeholder="@" />
                <p className="text-black font-medium">Phone Number:</p>
                <Input variant="primary" padding="8px" placeholder="+234" />
                <p className="text-black font-medium">Password:</p>
                <Input variant="primary" padding="8px" placeholder="*******" />
              </div>

              <div className="flex justify-center mt-4">
                <Button variant="primary" size="large">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
      
        
    </div>
  )
}
export default BookingPage
