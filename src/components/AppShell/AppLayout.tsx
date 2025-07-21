"use-client";
import React, { ReactNode, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "./../NavBar/Navbar";
type AppLayoutProps = {
  children: ReactNode;
};
import { useStaticQuery, graphql } from "gatsby"

   
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="lg:ml-60  ml-0 md:ml-0 flex-1 p-6 overflow-y-auto bg-primary-bg">
          {children}
        </main>
      </div>
    </>
  );
}


