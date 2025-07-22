// src/pages/login.tsx
import React, { useState } from "react";
import { navigate } from "gatsby";
import LoginModal from "../components/LoginModal/LoginModal";

const LoginPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

  const handleClose = () => {
    setIsLoginModalOpen(false);
    // Optionally redirect to home or another page after closing modal
    navigate("/introduction");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginModal isOpen={isLoginModalOpen} onClose={handleClose} />
    </div>
  );
};

export default LoginPage;

export const Head = () => (
  <>
    <title>Login | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);