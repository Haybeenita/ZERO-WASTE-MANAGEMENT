import { Link } from "react-router-dom";

function DashboardHome() {
  return (
    <div className="w-full p-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0">
          <div className="flex flex-wrap ml-[1rem] lg:ml-[4rem] gap-6 ">
            <div className="card w-full max-w-[15rem] h-[12rem] lg:h-[15rem] px-3 sm:flex-0 shrink-0 sm:w-33% bg-white shadow-lg">
              <div className="flex flex-col">
                <h3 className="lg:text-2xl text-lg font-semibold text-[#212122] my-[1rem]">
                  Orders
                </h3>
                <p className=" text-[#212122] font-medium lg:text-base text-sm">
                  Want a recap on your orders? Zero waste has your back!
                </p>

                <p className="text-sm font-medium text-zero-600 hover:underline dark:text-zero-500 mt-[3rem] ml-[7rem]">
                  <Link to="/dashboard/orders">View all</Link>
                </p>
              </div>
            </div>
            <div className="card w-full max-w-[15rem] lg:h-[15rem] h-[12rem] px-3 sm:flex-0 shrink-0 sm:w-33% bg-white shadow-lg">
              <div className="flex flex-col">
                <h3 className="lg:text-2xl text-lg font-semibold leading-none text-[#212122] my-[1rem] dark:text-white">
                  Support Contact
                </h3>
                <p className="text-[#212122] font-medium lg:text-base text-sm mt-[0.5rem]">
                  For more details and support, Call the number below.
                </p>
                <a
                  href="#"
                  className="text-sm font-medium text-[#212122] hover:underline dark:text-zero-500 mt-[3rem] ml-[5rem]"
                >
                  09164479636
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[1rem] lg:w-[30rem] w-[20rem] lg:p-0 p-1 lg:h-[15rem] h-[13rem] border-2 bg-gradient-to-r from-zero-400 via-zero-600 to-zero-800 rounded-xl flex-col ml-[1rem] lg:ml-[5rem]">
          <h3 className="text-white font-bold lg:text-xl text-lg mt-[1rem] ml-[1rem]">
            Request Pickup
          </h3>
          <p className="text-white font-medium lg:text-base text-sm lg:mt-[1rem] mt-[0.2rem] text-center">
            Tired of clutter? Our waste management app offers hassle-free
            booking for your waste pick-up needs. Simply schedule, sit back, and
            let us handle the rest. Streamline your clean-up process today!"
          </p>
          <p className="lg:text-md text-sm font-medium text-white hover:underline dark:text-zero-500 hover:text-zero-800 lg:mt-[2rem] mt-[1rem] lg:ml-[16rem] ml-[10rem]">
            <Link to="/dashboard/request">Request Pickup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
