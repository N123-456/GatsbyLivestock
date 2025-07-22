// src/components/PrivateRoute.tsx
import React, { useEffect, useState, ReactNode } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../../utils/auth";

type PrivateRouteProps = {
  children: ReactNode;
  setIsLoginModalOpen: (open: boolean) => void;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, setIsLoginModalOpen }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!isLoggedIn()) {
          setIsLoginModalOpen(true);
        } else {
          setAuthChecked(true);
        }
      } catch (error) {
        console.error("Authentication check error:", error);
        await navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [setIsLoginModalOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-primary-activelink font-montserrat text-lg">Loading...</p>
      </div>
    );
  }

  return authChecked ? <>{children}</> : null;
};

export default PrivateRoute;