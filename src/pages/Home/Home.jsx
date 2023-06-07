import React from "react";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import HomeFAQSection from "./Components/HomeFAQSection/HomeFAQSection";
import PopularClass from "./Components/PopularClass/PopularClass";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeFAQSection />
      <PopularClass />
    </div>
  );
};

export default Home;
