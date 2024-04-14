import { Link } from "react-router-dom";

function DashboardHome() {
  return (
    <div className="w-full p-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0">
          <div className="flex flex-wrap -mx-3 gap-6">
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg">
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-[#212122] my-[2rem]">
                  Orders
                </h3>
                <p className=" text-[#212122] font-medium text-base text-center">
                  Did you forget what you've booked before? No worries! Our
                  waste pickup app keeps a record of your previous orders, so
                  you can easily manage and repeat them with just a few taps.
                  Effortless cleanup at your fingertips!"
                </p>

                <p className="text-sm font-medium text-zero-600 hover:underline dark:text-zero-500 mt-[3rem] ml-[18rem]">
                  <Link to="/dashboard/orders">View all</Link>
                </p>
              </div>
            </div>
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg p-4 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Address Book
                </h5>
                <a
                  href="#"
                  className="text-sm font-medium text-zero-600 hover:underline dark:text-zero-500"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 dark:divide-gray-700"
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          No 1 predia hotel independence layout Enugu.
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white mt-[7.6rem] bg-zero-500 rounded-lg hover:bg-zero-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Change Address
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-[2rem] ml-[10rem] w-[30rem] h-[15rem] border-2 bg-gradient-to-r from-zero-400 via-zero-600 to-zero-800 rounded-xl flex-col">
          <h3 className="text-white font-bold text-xl mt-[1rem] ml-[1rem]">
            Request Pickup
          </h3>
          <p className="text-white font-medium text-base mt-[1rem] text-center">
            Tired of clutter? Our waste management app offers hassle-free
            booking for your waste pick-up needs. Simply schedule, sit back, and
            let us handle the rest. Streamline your clean-up process today!"
          </p>
          <p className="text-md font-medium text-white hover:underline dark:text-zero-500 hover:text-zero-800 mt-[2rem] ml-[16rem]">
            <Link to="/dashboard/request">Request Pickup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
