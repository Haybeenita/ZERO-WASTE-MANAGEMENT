import { useContext } from "react";
import { authContext } from "../../../Providers/index.jsx";
function Profile() {
  
  const {authUser,bookingDetails} = useContext(authContext)
  console.log(bookingDetails,'from profile')
  return (
    <div className="w-full p-6 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full max-w-full px-3 lg:flex-0 shrink-0">
          <div className="flex flex-wrap -mx-3 gap-6">
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg">
              <div className="flex flex-col items-center py-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/testimonial1.png"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  {authUser?.first_name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                 {authUser?.email}
                </span>
                <div className="flex mt-4 md:mt-[4.3rem]">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-zero-500 rounded-lg hover:bg-zero-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Edit Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="card w-full max-w-full px-3 sm:flex-0 shrink-0 sm:w-4/12 bg-white shadow-lg p-4 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">
                  Address Book
                </h5>
                <a
                  href="#"
                  className="text-sm font-medium text-zero-600 hover:underline "
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 "
                >
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                        <h3 className="text-[#212122] text-lg font-semibold first-letter:">
                          Default Address:
                        </h3>
                        <p className="text-sm font-medium text-gray-900 truncate  mt-[1rem]">
                         {bookingDetails[0].address}
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white mt-[7.6rem] bg-zero-500 rounded-lg hover:bg-zero-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
      </div>
    </div>
  );
}

export default Profile;
