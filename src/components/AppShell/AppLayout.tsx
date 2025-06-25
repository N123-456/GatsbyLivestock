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
      <div className="flex flex-row min-h-screen">
        <Navbar />
        <main className="flex-1 p-6 bg-light overflow-y-auto">{children}</main>
      </div>
    </>
  );
}
