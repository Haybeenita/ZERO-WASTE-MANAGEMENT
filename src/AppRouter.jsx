import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home-page";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/login";
import ProtectedRoute from "./Protected/protected.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import BookingPage from "./pages/ClientBookingpage/BookingPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Register", element: <Register /> },
  { path: "/Login", element: <Login /> },
  {path: "/Bookus", element:<BookingPage/>},
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
