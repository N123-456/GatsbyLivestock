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
      acu: file(relativePath: { eq: "acu.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      aci: file(relativePath: { eq: "aci.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      acou: file(relativePath: { eq: "acou.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      acou1: file(relativePath: { eq: "acou1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const acu = getImage(data.acu);
  const aci = getImage(data.aci);
  const acou = getImage(data.acou);
  const acou1 = getImage(data.acou1);

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
                  Starting Guide with Machinery Usage Tracking:
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
              <div className="lg:pl-10">
                <p className="mb-4">
                  There are 2 Usages for an equipment that the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>{" "}
                  keeps track of, when you are managing these equipments.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Parked
                    </span>
                  </li>
                  <li className="mb-2">
                    <span className="text-primary-activelink font-bold">
                      Working
                    </span>
                  </li>
                </ul>
                <p className="mb-4">
                  First, let’s talk about{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>
                  .
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  What Parked Does
                </h2>
                <p className="mb-4">
                  The check-in process involves recording details when a machine
                  is returned after use.
                </p>
                <p className="mb-4">
                  This includes noting the time and date of return, the
                  operator's name, and the machine's current condition.
                </p>
                <p className="mb-4">
                  A thorough inspection is carried out to check for any signs of
                  damage, wear and tear, fuel levels, or technical issues. If
                  any problems are found, they are documented for maintenance or
                  repair.
                </p>
                <p className="mb-4">
                  The machine is then cleaned, refuelled (if required), and
                  properly stored in its designated area to ensure it is ready
                  for the next operation.
                </p>
                <p className="mb-4">
                  Recording this information in a logbook or{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>{" "}
                  helps maintain accurate usage records, track machine health,
                  and ensure accountability.
                </p>
                <p className="mb-4">
                  You can visually analyse the check-in usage of the machinery.
                  You can easily filter out{" "}
                  <span className="text-primary-activelink font-bold">
                    weekly
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    monthly
                  </span>
                  , and{" "}
                  <span className="text-primary-activelink font-bold">
                    yearly
                  </span>{" "}
                  check-in usage.
                </p>
   <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  What Working Does
                </h2>
                <p className="mb-4">
                  The check-out process begins when a machine is taken for use.
                </p>
                <p className="mb-4">
                  The details recorded include the time and date of check-out,
                  the operator's name, the machine name or ID, and the intended
                  purpose of use (e.g.,{" "}
                  <span className="text-primary-pheading font-bold">
                    ploughing
                  </span>
                  ,{" "}
                  <span className="text-primary-pheading font-bold">
                    harvesting
                  </span>
                  , or{" "}
                  <span className="text-primary-pheading font-bold">
                    irrigation
                  </span>
                  ).
                </p>
                <p className="mb-4">
                  Before use, the operator must inspect the machine for any
                  visible issues, such as oil leaks, low fuel, or damaged parts,
                  to ensure it is in proper working condition.
                </p>
                <p className="mb-4">
                  This step helps prevent further damage and ensures safety
                  during operation. All details are logged into the system or a
                  manual register to keep track of machine usage.
                </p>
                <p className="mb-4">
                  This process ensures the farm manager knows who is using the
                  machinery, for what purpose, and helps track the overall usage
                  history for better management and maintenance planning.
                </p>
 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Parked
                </h2>
                <p className="mb-4">
                  For adding a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , you first need to have a set of items ready, so that there
                  will not be any issues throughout the process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have the{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Vehicle
                    </span>
                    , or{" "}
                    <span className="text-primary-pheading font-bold">
                      Tool
                    </span>{" "}
                    ready for the Usage that you are putting it under.
                  </li>
                  <li className="mb-2">
                    You need to have the Operator name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    so that you can identify who has been using which equipment.
                  </li>
                  <li className="mb-2">
                    You need to have the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    is parked as well as its{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking Slot
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You need to have it checked when it was last{" "}
                    <span className="text-primary-activelink font-bold">
                      Parked
                    </span>{" "}
                    so that it can be tracked in{" "}
                    <span className="text-primary-activelink font-bold">
                      Working
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The state of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    such as the{" "}
                    <span className="text-primary-activelink font-bold">
                      Fuel Level
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Condition
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Issues and needed Repairs
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Supervisor
                    </span>{" "}
                    overseeing it while it was parked.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you fulfill all the required items ready, you can
                  continue to making a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  To add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage, you first start by:
                </p>
                <p className="mb-4">
                  First, you need to open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you want to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage to.
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
                    {acu && (
                      <GatsbyImage
                        image={acu}
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
                    Select the <span className="font-bold">“Track Usage”</span>{" "}
                    button, which will be fourth and last on the list, located
                    below the <span className="font-bold">“Maintenance”</span>{" "}
                    button.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you selected.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <p className="mb-4">
                  Now that you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  . Let us now add a Parked entry for the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now keep in mind that an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  can only enter a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage after it has done a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage.
                </p>
                <p className="mb-4">
                  We will show you how to add either of these Usages.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“’+’ Parked”</span> button,
                    located on the top-left corner of the page and above the{" "}
                    <span className="text-primary-activelink font-bold">
                      Equipment Usage Analysis Chart
                    </span>
                    .
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New Parked”
                  </span>{" "}
                  page.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <p className="mb-4">
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </p>
                <p className="mb-4">
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery Details”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery Details”
                  </span>{" "}
                  step is where you enter the name of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  and the type of{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  that is updating its{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery Name”
                    </span>{" "}
                    field: This is a non-editable field that has the name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    that is getting an updated{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parked”
                    </span>{" "}
                    Track Usage.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery Type”
                    </span>{" "}
                    field: This is a non-editable field that has the type of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    that is getting an updated{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parked”
                    </span>{" "}
                    Track Usage.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the second step, which is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Check In”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Check In”
                  </span>{" "}
                  step is where you enter the Operator name of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , when it was checked, the Duration of{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track usage, The name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Parking Slot
                  </span>{" "}
                  where it is currently situated within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Fuel Level
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Condition
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Issues/Repairs
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    Supervisor Name
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Operator Name”
                    </span>{" "}
                    field: Enter in the name of the Operator that is currently
                    working with the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date Checked”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    was seen parked at the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Duration”
                    </span>{" "}
                    field: This is a non-editable field that shows the amount of
                    time in hours that the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    was parked.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    is currently located at.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parking Slot”
                    </span>{" "}
                    field: Enter in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking Slot
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    is currently parked in.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Level”
                    </span>{" "}
                    field: Enter in the Fuel level of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was parked.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Condition”
                    </span>{" "}
                    field: Enter in the condition of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was parked.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Issues/Repairs”
                    </span>{" "}
                    field: Enter in the Issues that was found on the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    or the Repairs that was done on the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Supervisor Name”
                    </span>{" "}
                    field: Enter in the Supervisor name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was parked.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page with your Maintenance entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage table!
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                    {acu && (
                      <GatsbyImage
                        image={acu}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div><br/><br/>
                <p className="mb-4">
                  Now that you have covered how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage entry into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let’s now check out how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage entry.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-5">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Working
                </h2>
                <p className="mb-4">
                  For adding a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , you first need to have a set of items ready, so that there
                  will not be any issues throughout the process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have the{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Vehicle
                    </span>
                    , or{" "}
                    <span className="text-primary-pheading font-bold">
                      Tool
                    </span>{" "}
                    ready for the Usage that you are putting it under.
                  </li>
                  <li className="mb-2">
                    You need to have the Operator name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    so that you can identify who has been using which equipment.
                  </li>
                  <li className="mb-2">
                    You need to have the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    is parked as well as its{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking Slot
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You need to have it checked when it was last{" "}
                    <span className="text-primary-activelink font-bold">
                      Parked
                    </span>{" "}
                    so that it can be tracked in{" "}
                    <span className="text-primary-activelink font-bold">
                      Working
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The state of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    such as the{" "}
                    <span className="text-primary-activelink font-bold">
                      Fuel Level
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Condition
                    </span>
                    ,{" "}
                    <span className="text-primary-activelink font-bold">
                      Issues and needed Repairs
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Supervisor
                    </span>{" "}
                    overseeing it while it was parked.
                  </li>
                  <li className="mb-2">
                    You need to enter what sort of work was done with the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    as this will define it as{" "}
                    <span className="text-primary-activelink font-bold">
                      Working
                    </span>{" "}
                    for the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you fulfill all the required items ready, you can
                  continue to making a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  To add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage, you first start by:
                </p>
                <p className="mb-4">
                  First, you need to open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you want to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage to.
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
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“Track Usage”</span>{" "}
                    button, which will be fourth and last on the list, located
                    below the <span className="font-bold">“Maintenance”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  you selected.
                </p>
                <p className="mb-4">
                  Now that you are in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  . Let us now add a Working entry for the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now keep in mind that an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  can only enter a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage after it has done a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Track Usage.
                </p>
                <p className="mb-4">
                  We will show you how to add either of these Usages.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“’+’ Working”</span> button,
                    located on the top-left corner of the page and above the{" "}
                    <span className="text-primary-activelink font-bold">
                      Equipment Usage Analysis Chart
                    </span>
                    .
                  </li>
                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New Working”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </p>
                <p className="mb-4">
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery Details”
                  </span>{" "}
                  step:
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery Details”
                  </span>{" "}
                  step is where you enter the name of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  and the type of{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  that is updating its{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery Name”
                    </span>{" "}
                    field: This is a non-editable field that has the name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    that is getting an updated{" "}
                    <span className="text-primary-activelink font-bold">
                      “Working”
                    </span>{" "}
                    Track Usage.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Machinery Type”
                    </span>{" "}
                    field: This is a non-editable field that has the type of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    that is getting an updated{" "}
                    <span className="text-primary-activelink font-bold">
                      “Working”
                    </span>{" "}
                    Track Usage.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the second step, which is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Check Out”
                  </span>{" "}
                  step:
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Check Out”
                  </span>{" "}
                  step is where you enter the Operator name of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , when it was checked, the Duration of{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track usage, The name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Parking Slot
                  </span>{" "}
                  where it is currently situated within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Fuel Level
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Condition
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Issues/Repairs
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Purpose of Use
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Fuel Quantity
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Fuel Location
                  </span>
                  , The{" "}
                  <span className="text-primary-activelink font-bold">
                    Fuel Transaction
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    Supervisor Name
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Operator Name”
                    </span>{" "}
                    field: Enter in the name of the Operator that is currently
                    working with the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date Checked”
                    </span>{" "}
                    field: Enter in the date and time of when the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    was seen working at the farm operation.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Duration”
                    </span>{" "}
                    field: This is a non-editable field that shows the amount of
                    time in hours that the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    was working.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    will be located at.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parking Slot”
                    </span>{" "}
                    field: Enter in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking Slot
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    where the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    will be parked in.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Level”
                    </span>{" "}
                    field: Enter in the Fuel level of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was parked.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Condition”
                    </span>{" "}
                    field: Enter in the condition of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was parked.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Issues/Repairs”
                    </span>{" "}
                    field: Enter in the Issues that was found on the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    or the Repairs that was done on the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Purpose of Use”
                    </span>{" "}
                    field: Enter in the purpose of use for the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Quantity”
                    </span>{" "}
                    field: Enter in the Fuel Quantity for the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Location”
                    </span>{" "}
                    field: Enter in the location of where the equipment got its
                    fuel re-filled.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Transaction”
                    </span>{" "}
                    field: Enter in the cost of fuel that was paid for the
                    re-fill for the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Supervisor Name”
                    </span>{" "}
                    field: Enter in the Supervisor name of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Equipment
                    </span>{" "}
                    while it was working.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page with your Maintenance entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage table!
                </p>
                <p className="mb-4">
                  Now that you have covered how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Track Usage entry into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let’s now check out the other features of the Track Usage
                  page of an equipment, starting with the Dashboard!
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Track Usage Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add and track the Usage to an{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment
                  </span>{" "}
                  into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Track Usage Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Track Usage
                </h3>
                <p className="mb-4">
                  You can browse through the Table to find the Track Usage entry
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
                    Track Usage tables
                  </span>
                  .
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  table view of Track Usage]
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  table view of Track Usage]
                </p>
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Timing filter”
                  </span>
                  ,{" "}
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
                      “Timing filter”
                    </span>
                    : This shows the timing view of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery Usage Analysis Chart
                    </span>
                    , located to the top right of the page, above the{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery Usage Analysis Chart
                    </span>{" "}
                    and below the <span className="font-bold">“Logout”</span>{" "}
                    button. The options of the Timing filter are:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Weekly
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Monthly
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Yearly
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    : This shows a number of how many Track Usage entries are
                    there in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Track Usage tables
                    </span>
                    , above the page select options, and is on the bottom left
                    of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many Track
                    Usage entries you want to see in one page. The default is
                    set to 5. The options are 5, 10, 50, and 100. It is located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Track Usage tables
                    </span>
                    , above the page select options, and is to the bottom right
                    of the page.
                  </li>
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
                      Track Usage tables
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
                </ul>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Table view Page Select options]
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Table view Page Select options]
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Working”
                  </span>{" "}
                  Table Go to Page search]
                </p>
                <p className="mb-4">
                  [Provided above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Parked”
                  </span>{" "}
                  Table Go to Page search]
                </p>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding a Track Usage or a collection of Track Usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default maintenance;
export const Head = () => (
  <>
    <title>Tracking | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
