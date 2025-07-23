import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";

const Introduction = () => {
  
  const data = useStaticQuery(graphql`
    query {
      Dashboard: file(relativePath: { eq: "Dashboard.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const Dashboard = getImage(data.Dashboard);

  return (
    <AppLayout>
      
      <div>
      
        <div className="flex flex-col justify-center ">
          <div className="max-w-7xl w-full px-4 lg:px-4  text-justify">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:px-10 pt-5">
            Introduction
          </h2>
          <p className="text-primary-paragraph sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
            Welcome to the Farm Management System! Designed specifically for the
            agriculture sector, this system will allow you to track your crops,
            manage your expenses, manage your tasks, and plan your resources
            well. It will make your work easy and assist you in getting better
            results. An integrated system for streamlined farm management. In
            this user manual, we will show you how to get started on the system
            and how to set up your farm. Let’s get started!
          </p>
          <div className="pt-7 flex justify-center px-4 sm:px-10">
            {Dashboard && (
              <GatsbyImage
                image={Dashboard}
                alt="Startups illustration"
                className="bg-white max-w-full h-auto"
              />
            )}
          </div>
          </div>
        </div>
      </div>
     
    </AppLayout>
  );
};

export default Introduction;

export const Head = () => (
  <>
    <title>Introduction | Farm Management System</title>
    <link rel="icon" type="image/png" href="/fmsLogo.png" />
  </>
);