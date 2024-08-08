import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader"; // Or any loading component

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [isApproved, setIsApproved] = useState(null);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/status", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        setIsApproved(response.data.kycApproved);
      } catch (error) {
        console.error("Error fetching user status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStatus();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return isApproved ? (
    Component
  ) : (
    <Navigate to="/kyc" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
