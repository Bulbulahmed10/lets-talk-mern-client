import React from "react";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import HomeFAQSection from "./Components/HomeFAQSection/HomeFAQSection";
import PopularClass from "./Components/PopularClass/PopularClass";
import Testimonial from "./Components/Testimonial/Testimonial";
import Sponsor from "./Components/Sponsor/Sponsor";
import Instructors from "../Instructors/Instructors";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <HomeFAQSection />
      <PopularClass />
      <Testimonial />
      <Instructors />
      <Sponsor />
    </div>
  );
};

export default Home;
