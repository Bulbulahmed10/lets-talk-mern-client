import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/DashBoard/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <DashBoard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

export default router;
