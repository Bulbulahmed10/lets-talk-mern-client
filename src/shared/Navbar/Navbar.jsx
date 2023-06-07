import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiSkype } from "react-icons/si";
import logo from "../../assets/lets-talk.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    console.log("rendering navbar");
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
    <div className="z-50">
      <div
        className={`fixed max-w-7xl bg-[#ffffffbf] border-b-2 font-OpenSans mx-auto right-0 left-0 top-0 py-4 transition-all duration-500 ${
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
            <a href="#">
              <FaLinkedinIn
                title="Linkedin"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <a href="#">
              <FaFacebookF
                title="Facebook"
                className="text-base text-[#9f9fa7] hover:text-[#29c7f7] duration-300"
              />
            </a>
            <a href="#">
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
          </div>
        </div>
      </div>
      <div
        className={`navbar fixed max-w-7xl bg-[#ffffffbf] mx-auto top-0 left-0 right-0  transition-all duration-500 ${
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex gap-1">
              <img className="h-[45px]" src={logo} alt="" />
              <p className="text-xl font-Poppins mt-2 font-semibold">
                Lets Talk
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-Poppins text-[#3d3d47] font-semibold">
              <Link>Home</Link>
            </li>
            <li className="font-Poppins text-[#3d3d47] font-semibold">
              <Link>Instructors</Link>
            </li>
            <li className="font-Poppins text-[#3d3d47] font-semibold">
              <Link>Classes</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal ">
            <li className="font-Poppins text-[#3d3d47] font-semibold">
              <Link to="/login">Login</Link>
            </li>
            <li className="font-Poppins text-[#3d3d47] font-semibold">
              <Link>Dashboard</Link>
            </li>
          </ul>

          <div className="dropdown dropdown-hover dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <img
                className="w-10 h-10 object-cover rounded-full dropdown
            "
                src="https://images.unsplash.com/photo-1685679585988-529dae9b214b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80"
                alt=""
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
