import React from "react";
import logo from "../../assets/lets-talk.png";
import { AiOutlineMail } from "react-icons/ai";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiSkype } from "react-icons/si";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-16 bg-[#3D3D47] px-8 py-16 mt-4">
        <div>
          <div className="flex items-center gap-2">
            <img className="w-16" src={logo} alt="" />
            <p className="text-3xl text-white">Lets Talk</p>
          </div>
          <p className="text-[#ffffff4d] mt-4">
          Are you ready to embark on an exciting journey of language learning? Look no further than Lets Talk, your premier language school dedicated to helping individuals of all ages and backgrounds achieve proficiency in their desired languages. 
          </p>
        </div>

        <div>
          <p className="text-[#fff] text-lg font-semibold font-Poppins border-b-2 border-b-[#01A2A6] w-fit pb-2">
            About Lets Talk
          </p>
          <ul className="text-white list-disc mt-6 flex flex-col gap-2">
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                About us
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                our staff
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                our partners
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] text-lg font-semibold font-Poppins border-b-2 border-b-[#01A2A6] w-fit pb-2">
            Trainers
          </p>
          <ul className="text-white list-disc mt-6 flex flex-col gap-2">
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                long-term trainers
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                intensive trainers
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                specialized trainers
              </a>
            </li>
            <li className="border-b border-gray-600">
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                language trainers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#fff] text-lg font-semibold font-Poppins border-b-2 border-b-[#01A2A6] w-fit pb-2">
            Contact Info
          </p>
          <ul className="text-white mt-6 flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <AiOutlineMail />
              <a
                className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300"
                href="#">
                letstalk@school.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiSmartphone />
              <p className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300">
                Call Us: 1-800-123-1234
              </p>
            </li>
            <li className="flex items-center gap-2">
              <GoLocation />
              <p className="text-[#ffffff4d] capitalize font-OpenSans hover:text-gray-300 duration-300">
                Brooklyn, NY 10036, United
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between font-OpenSans text-[#ffffff4d] bg-[#3D3D47] px-8 pb-2">
        <p>
          <a className="hover:text-gray-300 duration-300" href="#">
            Privacy Policy
          </a>
          / Lets Talk - Bulbul Ahmed © 2023 / All Rights Reserved
        </p>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/bulbul-ahmed10/" target="_blank">
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
          <a href="https://www.twitter.com" target="_blank">
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
    </>
  );
};

export default Footer;
