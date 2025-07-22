// src/components/PrivateRoute.tsx
import React, { useEffect, useState, ReactNode } from "react";
import { navigate } from "gatsby";
import { isLoggedIn } from "../../utils/auth";

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const loggedIn = isLoggedIn();
        console.log("PrivateRoute: isLoggedIn =", loggedIn);
        if (!loggedIn) {
          console.log("PrivateRoute: Redirecting to /login");
          await navigate("/login", { replace: true });
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
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-primary-activelink font-montserrat text-lg">Loading...</p>
      </div>
    );
  }

  if (!authChecked) {
    return null; // Prevent rendering until auth is checked
  }

  return <>{children}</>;
};

export default PrivateRoute;