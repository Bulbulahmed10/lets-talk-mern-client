import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import StripePayment from "../pages/DashBoard/Payment/StripePayment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import EnrolledClass from "../pages/DashBoard/EnrolledClass/EnrolledClass";

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
          {
            path: "enrolled-class",
            element: <EnrolledClass />
          },
          {
            path: "stripe-payment",
            element: <StripePayment />,
          },
          {
            path: "payment-history",
            element: <PaymentHistory />,
          },
        ],
      },
    ],
  },
]);

export default router;
