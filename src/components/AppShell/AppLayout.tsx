// src/components/AppShell/AppLayout.tsx
import React, { ReactNode } from "react";
import Sidebar from "../NavBar/Navbar";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

type AppLayoutProps = {
  children: ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="lg:ml-60 ml-0 md:ml-0 dark:bg-black flex-1 items-center p-6 overflow-y-auto scrollbar-hidden bg-primary-bg">
        <div className="flex justify-end ">
          <DarkModeToggle />
        </div>
        {children}
      </main>
    </div>
  );
}
