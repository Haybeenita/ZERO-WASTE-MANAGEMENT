import { FaHome, FaThList } from "react-icons/fa";
import logo from "../../assets/images/zerowastelogo2.svg";
import SidebarLink from "../dashboard/nav-link";
import styles from "../dashboard/nav-link.module.css";
import PropType from "prop-types";
import { LuPackage2 } from "react-icons/lu";
import { MdOutlineReviews } from "react-icons/md";
// import { BiSolidOffer } from "react-icons/bi";
import { ImTruck } from "react-icons/im";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { authContext } from "../../Providers";
import { classNames, sizes } from "../../utils";

function DashboardSidebar({ isOpen = true, closeSidebar = () => {} }) {
  const sidebarclass = isOpen ? "translate-x-0" : "hidden";
  const sidebarLinks = SidebarLinkData.map(({ icon, path, text }) => (
    <SidebarLinkComponent key={text} path={path} icon={icon} text={text} />
  ));
  return (
    <>
      <aside
        className={classNames(
          "fixed left-100% top-0 bottom-0 inset-y-0 md-left-0 flex-wrap items-center",
          "justify-between block w-full overflow-y-auto transition-all duration-200 -translate-x-full bg-white z-100",
          "shadow-xl border-0 xl:ml-4 ease-in-out z-990 max-w-64 rounded-2xl xl:translate-x-0 xl:bg-transparent",
          window.innerWidth < sizes.laptopL ? sidebarclass:""
        )}
        id="sidenav-main"
        style={{ zIndex:999999}}
      >
        <div className="xl:h-[3.75rem] h-[2.855rem]">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
            aria-hidden="true"
          />
          <Link
            to="/"
            className="block px-8 py-4 m-0 text-sm whitespace-nowrap text-slate-700 "
          >
            {" "}
            <Link />
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
          </Link>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div
          className="items-center mt-[1.2rem] block w-full h-auto grow basis-full"
          id="sidenav-collapse-main"
        >
          <ul className="flex flex-col pl-0 mb-0 list-none">
            <li className="mt-1 w-full">{sidebarLinks}</li>
          </ul>
          <div className="mt-[24rem]">
            <LowerSidebarlinkComponent />
          </div>
        </div>
        <div className="pt-4 mx-4 mt-4">
          <p className="invisible hidden text-orange after:bg-gradient-to-tl after:from-gray-900 after:to-slate-800 after:bg-gradient-to-tl after:from-blue-600 after:to-cyan-400 after:bg-gradient-to-tl after:from-red-500 after:to-yellow-400 after:bg-gradient-to-tl after:from-green-600 after:to-lime-400 after:bg-gradient-to-tl after:from-red-600 after:to-rose-400 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 text-lime-500 text-cyan-500" />
          <div className="after:opacity-65 after:bg-gradient-to-tl after:from-slate-600 after:to-slate-300 relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']">
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
      {isOpen && window.innerWidth < sizes.laptopL && (
        <div
          className="fixed inset-0 bg-black/50"
          style={{ zIndex: 99 }}
          onClick={closeSidebar}
        />
      )}
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

const LowerSidebarlinkComponent = () => {
  const { toggleModal } = useContext(authContext);
  return (
    <div className="">
      <SidebarLink to="setting">
        <i
          className={`${styles.icon} stroke-none shadow-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black`}
        >
          <FaHome width="12px" height="12px" />
        </i>
        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-slate-700">
          My Profile
        </span>
      </SidebarLink>
      <SidebarLink to="logout">
        <i
          className={`${styles.icon} stroke-none shadow-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center fill-current p-2.5 text-center text-black`}
        >
          <FiLogOut />
        </i>
        <button
          onClick={toggleModal}
          className="ml-1 duration-300 opacity-100  ease text-slate-700"
        >
          Logout
        </button>
      </SidebarLink>
    </div>
  );
};

const SidebarLinkData = [
  {
    path: "/dashboard",
    icon: <FaThList className="w-6 h-6" />,
    text: "Dashboard",
  },
  {
    path: "orders",
    icon: <LuPackage2 className="w-6 h-6" />,
    text: "Orders",
  },
  {
    path: "review",
    icon: <MdOutlineReviews className="w-6 h-6" />,
    text: "Review",
  },
  // {
  //   path: "offers",
  //   icon: <BiSolidOffer className="w-6 h-6" />,
  //   text: "Offers",
  // },
  {
    path: "request",
    icon: <ImTruck className="w-6 h-6" />,
    text: "Request Pickup",
  },
];

SidebarLinkComponent.propTypes = {
  path: PropType.string.isRequired,
  icon: PropType.node.isRequired,
  text: PropType.string.isRequired,
};
