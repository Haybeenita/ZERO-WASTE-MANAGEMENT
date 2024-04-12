import { Route, Routes } from "react-router-dom";
import DashboardHome from "./home";
import DashboardSidebar from "../../components/inc/sidebar";
import DashboardHeader from "../../components/inc/header";
import { useState } from "react";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="m-0 font-sans antialiased font-normal text-left leading-default text-base bg-gray-50">
      <DashboardSidebar />
      <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl overflow-y-auto">
        <DashboardHeader />
        <Routes>
          <Route index element={<DashboardHome />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
