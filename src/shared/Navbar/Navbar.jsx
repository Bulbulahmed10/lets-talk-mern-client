import React, { useState, useEffect, useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiSkype } from "react-icons/si";
import logo from "../../assets/lets-talk.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import noAvatar from "../../assets/no_avatar.png";
import useCart from "../../hooks/useCart";
import DarkLightToggleButton from "../DarkLightToggleButton/DarkLightToggleButton";
import useDarkTheme from "../../hooks/useDarkTheme";
const Navbar = () => {
  const { user, logout, setUser } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [carts] = useCart();
  const { darkTheme } = useDarkTheme();

  const handleLogOut = () => {
    logout().then(() => {
      setUser(null);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > prevScrollPos && currentScrollPos > 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="z-50 relative">
      <div
        className={`fixed w-full px-[120px] ${
          darkTheme ? "bg-black" : "bg-white"
        } border-b-2 font-OpenSans mx-auto right-0 left-0 top-0 py-4 transition-all duration-500 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}>
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[2px]">
              <CiLocationOn className="text-xl text-[#29c7f7] font-bold" />
              <p className="text-[11px] text-[#9f9fa7]">
                Brooklyn, NY 10036, United States
              </p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMobile className="text-xl text-[#29c7f7] font-bold" />
              <p className="text-[11px] text-[#9f9fa7]">1-800-123-1234</p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineMail className="text-xl text-[#29c7f7] font-bold" />
              <p className="text-[11px] text-[#9f9fa7]">
                hi@letstalkschool.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/bulbul-ahmed10/"
              target="_blank">
              <FaLinkedinIn
                title="Linkedin"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <a href="https://www.facebook.com/Mdbulbulmolla01/" target="_blank">
              <FaFacebookF
                title="Facebook"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <a href="https://www.twitter.com">
              <BsTwitter
                title="Twitter"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <a href="#">
              <SiSkype
                title="Skype"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <DarkLightToggleButton />
          </div>
        </div>
      </div>
      <div
        className={`navbar fixed  w-full px-[120px] -mt-6 ${
          isScrolled && "-mt-8 pt-10"
        } ${
          darkTheme ? "bg-black" : "bg-white"
        } mx-auto top-0 left-0 right-0  transition-all duration-500 ${
          isScrolled ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="font-Poppins text-[#3d3d47] font-semibold">
                  Item 1
                </a>
              </li>
              <li>
                <a className="font-Poppins text-[#3d3d47] font-semibold">
                  Item 3
                </a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex gap-1">
              <img className="h-[45px]" src={logo} alt="" />
              <p
                className={`${
                  darkTheme ? "text-neutral-200" : "text-black"
                } text-xl font-Poppins mt-2 font-semibold`}>
                Lets Talk
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li
              className={`font-Poppins ${
                darkTheme && "text-neutral-200"
              } text-[#3d3d47] font-semibold `}>
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-Poppins ${
                darkTheme && "text-neutral-200"
              } text-[#3d3d47] font-semibold`}>
              <Link to="/instructors">Instructors</Link>
            </li>
            <li
              className={`font-Poppins ${
                darkTheme && "text-neutral-200"
              } text-[#3d3d47] font-semibold`}>
              <Link to="/classes">Classes</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal items-center gap-4">
            {!user && (
              <li
                className={`font-Poppins ${
                  darkTheme && "text-neutral-200 "
                } text-[#3d3d47] font-semibold`}>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <>
                <li
                  className={`font-Poppins ${
                    darkTheme && "text-neutral-200"
                  } text-[#3d3d47] font-semibold`}>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="dropdown dropdown-end">
                  <label tabIndex={0}>
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${darkTheme && "text-white"}`}
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
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content w-52 bg-base-100 shadow hover:bg-white ">
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {carts && carts?.length > 0 ? carts?.length : 0} Items
                      </span>
                      <span className="text-info">
                        Subtotal: $
                        {carts && carts?.length > 0
                          ? carts.reduce((acc, curr) => acc + curr.price, 0)
                          : "0"}
                      </span>
                      <div className="card-actions">
                        <Link
                          to="/dashboard/cart"
                          className="btn btn-primary btn-block">
                          View cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <div className="dropdown dropdown-hover dropdown-end">
                  <label tabIndex={0} className="cursor-pointer">
                    <img
                      className="w-10 h-10 object-cover rounded-full dropdown
            "
                      src={user && user?.photoURL ? user?.photoURL : noAvatar}
                      alt={
                        user && user?.displayName
                          ? user?.displayName
                          : "Anonymous"
                      }
                    />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <a
                        className={`font-Poppins ${
                          darkTheme && "text-neutral-200"
                        } text-[#3d3d47] font-semibold`}
                        onClick={handleLogOut}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
