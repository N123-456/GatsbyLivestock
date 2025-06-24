import React, { useEffect, useState } from "react";
import SideNavBar from "../components/NavBar/SideNavBar";
import Signin from "./signin";
import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/Navbar";

const UserGuidance = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // 👈 NEW

  useEffect(() => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    if (checkLogin === "true") {
      setIsLoggedIn(true);
    } else {
      setShowModal(true);
    }
    setIsCheckingAuth(false); // ✅ done checking
  }, []);

  const handleModalClose = () => {
    const checkLogin = localStorage.getItem("isLoggedIn");
    if (checkLogin === "true") {
      setIsLoggedIn(true);
    }
    setShowModal(false);
  };

  // 🚫 Don't render anything until auth check is done
  if (isCheckingAuth) return null;

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col min-h-screen">
          <Header onLoginClick={undefined} />
          <div className="flex flex-row min-h-screen">
            <Navbar />
            <main className="flex-1 p-6 bg-white overflow-y-auto">
              <h1 className="text-2xl font-bold">User Guidance</h1>
              <p className="mt-4 text-gray-700">This is protected content.</p>
            </main>
          </div>
        </div>
      ) : (
        <Signin isOpen={showModal} onClose={handleModalClose} />
      )}
    </>
  );
};

export default UserGuidance;
