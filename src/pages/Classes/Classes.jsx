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


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 pt-12 -mt-6">
      {allClasses?.map((singleClass) => {
        return <ClassCard singleTopClass={singleClass} />;
      })}
    </div>
  );
};

export default Classes;
