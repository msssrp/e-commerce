import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (user) return children;

  return <Navigate to="/signup" state={location} replace />;
};

export default ProtectedRoute;
