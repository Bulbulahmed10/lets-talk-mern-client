import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center mb-4 ">
      <PropagateLoader color="#01A2A6" size={20} />
    </div>
  );
};

export default LoadingAnimation;
