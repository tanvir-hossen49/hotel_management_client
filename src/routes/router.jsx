import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader";
const MainLayout = lazy(() => import("../layout/MainLayout"));
const Login = lazy(() => import("../pages/Login/Login"));
const Signup = lazy(() => import("../pages/Signup/Signup"));
const Rooms = lazy(() => import("../pages/Rooms/Rooms"));
const Features = lazy(() => import("../pages/Features/Features"));
const Blog = lazy(() => import("../pages/Blog/Blog"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Home = lazy(() => import("../pages/Home/Home"));
const Error = lazy(() => import("../pages/Error/Error"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
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
