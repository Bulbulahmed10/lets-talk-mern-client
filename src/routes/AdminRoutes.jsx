import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import LoadingAnimation from "../shared/LoadingAnimation/LoadingAnimation";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading && isAdminLoading) {
    return <LoadingAnimation />;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoutes;
