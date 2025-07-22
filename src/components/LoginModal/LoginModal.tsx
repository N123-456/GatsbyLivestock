// src/components/LoginModal/LoginModal.tsx
import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { navigate } from "gatsby";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    onClose();
    navigate("/"); // Redirect to dashboard after login
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm min-h-[410px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl text-primary-activelink font-bold font-montserrat">
            Login
          </h2>
          <button onClick={onClose} className="text-black">
            <IconX size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black font-montserrat"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black font-montserrat"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-activelink text-white p-2 rounded-md transition mt-4 font-montserrat"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;