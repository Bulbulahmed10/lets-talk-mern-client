import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Lets' Talk - Home";
    } else {
      document.title = `Let's Talk ${location.pathname
        .replace("/", "-")
        .toUpperCase()}`;
    }

    if (location.state) {
      document.title = location.state;
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Header;
