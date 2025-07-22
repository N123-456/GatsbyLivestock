// src/components/AppShell/AppLayout.tsx
import React, { ReactNode } from "react";
import Sidebar from "../NavBar/Navbar";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="lg:ml-60 ml-0 md:ml-0 flex-1 p-6 overflow-y-auto bg-primary-bg">
        {children}
      </main>
    </div>
  );
}