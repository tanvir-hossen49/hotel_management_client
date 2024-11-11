import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";
import Rooms from "../Page/Rooms/Rooms";
import Features from "../Page/Features/Features";
import Blog from "../Page/Blog/Blog";
import Contact from "../Page/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rooms", element: <Rooms /> },
      { path: "/features", element: <Features /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
