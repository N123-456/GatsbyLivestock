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
      W: file(relativePath: { eq: "W.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      shed: file(relativePath: { eq: "shed.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      swa: file(relativePath: { eq: "swa.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dwa: file(relativePath: { eq: "dwa.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vwa: file(relativePath: { eq: "vwa.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const W = getImage(data.W);
  const shed = getImage(data.shed);
  const swa = getImage(data.swa);
  const dwa = getImage(data.dwa);
  const vwa = getImage(data.vwa);

  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center ">
            <div className="acu max-w-7xl w-full px-4 lg:px-4  text-justify">
                 <div className="flex items-center pt-5">
                                 <div className="hidden lg:block">
                                   <TextToSpeech textSelector=".acu" />
                                 </div>
                                 <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                                   Starting Guide for Warehouse:
                                 </h2>
                               </div>
                               <div className="flex items-center pt-5">
                                 <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                                   Introduction
                                 </h2>
                                 <div className=" lg:hidden">
                                   <TextToSpeech textSelector=".acu" />
                                 </div>
                               </div>
           

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10">
                A warehouse is a storage facility where goods, equipment, or
                produce are kept safely before use or distribution. It helps
                organize and manage items efficiently, ensuring they are
                protected from damage or spoilage. Warehouses are often used to
                store harvested crops, seeds, tools, or farming supplies. Proper
                tracking of stock levels helps avoid shortages or excess
                inventory. Items in a warehouse can be categorized, labelled,
                and retrieved easily when needed.
                <br />
                <br /> This improves overall farm management and ensures timely
                access to essential materials. For adding warehouse, you first
                need to add a farm location. If you have not yet have farm
                location added, add the farm location first. See the user guide
                for adding farm location. The details are provided in the above
                part of the document.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {W && (
                  <GatsbyImage
                    image={W}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
      <div className="s1 pt-5">
                <TextToSpeech textSelector=".s1" />
              <div className="flex items-center space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div></div>
                    <div className="aw pt-5">
                              <TextToSpeech textSelector=".aw" />
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                Add Warehouse:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                <p>For adding harvest details:</p>
                Click on{" "}
                <span className="text-primary-activelink font-semibold">
                  "Add Warehouse"
                </span>
                button.
                <p>Enter the required details including.</p>
                <p>
                  Name of the warehouse, location where the warehouse will be
                  located.
                </p>
                <p>
                  Add storage racks and their capacity to store different
                  inventory items and vehicles in an organized way.
                </p>
                <p>There are four options:</p>
                <br />
                      <div className="shed pt-5">
                                <TextToSpeech textSelector=".shed" />
                <h2 className="text-primary-activelink font-semibold text-[22px] font-montserrat pt-5 ">
                  Shed:
                </h2>
                <p className="pt-5">
                  The Shed section is used for managing vehicle storage and
                  tools. It provides space for storing vehicles and repair
                  tools. Users can maintain equipment necessary for vehicle
                  repairs, ensuring smooth vehicle operations.{" "}
                </p></div>
                <div className="pl-13 pt-8 flex justify-center">
                  {shed && (
                    <GatsbyImage
                      image={shed}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
              </div></div>
                    <div className="s2 pt-5">
                              <TextToSpeech textSelector=".s2" />
              <div className="flex items-center space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div></div>
                    <div className="sw pt-5">
                              <TextToSpeech textSelector=".sw" />
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                Search Warehouse:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                You can search the warehouse from the list of warehouse of
                locations present in the system. You can search based on either:
                <br />
                <p>Warehouse Name: You can search by warehouse name.</p>
                <br />
                <p>
                  Then click on the Search button. Also, you can click on the
                  refresh button to refresh the data.
                </p></div></div>
                <div className="pl-13 pt-8 flex justify-center">
                  {swa && (
                    <GatsbyImage
                      image={swa}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                      <div className="s3 pt-5">
                                <TextToSpeech textSelector=".s3" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div></div>
                      <div className="ew pt-5">
                                <TextToSpeech textSelector=".ew" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Edit Warehouse:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If any warehouse detail you want to change, you can easily
                  edit the details. For that:
                  <br />
                  <br />
                  <ul className=" list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the edit icon against the warehouse you want to
                      edit.
                    </li>
                    <li>Warehouse details screen will open.</li>
                    <li>Click on the field you want to edit.</li>
                    <li>Make changes in the fields</li>
                    <li>Click on submit button.</li>
                    <li>
                      Warehouse details will be edited/updated successfully.
                    </li>
                  </ul>
                </div></div>

                      <div className="a4 pt-5">
                                <TextToSpeech textSelector=".a4" />
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div></div>
                      <div className="dw pt-5">
                                <TextToSpeech textSelector=".dw" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Delete Warehouse:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If you want to delete any warehouse, you can easily do so.
                  <br />
                  <br />
                  <ul className=" list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the delete icon against the row you want to
                      delete in the warehouse’s table.
                    </li>
                    <li>
                      A dialogue box will appear to confirm whether you want to
                      delete or not.
                    </li>
                    <li>Click on delete button.</li>
                    <li>Warehouse will be deleted successfully.</li>
                  </ul>
                </div></div>
                <div className="pl-13 pt-8 flex justify-center">
                  {dwa && (
                    <GatsbyImage
                      image={dwa}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                      <div className="s5 pt-5">
                                <TextToSpeech textSelector=".s5" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div></div>
                      <div className="vw pt-5">
                                <TextToSpeech textSelector=".vw" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  View Warehouse:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can easily view the details of the warehouse. For that:
                  <br />
                  <br />
                  <ul className=" list-disc text-primary-activelink font-semibold">
                    <li>Hover on three dots.</li>
                    <li>Click on view button.</li>
                    <li>Click on delete button.</li>
                    <li>Warehouse details page will open.</li>
                    <li>
                      Click on print button if you want to print the details of
                      the warehouse.
                    </li>
                  </ul>
                </div></div>
                <div className="pl-13 pt-8 flex justify-center">
                  {vwa && (
                    <GatsbyImage
                      image={vwa}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
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

export default harvest;
export const Head = () => (
  <>
    <title>Warehouse | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
