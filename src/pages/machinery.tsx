import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const machinery = () => {
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
      mash: file(relativePath: { eq: "mash.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      anma: file(relativePath: { eq: "anma.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      bfe: file(relativePath: { eq: "bfe.png" }) {
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
      sfe: file(relativePath: { eq: "sfe.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dtm: file(relativePath: { eq: "dtm.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      few: file(relativePath: { eq: "few.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vte: file(relativePath: { eq: "vte.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vae: file(relativePath: { eq: "vae.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ve: file(relativePath: { eq: "ve.png" }) {
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
          dele: file(relativePath: { eq: "dele.png" }) {
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
  const anma = getImage(data.anma);
  const anmp = getImage(data.anmp);
  const bfe = getImage(data.bfe);
  const dae = getImage(data.dae);
  const dele = getImage(data.dele);
  const dtm = getImage(data.dtm);
  const eae = getImage(data.eae);
  const mash = getImage(data.mash);
  const sfe = getImage(data.sfe);
  const vae= getImage(data.vae);
  const ve = getImage(data.ve);
  const vte = getImage(data.vte);
   const db = getImage(data.db);
    const gtp = getImage(data.gtp);
     const ps = getImage(data.ps);
      const few = getImage(data.few);
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
                  Starting Guide for Machinery:
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

              <p className="text-primary-paragraph dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                In the{" "}
                <span className="text-primary-activelink font-bold">
                  “Machinery/Tools”
                </span>{" "}
                page, you can keep track of the machinery available in your
                farm. One of your most vital tools is your{" "}
                <span className="text-primary-pheading font-bold">
                  machinery
                </span>
                , which enables you to operate more efficiently and accomplish
                more of your farm-related tasks.
              </p>
              <p className="mb-4">
                Regular maintenance is essential to preventing malfunctions and
                keeping everything functioning properly. With its ability to log
                hours, maintenance history, and expenses,{" "}
                <span className="text-primary-pheading font-bold">
                  Farm Management System
                </span>{" "}
                simplifies all of your mechanical management.
                <br />
                You can also add, edit, view, search, and delete the{" "}
                <span className="text-primary-pheading font-bold">
                  machinery
                </span>
                , <span className="text-primary-pheading font-bold">tools</span>
                , and{" "}
                <span className="text-primary-pheading font-bold">
                  vehicles
                </span>{" "}
                that you have added within the{" "}
                <span className="text-primary-pheading font-bold">
                  Farm Management System
                </span>
                .
              </p>

              <div className="pl-13 pt-8 flex justify-center">
                {mash && (
                  <GatsbyImage
                    image={mash}
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
                  Adding an Equipment
                </h2>
                <p className="mb-4">
                  For adding a Warehouse, you first need to have a set of items
                  ready, so that there will not be any issues throughout the
                  process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have a{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that is set on the Farm location, where the Equipment is
                    parked. That Warehouse must also have an adequate amount of
                    space for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Parking slot
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You need to have the product information of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Vehicle
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery
                    </span>
                    , or{" "}
                    <span className="text-primary-pheading font-bold">
                      Tool
                    </span>{" "}
                    that you are entering into the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You need to have all the payment information regarding
                    either the <span className="font-bold">Purchase</span> or
                    the <span className="font-bold">Lease</span> of the{" "}
                    <span className="text-primary-pheading font-bold">
                      Vehicle
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Machinery
                    </span>
                    , or{" "}
                    <span className="text-primary-pheading font-bold">
                      Tool
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    You must also have the{" "}
                    <span className="text-primary-activelink font-bold">
                      Manual
                    </span>{" "}
                    in digital form to put in the form.
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
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“’+’ Add New Machinery”</span>{" "}
                    button, located on the top-left corner of the page, to the
                    left of the{" "}
                    <span className="font-bold">“Machineries Usage”</span>{" "}
                    button and to the top of the search options.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {anma && (
                  <GatsbyImage
                    image={anma}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New Machinery”
                  </span>{" "}
                  page.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {anmp && (
                  <GatsbyImage
                    image={anmp}
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
                    “Basic Information”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Basic Information”
                  </span>{" "}
                  step is where you enter the name of the equipment, the type,
                  and the status of the equipment for the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Name”
                    </span>{" "}
                    field: Enter in the name of the Equipment that the farm
                    operation has designated. It can be either the name of the
                    equipment or a designated name for the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Type”
                    </span>{" "}
                    field: Enter in the type of equipment that is being entered
                    into the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . Please keep in mind that the type of the equipment you
                    choose will change what field you get in the later steps.
                    Choose 1 of 3 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Machinery
                        </span>
                        : You will get 1 extra fields in the{" "}
                        <span className="text-primary-activelink font-bold">
                          “Identification”
                        </span>{" "}
                        step. The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Model Year”
                        </span>{" "}
                        field and the{" "}
                        <span className="text-primary-activelink font-bold">
                          “ID/Plate Number”
                        </span>{" "}
                        field.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Tool
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Vehicle
                        </span>
                        : You will get 2 extra field in the{" "}
                        <span className="text-primary-activelink font-bold">
                          “Identification”
                        </span>{" "}
                        step. The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Model Year”
                        </span>{" "}
                        field.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Status”
                    </span>{" "}
                    field: Enter in the status of the equipment that is being
                    entered into the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . Choose 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Maintenance
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Available
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the second step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Location”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Location”
                  </span>{" "}
                  step is where you enter in the name of the Warehouse that the
                  equipment is currently parked in, and the Parking slot that
                  the equipment is parked in.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    field: Enter in the name of the warehouse where the
                    equipment is currently parked in.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parking Slot”
                    </span>{" "}
                    field: Enter in the Parking Slot of the Warehouse where the
                    equipment is currently parked in.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the third step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step is where you enter in the identity information of the
                  equipment. Please keep in mind that the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step changes based on what you choose in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Basic Information”
                  </span>{" "}
                  step.
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  [Above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step, when you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Machinery”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field]
                </p>
                <p className="mb-4">
                  When you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Machinery”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model”
                    </span>{" "}
                    field: Enter in the Model name of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model Year”
                    </span>{" "}
                    field: Enter in the Model year of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Serial Number”
                    </span>{" "}
                    field: Enter in the Serial Number of the Machinery.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ul>
                <p className="mb-4">
                  [Above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step, when you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Tool”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field]
                </p>
                <p className="mb-4">
                  When you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Tool”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model”
                    </span>{" "}
                    field: Enter in the Model name of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Serial Number”
                    </span>{" "}
                    field: Enter in the Serial Number of the Machinery.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ul>
                <p className="mb-4">
                  [Above is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Identification”
                  </span>{" "}
                  step, when you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Vehicle”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field]
                </p>
                <p className="mb-4">
                  When you choose the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Vehicle”
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Type”
                  </span>{" "}
                  field:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model”
                    </span>{" "}
                    field: Enter in the Model name of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model Year”
                    </span>{" "}
                    field: Enter in the Model year of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “ID/Plate Number”
                    </span>{" "}
                    field: Enter in the ID or the Plate Number of the Machinery.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Serial Number”
                    </span>{" "}
                    field: Enter in the Serial Number of the Machinery.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the fourth step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Specifications”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Specifications”
                  </span>{" "}
                  step is where you enter in the mechanical information of the
                  equipment.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Engine”
                    </span>{" "}
                    field: Enter in the Engine name and details of the
                    equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Transmission”
                    </span>{" "}
                    field: Enter in the Transmission details of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Track Type”
                    </span>{" "}
                    field: Enter in the Track type details of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fuel Capacity”
                    </span>{" "}
                    field: Enter in the Fuel Capacity of the equipment.
                  </li>
                </ul>
                <p className="mb-4">
                  Keep in mind that if you are entering in a{" "}
                  <span className="text-primary-pheading font-bold">Tool</span>,
                  then there is no need to fill these fields in this step.
                </p>
                <p className="mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="mb-4">
                  Next is the fifth step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Purchase Information”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Purchase Information”
                  </span>{" "}
                  step is where you enter in the payment information regarding
                  the purchase or lease of the equipment. Please keep in mind
                  that extra fields will be added depending on what choices you
                  selected for them.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Ownership Status”
                  </span>{" "}
                  field: Enter in the Ownership Status of the equipment. Please
                  choose 1 of 2 options:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    <span className="text-primary-pheading font-bold">
                      Leased
                    </span>
                    : This shows 1 extra field in the step. The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Purchased from”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    <span className="text-primary-pheading font-bold">
                      Purchased
                    </span>
                    : This shows 1 extra field in the step. The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Leased from”
                    </span>{" "}
                    field.
                  </li>
                </ul>
                <p className="mb-4">
                  When you select the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Leased”
                  </span>{" "}
                  in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Ownership Status”
                  </span>
                  :
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date Acquired”
                    </span>{" "}
                    field: Enter in the date of when the equipment was leased.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Purchase Price”
                    </span>{" "}
                    field: Enter in the purchase price of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Value”
                    </span>{" "}
                    field: Enter in the estimated value of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Leased From”
                    </span>{" "}
                    field: Enter in the Leased from of the equipment. It will
                    show a list of contacts that you have entered in the field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Payment Mode”
                    </span>{" "}
                    field: Enter in the payment mode of the equipment.
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
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Accumulated Depreciation
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Bank
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Cash
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Depreciation
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Furniture and Fixtures
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Inventory
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Pesticides
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Tax
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  When you select the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Purchased”
                  </span>{" "}
                  in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Ownership Status”
                  </span>
                  :
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date Acquired”
                    </span>{" "}
                    field: Enter in the date of when the equipment was
                    purchased.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Purchase Price”
                    </span>{" "}
                    field: Enter in the purchase price of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Value”
                    </span>{" "}
                    field: Enter in the estimated value of the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Previous Owner”
                    </span>{" "}
                    field: Enter in the name of the previous owner of the
                    equipment. It will show a list of contacts that you have
                    entered in the field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Payment Mode”
                    </span>{" "}
                    field: Enter in the payment mode of the equipment.
                  </li>
                </ul>
                <p className="mb-4">
                  Finally, the last step is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Additional Details”
                  </span>{" "}
                  step:
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Additional Details”
                  </span>{" "}
                  step is where you enter the link to the digital copy of the
                  manual, and the description.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Link to Manual”
                    </span>{" "}
                    field: Enter in the link to the digital copy of the
                    operating manual for the equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Description”
                    </span>{" "}
                    field: Enter in the description of the equipment. Any
                    additional information that can’t be entered in the previous
                    steps can be entered in.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery/Tools”
                  </span>{" "}
                  page with your Equipment entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery/Tools”
                  </span>{" "}
                  table!
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Now that you have covered how to add an Equipment entry into{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>.
                  Let’s now check out the other features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery and Tools”
                  </span>{" "}
                  page, starting with the Dashboard!
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Machinery and Tools Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add a Machinery and Tools into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery and Tools Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Equipment
                </h3>
                <p className="mb-4">
                  You can browse through the Table to find the Equipment entry
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
                    Machinery and Tools table
                  </span>
                  .
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

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
                      Machinery and Tools table
                    </span>
                    , above the page select options, and is on the bottom left
                    of the page.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
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
                    : This opens a menu where you can select how many Equipment
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Machinery and Tools table
                    </span>
                    , above the page select options, and is to the bottom right
                    of the page.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
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
                      Machinery and Tools table
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
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the Equipment you are
                    looking for is and hit enter. It will then open the page
                    with the page number shown as well.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {gtp && (
                  <GatsbyImage
                    image={gtp}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding an Equipment or a collection of Equipments.
                </p>
                <p className="mb-4">
                  There is an alternative way of finding an Equipment, by using
                  the <span className="font-bold">search options</span>...
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
                  Searching for Equipment
                </h3>
                <p className="mb-4">
                  You can search for an Equipment from the table of{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery and Tools
                  </span>{" "}
                  present in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . You can locate the{" "}
                  <span className="font-bold">search options</span> as they are
                  underneath the{" "}
                  <span className="font-bold">“’+’ Add New Machinery”</span>{" "}
                  button and the{" "}
                  <span className="font-bold">“Machineries Usage”</span> button,
                  and above the table.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {sfe && (
                  <GatsbyImage
                    image={sfe}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Name of Equipment”
                    </span>{" "}
                    search: You can search for the Equipment you are looking for
                    by the name of the Equipment you set when adding it.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Status of Equipment”
                    </span>{" "}
                    search: You can search for the Equipment you are looking for
                    by the status of the Equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Model name of Equipment”
                    </span>{" "}
                    search: You can search for the Equipment you are looking for
                    by the Model name of the Equipment.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Plate Number or ID of Equipment”
                    </span>{" "}
                    search: You can search for the Equipment you are looking for
                    by the Plate Number of the Equipment.
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
                    Machinery and Tools table
                  </span>{" "}
                  update with only the search options you typed or selected in
                  the search bar.
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
                  search for a specific Equipment or filter the table for a set
                  of Equipment entries. You can also use the{" "}
                  <span className="font-bold">search options</span> as a filter
                  so that you can{" "}
                  <span className="font-bold">“Download Table”</span> specific
                  Equipment entries to use later.
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
                  Downloading the Machinery and Tools Table
                </h3>
                <p className="mb-4">
                  If you want to have a set of Equipment or the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery and Tools table
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
                    specific Equipments that you want to download, otherwise if
                    you want to download the entire table, leave the search
                    options as it is and go to the{" "}
                    <span className="text-primary-activelink font-bold">
                      records per page count
                    </span>{" "}
                    and set it to the highest number you can set.
                  </li>
                  <li className="mb-2">
                    Next, you can select the{" "}
                    <span className="font-bold">“Download Table”</span> button
                    located on the right of the page, to the left of the{" "}
                    <span className="font-bold">“Search”</span> button.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {dtm && (
                  <GatsbyImage
                    image={dtm}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                </ol>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {few && (
                  <GatsbyImage
                    image={few}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  This file contains the current view of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery and Tools table
                  </span>{" "}
                  and their details.
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
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing the Tasks of an Equipment
                </h3>
                <p className="mb-4">
                  If you want to view the associated tasks regarding an
                  Equipment, then you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the Equipment you wish to view the
                    tasks of. A small white box will show up with a list of
                    options you can go to.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {vte && (
                  <GatsbyImage
                    image={vte}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Click on the <span className="font-bold">“Tasks”</span>{" "}
                    button which will be first on the list, above the{" "}
                    <span className="font-bold">“View Details”</span> button.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  It will then take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks of the Equipment”
                  </span>{" "}
                  page.
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Listed here should all the tasks that are in relation to the
                  Equipment you selected. You can perform tasks-related matter
                  in this page.
                </p>
                <p className="mb-4">
                  Now that we have checked out how to get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks of the Equipment”
                  </span>{" "}
                  page of an Equipment, now let’s show you how to view the
                  details of an Equipment entry within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing an Equipment
                </h3>
                <p className="mb-4">
                  You can view an Equipment entry within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>{" "}
                  and confirm the extra details about the information you
                  entered. There are currently 2 methods to viewing an Equipment
                  entry in the table.
                </p>
                <p className="mb-4">Here is how you can view an Equipment:</p>
                <p className="mb-4">
                  The first method to viewing an equipment entry in the table,
                  is just by selecting the{" "}
                  <span className="text-primary-activelink font-bold">
                    Equipment name
                  </span>{" "}
                  of the Equipment you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Equipment name”
                    </span>{" "}
                    of the Equipment you want to view.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  You will then be taken to a{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Equipment”
                  </span>{" "}
                  page of the Equipment you selected.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  The second method to view an Equipment entry in the table, is
                  just by selecting the{" "}
                  <span className="font-bold">“Three dots”</span> icon, then
                  clicking the <span className="font-bold">“View Details”</span>{" "}
                  button in the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the Equipment you wish to view.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View Details”</span>{" "}
                    button, which will be second on the list, located below the{" "}
                    <span className="font-bold">“Tasks”</span> button and above
                    the <span className="font-bold">“Maintenance”</span> button.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Equipment”
                  </span>{" "}
                  page of the Equipment you selected.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  These are the two methods to viewing an Equipment entry. Both
                  do not have any differences in what details they show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the Equipment entry
                  you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that you know how to view an Equipment, let us now check
                  out how to edit an Equipment.
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
                  Editing an Equipment
                </h3>
                <p className="mb-4">
                  If you want to either update or correct some information of an
                  Equipment then you can edit the Equipment entry in the table.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the Equipment that you want to
                    edit.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {eae && (
                  <GatsbyImage
                    image={eae}
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
                    Select the <span className="font-bold">“View Details”</span>{" "}
                    button, which will be second on the list, located below the{" "}
                    <span className="font-bold">“Tasks”</span> button and above
                    the <span className="font-bold">“Maintenance”</span> button.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you selected.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you want to edit, you can then select
                    the{" "}
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
                      <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Equipment”
                  </span>{" "}
                  page.
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Here you can change and update any of the fields you need to
                  edit.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Equipment”
                  </span>{" "}
                  page of the Equipment you edited so you can review your
                  changes and edits.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                <p className="mb-4">
                  Now that you know how to edit your Equipment, now let’s check
                  out how to download your Equipment.
                </p></div>
<div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 6
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading an Equipment
                </h3>
                <p className="mb-4">
                  If you wish to download only a specific Equipment and its
                  details, you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Next, locate the Equipment you wish to download the details
                    of, either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the Equipment that you want to
                    download the details of.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {dae && (
                  <GatsbyImage
                    image={dae}
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
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    Select the <span className="font-bold">“View Details”</span>{" "}
                    button, which will be second on the list, located below the{" "}
                    <span className="font-bold">“Tasks”</span> button and above
                    the <span className="font-bold">“Maintenance”</span> button.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you selected.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you want to download, you can then
                    select the <span className="font-bold">“Download”</span>{" "}
                    button, located at the top-right corner of the page, above
                    both the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button and the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  The PDF file will contain only the details related to the
                  Equipment you selected for download.
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

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
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Now that you know how to download your Equipment, now let’s
                  check out how to delete your Equipment.
                </p>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 7
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting an Equipment
                </h3>
                <p className="mb-4">
                  If you want to delete an Equipment from the table within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>,
                  you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the Equipment that you want to
                    delete.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {dele && (
                  <GatsbyImage
                    image={dele}
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
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    Click the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you selected.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {ve && (
                  <GatsbyImage
                    image={ve}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Equipment”
                    </span>{" "}
                    page of the Equipment you want to delete, you can then
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
                      {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                  <li className="mb-2">
                    A dialogue box will appear to confirm whether you want to
                    delete the Equipment or not.
                  </li>
                      <div className="pl-13 pt-8 flex justify-center">
                {db && (
                  <GatsbyImage
                    image={db}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>

                  <li className="mb-2">
                    Then click the <span className="font-bold">“Delete”</span>{" "}
                    button in the dialogue box to confirm.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Equipment”
                  </span>{" "}
                  page where the Equipment entry will then be deleted from the
                  table.
                </p>
                    {/* <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/> */}

                <p className="mb-4">
                  Now that we have shown how to delete an entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Machinery and Tools table
                  </span>
                  , we have now covered the main features in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery and Tools”
                  </span>{" "}
                  page. But we are not done!
                </p>
                <p className="mb-4">
                  There are two more important pages to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Machinery and Tools”
                  </span>{" "}
                  page. They are the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
                  </span>{" "}
                  page and the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Track Usage”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Let us continue on and cover the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Maintenance”
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

export default machinery;
export const Head = () => (
  <>
    <title>Machinery | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
