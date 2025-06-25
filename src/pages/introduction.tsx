import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const introduction = () => {
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
      <div className=" h-full w-full ">
        <div className="flex flex-col ">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
            Introduction
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
            Welcome to the Farm Management System! Designed specifically for
            agriculture sector, this system will allow you to track your crops,
            manage your expenses, manage your tasks and plan your resources
            well. It will make your work easy and assist you in getting better
            results. An integrated system for streamlined farm management. In
            this user manual, we will show you how to get started on the system
            and how to set up your farm. Let’s get started!
          </p>
           <div className="pl-13 pt-7 flex justify-center">
                {Dashboard && (
                <GatsbyImage
                  image={Dashboard}
                  alt="Startups illustration"
                  className="bg-white "
                />
              )}
              </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default introduction;
