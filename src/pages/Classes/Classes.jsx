import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FiUser, FiDollarSign, FiCheckCircle } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import ClassCard from "../../shared/ClassCard/ClassCard";
const Classes = () => {
  const { user } = useAuthContext();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { data: allClasses = [], isLoading } = useQuery({
    queryKey: "allClasses",
    queryFn: async () => {
      const response = await axios("http://localhost:5000/allClasses");
      return response.data;
    },
  });

  // const handleSelectCourse = () => {
  //   if (!user) {
  //     alert("Please log in before selecting the course.");
  //     return;
  //   }

  //   if (course.availableSeats === 0 || isAdminOrInstructor) {
  //     return;
  //   }
  // };

  // const cardBackground =
  //   course.availableSeats === 0 ? "bg-red-200" : "bg-white";

  console.log(allClasses);
  return (
    <div className="grid grid-cols-4 gap-4">

    

      {allClasses?.map((singleClass) => {
        const {
          class_image,
          class_name,
          total_sets,
          price,
          enrolledStudentsId,
        } = singleClass;
        const availableSeats = total_sets - enrolledStudentsId.length 
        return (

          <ClassCard singleTopClass={singleClass} />

          // <div className={`rounded-lg shadow-lg p-6 `}>
          //   <img
          //     src={class_image}
          //     alt={class_name}
          //     className="w-full h-48 object-cover mb-4 rounded-md"
          //   />
          //   <h2 className="text-xl font-semibold mb-2">{class_name}</h2>
          //   <div className="flex items-center mb-2">
          //     <FiUser className="mr-2" />
          //     <p>{`Available Seats: ${availableSeats}`}</p>
          //   </div>
          //   <div className="flex items-center mb-4">
          //     <FiDollarSign className="mr-2" />
          //     <p>{`Price: ${price}`}</p>
          //   </div>
            // <button
            //   className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ${
            //     isAdmin || isInstructor || availableSeats === 0 ? "opacity-50 cursor-not-allowed" : ""
            //   }`}
            //   // onClick={handleSelectCourse}
            //   disabled={isAdmin || isInstructor || availableSeats === 0 }>
            //   Select
            // </button>
          // </div>
        );
      })}
    </div>
  );
};

export default Classes;
