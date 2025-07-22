// src/components/AppShell/AppLayout.tsx
import React, { ReactNode, useState } from "react";
import Sidebar from "../NavBar/Navbar";
import LoginModal from "../LoginModal/LoginModal";

type AppLayoutProps = {
  children: ReactNode | ((props: { setIsLoginModalOpen: (open: boolean) => void }) => ReactNode);
};

export function AppLayout({ children }: AppLayoutProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="lg:ml-60 ml-0 md:ml-0 flex-1 p-6 overflow-y-auto bg-primary-bg">
          {typeof children === "function" ? children({ setIsLoginModalOpen }) : children}
        </main>
      </div>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}