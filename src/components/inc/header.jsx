import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Providers/index.jsx";
const DashboardHeader = ({title = "", handleToggle = () => {} }) => {
  const {authUser,userProfileImage} = useContext(authContext)
  const defaultImg= 'https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303093.jpg?w=740&t=st=1714383402~exp=1714384002~hmac=a7006916eebb9e0d64a21d87218a9a225e0ed5879ef11d25468f8fab66f1de82'
  return (
    <nav className="flex flex-wrap items-center px-0 transition-all shadow-md 0px 3px 8px; duration-250 ease-soft-in lg:flex-nowrap lg:justify-start sticky top-0 z-50">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap xl:pt-1 pt-10  mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="xl:flex hidden gap-2 xl:ml-[62rem] my-[0.5rem]">
            {
                  userProfileImage ?
                <img
                  className="w-8 h-8 mb-3 rounded-full shadow-lg"
                  src={userProfileImage}
                  alt="profile avatar" onError={(e)=> e.target.src=defaultImg} /> 
                  
                  : <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={defaultImg}
                alt="profile avatar"
              /> 
                }
              
               {/* <img className="w-8 h-8 rounded-full"  src={defaultImg} alt="profile avatar"  /> */}
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#212122"
                className="w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg> */}
              <p className="text-[#212122] font-medium text-md capitalize mt-[0.3rem]">{authUser?.first_name}</p>
            </li>
          </ol>
          <h6 className="mb-0 font-bold capitalize dark:text-white">{title}</h6>
        </nav>
        <div>
          <div
            className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto"
            id="navbar"
          >
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
              <li className="flex items-center">
              </li>
              <li className="flex items-center pl-4 xl:hidden">
                <span
                  onClick={handleToggle}
                  role="button"
                  className="block p-0 transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                >
                  <div className="w-4 overflow-hidden">
                    <i className="ease mb-1 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
                    <i className="ease mb-1 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
                    <i className="ease relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
                  </div>
                </span>
              </li>
              <li className="flex items-center px-4">
                <a
                  href="javascript:;"
                  className="p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                >
                  <i
                    fixed-plugin-button-nav=""
                    className="cursor-pointer fa fa-cog"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li className="relative flex items-center pr-2">
                <p className="hidden transform-dropdown-show" />
                <a
                  dropdown-trigger=""
                  href="javascript:;"
                  className="block p-0 transition-all text-sm ease-nav-brand text-slate-500 dark:text-white"
                  aria-expanded="false"
                >
                  <i className="cursor-pointer fa fa-bell" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardHeader;
