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
import AddClass from "../pages/DashBoard/AddClass/AddClass";
import MyClass from "../pages/DashBoard/MyClass/MyClass";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import AdminFeedHistory from "../pages/DashBoard/AdminFeedbackHistory/AdminFeedHistory";
import InstructorRoutes from "./InstructorRoutes";
import AdminRoutes from "./AdminRoutes";

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
            element: <EnrolledClass />,
          },
          {
            path: "stripe-payment",
            element: <StripePayment />,
          },
          {
            path: "payment-history",
            element: <PaymentHistory />,
          },
          {
            path: "add-class",
            element: (
              <InstructorRoutes>
                <AddClass />
              </InstructorRoutes>
            ),
          },
          {
            path: "my-class",
            element: (
              <InstructorRoutes>
                <MyClass />
              </InstructorRoutes>
            ),
          },
          {
            path: "manage-classes",
            element: (
              <AdminRoutes>
                <ManageClasses />
              </AdminRoutes>
            ),
          },
          {
            path: "manage-users",
            element: (
              <AdminRoutes>
                <ManageUsers />
              </AdminRoutes>
            ),
          },
          {
            path: "my-feedback-history",
            element: (
              <AdminRoutes>
                <AdminFeedHistory />
              </AdminRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
