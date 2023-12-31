import React from "react";
import useCart from "../hooks/useCart";
import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { GoHistory } from "react-icons/go";
import useAuthContext from "../hooks/useAuthContext";
import noAvatar from "../assets/no_avatar.png";
import { AiOutlineLogin } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useDarkTheme from "../hooks/useDarkTheme";
const DashBoard = () => {
  const [carts] = useCart();
  const { user, logout } = useAuthContext();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { darkTheme } = useDarkTheme();
  const handleLogout = () => {
    logout();
  };

  const userRole = () => {
    if (isAdmin) {
      return "Admin";
    } else if (isInstructor) {
      return "Instructor";
    } else {
      return "Student";
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center ">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open Dashboard
        </label>
      </div>
      <div className="drawer-side h-fit ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul
          className={`menu p-4 w-80 h-full mt-28 md:mt-0 bg-base-200 text-base-content ${
            darkTheme && "bg-gray-950 text-neutral-200"
          }`}>
          {/* Sidebar content here */}
          <div className="pb-4">
            <img
              className="mx-auto w-24 rounded-full object-cover ring-2"
              src={user && user?.photoURL ? user?.photoURL : noAvatar}
              alt={user && user?.displayName ? user?.displayName : "Anonymous"}
            />
            <p className="text-center mt-1 font-Poppins text-sm">
              Role:
              <span className="text-violet-500 font-bold ml-1">
                {userRole()}
              </span>
            </p>
            <p className="text-center text-lg font-Poppins font-semibold">
              {user && user?.displayName ? user?.displayName : "Anonymous"}
            </p>
            <p className="text-center text-base font-Poppins font-medium">
              {user && user?.email ? user?.email : "example@gmail.com"}
            </p>
            <hr className="mt-2 border-2" />
          </div>

          {user && !isInstructor && !isAdmin && (
            <>
              <li>
                <div className="flex items-center gap-4">
                  <label tabIndex={0}>
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-md indicator-item text-violet-500 font-bold text-base">
                        {carts && carts?.length > 0 ? carts?.length : 0}
                      </span>
                    </div>
                  </label>
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/cart">
                    My Selected Class
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <SiGoogleclassroom className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/enrolled-class">
                    My Enrolled Class
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <GoHistory className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/payment-history">
                    Payment History
                  </Link>
                </div>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <div className="flex items-center gap-4">
                  <BiAddToQueue className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/add-class">
                    Add Class
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <FaChalkboardTeacher className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/my-class">
                    My Class
                  </Link>
                </div>
              </li>
            </>
          )}
          {isAdmin && (
            <>
              <li>
                <div className="flex items-center gap-4">
                  <SiGoogleclassroom className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/manage-classes">
                    Manage Classes
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-4">
                  <HiUserGroup className="w-6 h-6" />
                  <Link
                    className={`font-Poppins text-[#3d3d47] ${
                      darkTheme && "text-neutral-200"
                    } font-semibold`}
                    to="/dashboard/manage-users">
                    Manage Users
                  </Link>
                </div>
              </li>
            </>
          )}
          <hr className="my-2 border-2" />
          <li onClick={handleLogout}>
            <div className="flex items-center gap-4">
              <AiOutlineLogin className="w-6 h-6" />
              <span
                className={`font-Poppins text-[#3d3d47] ${
                  darkTheme && "text-neutral-200"
                } font-semibold`}>
                Logout
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
