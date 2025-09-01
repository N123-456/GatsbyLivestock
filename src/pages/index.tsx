import * as React from "react";

import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import { useEffect, useState } from "react";
import TextToSpeech from "../components/TextToSpeech";
const IndexPage = () => {
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const loggedIn = isLoggedIn();
    if (!loggedIn) {
      navigate("/introduction");
    } else {
      setIsCheckingAuth(false); // allow page to render
    }
  }, []);

  // ⛔ Don't render anything while checking auth
  if (isCheckingAuth) return null;

  const data = useStaticQuery(graphql`
    query {
      lanoverview: file(relativePath: { eq: "lanoverview.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      costest: file(relativePath: { eq: "costest.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      farmresource: file(relativePath: { eq: "farmresource.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      uptask: file(relativePath: { eq: "uptask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const lanoverview = getImage(data.lanoverview);
  const costest = getImage(data.costest);
  const farmresource = getImage(data.farmresource);
  const uptask = getImage(data.uptask);
  const menu = getImage(data.menu);

  return (
    <AppLayout>
      <PrivateRoute>
        <main>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Dashboard:
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
              <p className="text-primary-paragraph text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                After logging into the system, the screen that will be first
                accessible to you will be the dashboard. The dashboard will
                provide you an overview of the farm.   </p>
 
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10 ">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>{" "}
              <h2 className="text-2xl font-montserrat lg:px-10 font-semibold text-primary-activelink mb-3 ">
                The Status Bar
              </h2>
                          <div className="text-primary-paragraph2 text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
              <p className=" mb-4">
                Located at the top of the page, the{" "}
                <span className="">"Status Bar"</span> contains your
                profile, your current location within the Farm Management
                System, and the logout button.
              </p>
              <h3 className="text-xl font-semibold text-primary-activelink mb-2 ">
                Status Bar Options
              </h3>
              <ul className="list-disc pl-6 mb-4 ">
                <li>
                  <span className="font-bold text-primary-pheading">"Go back?"</span> Button:
                  Positioned to the left of the{" "}
                  <span className="font-bold text-primary-pheading">"View Profile"</span> button and
                  to the right of the Farm Management System logo, this button
                  navigates to the previous page.
                </li>
                <li>
                  <span className="font-bold text-primary-pheading">"View Profile"</span> Button:
                  Access and update your personal account information. To access
                  the <span className="font-bold text-primary-activelink">"Profile Details"</span>{" "}
                  page:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over your account name in the top-left of the status
                      bar, beside your profile picture or farm company logo.
                    </li>
                    <li>
                      Click your account name to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Profile Details"</span>{" "}
                      page, where you can update your name, phone number, and
                      password.
                    </li>
                  </ol>
                  To change your password:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Enter your old password in the{" "}
                      <span className="font-bold">"Password"</span> field.
                    </li>
                    <li>
                      Enter the new password in the{" "}
                      <span className="font-bold">"New Password"</span> field.
                    </li>
                    <li>
                      Click the <span className="font-bold">"Submit"</span>{" "}
                      button to save changes.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-bold">"Logout"</span> Button: Exits the
                  Farm Management System and returns you to the Login Page. You
                  will need to sign in again to return to the Dashboard.
                </li>
              </ul>
              <p className=" mb-4">
                The <span className="text-primary-activelink font-bold">"Status Bar"</span> also
                displays the current tool or page you are accessing and remains
                visible across all pages in the system.
              </p>
              <h2 className="text-2xl font-bold text-primary-activelink mb-3 ">
                The Menu
              </h2>
              <p className=" mb-4">
                On the left-hand side of the screen, the{" "}
                <span className="text-primary-activelink font-bold">"Menu"</span> provides access to
                all features of the Farm Management System, allowing easy
                navigation between functions to manage farm operations.
              </p>
              <h3 className="text-xl font-semibold text-primary-activelink mb-2 ">
                Menu Options
              </h3>
              <ul className="list-disc pl-6 mb-4 ">
                <li>
                  <span className="font-bold text-primary-activelink">"Farm Locations"</span>: Manage
                  and monitor all farm locations. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Farm Locations"</span>{" "}
                      button, located below the{" "}
                      <span className="font-bold text-primary-activelink">"Dashboard"</span> button and
                      above the <span className="font-bold text-primary-activelink">"Tasks"</span>{" "}
                      button.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Farm Locations"</span> page.
                    </li>
                  </ol>
                  To return to the Dashboard, use the{" "}
                  <span className="font-bold text-primary-pheading">"Go back?"</span> button in the
                  Status Bar or the{" "}
                  <span className="font-bold text-primary-pheading">"Dashboard"</span> button in the
                  Menu.
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Tasks"</span>: Plan, assign, and
                  track farm activities. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the <span className="font-bold text-primary-activelink">"Tasks"</span>{" "}
                      button, located below{" "}
                      <span className="font-bold text-primary-activelink">"Farm Locations"</span> and
                      above <span className="font-bold text-primary-activelink">"Planting"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Tasks"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-bold text-primary-activelink">"Planting"</span>: Record and
                  monitor crop progress. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-semibold text-primary-activelink">"Planting"</span> button,
                      located below <span className="font-bold text-primary-activelink">"Tasks"</span>{" "}
                      and above <span className="font-bold text-primary-activelink">"Orchard"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Planting"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Orchard"</span>: Record and
                  monitor orchard progress. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Orchard"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Planting"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Warehouse"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Orchard"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Warehouse"</span>: Organize and
                  track warehouse items. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Warehouse"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Orchard"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Inventory"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-semibold text-primary-activelink">"Warehouse"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-bold text-primary-activelink">"Inventory"</span>: Track farm
                  supplies and stock levels. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Inventory"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Warehouse"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Machinery/Tools"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Inventory"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Machinery/Tools"</span>: Manage
                  machinery details and maintenance schedules. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Machinery/Tools"</span>{" "}
                      button, located below{" "}
                      <span className="font-bold text-primary-activelink">"Inventory"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Contact"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Machinery/Tools"</span>{" "}
                      page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Contact"</span>: Maintain a list
                  of important contacts. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Contact"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Machinery/Tools"</span> and
                      above <span className="font-bold text-primary-activelink">"Financials"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Contact"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Financials"</span>: Track
                  expenses, income, and financial performance. To access the{" "}
                  <span className="font-bold text-primary-activelink">"General Ledger"</span> page:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Financials"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Contact"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Manage Users"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"General Ledger"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-bold text-primary-activelink">"Manage Users"</span>: Add,
                  remove, or edit user access. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Manage Users"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Financials"</span> and above{" "}
                      <span className="font-bold text-primary-activelink">"Reports"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Manage Users"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold text-primary-activelink">"Reports"</span>: Generate
                  insights and performance analytics. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Hover over the{" "}
                      <span className="font-bold text-primary-activelink">"Reports"</span> button,
                      located below{" "}
                      <span className="font-bold text-primary-activelink">"Manage Users"</span>.
                    </li>
                    <li>
                      Click to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Reports"</span> page.
                    </li>
                  </ol>
                </li>
              </ul>
              <p className=" mb-4">
                The <span className="font-bold text-primary-activelink">"Menu"</span> remains visible
                across all pages and provides quick access to all tools and
                resources.
              </p>
              <h2 className="text-2xl font-bold text-primary-activelink mb-3 ">
                The Dashboard Panels
              </h2>
              <h3 className="text-xl font-bold text-primary-activelink mb-2 ">
                The Land Overview
              </h3>
              <p className=" mb-4">
                This panel provides an overview of farm locations, their land
                area, and health status. It includes three sub-panels:
              </p>
              <ul className="list-disc pl-6 mb-4 ">
                <li>
                  <span className="text-primary-activelink font-bold">"Total Land Area"</span> Panel:
                  Displays total land area and its allocation (Buildings,
                  Fields, Greenhouses, etc.). To access the{" "}
                  <span className="text-primary-activelink font-bold">"Farm Locations"</span> page:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click the{" "}
                      <span className="text-primary-activelink font-bold">"View Details"</span> link at
                      the bottom right of the panel.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-activelink font-bold">
                    "Total Farms (Map of Farm Locations)"
                  </span>{" "}
                  Panel: Shows an interactive map of farm locations. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click the{" "}
                      <span className="text-primary-activelink font-bold">"View Locations"</span> link
                      at the bottom right.
                    </li>
                    <li>
                      A window with an interactive map opens, showing pinned
                      farm locations.
                    </li>
                    <li>
                      Click a pin to go to the{" "}
                      <span className="text-primary-activelink font-bold">"View Farm Location"</span>{" "}
                      page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-activelink font-bold">"Weather Forecast"</span> Panel:
                  An upcoming feature displaying the current weather and a 7-day
                  forecast for your location.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 ">
                The Pending Tasks Overview
              </h3>
              <p className=" mb-4">
                This panel lists the top three pending tasks with their due
                dates, with the option to scroll for more. To access the{" "}
                <span className="text-primary-activelink font-bold">"Tasks"</span> page:
                <ol className="list-decimal pl-6 mt-2">
                  <li>
                    Click the <span className="text-primary-activelink font-bold">"View all"</span>{" "}
                    link at the top-right of the panel.
                  </li>
                </ol>
              </p>
              <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 ">
                The Crops and Orchards Overview
              </h3>
              <p className=" mb-4">
                This panel provides an overview of crops and orchards, including
                their planting locations and growth stages. It includes two
                sub-panels:
              </p>
              <ul className="list-disc pl-6 mb-4 ">
                <li>
                  <span className="text-primary-activelink font-bold">"Crops"</span> Sub-panel: Lists
                  all crops and their growth states, arranged from latest to
                  earliest. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click a crop to go to its{" "}
                      <span className="text-primary-activelink font-bold">"View Planting"</span> page.
                    </li>
                    <li>
                      Click the <span className="text-primary-activelink font-bold">"View all"</span>{" "}
                      link at the top-right to go to the{" "}
                      <span className="text-primary-activelink font-bold">"Planting"</span> page.
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-activelink font-bold">The "Orchards" Sub-panel</span> :
                  Lists all orchards and their growth states, arranged from
                  latest to earliest. To access:
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click an orchard to go to its{" "}
                      <span className="font-bold text-primary-activelink">"View Orchard"</span> page.
                    </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
                    <li>
                      Click the <span className="font-bold text-primary-activelink">"View all"</span>{" "}
                      link at the top-right of the panel
                       <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/> to go to the{" "}
                      <span className="font-bold text-primary-activelink">"Orchard"</span> page.
                    </li>
                  </ol>
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-primary-activelink mb-2 ">
                The Farm Resources Summary
              </h3>
              <p className=" mb-4">
                This panel summarizes farm resources across all locations. It
                includes four sub-panels:
                 <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
              </p>
              <ul className="list-disc pl-6 mb-4 ">
                <li>
                  <span className="text-primary-pheading font-bold">The Inventory "Total Items" Panel</span>{" "}
                  : Shows the total number of items in farm warehouses. To
                  access the <span className="text-primary-activelink font-bold">"Inventory"</span>{" "}
                  page:
                  <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click the <span className="text-primary-pheading font-bold">"View all"</span>{" "}
                      link at the bottom right.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
              <li>It will take you to the “Inventory” page right afterwards.</li>
              <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-pheading font-bold">
                    The Warehouse "Total Warehouses" Panel
                  </span>{" "}
                   Displays the total number of warehouses. To access the{" "}
                  <span className="text-primary-activelink font-bold">"Warehouse"</span> page:
                    <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click the <span className="text-primary-pheading font-bold">"View all"</span>{" "}
                      link at the bottom right.
                    </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
              <li>It will take you to the “Warehouse” page right afterwards. </li>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-pheading font-bold">"The Machinery Total Machines Panel"</span>{" "}
                  : Shows the total number of machines. To access the{" "}
                  <span className="text-primary-activelink font-bold">"Machinery/Tools"</span> page:
                   <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
                  <ol className="list-decimal pl-6 mt-2">
                    <li>
                      Click the{" "}
                      <span className="text-primary-activelink font-bold">"View all"</span> link at
                      the bottom right.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div><br/>
              <li>It will take you to the “Machinery/Tools” page right afterwards.</li>
               <div className="pl-13 pt-8 flex justify-center">
                {uptask && (
                  <GatsbyImage
                    image={uptask}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px]"
                  />
                )}
              </div>
                  </ol>
                </li>
                <li>
                  <span className="text-primary-pheading">Livestock Panel[Upcoming Panel]</span>: An
                  upcoming panel that will detail livestock counts.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-3 ">
                Conclusion
              </h2>
              <p className=" mb-4">
                Navigate through the{" "}
                <span className="text-activelink font-bold">"Dashboard"</span> to explore
                how its components connect to the Farm Management System tools.
                Use the Dashboard to manage your farm operations efficiently.
                Next, explore the{" "}
                <span className="text-activelink font-bold">
                  "Farm Locations"
                </span>{" "}
                page to learn how to add and manage farm locations in detail.
              </p>
              </div>
                        
             
            </div>
          </div>
        </main>
      </PrivateRoute>
    </AppLayout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Dashboard | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
