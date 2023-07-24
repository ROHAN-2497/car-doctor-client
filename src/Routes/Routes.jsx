import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/home/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignUp/SignUp";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "book/:id",
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://car-doctor-server-tau-tan.vercel.app/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      },
    ],
  },
]);
export default router;
