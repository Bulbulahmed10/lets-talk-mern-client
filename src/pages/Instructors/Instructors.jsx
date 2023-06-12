import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiMail } from "react-icons/fi";
import LoadingAnimation from "../../shared/LoadingAnimation/LoadingAnimation";
import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import { useLocation } from "react-router-dom";
const Instructors = () => {
  const location = useLocation();
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
      <div className="grid grid-cols-4">
        {allInstructors?.map((instructor) => {
          return (
            <div
              key={instructor._id}
              className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={instructor.profilePictureURL}
                alt={instructor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">{instructor.name}</h2>
              <div className="flex items-center mb-4">
                <FiMail className="mr-2" />
                <p className="text-gray-600">{instructor.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Instructors;
