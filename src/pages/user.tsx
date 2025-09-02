import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const user = () => {
  // const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  //   useEffect(() => {
  //     const loggedIn = isLoggedIn();
  //     if (!loggedIn) {
  //       navigate("/introduction");
  //     } else {
  //       setIsCheckingAuth(false); // allow page to render
  //     }
  //   }, []);

  //   // ⛔ Don't render anything while checking auth
  //   if (isCheckingAuth) return null;
  const data = useStaticQuery(graphql`
    query {
      um: file(relativePath: { eq: "um.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      anu: file(relativePath: { eq: "anu.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      su: file(relativePath: { eq: "su.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vud: file(relativePath: { eq: "vud.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const um = getImage(data.um);
  const anu = getImage(data.anu);
  const su = getImage(data.su);
  const vud = getImage(data.vud);

  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify font-montserrat text-primary-paragraph2 text-[18px]">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for User Management:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-primary-pheading font-bold font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                Users can be managed easily through farm management system.
                Users are the people who will perform the tasks related to the
                farm. System offers different user roles with varying levels of
                access and permissions within the system. From here, you grant
                access to users to access the system according to their defined
                roles. Only users with "Farm Admin" role can create and manage
                user accounts. Users can be added, searched and their details
                can be edited.
              </p>

              <div className="pl-13 pt-8 flex justify-center">
                {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat dark:text-primary-pheading font-bold font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10 ">
                <h3 className="text-xl font-semibold text-primary-activelink  mb-2 text-justify">
                  Adding a User
                </h3>
                <p className="text-justify mb-4">
                  For adding a User, you first need to have a set of items
                  ready, so that there will not be any issues throughout the
                  process:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    You need to have all the information of the user prepped and
                    ready for the Farm Management System.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Now, once you have the required items ready, you can continue
                  to making a User entry in the Farm Management System. To add a
                  User, you first start by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    Clicking on the{" "}
                    <span className="text-primary-activelink font-bold">
                      "’+’ Add User"
                    </span>{" "}
                    button, located on the top-left corner of the page, to the
                    left of the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Download Table"
                    </span>{" "}
                    button and to the top of the search options.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ol>
                <p className="text-justify mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Add New User"
                  </span>{" "}
                  page.
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  Please keep in mind, all the fields in the single step must be
                  filled properly. Now, let us begin with the first and only
                  step, the{" "}
                  <span className="text-primary-pheading font-bold">
                    "User Information"
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    "User Information"
                  </span>{" "}
                  step is where you enter all the relevant and required
                  information of the user you intend to add in the Farm
                  Management System.
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      "User Name"
                    </span>{" "}
                    field: Enter the name of the user that you are adding to the
                    Farm Management System. Please make sure to include their
                    first name, middle name, and last name when entering it.
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Email Address"
                    </span>{" "}
                    field: Enter the email address of the user that you are
                    adding to the Farm Management System.
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      "Phone Number"
                    </span>{" "}
                    field: Enter the phone number of the user you are adding to
                    the Farm Management System. Please enter it in this format:
                    [03ZX][0XXXXXX], for e.g., 03330122333.
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Select Status"
                    </span>{" "}
                    field: This is a non-editable field where it shows what
                    status the user is in on the Farm Management System, i.e.,
                    either they are{" "}
                    <span className="text-primary-pheading font-bold">
                      "Active"
                    </span>{" "}
                    or{" "}
                    <span className="text-primary-pheading font-bold">
                      "Blocked"
                    </span>
                    .
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "User Role"
                    </span>{" "}
                    field: Enter what role the user plays in the overall farm
                    operation that you are running. Please select one of six
                    options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Farm Manager
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Accountant
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Service Manager
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Warehouse Manager
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Farm Worker
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Auditor
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Image"
                    </span>{" "}
                    field: Enter an image of the user that you are adding to the
                    Farm Management System.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing. Now, once you have filled all the details
                  that need to be filled and feel comfortable with your inputs,
                  you can select the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Submit"
                  </span>{" "}
                  button. You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users"
                  </span>{" "}
                  page with your User entry added to the Manage Users table!
                </p>
 <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Features of the Manage Users Dashboard
                </h3>
                <p className="text-justify mb-4">
                  Now that we covered how to add a User into the Farm Management
                  System, let us now focus on the features that are present in
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users Dashboard"
                  </span>
                  !
                </p>

                <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Browsing for User
                </h4>
                <p className="text-justify mb-4">
                  You can browse through the Table to find a User entry you want
                  using the page options. Let's show you how to use the page
                  options:
                </p>
                <p className="text-justify mb-4">
                  The page options are located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users"
                  </span>{" "}
                  table.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Total number of records"
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Records per page option"
                  </span>
                  , the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Page select"
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Go to page search"
                  </span>
                  . Let's go through them one by one:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      "Total number of records"
                    </span>
                    : This shows a number of how many User entries are there in
                    the Farm Management System. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Manage Users"
                    </span>{" "}
                    table, above the page select options, and is on the bottom
                    left of the page.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Records per page option"
                    </span>
                    : This opens a menu where you can select how many User
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Manage Users"
                    </span>{" "}
                    table, above the page select options, and is to the bottom
                    right of the page.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      "Page select options"
                    </span>
                    : It shows which page you are currently in (the default is
                    the 1st page). It gives you buttons for the next five pages,
                    after which it gives you the button to the last page. You
                    can also move to the previous page using the left arrow
                    button, located on the left side, or to the next page using
                    the right arrow button located on the right side. Located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Manage Users"
                    </span>{" "}
                    table, the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Total number of records"
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Records per page"
                    </span>
                    , and is on the bottom middle of the page.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Go to page"
                    </span>{" "}
                    search: You can type a page number of where the Users you
                    are looking for is and hit enter. It will then open the page
                    with the page number shown as well.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ul>
                <p className="text-justify mb-4">
                  You can use the page options as a way of finding a User or a
                  collection of Users.
                </p>


             
              

             
          
              </div>
              

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
<div className="lg:pl-10">
             <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Searching for User
                </h4>
                <p className="text-justify mb-4">
                  You can search for a User from the table of Users present in
                  the Farm Management System. You can locate the search options
                  as they are underneath the{" "}
                  <span className="text-primary-pheading font-bold">
                    "’+’ Add New"
                  </span>{" "}
                  button and above the table.
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      "Email Address"
                    </span>{" "}
                    search: You can search for the user you are looking for by
                    the email address you set when adding it.
                  </li>
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      "Status"
                    </span>{" "}
                    search: You can search for the Users that are either{" "}
                    <span className="text-primary-activelink font-bold">
                      "Active"
                    </span>{" "}
                    or{" "}
                    <span className="text-primary-activelink font-bold">
                      "Blocked"
                    </span>{" "}
                    from the Farm Management System.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Then click on the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Search"
                  </span>{" "}
                  button, located on the far-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Download Table"
                  </span>{" "}
                  button and to the left of the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Refresh data"
                  </span>{" "}
                  button.
                </p>
                <p className="text-justify mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users"
                  </span>{" "}
                  table update with only the search options you typed or
                  selected in the search bar. Also, you can click on the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Refresh data"
                  </span>{" "}
                  button to refresh the data. It is highlighted as a red button
                  with an{" "}
                  <span className="text-primary-activelink font-bold">
                    "arrow pointing back"
                  </span>{" "}
                  icon.
                </p>
                <p className="text-justify mb-4">
                  Now those are the search options! You can now search for a
                  specific User or filter the table for a set of User entries.
                  You can also use the search options as a filter so that you
                  can{" "}
                  <span className="text-primary-activelink font-bold">
                    "Download Table"
                  </span>{" "}
                  specific User entries to use later.
                </p>
              </div>

      <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
<div className="lg:pl-10">
   <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Downloading the Manage Users Table
                </h4>
                <p className="text-justify mb-4">
                  If you want to have a set of Users or the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users"
                  </span>{" "}
                  table in the table within the Farm Management System on a PDF
                  downloaded, then you can do so by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    First, you can use the search to filter the table for
                    specific Users that you want to download, otherwise if you
                    want to download the entire table, leave the search options
                    as they are and go to the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Records per page"
                    </span>{" "}
                    count and set it to the highest number you can set.
                  </li>
                  <li>
                    Next, you can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Download Table"
                    </span>{" "}
                    button located on the top-left of the page, to the right of
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      "’+’ Add User"
                    </span>{" "}
                    button and above the search options.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ol>
                <p className="text-justify mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  This file contains the current view of the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users"
                  </span>{" "}
                  table and their details. When you have found a suitable place
                  for your PDF file, then you can press the{" "}
                  <span className="text-primary-pheading font-bold">
                    "Save"
                  </span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </p>
                <p className="text-justify mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Downloads"
                  </span>{" "}
                  section, to view your PDF file, or you can go into the file
                  explorer location where you uploaded the PDF file and open it
                  to view it as well.
                </p>
                <p>Provided below is an example of what it should look like:</p>
  <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

</div>
              <div className="flex items-center space-x-4 pt-5">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
<div className="lg:pl-10">
               <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Blocking a User
                </h4>
                <p className="text-justify mb-4">
                  Now if you want to block a user from the Farm Management
                  System, you can do so by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    First, select the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Three dots"
                    </span>{" "}
                    icon [It’ll look like this{" "}
                    <span className="text-primary-pheading font-bold">"⋮"</span>
                    ], located on the right side of the User you wish to block.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      "extra options"
                    </span>{" "}
                    menu show.
                  </li>
                  <li>
                    Select the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Blocked"
                    </span>{" "}
                    button, which will be the 2nd button in the list, above the{" "}
                    <span className="text-primary-activelink font-bold">
                      "View"
                    </span>{" "}
                    button.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ol>
                <p className="text-justify mb-4">
                  You can then see the Table refresh itself and change the user
                  entry by showing the status of the User as{" "}
                  <span className="text-primary-pheading font-bold">
                    "Blocked"
                  </span>
                  .
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="text-justify mb-4">
                  That is how you can block a user from the Farm Management
                  System. Now we have covered all the features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Manage Users Dashboard"
                  </span>
                  .
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-5">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div></div>
                <div className="lg:pl-10">
                 
              
   <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Viewing a User
                </h4>
                <p className="text-justify mb-4">
                  You can view a User entry within the Farm Management System
                  and confirm the details about the information you entered as
                  well as do additional actions on the entry. There are
                  currently two methods to viewing a User entry in the table.
                </p>
                <p className="text-justify mb-4">
                  Here is how you can view a User:
                </p>
                <p className="text-justify mb-4">
                  The first method to viewing a User entry in the table is by
                  selecting the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Name"
                  </span>{" "}
                  of the User you want to check out:
                </p>
                 
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    You can select the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Name"
                    </span>{" "}
                    of the User you want to view.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">
                      "View User Details"
                    </span>{" "}
                    page of the User you selected.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ol>
                <p className="text-justify mb-4">
                  The second method to view a User entry in the table is by
                  selecting the{" "}
                  <span className="text-primary-activelink font-bold">
                    "Three dots"
                  </span>{" "}
                  icon, then clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    "View"
                  </span>{" "}
                  button in the menu that shows:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    First, select the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Three dots"
                    </span>{" "}
                    icon [It’ll look like this{" "}
                    <span className="text-primary-pheading font-bold">"⋮"</span>
                    ], located on the right side of the User you wish to view.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      "extra options"
                    </span>{" "}
                    menu show.
                  </li>
                  <li>
                    Select the{" "}
                    <span className="text-primary-pheading font-bold">
                      "View"
                    </span>{" "}
                    button, which will be the 1st button in the list, above the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Blocked"
                    </span>{" "}
                    button.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <li>
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      "View User Details"
                    </span>{" "}
                    page of the User you selected.
                  </li>
                    <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                </ol>
                <p className="text-justify mb-4">
                  These are the two methods to viewing a User entry. Both do not
                  have any differences in what details they show. You can also
                  download and edit the user entry you are viewing as well.
                </p>
      </div>
          
              <div className="flex items-center space-x-4 pt-5">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 6
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div></div>
                <div className="lg:pl-10">
                 
                           <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                    Editing a User
                  </h4>
                  <p className="text-justify mb-4">
                    If you want to either update or correct some information of
                    a User, then you can edit the User entry in the table:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-justify">
                    <li>
                      First, select the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Three dots"
                      </span>{" "}
                      icon [It’ll look like this{" "}
                      <span className="text-primary-pheading font-bold">
                        "⋮"
                      </span>
                      ], located on the right side of the User that you want to
                      edit.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      You will then see the{" "}
                      <span className="text-primary-activelink font-bold">
                        "extra options"
                      </span>{" "}
                      menu show.
                    </li>
                    <li>
                      Select the{" "}
                      <span className="text-primary-pheading font-bold">
                        "View"
                      </span>{" "}
                      button, which will be the 1st button in the list, above
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Blocked"
                      </span>{" "}
                      button.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      You will then be taken to the{" "}
                      <span className="text-primary-activelink font-bold">
                        "View User Details"
                      </span>{" "}
                      page of the User you selected.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      Once you are on the{" "}
                      <span className="text-primary-activelink font-bold">
                        "View User"
                      </span>{" "}
                      page of the User you want to edit, you can then select the{" "}
                      <span className="text-primary-pheading font-bold">
                        "Edit [shown as a pencil icon]"
                      </span>{" "}
                      button, located at the top-right corner of the page and
                      below the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Download"
                      </span>{" "}
                      button.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      You will then be taken to the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Edit User"
                      </span>{" "}
                      page.
                    </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  </ol>
                  <p>
                    Here you can change and update any of the fields you need to
                    edit. Once you have made your changes and edits, you can
                    then select the "Submit" button. It will then take you back
                    to the "View User" page of the User you edited so you can
                    review your changes and edits.
                  </p>
                   <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <p className="text-justify mb-4">
                    Now you can either go to the top-right hand of your browser
                    and go into the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Downloads"
                    </span>{" "}
                    section, to view your PDF file, or you can go into the file
                    explorer location where you uploaded the PDF file and open
                    it to view it as well.
                  </p>

                </div>
                 <div className="flex items-center space-x-4 pt-5">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 7
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div></div>
                <div className="lg:pl-10">
 <h4 className="text-lg font-semibold text-primary-activelink font-bold mb-2 text-justify">
                    Downloading a User
                  </h4>
                  <p className="text-justify mb-4">
                    If you wish to download only a specific User and its
                    details, you can do so by:
                  </p>
                  <ol className="list-decimal pl-6 mb-4 text-justify">
                    <li>
                      Locate the User you wish to download the details of,
                      either by browsing for it or searching for it.
                    </li>
                    <li>
                      First, select the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Three dots"
                      </span>{" "}
                      icon [It’ll look like this{" "}
                      <span className="text-primary-pheading font-bold">
                        "⋮"
                      </span>
                      ], located on the right side of the User that you want to
                      download the details of.
                    </li>
                        <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      You will then see the{" "}
                      <span className="text-primary-activelink font-bold">
                        "extra options"
                      </span>{" "}
                      menu show.
                    </li>
                        <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      Select the{" "}
                      <span className="text-primary-pheading font-bold">
                        "View"
                      </span>{" "}
                      button, which will be the 1st button in the list, above
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Blocked"
                      </span>{" "}
                      button.
                    </li>
                    <li>
                      You will then be taken to the{" "}
                      <span className="text-primary-activelink font-bold">
                        "View User Details"
                      </span>{" "}
                      page of the User you selected.
                    </li>
                        <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                    <li>
                      Once you are on the{" "}
                      <span className="text-primary-activelink font-bold">
                        "View User Details"
                      </span>{" "}
                      page of the User you want to download, you can then select
                      the{" "}
                      <span className="text-primary-pheading font-bold">
                        "Download"
                      </span>{" "}
                      button, located at the top-right corner of the page, above
                      the{" "}
                      <span className="text-primary-activelink font-bold">
                        "Edit [shown as a pencil icon]"
                      </span>{" "}
                      button.
                    </li>
                        <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  </ol>
                  <p className="text-justify mb-4">
                    It will then open a file explorer window, asking you where
                    to download the PDF file. The PDF file will contain only the
                    details related to the User you selected for download.
                  </p>
                      <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <p className="text-justify mb-4">
                    When you have found a suitable place for your PDF file, then
                    you can press the{" "}
                    <span className="text-primary-pheading font-bold">
                      "Save"
                    </span>{" "}
                    button, located on the bottom right of your file explorer,
                    so that it saves the PDF file to that folder.
                  </p>
                  <p className="text-justify mb-4">
                    Now you can either go to the top-right hand of your browser
                    and go into the{" "}
                    <span className="text-primary-activelink font-bold">
                      "Downloads"
                    </span>{" "}
                    section, to view your PDF file, or you can go into the file
                    explorer location where you uploaded the PDF file and open
                    it to view it as well.
                  </p>
                      <div className="pl-13 pt-8 flex justify-center">
                  {um && (
                  <GatsbyImage
                    image={um}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                  <p className="text-justify mb-4">
                    Now that you know how to download your User, we have now
                    covered the entire{" "}
                    <span className="text-primary-activelink font-bold">
                      "Manage Users"
                    </span>{" "}
                    page!
                  </p>

                </div>
              </div>
         </div>
    </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default user;
export const Head = () => (
  <>
    <title>ManageUser | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
