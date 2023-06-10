import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useInstructor from "../hooks/useInstructor";
import LoadingAnimation from "../shared/LoadingAnimation/LoadingAnimation";

const InstructorRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading && isInstructorLoading) {
    return <LoadingAnimation />;
  }
  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default InstructorRoutes;
