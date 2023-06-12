import React from "react";
import useDarkTheme from "../../hooks/useDarkTheme";

const SectionHeading = ({ heading }) => {
  const {darkTheme} = useDarkTheme()
  return (
    <div className={`font-Poppins text-xl md:text-[32px] text-[#3d3d47] ${darkTheme && "text-neutral-200"} text-center my-8 md:my-16 capitalize`}>
      {heading}
    </div>
  );
};

export default SectionHeading;
