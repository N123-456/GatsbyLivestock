"use-client";
import React, { ReactNode, useState } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import Header from "../Header/Header";

import Navbar from "./../NavBar/Navbar";

type AppLayoutProps = {
  children: ReactNode;
};
export function AppLayout({ children }: AppLayoutProps) {
 

  return (
    <>
      <div className="flex min-h-screen">
        <Navbar />
        <main className="ml-80 flex-1 p-6 overflow-y-auto bg-primary-bg">{children}</main>
      </div>
    </>
  );
}
