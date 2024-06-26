import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home-page";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/login";
import ProtectedRoute from "./Protected/protected.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import { Admindashboard } from "./pages/dashboard/Admin/Admindashboard.jsx";
import DashboardHome from "./pages/dashboard/home/index.jsx";
import Order from "./pages/dashboard/Orders/Orders.jsx";
import { Review } from "./pages/dashboard/Review/Review.jsx";
import BookingPage from "./pages/dashboard/RequestPickup/RequestPickup.jsx";
import Profile from "./pages/dashboard/Profile/Profile.jsx";
import { LogOut } from "./pages/dashboard/Logout/LogOut.jsx";
import PaystackIntegration from "./pages/Payment/PaystackIntegration.jsx";
import {ForgotPasswordReset } from "./components/Forgotpassword/VerifyEmail.jsx";
import { ChangePassword } from "./components/NewPassword.jsx";
import Verify from "./pages/EmailVerification/verificationPage.jsx";
import VerifyUserEmail from "./pages/EmailVerification/verifyUser.jsx";



const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/Register", element: <Register/> },
  { path: "/Login", element: <Login/> },
  { path: "/admin", element:<Admindashboard/>},
  {path: "payment", element:<PaystackIntegration/>},
  {path:"/forgotpassword", element:<ForgotPasswordReset/>},
  {path:"/auth", element:<ChangePassword/>},
  {path:"/verify", element:<Verify/>},
  {path:"/verifyuser", element:< VerifyUserEmail/>},
  
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
      // {path: "offers", element: <Offers/>},
      {path:"request", element: <BookingPage/>},
      {path:"setting", element:<Profile/>},
      {path:"logout", element:<LogOut/>},
      
    ]
  }
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
