import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const harvest = () => {
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
            ware: file(relativePath: { eq: "ware.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            aaw: file(relativePath: { eq: "aaw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            awp: file(relativePath: { eq: "awp.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            bfw: file(relativePath: { eq: "ps.bfw" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            sfw: file(relativePath: { eq: "sfw.inven" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            vttw: file(relativePath: { eq: "vttw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            totw: file(relativePath: { eq: "totw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            vware: file(relativePath: { eq: "vware.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            rs: file(relativePath: { eq: "rs.png" }) {
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
            ma: file(relativePath: { eq: "ma.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            db: file(relativePath: { eq: "db.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            eaw: file(relativePath: { eq: "eaw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            daw: file(relativePath: { eq: "daw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
                  delaw: file(relativePath: { eq: "delaw.png" }) {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        `);
        const ware = getImage(data.ware);
        const aaw = getImage(data.aaw);
        const awp = getImage(data.awp);
        const bfw = getImage(data.bfw);
           const ps = getImage(data.ps);
        const gtp = getImage(data.gtp);
        const sfw = getImage(data.sfw);
        const vttw = getImage(data.vttw);
        const delaw = getImage(data.delaw);
        const totw = getImage(data.totw);
        const ma = getImage(data.ma);
        const rs = getImage(data.rs);
        const daw = getImage(data.db);
        const db = getImage(data.db);
        const eaw = getImage(data.eaw);
        const few = getImage(data.few);
        const vware = getImage(data.vware);
  return (
    <AppLayout>
      <PrivateRoute>
      
          <div className="flex flex-col justify-center ">
            <div className="acu lg:pr-4 text-justify font-montserrat text-[18px] text-primary-paragraph2">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Warehouse:
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
                  A{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  is a storage facility where goods, equipment, or produce are
                  kept safely before use or distribution. It helps organize and
                  manage items efficiently, ensuring they are protected from
                  damage or spoilage.
                </p>
                <p className="mb-4">
                  <span className="text-primary-activelink font-bold">
                    Warehouses
                  </span>{" "}
                  are often used to store harvested crops, seeds, tools, or
                  farming supplies. Proper tracking of stock levels helps avoid
                  shortages or excess inventory. Items in a{" "}
                  <span className="text-primary-activelink font-bold">
                    warehouse
                  </span>{" "}
                  can be categorized, labeled, and retrieved easily when needed.
                </p>
                <p className="mb-4">
                  This improves overall farm management and ensures timely
                  access to essential materials.
                </p>
                <p className="mb-4">
                  For adding a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , you first need to add a farm location that is known as a{" "}
                  <span className="font-bold">“Building”</span>.
                </p>

                <div className="pl-13 pt-8 flex justify-center">
                  {ware && (
                    <GatsbyImage
                      image={ware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] ">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Warehouse
                </h2>
                <p className="mb-4">
                  For adding a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , you first need to have a set of items ready, so that there
                  will not be any issues throughout the process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have a farm location, that is set as a{" "}
                    <span className="font-bold">“Building”</span> type. You can
                    learn more by going to the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Locations Page
                    </span>{" "}
                    chapter.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you have a farm location that is set as a{" "}
                  <span className="font-bold">“Building”</span>, you can
                  continue to making a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  To add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , you first start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“Add Warehouse”</span> button,
                    located on the top-left corner of the page, to the left of
                    the <span className="font-bold">“Download Table”</span>{" "}
                    button and to the top of the search options.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {aaw && (
                    <GatsbyImage
                      image={aaw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Warehouse”
                  </span>{" "}
                  page.
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                  {awp && (
                    <GatsbyImage
                      image={awp}
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
                  Now, let us begin with the first step, the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Information”
                  </span>{" "}
                  step:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Information”
                  </span>{" "}
                  step is where you input the name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , the <span className="font-bold">“Building”</span> farm
                  location where it is located and whether it is the default
                  warehouse for the{" "}
                  <span className="text-primary-activelink font-bold">
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
                    field: Enter the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that you are adding to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . You can set the name that is convenient for you and your
                    farm operation.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Location”
                    </span>{" "}
                    field: Enter which{" "}
                    <span className="font-bold">“Building”</span> farm location
                    that is within{" "}
                    <span className="text-primary-activelink font-bold">
                      FMS
                    </span>{" "}
                    that is going to be set as the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . It will show a list which contains all the farm locations
                    that are typed under{" "}
                    <span className="font-bold">“Building”</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Set as Default Warehouse”
                    </span>{" "}
                    check: This is a check for if you want to set the warehouse
                    you are currently adding to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>{" "}
                    as the Default Warehouse for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>{" "}
                    and for the entire farm operation.
                  </li>
                </ul>
                <p className="mb-4">
                  Setting it as a Default Warehouse means you are making it the
                  main warehouse of the entire farm operation that you are
                  running. It will handle the purchasing of any of the
                  Farming-related assets and will be the main storage that can
                  transfer to other warehouses or farms.
                </p>
                <p className="mb-4">
                  All the fields listed above in this step are required and need
                  to be filled.
                </p>
                <p className="mb-4">
                  Next, we are going to look at the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse Storage”
                  </span>{" "}
                  step:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse Storage”
                  </span>{" "}
                  step is where you setup each section of the warehouse as well
                  as their respective sub-sections and their rack setting. It
                  organizes your farm assets into sections and sub-sections so
                  that you can view where each asset that is important for your
                  farm and where they are located within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  .
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  We will first start with the first section, the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Shed”
                  </span>{" "}
                  section.
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The “Shed” Section
                </h3>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Shed”
                  </span>{" "}
                  section holds all the repair and machinery assets of your farm
                  operation and organizes them into 4 different sub-sections:
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                  {/* {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Oil & Fluid”
                    </span>{" "}
                    sub-section: This sub-section will hold the Fuel for your
                    machinery’s and any mechanical-based fluids (e.g. Brake
                    fluid, Carburetor fluid, Engine oil fluids, etc) for
                    repairing those machinery’s.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to make space for a set of mechanical fluids or
                    for the oil fuel for your machinery’s, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Oil & Fluid”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for either the oil or fluid that you wish to store in that
                    space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Spare Parts”
                    </span>{" "}
                    sub-section: This sub-section will hold the spare parts for
                    your machinery’s or tools that are for repairing those
                    machinery’s or tools, it can be spare brake discs, spark
                    plugs, headlight, etc.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to make space for a set of parts for a
                    particular machinery or tool, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Spare Parts”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the spare parts that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tools”
                    </span>{" "}
                    sub-section: This sub-section will hold the Tools that are
                    necessary for the farm operation, it can be Spanners, Jacks,
                    Chisels, Rakes, Watering equipment, Wheat straw choppers,
                    Wagons, etc.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to make space for a particular type or set of
                    tools, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tools”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parking”
                    </span>{" "}
                    sub-section: This sub-section will hold the Parking spaces
                    for all the machinery’s (such as tractors, harvesters,
                    chemicals application sprayers, etc) that are solely
                    important to the farm operation.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to make space for a machinery or type of
                    machinery, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Parking”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Parking Slot”
                      </span>{" "}
                      field: Enter the name of the parking slot that will hold
                      the machinery that you are storing at the warehouse.
                      Please write a name that will be convenient for you and
                      the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Parking Slot Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the parking
                      slot that will hold the machinery you are storing at the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the parking slot.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the parking slot
                      that you are adding for the machinery in the slot.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                    
                  </ul>
                </ul>
                <p className="mb-4">
                  Please make sure to fill the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Shed”
                  </span>{" "}
                  section as to how your farm operation has these assets stored.
                </p>
                <p className="mb-4">
                  Next, we are going to start on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Input/Technologies”
                  </span>{" "}
                  section.
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The “Input/Technologies” Section
                </h3>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Input/Technologies”
                  </span>{" "}
                  section holds all the Fertilizers, Chemicals (such as
                  Pesticide, Insecticides, acids, bases, etc), Seeds and
                  Application equipment assets of your farm operation and
                  organizes them into 4 different sub-sections:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fertilizer”
                    </span>{" "}
                    sub-section: This sub-section will hold the fertilizers and
                    micro-nutrients products that are solely important for the
                    farm operation.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to make space for a large purchase of a
                    fertilizer or a large purchase of a micro-nutrients, you can
                    press the <span className="font-bold">“Add More”</span>{" "}
                    button, located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fertilizer”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Chemicals”
                    </span>{" "}
                    sub-section: This sub-section will hold the chemicals that
                    are solely important for the farm operation. These chemicals
                    can include Pesticides, Herbicides, Weedicides,
                    Insecticides, Acids, Bases, etc.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of a Pesticide
                    or a large purchase of a Acids, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Chemicals”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Seed”
                    </span>{" "}
                    sub-section: This sub-section will hold the seeds that are
                    solely important for the farm operation. These seeds can
                    just be stored in a regular manner but there are some seeds
                    that require either careful storage or need proper care when
                    handling.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of Wheat seeds
                    or a large purchase of grafted Mango saplings, you can press
                    the <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Seed”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Application Equipment”
                    </span>{" "}
                    sub-section: This sub-section will hold the equipment that
                    are needed to spread or apply either Fertilizers, Chemicals
                    or Seeds. This can include Tractor seed drills, Manual Hand
                    Sprayer, Hand-driven seed drills.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of Wheat seeds
                    or a large purchase of grafted Mango saplings, you can press
                    the <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Seed”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                  </ul>
                </ul>
                <p className="mb-4">
                  Please make sure to fill the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Input/Technologies”
                  </span>{" "}
                  section as to how your farm operation has these assets stored.
                </p>
                <p className="mb-4">
                  Next, we are going to start on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Vaccination Center”
                  </span>{" "}
                  section.
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The “Vaccination Center” Section
                </h3>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Vaccination Center”
                  </span>{" "}
                  section holds all the Medical and Vaccination-based assets for
                  the Livestock of your farm operation and organizes them into 2
                  different sub-sections:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cabinet”
                    </span>{" "}
                    sub-section: This sub-section will hold the medical
                    equipment and medicines that do not require a temperature
                    controlled environment when storing them.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of
                    non-environment controlled medications or a large purchase
                    of Medical Equipments, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cabinet”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Refrigerator”
                    </span>{" "}
                    sub-section: This sub-section will hold the medical
                    equipment and medicines that require a temperature
                    controlled environment when storing them, such as a freezer
                    or a refrigerator.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of environment
                    controlled medications or a large purchase of Medical
                    Equipment’s, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Refrigerator”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Remove”
                      </span>{" "}
                      button: If you wish to remove the rack space you were
                      adding in the sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                  </ul>
                </ul>
                <p className="mb-4">
                  Please make sure to fill the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Vaccination Center”
                  </span>{" "}
                  section as to how your farm operation has these assets stored.
                </p>
                <p className="mb-4">
                  Next, we are going to start on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Feed/Forage”
                  </span>{" "}
                  section.
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  The “Feed/Forage” Section
                </h3>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Feed/Forage”
                  </span>{" "}
                  section holds the Animal Feed for the Livestock and the
                  Forage/Harvests of your farm operation and organizes them into
                  2 different sub-sections:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Animal Feed”
                    </span>{" "}
                    sub-section: This sub-section will hold the feed and food
                    for the Livestock that are in your farm operation when you
                    are storing them.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large purchase of Cow Feed or
                    a large purchase of Chicken Feed, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Animal Feed”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the asset
                      that you are storing in the warehouse. Please write a name
                      that will be convenient for you and the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the asset you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the asset in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  </ul>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    sub-section: This sub-section will hold either the Harvests
                    or the upcoming harvests for the Farm operation. You can
                    also store harvests that need to be stored for
                    pre-processing.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                   <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <p className="mb-4">
                    If you need to add space for a large harvest produce of
                    Wheat or a large harvest produce of Chilli to be
                    pre-processed, you can press the{" "}
                    <span className="font-bold">“Add More”</span> button,
                    located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    section title and above the{" "}
                    <span className="font-bold">“Submit”</span> button and the{" "}
                    <span className="font-bold">“Cancel”</span> button.
                  </p>
                  <p className="mb-4">
                    It will add 4 more fields, where you can set up a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rack space”
                    </span>{" "}
                    for the Tools that you wish to store in that space.
                  </p>
                  <ul className="list-disc ml-6 mb-4">
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Name”
                      </span>{" "}
                      field: Enter the name of the rack that will hold the
                      specific harvest that you are storing in the warehouse.
                      Please write a name that will be convenient for you and
                      the farm operation.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Rack Capacity”
                      </span>{" "}
                      field: Enter the capacity or space size of the rack that
                      will hold the specific harvest you are storing in the{" "}
                      <span className="text-primary-activelink font-bold">
                        Warehouse
                      </span>
                      .
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Unit”
                      </span>{" "}
                      field: Enter the unit of measurement that the rack
                      capacity is using to set the size for the Rack.
                    </li>
                    <li className="mb-2">
                      The{" "}
                      <span className="text-primary-activelink font-bold">
                        “Description”
                      </span>{" "}
                      field: Enter a convenient description for the Rack space
                      that you are adding for the specific harvest in the space.
                    </li>
                    <li className="mb-2">
                      The <span className="font-bold">“Remove”</span> button: If
                      you wish to remove the rack space you were adding in the
                      sub-section, then click the{" "}
                      <span className="font-bold">“Remove”</span> button to have
                      the rack space removed from the sub-section.
                    </li>
                  </ul>
                </ul>
                <p className="mb-4">
                  Please make sure to fill the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Feed/Forage”
                  </span>{" "}
                  section as to how your farm operation has these assets stored.
                </p>
                <p className="mb-4">
                  These are the 4 sections in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse Storage”
                  </span>{" "}
                  step. Each section and their sub-sections need to be filled as
                  per how your farm operation stores their assets and harvests.
                </p>
                <p className="mb-4">
                  This will ensure and prepare your harvests history to be
                  reliable and accurate for future reference.
                </p>
                <p className="mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse”
                  </span>{" "}
                  page with your{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry added to the Warehouses table!
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  Now that you have covered how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry into{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>
                  . Let’s now check out the other features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Warehouse Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  into the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse Dashboard
                  </span>
                  !
                </p>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Warehouse
                </h3>
                <p className="mb-4">
                  You can browse through the Table to find the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry you want using the pages options.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the pages options:
                </p>
                <p className="mb-4">
                  The page options are located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  table.
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                  {bfw && (
                    <GatsbyImage
                      image={bfw}
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
                  </span>{" "}
                  and the{" "}
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
                    : This shows a number of how many{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    entries are there in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    table, above the page select options and is on the bottom
                    left of the page.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
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
                    : This opens a menu where you can select how many warehouse
                    entries do you want to see in one page. The default is set
                    to 5. The options are 5, 10, 50 and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    table, above the page select options and is to the bottom
                    right of the page.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Page select
                    </span>{" "}
                    options: It shows which page you are currently in (The
                    default is the 1st page). It gives you buttons for the next
                    five pages after which it gives you the button to the last
                    page. You can also move to the previous page using the left
                    arrow button, located on the left side or to next page using
                    the right arrow button located on the right side. Located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    table, the{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>{" "}
                    and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page
                    </span>{" "}
                    and is on the bottom middle of the page.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {ps && (
                    <GatsbyImage
                      image={ps}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg"
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page”
                    </span>{" "}
                    search: You can type a page number of where the warehouse
                    you are looking for is and hit enter. It will then open the
                    page with the page number shown as well.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {gtp && (
                    <GatsbyImage
                      image={gtp}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg"
                    />
                  )}
                </div><br/><br/>
                </ul>
                <p className="mb-4">
                  You can use the page options as a way of finding a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouses
                  </span>
                  .
                </p>
                <p className="mb-4">
                  There is an alternative way of finding a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , by using the search options...
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] ">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching for Warehouse
                </h3>
                <p className="mb-4">
                  You can search for a warehouse from the table of warehouses
                  present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  . You can locate the search options as they are underneath the{" "}
                  <span className="font-bold">“Add Warehouse”</span> button and
                  the <span className="font-bold">“Download Table”</span>{" "}
                  button, and above the table.
                </p>
                   <div className="pl-13 pt-8 flex justify-center">
                  {sfw && (
                    <GatsbyImage
                      image={sfw}
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
                    <span className="text-primary-activelink font-bold">
                      Warehouse Name
                    </span>
                    : You can search for a warehouse by the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you set when adding it.
                  </li>
                </ul>
                <p className="mb-4">
                  Now those are the search options! You can now search for a
                  specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  or filter the table for a set of{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouses
                  </span>
                  . You can also use the search options as a filter so that you
                  can <span className="font-bold">“Download Table”</span>{" "}
                  specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entries to use later.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Warehouse Table
                </h3>
                <p className="mb-4">
                  If you want to have a set of{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  or the entire warehouse table in the table within{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>{" "}
                  on a PDF downloaded, then you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you can use the search to filter the table for
                    specific warehouses that you want to download, otherwise if
                    you want to download the entire table, leave the search
                    options as it is and go to the records per page count and
                    set it to the highest number you can set.
                  </li>
                  <li className="mb-2">
                    Next, you can select the{" "}
                    <span className="font-bold">“Download Table”</span> button
                    located on the top of the page, to the right of the{" "}
                    <span className="font-bold">“Add Warehouse”</span> button
                    and above the search options of the page.
                  </li>
                  <li className="mb-2">
                    Once you select it, it will open a file explorer window,
                    asking where to put the file in.
                  </li>
                </ol>
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
                    Warehouse
                  </span>{" "}
                  table and their details.
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="font-bold">“Save”</span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the Downloads section, to view your PDF file, or
                  you can go into the file explorer location where you uploaded
                  the PDF file and open it to view it as well.
                </p>
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  [Placeholder for Warehouse table PDF example image]
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] ">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing the Tasks of a Warehouse
                </h3>
                <p className="mb-4">
                  If you want to view the associated tasks regarding a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  then you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you wish to view the tasks of. A small white box will show
                    up with a list of options you can go to.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vttw && (
                    <GatsbyImage
                      image={vttw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    Click on the <span className="font-bold">“Tasks”</span>{" "}
                    button which will be second and last on the list, below the{" "}
                    <span className="font-bold">“View”</span> button.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vttw && (
                    <GatsbyImage
                      image={vttw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    It will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks of the Warehouse”
                    </span>{" "}
                    page.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {totw && (
                    <GatsbyImage
                      image={totw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  Listed here should all the tasks that are in relation to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  you selected. You can perform tasks-related matter in this
                  page.
                </p>
                <p className="mb-4">
                  Now that we have checked out how to get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks of the Warehouse”
                  </span>{" "}
                  page of a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , now let’s show you how to view the details of a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Warehouse
                </h3>
                <p className="mb-4">
                  You can view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry within{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>{" "}
                  and confirm the extra details about the information you
                  entered. There are currently 2 methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry in the table.
                </p>
                <p className="mb-4">
                  Here is how you can view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  :
                </p>
                <p className="mb-4">
                  The first method to viewing a warehouse entry in the table, is
                  just by selecting the warehouse name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse name”
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you want to view.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {ware && (
                    <GatsbyImage
                      image={ware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  The second method to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry in the table, is just by selecting the{" "}
                  <span className="font-bold">“Three dots”</span> icon, then
                  clicking the <span className="font-bold">“View”</span> button
                  in the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you wish to view.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      “extra options”
                    </span>{" "}
                    menu show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  These are the two methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry. Both do not have any differences in what details they
                  show.
                </p>
                <p className="mb-4">
                  You can also print out, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that you know how to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , let us now check out how to edit a warehouse.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Warehouse
                </h3>
                <p className="mb-4">
                  If you want to either update or correct some information of a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  then you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  entry in the table.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that you want to edit.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {eaw && (
                    <GatsbyImage
                      image={eaw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      “extra options”
                    </span>{" "}
                    menu show.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you want to edit, you can then select the{" "}
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
                  {ware && (
                    <GatsbyImage
                      image={ware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Edit Warehouse”
                    </span>{" "}
                    page.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    Here you can change and update any of the fields you need to
                    edit.
                  </li>
                  <li className="mb-2">
                    Once you have made your changes and edits, you can then
                    select the <span className="font-bold">“Submit”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will then take you back to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you edited so you can review your changes and edits.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  Now that you know how to edit your warehouse, now let’s check
                  out how to download your warehouse.
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] ">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Warehouse
                </h3>
                <p className="mb-4">
                  If you wish to download only a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  and its details, you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you wish to download the details of, either by browsing for
                    it or searching for it.
                  </li>
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that you want to download the details of.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {daw && (
                    <GatsbyImage
                      image={daw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      “extra options”
                    </span>{" "}
                    menu show.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
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
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {ware && (
                    <GatsbyImage
                      image={ware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you want to download, you can then select the{" "}
                    <span className="font-bold">“Download”</span> button,
                    located at the top-right corner of the page, above both the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button and the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    It will then open a file explorer window, asking you where
                    to download the PDF file: The PDF file will contain only the
                    details related to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected for download.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                  <li className="mb-2">
                    When you have found a suitable place for your PDF file, then
                    you can press the <span className="font-bold">“Save”</span>{" "}
                    button, located on the bottom right of your file explorer,
                    so that it saves the PDF file to that folder.
                  </li>
                  <li className="mb-2">
                    Now you can either go to the top-right hand of your browser
                    and go into the Downloads section, to view your PDF file, or
                    you can go into the file explorer location where you
                    uploaded the PDF file and open it to view it as well.
                  </li>
                </ol>
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                   {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/> */}
                <p className="mb-4">
                  [Placeholder for Warehouse PDF example image]
                </p>

                <div className="flex items-center space-x-4 pt-5">
                  <h2 className="text-primary-activelink dark:text-primary-pheading font-bold font-montserrat font-semibold text-[22px] ">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Warehouse
                </h3>
                <p className="mb-4">
                  If you want to delete a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  from the table within{" "}
                  <span className="text-primary-activelink font-bold">FMS</span>
                  , you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“Three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that you want to delete.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {delaw && (
                    <GatsbyImage
                      image={delaw}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      “extra options”
                    </span>{" "}
                    menu show.
                  </li>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                  {W && (
                    <GatsbyImage
                      image={W}
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
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you selected.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Warehouse”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you want to delete, you can then select the{" "}
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
                     <div className="pl-13 pt-8 flex justify-center">
                  {vware && (
                    <GatsbyImage
                      image={vware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                  <li className="mb-2">
                    A dialogue box will appear to confirm whether you want to
                    delete the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    or not.
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
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    page where the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    entry will then be deleted from the table.
                  </li>
                     <div className="pl-13 pt-8 flex justify-center">
                  {ware && (
                    <GatsbyImage
                      image={ware}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
                </ol>
                <p className="mb-4">
                  Now that we have shown how to delete an entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  table, we have now covered all the features in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse”
                  </span>{" "}
                  page. We can now continue onward and cover the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Inventory”
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

export default harvest;
export const Head = () => (
  <>
    <title>Warehouse | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
