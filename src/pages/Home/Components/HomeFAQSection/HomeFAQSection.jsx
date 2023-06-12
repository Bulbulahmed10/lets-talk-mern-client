import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Bounce, Slide, Zoom } from "react-awesome-reveal";
const HomeFAQSection = () => {
  return (
    <div className="bg-[#01A2A6] py-10 flex justify-around">
      <Slide delay={103}>
        <div>
          <AiOutlineMail className="text-4xl text-white" />
          <p className="text-[28px] font-Poppins font-medium mt-3 text-[#FFF19A]">
            Get Quote
          </p>

          <p className="text-sm font-OpenSans text-white">
            <Bounce>Find the price of your ideal course</Bounce>
          </p>
        </div>
      </Slide>
      <Zoom>
        <div>
          <TfiHeadphoneAlt className="text-4xl text-white" />
          <p className="text-[28px] font-Poppins font-medium mt-3 text-[#FFF19A]">
            Ask a Question
          </p>
          <p className="text-sm font-OpenSans text-white">
            <Bounce>Not sure what you need? Ask our Advisors</Bounce>
          </p>
        </div>
      </Zoom>
      <Slide>
        <div>
          <MdOutlinePersonAddAlt className="text-4xl text-white" />
          <p className="text-[28px] font-Poppins font-medium mt-3 text-[#FFF19A]">
            Join Today
          </p>
          <p className="text-sm font-OpenSans text-white">
            <Bounce>Sign Up Now for a free 30 Day Trail</Bounce>
          </p>
        </div>
      </Slide>
    </div>
  );
};

export default HomeFAQSection;
