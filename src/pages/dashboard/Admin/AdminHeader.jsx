import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboardHeader = ({ title = "Dashboard", handleToggle = () => {} }) => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 transition-all shadow-2xl duration-250 ease-soft-in lg:flex-nowrap lg:justify-start">
      <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
        <nav>
          <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
            <li className="leading-normal text-sm breadcrumb-item">
              <Link
                className="text-slate-700 opacity-30 dark:text-white"
                to={"/user"}
              >
                <FaHome width="12px" height="12px" />
              </Link>
            </li>
            <li className="text-sm pl-2 leading-normal before:float-left before:pr-2 before:text-gray-600 before:content-['/']">
              <a
                className="opacity-50 text-slate-700 dark:text-white"
                href="javascript:;"
              >
                Pages
              </a>
            </li>
            <li
              className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/'] dark:text-white dark:before:text-white"
              aria-current="page"
            >
             Admin
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
                <a
                  href="https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/pages/authentication/signin/illustration.html"
                  className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                >
                  <i className="fa fa-user sm:mr-1" aria-hidden="true" />
                  <span className="hidden sm:inline">Sign In</span>
                </a>
              </li>
              <li className="flex items-center pl-4 xl:hidden">
                <span
                  onClick={handleToggle}
                  role="button"
                  className="block p-0 transition-all ease-nav-brand text-sm text-slate-500 dark:text-white"
                >
                  <div className="w-4 overflow-hidden">
                    <i className="ease-soft mb-1 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
                    <i className="ease-soft mb-1 relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
                    <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all dark:bg-white" />
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

export default AdminDashboardHeader;
