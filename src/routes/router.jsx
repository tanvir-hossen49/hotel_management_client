import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import { Loader } from "../components/index";
const Login = lazy(() => import("../Page/Login/Login"));
const Signup = lazy(() => import("../Page/Signup/Signup"));
const Rooms = lazy(() => import("../Page/Rooms/Rooms"));
const Features = lazy(() => import("../Page/Features/Features"));
const Blog = lazy(() => import("../Page/Blog/Blog"));
const Contact = lazy(() => import("../Page/Contact/Contact"));
const Home = lazy(() => import("../Page/Home/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/rooms",
        element: (
          <Suspense fallback={<Loader />}>
            <Rooms />
          </Suspense>
        ),
      },
      {
        path: "/features",
        element: (
          <Suspense fallback={<Loader />}>
            <Features />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loader />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);
