import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import useDarkTheme from "../hooks/useDarkTheme";

const MainLayout = () => {
  const {darkTheme} = useDarkTheme()
  return (
    <div className={`w-full px-[50px] mx-auto ${darkTheme && "bg-black"}`}>
      <Header />
      <div className="mt-[120px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
