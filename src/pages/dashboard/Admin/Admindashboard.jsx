import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminDashboardHeader from './AdminHeader'
import AdminDashboardSidebar from './Adminsidebar'
import PendingOrders from './Pendingorders';
import OrdersInProgress from './Ordersinprogress';

export const Admindashboard = () => {
    return (
        <>
        <div>
           <div className='relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl overflow-y-auto'>
             <AdminDashboardHeader />
           </div>
           <div className='m-0 font-sans antialiased font-normal text-left leading-default text-base bg-gray-50'>
            <AdminDashboardSidebar />
           </div>
           
           <Routes>
                <Route index element={<PendingOrders />}></Route>
                <Route index element={<OrdersInProgress/>}></Route>      
           </Routes>
           </div>
       
        </>
    );
  }