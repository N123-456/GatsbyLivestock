import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";
import { getPrimaryContrastColor } from "@mantine/core";

const contact = () => {
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
      contac: file(relativePath: { eq: "contac.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      acontac: file(relativePath: { eq: "acontac.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      bfc: file(relativePath: { eq: "bfc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dcon: file(relativePath: { eq: "dcon.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      delcon: file(relativePath: { eq: "delcon.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          dtcontac: file(relativePath: { eq: "dtcontac.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          con: file(relativePath: { eq: "con.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          sfc: file(relativePath: { eq: "sfc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          vcon: file(relativePath: { eq: "vcon.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
            ps: file(relativePath: { eq: "ps.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
            gtp: file(relativePath: { eq: "gtp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
     const ps = getImage(data.ps);
          const gtp = getImage(data.gtp);
  const contac = getImage(data.contac);
  const dtcontac = getImage(data.dtcontac);
  const econ = getImage(data.econ);
  const sfc = getImage(data.sfc);
  const vcon = getImage(data.vcon);
const delcon = getImage(data.delcon);
const dcon = getImage(data.dcon);
const bfc = getImage(data.bfc);
const acontac = getImage(data.acontac);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify font-montserrat text-[18px] text-primary-paragraph2">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Starting Guide for Contact:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-primary-pheading font-bold">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:pl-10 dark:text-[#D5D5D5]">
                The{" "}
                <span className="text-primary-activelink font-bold">
                  “Contacts”
                </span>{" "}
                page is the central repository for storing and managing contact
                information of relevant individuals or businesses.
              </p>
              <p className="mb-4 lg:pl-10">
                Targeted contacts are mostly{" "}
                <span className="text-primary-pheading font-bold">farmers</span>{" "}
                and{" "}
                <span className="text-primary-pheading font-bold">
                  agricultural business owners
                </span>{" "}
                such as <span className=" font-bold">vendors</span>,{" "}
                <span className=" font-bold">company contacts</span>, etc.
              </p>
              <p className="mb-4 lg:pl-10">
                You can view key contact details displayed within the{" "}
                <span className="text-primary-activelink font-bold">
                  Contacts Table
                </span>{" "}
                such as the{" "}
                <span className="text-primary-pheading font-bold">name</span>,{" "}
                <span className="text-primary-pheading font-bold">company</span>
                , <span className="text-primary-pheading font-bold">email</span>
                ,{" "}
                <span className="text-primary-pheading font-bold">
                  phone number
                </span>
                ,{" "}
                <span className="text-primary-pheading font-bold">address</span>
                , and{" "}
                <span className="text-primary-pheading font-bold">
                  designation
                </span>
                . You can add, delete, edit, search, and also view contacts as
                well.
              </p>

              <div className="pl-13 pt-8 flex justify-center">
                {contac && (
                  <GatsbyImage
                    image={contac}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Contact
                </h2>
                <p className="mb-4">
                  For adding a Contact, you first need to have a set of items
                  ready, so that there will not be any issues throughout the
                  process:
                </p>
                <p className="mb-4">
                  You need to have the contact information of the{" "}
                  <span className=" font-bold">vendor</span>, or{" "}
                  <span className=" font-bold">employee</span> ready and present
                  as every detail needs to be added in.
                </p>
                <p className="mb-4">
                  Now, once you have the required items ready, you can continue
                  to making a Contact entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">To add a Contact, you first start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className=" font-bold">“’+’ Add New”</span> button,
                    located on the top-left corner of the page, to the top of
                    the search options.
                  </li>
                </ol>
                <div className="pl-13 pt-8 flex justify-center">
                  {acontac && (
                    <GatsbyImage
                      image={acontac}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New Contact”
                  </span>{" "}
                  page.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div> */}
                <p className="mb-4">
                  Please keep in mind, all the fields in the single step must be
                  filled properly.
                </p>
                <p className="mb-4">
                  Now, let us begin with the first and only step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contact Information”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contact Information”
                  </span>{" "}
                  step is where you enter all the relevant and required contact
                  information of the contact you intend to keep in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Full Name”
                    </span>{" "}
                    field: Enter in the full name of the contact that you are
                    adding. Please make sure to include their first name, middle
                    name, and last name when entering it in.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Email”
                    </span>{" "}
                    field: Enter in the email address of the contact. If they do
                    not have an email address, you may skip this field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Phone Number”
                    </span>{" "}
                    field: Enter in the phone number of the contact you are
                    adding. Please enter it in this format:{" "}
                    <span className=" font-bold">
                      [03ZX][phone number of contact]
                    </span>
                    , for e.g. <span className=" font-bold">03330122333</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Alternate Number (if any)”
                    </span>{" "}
                    field: Enter in the alternate phone number of the contact if
                    they have one. You may skip this step if they do not have an
                    alternate number. Please enter it in this format:{" "}
                    <span className=" font-bold">
                      “[03ZX][phone number of contact]”
                    </span>
                    , for e.g. <span className=" font-bold">03330122333</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Designation”
                    </span>{" "}
                    field: Enter in what the contact’s relation and works are to
                    the farm operation that you are running. For example, if
                    they are a Market contact for seeds and grafted saplings,
                    you can enter{" "}
                    <span className=" font-bold">
                      “Seeds and Saplings Provider”
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Role”
                    </span>{" "}
                    field: Enter in what role does the contact play in the
                    overall farm operation that you are running. Please select 1
                    of 10 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>Accountant</li>
                      <li>Admin Executive</li>
                      <li>Auditor</li>
                      <li>Customer</li>
                      <li>Driver</li>
                      <li>Farm Worker</li>
                      <li>Manager</li>
                      <li>Vendor</li>
                      <li>Watchman</li>
                      <li>Worker</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Organization/Company”
                    </span>{" "}
                    field: Enter in the company or organization name that the
                    contact works under.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Province”
                    </span>{" "}
                    field: Enter in where your contact’s shop or workplace is
                    located in terms of Provincial domain.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Division”
                    </span>{" "}
                    field: Enter in where your contact’s shop or workplace is
                    located, in terms of which Division of the Province.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “District”
                    </span>{" "}
                    field: Enter in where your contact’s shop or workplace is
                    located, in terms of which District of the Division.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tehsil”
                    </span>{" "}
                    field: Enter in where your contact’s shop or workplace is
                    located, in terms of which Tehsil of the District.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Address”
                    </span>{" "}
                    field: Enter in the full address of your contact’s shop or
                    workplace.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Postal Code”
                    </span>{" "}
                    field: Enter in the postal code of the contact’s shop or
                    workplace location.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Bank Name”
                    </span>{" "}
                    field: Enter in the name of the Bank that will act as a
                    payment method for the contact. When you type the name of
                    the bank, the result will show the closest name that is
                    within the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Account Number”
                    </span>{" "}
                    field: Enter in the account number that will act as a
                    payment method for the contact.
                  </li>
                  <li className="mb-2">
                    The <span className=" font-bold">“’+’ Add more”</span>{" "}
                    button: It will add 2 extra fields, which will be an
                    additional{" "}
                    <span className="text-primary-activelink font-bold">
                      “Bank Name”
                    </span>{" "}
                    and{" "}
                    <span className="text-primary-activelink font-bold">
                      “Account Name”
                    </span>{" "}
                    field, if there is an additional payment method.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className=" font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contacts”
                  </span>{" "}
                  page with your Contact entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contacts table
                  </span>
                  !
                </p>
                <p className="mb-4">
                  Now that you have covered how to add a Contact entry into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let’s now check out the other features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contacts”
                  </span>{" "}
                  page.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {contac && (
                    <GatsbyImage
                      image={contac}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Contacts Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add a Contact into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contacts Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Contact
                </h3>
                <p className="mb-4">
                  You can browse through the Table to find the Contact entry you
                  want using the{" "}
                  <span className=" font-bold">page options</span>.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the{" "}
                  <span className=" font-bold">page options</span>:
                </p>
                <p className="mb-4">
                  The <span className=" font-bold">page options</span> are
                  located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contact table
                  </span>
                  .
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {bfc && (
                    <GatsbyImage
                      image={bfc}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Total number of records”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Records per page option”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Page select”
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Go to page search”
                  </span>
                  .
                </p>
                <p className="mb-4">Let’s go through them one by one:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    : This shows a number of how many Contact entries are there
                    in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Contact table
                    </span>
                    , above the page select options, and is on the bottom left
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many Contact
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Contacts table
                    </span>
                    , above the page select options, and is to the bottom right
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Page select options
                    </span>
                    : It shows which page you are currently in (The default is
                    the 1st page). It gives you buttons for the next five pages
                    after which it gives you the button to the last page. You
                    can also move to the previous page using the left arrow
                    button, located on the left side, or to the next page using
                    the right arrow button located on the right side. Located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Contacts table
                    </span>
                    , the{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page
                    </span>
                    , and is on the bottom middle of the page.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {ps && (
                      <GatsbyImage
                        image={ps}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg"
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the Contacts you are
                    looking for is and hit enter. It will then open the page
                    with the page number shown as well.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {gtp && (
                      <GatsbyImage
                        image={gtp}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg"
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className=" font-bold">page options</span> as a way of
                  finding a Contact or a collection of Contacts.
                </p>
                <p className="mb-4">
                  There is an alternative way of finding a Contact, by using the{" "}
                  <span className=" font-bold">search options</span>...
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching for Contact
                </h3>
                <p className="mb-4">
                  You can search for a Contact from the table of Contacts
                  present in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . You can locate the{" "}
                  <span className=" font-bold">search options</span> as they are
                  underneath the{" "}
                  <span className=" font-bold">“’+’ Add New”</span> button and
                  above the table.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {sfc && (
                    <GatsbyImage
                      image={sfc}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Name of Contact”
                    </span>{" "}
                    search: You can search for the contact and its information
                    you are looking for by the name of the Contact you set when
                    adding it.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Phone number of Contact”
                    </span>{" "}
                    search: You can search for the contact and its information
                    you are looking for by the phone number of the contact.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Role of Contact”
                    </span>{" "}
                    search: You can search for the contact and its information
                    you are looking for by the role the contact plays in your
                    farm operation.
                  </li>
                </ul>
                <p className="mb-4">
                  Then click on the <span className=" font-bold">“Search”</span>{" "}
                  button, located on the far-right of the page, to the right of
                  the <span className=" font-bold">“Download Table”</span>{" "}
                  button and to the left of the{" "}
                  <span className=" font-bold">“Refresh data”</span> button.
                </p>
                <p className="mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contacts table
                  </span>{" "}
                  update with only the search options you typed or selected in
                  the search bar.
                </p>
                <p className="mb-4">
                  Also, you can click on the{" "}
                  <span className=" font-bold">“Refresh data”</span> button to
                  refresh the data. It is highlighted as a red button with an{" "}
                  <span className="text-primary-pheading font-bold">
                    “arrow pointing back”
                  </span>{" "}
                  icon.
                </p>
                <p className="mb-4">
                  Now those are the{" "}
                  <span className=" font-bold">search options</span>! You can
                  now search for a specific Contact or filter the table for a
                  set of Contact entries. You can also use the{" "}
                  <span className=" font-bold">search options</span> as a filter
                  so that you can{" "}
                  <span className=" font-bold">“Download Table”</span> specific
                  Contact entries to use later.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                {" "}
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Contacts Table
                </h3>
                <p className="mb-4">
                  If you want to have a set of Contacts or the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    Contacts table
                  </span>{" "}
                  in the table within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>{" "}
                  on a PDF downloaded, you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you can use the search to filter the table for
                    specific Contacts that you want to download, otherwise if
                    you want to download the entire table, leave the search
                    options as it is and go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      records per page count
                    </span>{" "}
                    and set it to the highest number you can set.
                  </li>
                  <li className="mb-2">
                    Next, you can select the{" "}
                    <span className=" font-bold">“Download Table”</span> button
                    located on the far-right of the page, to the left of the{" "}
                    <span className=" font-bold">“Search”</span> button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                </ol>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  This file contains the current view of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contacts table
                  </span>{" "}
                  and their details.
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className=" font-bold">“Save”</span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Downloads
                  </span>{" "}
                  section, to view your PDF file, or you can go into the file
                  explorer location where you uploaded the PDF file and open it
                  to view it as well.
                </p>
                {/* <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Contact
                </h3>
                <p className="mb-4">
                  You can view a Contact entry within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>{" "}
                  and confirm the extra details about the information you
                  entered. There are currently 2 methods to viewing a Contact
                  entry in the table.
                </p>
                <p className="mb-4">Here is how you can view a Contact:</p>
                <p className="mb-4">
                  The first method to viewing a Contact entry in the table, is
                  just by selecting the{" "}
                  <span className="text-primary-activelink font-bold">
                    Full name
                  </span>{" "}
                  of the Contact you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Full name”
                    </span>{" "}
                    of the Contact you want to view.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vcon && (
                      <GatsbyImage
                        image={vcon}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ol>
                <p className="mb-4">
                  You will then be taken to a{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Contact”
                  </span>{" "}
                  page of the Contact you selected.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  The second method to view a Contact entry in the table, is
                  just by selecting the{" "}
                  <span className=" font-bold">“Three dots”</span> icon, then
                  clicking the{" "}
                  <span className=" font-bold">“View Details”</span> button in
                  the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className=" font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className=" font-bold">“⋮“</span>],
                    located on the right side of the Contact you wish to view.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className=" font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className=" font-bold">“View”</span>{" "}
                    button, which will be the only button in the list.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Contact”
                  </span>{" "}
                  page of the Contact you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {vcon && (
                    <GatsbyImage
                      image={vcon}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  These are the two methods to viewing a Contact entry. Both do
                  not have any differences in what details they show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the contact entry you
                  are viewing as well.
                </p>
                <p className="mb-4">
                  Now that you know how to view a contact, let us now check out
                  how to edit a contact.
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 6
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Contact
                </h3>
                <p className="mb-4">
                  If you want to either update or correct some information of a
                  Contact then you can edit the Contact entry in the table.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className=" font-bold">“three dots”</span> icon [It’ll
                    look like this <span className=" font-bold">“⋮“</span>],
                    located on the right side of the Contact that you want to
                    edit.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {econ && (
                      <GatsbyImage
                        image={econ}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className=" font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className=" font-bold">“View”</span>{" "}
                    button, which will be the only button in the list.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vcon && (
                      <GatsbyImage
                        image={vcon}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you want to edit, you can then select
                    the{" "}
                    <span className=" font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button, located at the top-right corner of the page, below
                    the <span className=" font-bold">“Download”</span> button
                    and to the left of the{" "}
                    <span className=" font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Contact”
                  </span>{" "}
                  page.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {econ && (
                    <GatsbyImage
                      image={econ}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  Here you can change and update any of the fields you need to
                  edit.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className=" font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Contact”
                  </span>{" "}
                  page of the Contact you edited so you can review your changes
                  and edits.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  Now that you know how to edit your Contact, now let’s check
                  out how to download your Contact.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 7
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Contact
                </h3>
                <p className="mb-4">
                  If you wish to download only a specific Contact and its
                  details, you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Next, locate the Contact you wish to download the details
                    of, either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    First, select the{" "}
                    <span className=" font-bold">“three dots”</span> icon [It’ll
                    look like this <span className=" font-bold">“⋮“</span>],
                    located on the right side of the Contact that you want to
                    download the details of.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dcon && (
                      <GatsbyImage
                        image={dcon}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className=" font-bold">“extra options”</span> menu
                    show.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    Select the <span className=" font-bold">“View”</span>{" "}
                    button, which will be the only button in the list.
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you want to download, you can then
                    select the <span className=" font-bold">“Download”</span>{" "}
                    button, located at the top-right corner of the page, above
                    both the{" "}
                    <span className=" font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button and the{" "}
                    <span className=" font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  The PDF file will contain only the details related to the
                  Contact you selected for download.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className=" font-bold">“Save”</span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Downloads
                  </span>{" "}
                  section, to view your PDF file, or you can go into the file
                  explorer location where you uploaded the PDF file and open it
                  to view it as well.
                </p>
                {/* <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {cont && (
                    <GatsbyImage
                      image={cont}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  Now that you know how to download your Contact, now let’s
                  check out how to delete your Contact.
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 8
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Contact
                </h3>
                <p className="mb-4">
                  If you want to delete a Contact from the table within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  , you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className=" font-bold">“three dots”</span> icon [It’ll
                    look like this <span className=" font-bold">“⋮“</span>],
                    located on the right side of the Contact that you want to
                    delete.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {delcon && (
                      <GatsbyImage
                        image={delcon}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className=" font-bold">“extra options”</span> menu
                    show.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    Click the <span className=" font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vcon && (
                      <GatsbyImage
                        image={vcon}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Contact”
                    </span>{" "}
                    page of the Contact you want to delete, you can then select
                    the{" "}
                    <span className=" font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button located at the top-right corner of the page, below
                    the <span className=" font-bold">“Download”</span> button
                    and to the right of the{" "}
                    <span className=" font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    A dialogue box will appear to confirm whether you want to
                    delete the Contact or not.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {cont && (
                      <GatsbyImage
                        image={cont}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    Then click the <span className=" font-bold">“Delete”</span>{" "}
                    button in the dialogue box to confirm.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contact”
                  </span>{" "}
                  page where the Contact entry will then be deleted from the
                  table.
                </p>
                <p className="mb-4">
                  Now that we have shown how to delete an entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Contact table
                  </span>
                  , we have now covered the main features in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Contact”
                  </span>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default contact;

export const Head = () => (
  <>
    <title>Contact | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
