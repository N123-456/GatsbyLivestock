import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

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
      cont: file(relativePath: { eq: "cont.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      anc: file(relativePath: { eq: "anc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      sc: file(relativePath: { eq: "sc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dc: file(relativePath: { eq: "dc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vc: file(relativePath: { eq: "vc.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const cont = getImage(data.cont);
  const anc = getImage(data.anc);
  const sc = getImage(data.sc);
  const dc = getImage(data.dc);
  const vc = getImage(data.vc);

  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu  lg:pr-4 text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Starting Guide for Contact:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                Contacts are the central repository for storing and managing
                contact information of relevant individuals or businesses.
                Targeted contacts are mostly farmers and agricultural business
                owners. Key contact details are displayed within the Contacts
                Grid: name, company, email, phone number, address, and
                designation. You can add, delete, edit, search and view
                contacts.
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

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat  lg:pl-10 dark:text-[#D5D5D5]">
                Add New Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                <p>For adding a new contact</p>
                Click on{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  "Add New"
                </span>{" "}
                button.
                <p>Contact form will open</p>
                <p>Fill out the required details. The details of fields are:</p>
                <p>
                  Click on the three dots against the machinery you want to add
                  maintenance record..
                </p>
                <p>
                  Click on{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    "Maintenance"
                  </span>{" "}
                  button
                </p>
                <p>Enter the required details:</p>
                <br />
                <ul>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Full Name:
                    </span>{" "}
                    Name of the contact.{" "}
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Email:
                    </span>
                    Email Address of the contact.{" "}
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Contact Number:
                    </span>
                    Contact Number of the person{" "}
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Alternative No:
                    </span>
                    It is an optional field. If user has any alternative number,
                    you can enter.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Designation:
                    </span>
                    At which designation, the person is at the company/
                    organization.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Role:
                    </span>
                    Role of the contact related to your farm. The roles can be.
                  </li>
                  <ul className="text-primary-paragraph2 dark:text-[#D5D5D5]">
                    <li>
                      <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        Auditor:
                      </span>{" "}
                      Reviews and verifies the accuracy of financial records and
                      system operations.
                    </li>
                    <li>
                      <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        Vendor:
                      </span>{" "}
                      Provides goods or services and interacts with the system
                      to manage orders and invoices.
                    </li>
                    <li>
                      <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        Manager:
                      </span>{" "}
                      Oversees system operations, tasks, and team activities to
                      ensure smooth workflow.
                    </li>
                  </ul>
                  <br />
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Organization/Company:
                    </span>
                    Name of the organization in which the person works in.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Address Details:
                    </span>
                    Address of the person. Address details include:
                  </li>
                  <br />{" "}
                  <ul className="text-primary-activelink font-bold list-disc dark:text-[#D5D5D5]">
                    <li>Province</li>
                    <li>Division</li>
                    <li>District</li>
                    <li>Tehsil</li>
                    <li>Address (Exact Address)</li>
                    <li>Postal Code</li>
                  </ul>
                </ul>
                <br />
                <p>Click on the submit button</p>
                <p>New Contact will be created</p>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {anc && (
                  <GatsbyImage
                    image={anc}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Search Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                You can search the contact from the list of contacts present in
                the system. You can search based on either:
                <br />
                <ul>
                  <li>
                    <p>
                      <span className="text-primary-pheading font-bold">
                        Name:
                      </span>{" "}
                      You can search by the name of contact.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-primary-pheading font-bold">
                        Contact No:
                      </span>{" "}
                      You can search by the contact no of the contact.
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="text-primary-pheading font-bold">
                        Role:
                      </span>{" "}
                      You can search by the role of the user which can be:
                      <ul className="text-primary-activelink font-bold list-disc dark:text-[#D5D5D5]">
                        <li>Vendor</li>
                        <li>Manager</li>
                        <li>Auditor</li>
                      </ul>
                    </p>
                  </li>

                  <br />
                  <p>
                    Then click on the Search button. Also, you can click on the
                    refresh button to refresh the data.
                  </p>
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {sc && (
                      <GatsbyImage
                        image={sc}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                </ul>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Edit Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                If any contacts details you want to change, you can easily edit
                the details. For that:
                <br />
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  <li>Click on the edit icon</li>
                  <li>Contact details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>Contact details will be edited/updated successfully.</li>
                </ul>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line "></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Delete Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                If you no longer need any contact and wants to delete the
                contact, you can easily do so.
                <br />
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  <li>
                    Click on the delete icon against the row you want to delete
                    in the contact’s table.
                  </li>
                  <li>
                    A dialogue box will appear to confirm whether you want to
                    delete or not.
                  </li>
                  <li>Click on delete button.</li>
                  <li>Contact will be deleted successfully.</li>
                </ul>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {dc && (
                  <GatsbyImage
                    image={dc}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                View Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                You can easily view the details of users. For that:
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  <li>Hover on three dots.</li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Contact details page will open.</li>
                  <li>
                    Click on print button if you want to print the details of
                    the contact.
                  </li>
                </ul>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {vc && (
                  <GatsbyImage
                    image={vc}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
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
