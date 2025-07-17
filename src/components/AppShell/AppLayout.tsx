"use-client";
import React, { ReactNode, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "./../NavBar/Navbar";
type AppLayoutProps = {
  children: ReactNode;
};
import { useStaticQuery, graphql } from "gatsby"

   export const Head = () => {
     const data = useStaticQuery(graphql`
       query {
         site {
           siteMetadata {
             title
           }
         }
       }
     `)

     return (
       <>
         <title>{data.site.siteMetadata.title}</title>
         <link rel="icon" type="image/png" href="/images/favicon.png" />
       </>
     )
   }
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="ml-60 w-[1440px] flex-1 p-6 overflow-y-auto bg-primary-bg">
          {children}
        </main>
      </div>
    </>
  );
}


