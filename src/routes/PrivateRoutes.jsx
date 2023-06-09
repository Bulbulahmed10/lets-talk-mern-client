import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Navigate, useLocation } from "react-router-dom";
import LoadingAnimation from "../shared/LoadingAnimation/LoadingAnimation";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <LoadingAnimation />;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoutes;
