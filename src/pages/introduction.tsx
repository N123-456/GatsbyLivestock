import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      lp: file(relativePath: { eq: "lp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const lp = getImage(data.lp);

  return (
    <AppLayout>
      <div>
        <div className="flex flex-col justify-center ">
          <div className="acu  lg:pr-4 text-justify font-montserrat">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <TextToSpeech textSelector=".acu" />
              </div>
              <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                Getting Started with Farm Management System
              </h2>
            </div>
            <div className="flex items-center pt-5">
              <h2 className="text-primary-subheading dark:text-[#BE8B45] font-semibold text-[22px] font-montserrat lg:pl-10">
                Introduction
              </h2>
              <div className=" lg:hidden">
                <TextToSpeech textSelector=".acu" />
              </div>
            </div>

            <p className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              Welcome to the Farm Management System! Designed specifically for
              the agriculture sector, this system will allow you to track your
              crops, manage your expenses, manage your tasks and plan your
              resources well. It will make your farm management easy and assist
              you in getting better results with your farms. An integrated
              system for a more streamlined farm management. In this user
              manual, we will show you how to get started on the system and how
              to become more comfortable in using the system. Now without
              further ado, Let’s get started!
            </p>
            <br />
            <br />
            <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat lg:pl-10">
              Navigating Through Farm Management System
            </h2>
            <p className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              As we will come to understand the Farm management and its many
              parts. It will be a lot easier if you were to see this as a guide
              for how to use the Farm Management System in a more easier to
              understand approach.
              <br />
              Now we will introduce the Farm Management System as an
              Introductory guide, so that you can set up:
            </p>
            <ul className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              <li>
                1. Your login to your Farm management system with your provided
                account.Introduce you to the Menu and Dashboard.
              </li>
              <li>
                2. Help you set up your first Farm Location entry, where you
                will learn how to make a Farm for your crops or for your
                orchards. You will also set up your next Farm Location entry,
                where you will learn how to make a Building entry.
              </li>
              <li>
                3. You will be shown the Tasks page and see how important it is
                in the Farm Management System.
              </li>
              <li>
                4. Assign a set of crops or orchards to grow in your Farm entry
                in your Farm Locations. It will also make a bunch of tasks for
                the employees you’ve entered into the Farm Management System.
              </li>
              <li>
                5. Then create a Warehouse entry in your Buildings entry in your
                Farm Locations. This will be your storage for many of the
                Fertilizers, Chemicals, Medicinal Equipments or consumables,
                Farm Equipments and their service-based solutions and finally
                the harvests of your farm operation.
              </li>
              <li>
                6. Purchase or Transfer a few Inventory items into your
                Warehouse entry. Make it so your Warehouse isn’t empty and you
                can utilize them for future uses.
              </li>
              <li>
                7. Add, Manage and maintain your multiple farm equipments such
                as whether they are needed for a work at the farm or a different
                farm and then how long they were kept parked, as well as their
                maintenance for repairs or washes including their servicing.
              </li>
              <li>
                8. Add contacts of your employees or vendors from nearby sources
                or companies to be used throughout the Farm Management System
                whenever possible.
              </li>
              <li>
                9. Manage and view the Financials of your Farm Operation to
                ensure ends meet and the credit and debit balance is maintained.
              </li>
              <li>
                10. Manage the multiple users of the Farm Management System
                whether it’ll be employees or outside sources and help.
              </li>
              <li>
                11. Finally, view and download reports of your Farm Operation
                from a general perspective so as to not miss any discrepancies
                or differences in the overall work and business of the many
                parts of the Farm Management System.
              </li>
            </ul>
            <br />

            <p className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              As you can see, we have a lot to cover and there will be even more
              for those who wish to get into the details of the Farm Management
              System and use it to its full potential!
              <br />
              This demonstration will showcase how to use the Farm Management
              System if you are a first-time user and how you can use it in an
              appropriate manner. You may also use this demonstration as a guide
              for specific parts or how to use specific parts as well. We will
              also be showcasing all of the features of the Farm Management
              System.
              <br />
              We wish for you to have a comfortable experience using the Farm
              Management System and if there are any concerns on starting off,
              We hope this guide will assist and guide you to using it
              comfortably and correctly!
              <br />
              We will first start off at the Login page, and get started with
              signing you into the Farm Management System.
              <br />
            </p>
            <br />

            <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat lg:pl-10">
              The Login Page
            </h2>
            <div className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              <p>
                For getting access to the Farm Management System, you must first
                login into the system. For that:
              </p>
              <ul>
                <li>
                  First, complete your registration to access the Farm
                  Management System.
                </li>
                <li>
                  Then login in with the credentials provided to you via an
                  email. The email will contain your login credentials which
                  will include…
                </li>
                <ul>
                  <li>Your Username (e.g. Ahmad123)</li>
                  <li>Your Email address (e.g. example@gmail.com)</li>
                  <li>Your Password (e.g. Ax76ghiu987ty)</li>
                </ul>
                <li>
                  Enter the credentials into the Login Page, specifically the
                  provided email address and the password.
                </li>
                <li>
                  Press the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Login”
                  </span>{" "}
                  button and Log into the system to continue.
                </li>
              </ul>
            </div>
            <div className="pl-13 pt-8 flex justify-center">
              {lp && (
                <GatsbyImage
                  image={lp}
                  alt="Startups illustration"
                  className="border border-gray-300 shadow-xl w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />
            <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat lg:pl-10">
              Update Password Prompt
            </h2>
            <div className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              <p>
                If it’s your first time logging in to the system, the system
                will prompt you to update your password.
              </p>
              <ul>
                <li>
                  First, enter a password of your choice (e.g. 123456). Please
                  make sure it is a secure and safe password.
                </li>
                <li>Re-enter the password to confirm it (e.g. 123456).</li>

                <li>
                  Press the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Update the password”
                  </span>{" "}
                  button.
                </li>
                <li>
                  You will be able to gain access to the system and continue on
                  to the Dashboard.
                </li>
              </ul>
            </div>
            <div className="pl-13 pt-8 flex justify-center">
              {lp && (
                <GatsbyImage
                  image={lp}
                  alt="Startups illustration"
                  className="border border-gray-300 shadow-xl w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />
            <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat lg:pl-10">
              Forgot the Password?
            </h2>
            <div className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
              <p>If you ever forget your password, You can change it by:</p>
              <ul>
                <li>
                  Click the “Forgot Password” link on the login page. It will
                  direct you to the “Forgot Password?” page.
                </li>

                <li>Enter your email (e.g. example@gmail.com).</li>
                <li>
                  Press the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Reset password”
                  </span>{" "}
                  button.
                </li>
                <li>
                  A reset link will be sent to your registered email’s inbox.
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {lp && (
                    <GatsbyImage
                      image={lp}
                      alt="Startups illustration"
                      className="border border-gray-300 shadow-xl w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <li>
                  Click on the link in the email. It will take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Change password”
                  </span>{" "}
                  page.
                </li>
                <li>Enter your new password (e.g. 12345678).</li>
                <li>
                  Re-enter the password to confirm the password (e.g. 12345678).
                  Click on the
                  <span className="text-primary-pheading font-bold">
                    “Change password”
                  </span>{" "}
                  button. Your password will be reset.
                </li>
              </ul>
              <div className="pl-13 pt-8 flex justify-center">
                {lp && (
                  <GatsbyImage
                    image={lp}
                    alt="Startups illustration"
                    className="border border-gray-300 shadow-xl w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />
              <p>
                Once you have successfully signed into the Farm Management
                System, you will be then introduced to the Dashboard Page, the
                home page of the Farm Management System.
              </p>
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
