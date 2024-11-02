import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Page/Login";
import SignUp from "../Page/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"logIn",
    element:<Login></Login>
  },
  {
    path:"singUp",
    element:<SignUp></SignUp>
  }
]);
