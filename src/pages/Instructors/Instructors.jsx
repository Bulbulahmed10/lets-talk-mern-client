import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import LoadingAnimation from "../../shared/LoadingAnimation/LoadingAnimation";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { useLocation } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import useDarkTheme from "../../hooks/useDarkTheme";
const Instructors = () => {
  const location = useLocation();
  const { darkTheme } = useDarkTheme();
  const { data: allInstructors = [], isLoading } = useQuery({
    queryKey: "allInstructors",
    queryFn: async () => {
      const response = await axios("http://localhost:5000/allInstructors");
      return response.data;
    },
  });

  return (
    <>
      {isLoading && <LoadingAnimation />}
      {location.pathname === "/" && (
        <SectionHeading heading="Our Featured Instructor" />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-14 -mt-8">
        {allInstructors?.map((instructor) => {
          return (
            <Zoom key={instructor._id}>
              <div
                key={instructor._id}
                className={`${
                  darkTheme
                    ? "bg-dark border border-neutral-400 text-neutral-200"
                    : "bg-white"
                } rounded-lg shadow-lg p-6`}>
                <img
                  src={instructor.profilePictureURL}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {instructor.name}
                </h2>
                <div className="flex items-center mb-4">
                  <FiMail className="mr-2" />
                  <p
                    className={`text-gray-600 ${
                      darkTheme && "text-neutral-200"
                    }`}>
                    {instructor.email}
                  </p>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </>
  );
};

export default Instructors;
