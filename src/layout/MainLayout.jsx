import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useDarkTheme from "../hooks/useDarkTheme";

const MainLayout = () => {
  const { darkTheme } = useDarkTheme();
  return (
    <>
      <div
        className={`w-full overflow-x-auto px-[10px] md:px-[50px] mx-auto ${
          darkTheme && "bg-black"
        }`}>
        <Header />
        <div className="mt-[120px]">
          <Outlet />
        </div>
      </div>
      <div
        className={`w-full overflow-x-auto md:px-[50px] mx-auto ${
          darkTheme && "bg-black"
        }`}>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
