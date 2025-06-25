// src/components/PrivateRoute.js
import React, { useEffect } from "react";
import { navigate } from "gatsby";

const PrivateRoute = ({ children }) => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return <>{children}</>; // Show children only if allowed
};

export default PrivateRoute;
