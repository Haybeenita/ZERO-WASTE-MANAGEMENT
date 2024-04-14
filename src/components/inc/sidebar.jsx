import { FaHome, FaThList } from "react-icons/fa";
import logo from "../../assets/images/zerowastelogo2.svg";
import SidebarLink from "../dashboard/nav-link";
import styles from "../dashboard/nav-link.module.css";
import PropType from "prop-types";
import { LuPackage2 } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { ImTruck } from "react-icons/im";


function DashboardSidebar() {
  const sidebarLinks = SidebarLinkData.map(({ icon, path, text }) => (
    <SidebarLinkComponent key={text} path={path} icon={icon} text={text} />
    
   
  ));
  return (
    <>
      <aside
        className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full overflow-y-auto transition-all duration-200 -translate-x-full bg-white shadow-2xl border-0 xl:ml-4 dark:bg-gray-950 ease-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent"
        id="sidenav-main"
      >
        <div className="h-20">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden"
            aria-hidden="true"
          />
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
            href="/dashoared"
            target="_blank"
          >
            <img
              src={logo}
              className="inline-block h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:hidden"
              alt="main_logo"
            />
            <img
              src={logo}
              className="hidden h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:inline-block"
              alt="main_logo"
            />
            <span className="ml-1 font-semibold transition-all duration-200 ease-in-out">
              ZERO WASTE
            </span>
          </a>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div
        className="items-center block w-full h-auto grow basis-full"
        id="sidenav-collapse-main"
      >
        <ul className="flex flex-col pl-0 mb-0 list-none">
          <li className="mt-1 w-full">
            {sidebarLinks}
          </li>
        </ul>
        <div className="mt-[20rem]">
        <LowerSidebarlinkComponent /> 
      </div>
        </div>
        <div className="pt-4 mx-4 mt-4">
          <p className="invisible hidden text-orange after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800 after:bg-gradient-to-tl after:from-blue-600 after:to-cyan-400 after:bg-gradient-to-tl after:from-red-500 after:to-yellow-400 after:bg-gradient-to-tl after:from-green-600 after:to-lime-400 after:bg-gradient-to-tl after:from-red-600 after:to-rose-400 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500" />
          <div
            className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']"
          >
            <div
              className="absolute w-full h-full bg-center bg-cover mb-7 rounded-2xl"
              style={{
                backgroundImage:
                  'url("../../assets/img/curved-images/white-curved.jpg")',
              }}
            />
          </div>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;

const SidebarLinkComponent = ({
  path,
  icon = <FaThList width="12px" height="12px" />,
  text = "text",
}) => {
  return (
    <SidebarLink to={path}>
      <div
        className={`${styles.icon} stroke-none shadow-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black`}
      >
        {icon}
      </div>

      <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-slate-700">
        {text}
      </span>
    </SidebarLink>
    

  );
};

const LowerSidebarlinkComponent =() => {
  return(
    <SidebarLink to="/dashboard/setting">
      <i className="stroke-none shadow-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black"><FaHome width="12px" height="12px"/></i>
      <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-slate-700">My Profile</span>
    </SidebarLink>
   
  

  );
};

const SidebarLinkData = [
  {
    path: "/dashboard",
    icon: <FaThList width="12px" height="12px" />,
    text: "Dashboard",
  },
  {
    path: "/dashboard/orders",
    icon:<LuPackage2 width="15px" height="15px" />,
    text: "Orders",
  },
  {
    path: "/dashboard/review",
    icon: <MdOutlineReviews width="12px" height="12px"/>,
    text: "Review",
  },
  {
    path: "/dashboard/offers",
    icon: <BiSolidOffer width="12px" height="12px" />,
    text: "Offers",
  },
  {
    path: "/dashboard/request",
    icon: <ImTruck width="12px" height="12px" />,
    text: "Request Pickup",
  },
];


 

SidebarLinkComponent.propTypes = {
  path: PropType.string.isRequired,
  icon: PropType.node.isRequired,
  text: PropType.string.isRequired,
};

