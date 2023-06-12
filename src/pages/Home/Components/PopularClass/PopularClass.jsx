import React from "react";
import SectionHeading from "../../../../shared/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ClassCard from "../../../../shared/ClassCard/ClassCard";
import LoadingAnimation from "../../../../shared/LoadingAnimation/LoadingAnimation";
const PopularClass = () => {
  const { data: topSixClass = [], isLoading } = useQuery({
    queryKey: "popularClasses",
    queryFn: async () => {
      const res = await axios("https://lets-talk-school.vercel.app/topSixClass");
      return res.data;
    },
  });

  return (
    <div>
      <SectionHeading heading="Popular Classes" />
      {isLoading && <LoadingAnimation />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
        {topSixClass?.length > 0 &&
          topSixClass?.map((singleTopClass) => (
            <ClassCard
              key={singleTopClass._id}
              singleTopClass={singleTopClass}
            />
          ))}
      </div>
    </div>
  );
};


export default PopularClass;
