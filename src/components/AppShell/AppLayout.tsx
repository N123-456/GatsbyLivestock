import React, { ReactNode } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import Header from "../Header/Header";

type AppLayoutProps = {
  children: ReactNode
}
export function AppLayout({children}:AppLayoutProps) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 h-[calc(100vh-64px)]">
        <SideNavBar />
        <main className="flex-1 p-6 bg-white overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}