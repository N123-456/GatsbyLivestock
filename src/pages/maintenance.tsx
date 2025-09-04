import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const maintenance = () => {
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
       maint: file(relativePath: { eq: "maint.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       aaww: file(relativePath: { eq: "aaww.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       bfm: file(relativePath: { eq: "bfm.png" }) {
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
       sfmain: file(relativePath: { eq: "sfmain.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       vmaint: file(relativePath: { eq: "vmaint.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       few: file(relativePath: { eq: "few.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       emain: file(relativePath: { eq: "emain.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       mp: file(relativePath: { eq: "mp.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       delmain: file(relativePath: { eq: "delmain.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
       eae: file(relativePath: { eq: "eae.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
           dae: file(relativePath: { eq: "dae.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
           main: file(relativePath: { eq: "main.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
              db: file(relativePath: { eq: "db.png" }) {
         childImageSharp {
           gatsbyImageData(placeholder: BLURRED)
         }
       }
     }
   `);
   const maint = getImage(data.maint);
   const aaww = getImage(data.aaww);
   const bfm = getImage(data.bfm);
   const dae = getImage(data.dae);
   const dele = getImage(data.dele);
   const dtm = getImage(data.dtm);
   const eae = getImage(data.eae);
   const  delmain = getImage(data. delmain);
   const sfmain = getImage(data.sfmain);
   const mp= getImage(data.mp);
   const vmaint = getImage(data.vmaint);
   const emain = getImage(data.emain);
    const db = getImage(data.db);
     const gtp = getImage(data.gtp);
      const ps = getImage(data.ps);
       const few = getImage(data.few);


  const main = getImage(data.main);


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
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Farm Maintenance:
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

              <div className=" dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10 ">
                <p className="mb-4">
                  The Maintenance of an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  involves regular checks, repairs, and servicing to ensure the
                  equipment works efficiently and lasts longer.
                </p>
                <p className="mb-4">
                  This includes cleaning, lubricating moving parts, checking for
                  wear and tear, and replacing worn-out components. It's
                  important to follow the{" "}
                  <span className="font-bold">manufacturer's guidelines</span>{" "}
                  for maintenance schedules and procedures. Preventive
                  maintenance helps reduce unexpected breakdowns and costly
                  repairs.
                </p>
                <p className="mb-4">
                  Operators and technicians should be trained to identify signs
                  of potential issues early. Regular inspections can detect
                  problems like leaks, unusual sounds, or vibrations.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  should also be calibrated and tested periodically for optimal
                  performance. Maintenance records should be kept for tracking
                  repairs and updates. By maintaining your equipment well,
                  businesses can reduce downtime and improve productivity.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  Page is where you can manage and track your repairs and
                  services done to your{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Machinery
                  </span>
                  ,{" "}
                  <span className="text-primary-pheading font-bold">Tools</span>
                  , and{" "}
                  <span className="text-primary-pheading font-bold">
                    Vehicles
                  </span>{" "}
                  efficiently.
                </p>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {maint && (
                  <GatsbyImage
                    image={maint}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Maintenance
                </h2>
                <p className="mb-4">
                  For adding a Maintenance, you first need to have a set of
                  items ready, so that there will not be any issues throughout
                  the process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have a{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that is set on the Farm location, where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    is parked. That Warehouse must also have an adequate amount
                    of space for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking slot
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You need to make sure you have the{" "}
                    <span className="text-primary-pheading font-bold">
                      Vehicle
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Tool
                    </span>
                    , or{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery
                    </span>{" "}
                    added to the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    , in order to access the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    page.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you fulfill all the required items ready, you can
                  continue to making an Equipment entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">To add an Equipment, you first start by:</p>
                <p className="mb-4">
                  First, you need to open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you want to add a Maintenance to.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you wish to view.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {aaww && (
                  <GatsbyImage
                    image={aaww}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button, which will be third on the list, located below the{" "}
                    <span className="font-bold">“View Details”</span> button and
                    above the <span className="font-bold">“Track Usage”</span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  Now that you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  . Let us now add a Maintenance.
                </p>
                <p className="mb-4">
                  Now keep in mind that there are two types of Maintenance that
                  you can add to the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Repair”
                    </span>{" "}
                    Maintenance.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Wash”
                    </span>{" "}
                    Maintenance.
                  </li>
                </ul>
                <p className="mb-4">
                  We will show you how to add either of these Maintenance’s.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“’+’ Add Maintenance”</span>{" "}
                    button, located on the top-left corner of the page and above
                    the search options.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New Maintenance”
                  </span>{" "}
                  page.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </p>
                <p className="mb-4">
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type of Timing for Maintenance”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type of Timing for Maintenance”
                  </span>{" "}
                  step is where you enter the type of timing that the
                  maintenance for the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , whether it was a scheduled or unscheduled.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Un-scheduled”
                    </span>{" "}
                    option: If you select this option, then you are adding an
                    unscheduled{" "}
                    <span className="text-primary-activelink font-bold">
                      “Repair”
                    </span>{" "}
                    maintenance of the equipment. These Fields will show in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unscheduled Maintenance of Equipment”
                    </span>{" "}
                    step.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Scheduled”
                    </span>{" "}
                    option: If you select this option, then you are adding a
                    scheduled{" "}
                    <span className="text-primary-activelink font-bold">
                      “Repair”
                    </span>{" "}
                    maintenance of the equipment. These Fields will show in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Scheduled Maintenance of Equipment”
                    </span>{" "}
                    step.
                  </li>
                </ul>
                <p className="mb-4">The fields for both options include:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Type”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Equipment Name”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Start Date”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “End Date”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Performed By”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Cost”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head Of Accounts”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Account No.”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Expected Next Maintenance Date”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Issue Reported”
                    </span>{" "}
                    field (only for{" "}
                    <span className="text-primary-activelink font-bold">
                      “Un-scheduled”
                    </span>
                    )
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Resolution Action”
                    </span>{" "}
                    field (only for{" "}
                    <span className="text-primary-activelink font-bold">
                      “Un-scheduled”
                    </span>
                    )
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Description”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Available Quantity”
                    </span>{" "}
                    field
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory Quantity Used”
                    </span>{" "}
                    field
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the second step, which depending on which option you
                  chose earlier will either be the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Unscheduled Maintenance of Equipment”
                  </span>{" "}
                  step or the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Scheduled Maintenance of Equipment”
                  </span>{" "}
                  step:
                </p>
                <p className="mb-4">
                  If you chose the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Un-scheduled”
                  </span>{" "}
                  option earlier, then you will get the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Unscheduled Maintenance of Equipment”
                  </span>{" "}
                  step.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Unscheduled Maintenance of Equipment”
                  </span>{" "}
                  step is where you enter what the unscheduled maintenance was
                  for, how long did it take, if issues were found with the
                  equipment, then what was found, how was it resolved and
                  finally if a service was also done, then what Inventory item
                  was used for the service as well as its use.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Type”
                    </span>{" "}
                    field: Enter in the type of Maintenance service was done on
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    . Please select 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Repair
                        </span>
                        : Please select this if an unscheduled repair was done
                        on the{" "}
                        <span className="text-primary-pheading font-bold">
                          Equipment
                        </span>
                        . This will be important later.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Wash
                        </span>
                        : Please select this if an unscheduled wash was done on
                        the{" "}
                        <span className="text-primary-pheading font-bold">
                          Equipment
                        </span>
                        . This will be important later.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Equipment Name”
                    </span>{" "}
                    field: This is a non-editable field, which has an already
                    entered name of the equipment that you selected for adding a
                    Maintenance.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Start Date”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment’s
                    </span>{" "}
                    Maintenance began.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “End Date”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment’s
                    </span>{" "}
                    Maintenance ended.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Performed By”
                    </span>{" "}
                    field: Enter in the name of the contact or vendor that
                    performed the maintenance. It will show a list of contacts
                    that you entered into the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Cost”
                    </span>{" "}
                    field: Enter in the cost of the Maintenance service in
                    rupees.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head Of Accounts”
                    </span>{" "}
                    field: Enter in how the payment was done and if it has been
                    paid or received. Please choose 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Payable
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Receivable
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter in the Cheque No. or Transaction ID of the
                    payment for the Maintenance service.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Account No.”
                    </span>{" "}
                    field: Enter in the Bank’s account number that was used for
                    the payment for the Maintenance. It will show a list of
                    Bank’s and their account number.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Expected Next Maintenance Date”
                    </span>{" "}
                    field: Enter in the date and time of when the next
                    maintenance time would be done for the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Issue Reported”
                    </span>{" "}
                    field: Enter in the description of the Issues that were
                    found on the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    , whether it was under a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Wash”
                    </span>{" "}
                    Maintenance or{" "}
                    <span className="text-primary-activelink font-bold">
                      “Repair”
                    </span>{" "}
                    Maintenance.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Resolution Action”
                    </span>{" "}
                    field: Enter in the description of how or whether the Issues
                    were resolved, whether it was under a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Wash”
                    </span>{" "}
                    Maintenance or{" "}
                    <span className="text-primary-activelink font-bold">
                      “Repair”
                    </span>{" "}
                    Maintenance.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Description”
                    </span>{" "}
                    field: Enter in the description of the service that was done
                    on the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    field: Enter in the Inventory item that was used for the
                    service of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    , described in the Service Description.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Available Quantity”
                    </span>{" "}
                    field: This is a non-editable field, which shows how much
                    available quantity was used for the service of the
                    equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory Quantity Used”
                    </span>{" "}
                    field: Enter in the amount of quantity that was used of the
                    Inventory item during the service.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure to fill all the required fields before
                  continuing.
                </p>
                <p className="mb-4">
                  If you chose the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Scheduled”
                  </span>{" "}
                  option earlier, then you will get the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Scheduled Maintenance of Equipment”
                  </span>{" "}
                  step.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Scheduled Maintenance of Equipment”
                  </span>{" "}
                  step is where you enter what the unscheduled maintenance was
                  for, how long did it take, when is the next scheduled
                  maintenance, and finally if a service was also done, then what
                  Inventory item was used for the service as well as its use.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Type”
                    </span>{" "}
                    field: Enter in the type of Maintenance service was done on
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    . Please select 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Repair
                        </span>
                        : Please select this if an unscheduled repair was done
                        on the{" "}
                        <span className="text-primary-pheading font-bold">
                          Equipment
                        </span>
                        . This will be important later.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Wash
                        </span>
                        : Please select this if an unscheduled wash was done on
                        the{" "}
                        <span className="text-primary-pheading font-bold">
                          Equipment
                        </span>
                        . This will be important later.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Equipment Name”
                    </span>{" "}
                    field: This is a non-editable field, which has an already
                    entered name of the equipment that you selected for adding a
                    Maintenance.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Start Date”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment’s
                    </span>{" "}
                    Maintenance began.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “End Date”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment’s
                    </span>{" "}
                    Maintenance ended.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Performed By”
                    </span>{" "}
                    field: Enter in the name of the contact or vendor that
                    performed the maintenance. It will show a list of contacts
                    that you entered into the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Cost”
                    </span>{" "}
                    field: Enter in the cost of the Maintenance service in
                    rupees.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head Of Accounts”
                    </span>{" "}
                    field: Enter in how the payment was done and if it has been
                    paid or received. Please choose 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Payable
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Receivable
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter in the Cheque No. or Transaction ID of the
                    payment for the Maintenance service.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Account No.”
                    </span>{" "}
                    field: Enter in the Bank’s account number that was used for
                    the payment for the Maintenance. It will show a list of
                    Bank’s and their account number.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Expected Next Maintenance Date”
                    </span>{" "}
                    field: Enter in the date and time of when the next
                    maintenance time would be done for the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service Description”
                    </span>{" "}
                    field: Enter in the description of the service that was done
                    on the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    field: Enter in the Inventory item that was used for the
                    service of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    , described in the Service Description.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Available Quantity”
                    </span>{" "}
                    field: This is a non-editable field, which shows how much
                    available quantity was used for the service of the
                    equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory Quantity Used”
                    </span>{" "}
                    field: Enter in the amount of quantity that was used of the
                    Inventory item during the service.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Please make sure that the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment’s
                  </span>{" "}
                  Maintenance and service type are accurately entered as this
                  will affect how it will appear in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  table.
                </p>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page with your Maintenance entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  table!
                </p>
                <p className="mb-4">
                  Please keep in mind, that if you chose the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Repair”
                  </span>{" "}
                  option in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Service type”
                  </span>{" "}
                  field, then the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  table will show it as a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Repair”
                  </span>{" "}
                  Maintenance entry.
                </p>
                <p className="mb-4">
                  Otherwise, if you chose the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Wash”
                  </span>{" "}
                  option in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Service type”
                  </span>{" "}
                  field, then the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  table will show it as a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Wash”
                  </span>{" "}
                  Maintenance entry.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Now that you have covered how to add a Maintenance entry into{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>.
                  Let’s now check out the other features of the Maintenance page
                  of an equipment, starting with the Dashboard!
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Maintenance Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add a Maintenance to an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Maintenance Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Maintenance
                </h3>
                <p className="mb-4">
                  You can browse through the Table to find the Maintenance entry
                  you want using the{" "}
                  <span className="font-bold">page options</span>.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the{" "}
                  <span className="font-bold">page options</span>:
                </p>
                <p className="mb-4">
                  The <span className="font-bold">page options</span> are
                  located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    Maintenance table
                  </span>
                  .
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                {bfm && (
                  <GatsbyImage
                    image={bfm}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

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
                    : This shows a number of how many Equipment entries are
                    there in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Maintenance table
                    </span>
                    , above the page select options, and is on the bottom left
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many
                    Maintenance entries you want to see in one page. The default
                    is set to 5. The options are 5, 10, 50, and 100. It is
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Maintenance table
                    </span>
                    , above the page select options, and is to the bottom right
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

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
                      Maintenance table
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
                    className="border border-gray-200 "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you are looking for is and hit enter. It will then open the
                    page with the page number shown as well.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {gtp && (
                  <GatsbyImage
                    image={gtp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg "
                  />
                )}
              </div><br/><br/>

                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  or a collection of Equipments.
                </p>
                <p className="mb-4">
                  There is an alternative way of finding an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , by using the{" "}
                  <span className="font-bold">search options</span>…
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching for Maintenance
                </h3>
                <p className="mb-4">
                  You can search for a specific Maintenance of an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , as long as you know the name of the Maintenance, the service
                  that was done, or both. You can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> [shown as{" "}
                    <span className="font-bold">“⋮”</span> icon] button, located
                    to the right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you wish to view and search the Maintenance of. A small
                    white box will show up with a list of options you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {sfmain && (
                  <GatsbyImage
                    image={sfmain}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="font-bold">“View Details”</span> button and
                    above the <span className="font-bold">“Track Usage”</span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  It will take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  Page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  Then, find the Search options of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page. It is located under the{" "}
                  <span className="font-bold">“’+’ Add Maintenance”</span>{" "}
                  button and the{" "}
                  <span className="font-bold">“Download Table”</span> button.
                </p>
                <p className="mb-4">
                  Provided below is where the search options are:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">You can search only based on:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Service”
                    </span>{" "}
                    search: You can search for a Maintenance by the type of
                    service the equipment was given when adding it. Please
                    select 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Repair
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Wash
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Equipment Name”
                    </span>{" "}
                    search: You can search for a Maintenance by the name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    that was set when adding it.
                  </li>
                </ul>
                <p className="mb-4">
                  Then click on the <span className="font-bold">“Search”</span>{" "}
                  button, located on the far-right of the page, to the left of
                  the <span className="font-bold">“Refresh data”</span> button.
                </p>
                <p className="mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Maintenance table
                  </span>{" "}
                  update with only the name of the Maintenance you typed in the
                  search bar.
                </p>
                <p className="mb-4">
                  Also, you can click on the{" "}
                  <span className="font-bold">“Refresh data”</span> button to
                  refresh the data. It is highlighted as a red button with an{" "}
                  <span className="text-primary-pheading font-bold">
                    “arrow pointing back”
                  </span>{" "}
                  icon.
                </p>
                <p className="mb-4">
                  Now those are the{" "}
                  <span className="font-bold">search options</span>! You can now
                  search for a specific Maintenance or filter the table for a
                  set of Maintenance. You can also use the{" "}
                  <span className="font-bold">search options</span> as a filter
                  so that you can{" "}
                  <span className="font-bold">“Download Table”</span> specific
                  Maintenance entries to use later.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Maintenance
                </h3>
                <p className="mb-4">
                  You can view the Maintenance entry and see its details as well
                  as perform actions on the Maintenance within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here is how you can view a Maintenance entry in an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  :
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> [shown as{" "}
                    <span className="font-bold">“⋮”</span> icon] button located
                    to the right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you want to view the Maintenance of. A small white box will
                    show up with a list of options you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {vmaint && (
                  <GatsbyImage
                    image={vmaint}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="font-bold">“View Details”</span> button and
                    above the <span className="font-bold">“Track Usage”</span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  It will take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  Here are 2 methods to viewing a Maintenance entry in{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>:
                </p>
                <p className="mb-4">
                  The first method to viewing a Maintenance entry in the table,
                  is just by selecting the name of the equipment that underwent
                  the Maintenance you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the name of the equipment that underwent the
                    Maintenance you want to view.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to a{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page of the Maintenance you selected.
                </p>
                <p className="mb-4">
                  The second method to view a Maintenance entry in the table, is
                  just by selecting the{" "}
                  <span className="font-bold">“more options”</span> icon, then
                  selecting the <span className="font-bold">“view”</span> button
                  in the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the Maintenance you wish to
                    view.
                  </li>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page of the Maintenance you selected.
                </p>
                <p className="mb-4">
                  These are the two methods to viewing a Maintenance entry in an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  . Both do not have any differences in what details they show.
                </p>
                <p className="mb-4">
                  You can check any extra details that is associated with the
                  Maintenance and check if you need to update the Maintenance
                  application on the farm.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the Maintenance entry
                  you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that we have covered how to view a Maintenance entry of an
                  equipment, we can now cover how to edit a Maintenance from the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Maintenance
                </h3>
                <p className="mb-4">
                  Within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page, you can also edit the Maintenance details shown on the
                  page.
                </p>
                <p className="mb-4">You can do so by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> [shown as{" "}
                    <span className="font-bold">“⋮”</span> icon] button located
                    to the right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you want to view and edit a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {emain && (
                  <GatsbyImage
                    image={emain}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="font-bold">“View Details”</span> button and
                    above the <span className="font-bold">“Track Usage”</span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Next, locate the Maintenance you wish to edit the details
                    of, either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the Maintenance that you want to view the
                    details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the Maintenance that you want to view.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you want to edit, you can then
                    select the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button, located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span> button and
                    to the left of the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Maintenance”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  From here, you can edit only the product details of the
                  Maintenance.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page of the Maintenance you edited so you can review your
                  changes and edits.
                </p>
                <p className="mb-4">
                  You can edit the Maintenance product details only as other
                  fields will require you to modify the Inventory item that is
                  the Maintenance.
                </p>
                <p className="mb-4">
                  Now that we have covered how to edit a Maintenance entry, we
                  can now cover how to download a Maintenance from the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Maintenance
                </h3>
                <p className="mb-4">
                  You can also download the Maintenance details from the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> [shown as{" "}
                    <span className="font-bold">“⋮”</span> icon] button located
                    to the right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you want to view and download a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {delmain && (
                  <GatsbyImage
                    image={delmain}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="font-bold">“View Details”</span> button and
                    above the <span className="font-bold">“Track Usage”</span>{" "}
                    button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center"> */}
                {/* {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Next, locate the Maintenance you wish to download the
                    details of, either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the Maintenance that you want to view and
                    download the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the Maintenance that you want to view.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you want to download the details of,
                    you can then select the{" "}
                    <span className="font-bold">“Download”</span> button located
                    at the top-right corner of the page, above both the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button and the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  This file will contain the details shown on the Maintenance
                  page.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="font-bold">“Save”</span>{" "}
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
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <p className="mb-4">
                  Now that we know how to download a Maintenance from the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Maintenance”
                  </span>{" "}
                  page, you can then continue on and cover how to delete a
                  Maintenance.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 6
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Maintenance
                </h3>
                <p className="mb-4">
                  You can also delete the Maintenance entry from the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  and make it so that Maintenance is not recorded anymore with
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  as well.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> [shown as{" "}
                    <span className="font-bold">“⋮”</span> icon] button located
                    to the right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you want to view and delete a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {delmain && (
                  <GatsbyImage
                    image={delmain}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Select the <span className="font-bold">“Maintenance”</span>{" "}
                    button located as the third option in this list, below the{" "}
                    <span className="font-bold">“Tasks”</span> button and above
                    the <span className="font-bold">“Chemicals”</span> button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                {main && (
                  <GatsbyImage
                    image={main}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Maintenance”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                {mp && (
                  <GatsbyImage
                    image={mp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Next, locate the Maintenance you wish to delete from the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    , either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the Maintenance that you want to view the
                    details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the Maintenance that you want to view.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Maintenance”
                    </span>{" "}
                    page of the Maintenance you want to delete, you can then
                    select the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span> button and
                    to the right of the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will then open a dialogue box, to ask if you want to
                    confirm your deletion of the Maintenance entry.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“Delete”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  where you will see the Maintenance entry deleted from the
                  table.
                </p>
                <p className="mb-4">
                  From here, we have now covered the features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Equipment”
                  </span>{" "}
                  page. Now we are going to continue onward to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Equipment”
                  </span>{" "}
                  page.
                </p>
              
            </div>
          </div>
        </div></div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default maintenance;
export const Head = () => (
  <>
    <title>Maintenance | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
