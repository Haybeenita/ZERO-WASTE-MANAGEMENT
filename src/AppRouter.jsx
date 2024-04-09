import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home-page";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/login";
import BookingPage from "./pages/ClientBookingpage/BookingPage";

const router = createBrowserRouter([
    { path: "/", element: <Home/> },
    { path: "/Register", element: <Register/> },
    {path: "/Login", element: <Login/> },
    { path:"/Bookus", element: <BookingPage/>}
  ]);
  
  export const RouterProviderApp = () => {
    return (<RouterProvider router={router} />);
  };