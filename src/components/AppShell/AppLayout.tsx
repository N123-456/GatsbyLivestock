"use-client";
import React, { ReactNode, useState } from "react";
import Header from "../Header/Header";

import Navbar from "./../NavBar/Navbar";
import Sidebar from "./../NavBar/Navbar";

type AppLayoutProps = {
  children: ReactNode;
};
export function AppLayout({ children }: AppLayoutProps) {
 

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="ml-60 w-[1440px] flex-1 p-6 overflow-y-auto bg-primary-bg">{children}</main>
      </div>
    </>
  );
}
