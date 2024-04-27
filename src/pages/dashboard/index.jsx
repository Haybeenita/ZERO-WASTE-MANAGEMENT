import { Outlet } from "react-router-dom";
// import DashboardHome from "./home";
import DashboardSidebar from "../../components/inc/sidebar";
import DashboardHeader from "../../components/inc/header";
import { useState,useEffect } from "react";
// import Order from "./Orders/Orders";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggle = ()=>{
    setIsSidebarOpen(state=> !state);
  },closeSidebar=()=>setIsSidebarOpen(false);

  return (
    <div className="m-0 font-sans antialiased font-normal text-left leading-default text-base bg-gray-50">
      <DashboardSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl overflow-y-auto">
        <DashboardHeader {...{handleToggle}} />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
