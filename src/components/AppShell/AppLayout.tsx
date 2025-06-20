import React, { ReactNode, useState } from "react";
import SideNavBar from "../NavBar/SideNavBar";
import Header from "../Header/Header";
import Signin from "../../pages/signin";
type AppLayoutProps = {
  children: ReactNode
}
export function AppLayout({children}:AppLayoutProps) {
const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLoginClick={() => setShowModal(true)}/>
      <Signin isOpen={showModal} onClose={() => setShowModal(false)} />
 
        <main className="flex-1 p-6 bg-light overflow-y-auto">
          {children}
        </main>
      
    </div>
  )
}