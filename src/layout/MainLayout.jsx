import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
