import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home-page";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/login";
import ProtectedRoute from "./Protected/protected.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import BookingPage from "./pages/ClientBookingpage/BookingPage.jsx";
import { Admindashboard } from "./pages/dashboard/Admin/Admindashboard.jsx";
import DashboardHome from "./pages/dashboard/home/index.jsx";
import Order from "./pages/dashboard/Orders/Orders.jsx";
import { Review } from "./pages/dashboard/Review/Review.jsx";
import { Offers } from "./pages/dashboard/Offers/Offers.jsx";
import { RequestPickup } from "./pages/dashboard/RequestPickup/RequestPickup.jsx";
import Profile from "./pages/dashboard/Profile/Profile.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Register", element: <Register/> },
  { path: "/Login", element: <Login/> },
  { path: "/Bookus", element:<BookingPage/>},
  { path: "/admin", element:<Admindashboard/>},
  
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "orders", element: <Order /> },
      {path:"review", element: <Review/>},
      {path: "offers", element: <Offers/>},
      {path:"request", element: <RequestPickup/>},
      {path:"setting", element:<Profile/>}
    ]
  }
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
