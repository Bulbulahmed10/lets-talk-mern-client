import React from "react";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import HomeFAQSection from "./Components/HomeFAQSection/HomeFAQSection";
import PopularClass from "./Components/PopularClass/PopularClass";
import Testimonial from "./Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeFAQSection />
      <PopularClass />
      <Testimonial />
    </div>
  );
};

export default Home;
