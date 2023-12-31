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
import InstructorRoutes from "./InstructorRoutes";
import AdminRoutes from "./AdminRoutes";
import ErrorPage from "../pages/error/ErrorPage";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
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
        ],
      },
    ],
  },
]);

export default router;
