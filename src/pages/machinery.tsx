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
      M: file(relativePath: { eq: "M.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ANM: file(relativePath: { eq: "ANM.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      PI: file(relativePath: { eq: "PI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      IDEN: file(relativePath: { eq: "IDEN.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SPEC: file(relativePath: { eq: "SPEC.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      PIN: file(relativePath: { eq: "PIN.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AD: file(relativePath: { eq: "AD.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SM: file(relativePath: { eq: "SM.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DM: file(relativePath: { eq: "DM.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VM: file(relativePath: { eq: "VM.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VM1: file(relativePath: { eq: "VM1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      MU: file(relativePath: { eq: "MU.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const M = getImage(data.M);
  const ANM = getImage(data.ANM);
  const PI = getImage(data.PI);
  const IDEN = getImage(data.IDEN);
  const SPEC = getImage(data.SPEC);
  const PIN = getImage(data.PIN);
  const AD = getImage(data.AD);
  const SM = getImage(data.SM);
  const DM = getImage(data.DM);
  const VM = getImage(data.VM);
  const VM1 = getImage(data.VM1);
  const MU = getImage(data.MU);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu max-w-7xl w-full px-4  text-justify">
             <div className="flex items-center pt-5">
                             <div className="hidden lg:block">
                               <TextToSpeech textSelector=".acu" />
                             </div>
                             <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                               Starting Guide for Machinery:
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
                  In this Machinery module, you can keep track of the
                  machineries available in your farm. One of your most vital
                  tools is your machinery, which enables you to operate more
                  efficiently and accomplish more. Regular maintenance is
                  essential to preventing malfunctions and keeping everything
                  functioning properly. With its ability to log hours,
                  maintenance history, and expenses, Farm Management System
                  simplifies machinery management. You can add, edit, view,
                  search, delete the machinery.
                </p>
              
              <div className="pl-13 pt-8 flex justify-center">
                {M && (
                  <GatsbyImage
                    image={M}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="step1 pt-5">
                <TextToSpeech textSelector=".step1" />
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="anm pt-5">
                <TextToSpeech textSelector=".anm" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                  Add New Machinery:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <p>For adding new machinery, follow the following steps:</p>
                  Click on{" "}
                  <span className="text-primary-activelink font-bold">
                    "Add New"
                  </span>
                  button.
                  <p>Enter the required details the fields are.</p>
                  <ul className="list-disc text-primary-paragraph2">
                    <li className="text-primary-paragraph2 font-bold">
                      Basic Information:
                    </li>

                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Name:
                        </span>{" "}
                        Name of the equipment.{" "}
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Type:
                        </span>{" "}
                        What type is the equipment. The types can be
                      </li>
                      <ul className="text-primary-activelink font-bold">
                        <li>Machinery</li>
                        <li>Tools</li>
                        <li>Vehicle</li>
                        <li>Irrigation</li>
                        <li>Storage</li>
                        <li>Harvesting</li>
                        <li>Planting</li>
                        <li>Fertilizing</li>
                      </ul>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Status:
                        </span>{" "}
                        What is the status of the equipment. Either its
                        available or on Maintenance.
                      </li>
                      <div className="pl-13 pt-8 flex justify-center">
                        {ANM && (
                          <GatsbyImage
                            image={ANM}
                            alt="Startups illustration"
                            className="bg-white w-[1000.58px] "
                          />
                        )}
                      </div>
                      <br />
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="pi pt-5">
                <TextToSpeech textSelector=".pi" />
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <ul className="list-disc text-primary-paragraph2">
                    <li className="text-primary-paragraph2 font-bold">
                      Parking Information:
                    </li>
                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Warehouse:
                        </span>{" "}
                        In which warehouse the machinery will be parked.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Parking Slot:
                        </span>{" "}
                        In which parking slot of the warehouse, the machinery
                        will be parked.
                      </li>
                    </ul>
                  </ul>
                  <br />
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {PI && (
                      <GatsbyImage
                        image={PI}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                </div>
              </div>
              <br />

              <div className="i pt-5">
                <TextToSpeech textSelector=".i" />
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <ul className="list-disc text-primary-paragraph2">
                    <li>
                      Identification: How will the machinery be identified.
                    </li>
                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Model:
                        </span>{" "}
                        What is the model of the machinery.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Model Year:
                        </span>{" "}
                        What is the model year of the machinery.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          ID / Plate No:
                        </span>{" "}
                        What is the id/plate no of the machinery.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Serial No:
                        </span>{" "}
                        Enter the serial number of the machinery.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {IDEN && (
                  <GatsbyImage
                    image={IDEN}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <div className="s pt-5">
                <TextToSpeech textSelector=".s" />
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <ul className="list-disc text-primary-paragraph2">
                    <li className="text-primary-paragraph2 font-bold">
                      Specifications:
                    </li>
                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Engine:
                        </span>{" "}
                        Details about the engine type, power output, and
                        specifications.{" "}
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Transmission:
                        </span>{" "}
                        Information on the transmission system, including type
                        and gear configuration.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Track Usage:
                        </span>{" "}
                        The primary usage of the track, such as on-road,
                        off-road, or specialized tracks.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {SPEC && (
                  <GatsbyImage
                    image={SPEC}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />

              <div className="pi pt-5">
                <TextToSpeech textSelector=".pi" />
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <ul className="list-disc text-primary-paragraph2">
                    <li className="text-primary-paragraph2 font-bold">
                      Purchase Information
                    </li>
                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Ownership Status:
                        </span>{" "}
                        Current ownership status, indicating whether the vehicle
                        is owned or leased.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Date Acquired:
                        </span>{" "}
                        The date the vehicle was acquired, indicating when it
                        was purchased or leased.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Purchase Price:
                        </span>{" "}
                        The price paid for the vehicle at the time of
                        acquisition.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Estimated Value:
                        </span>{" "}
                        Current estimated market value of the vehicle.
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {PIN && (
                  <GatsbyImage
                    image={PIN}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <div className="ad pt-5">
                <TextToSpeech textSelector=".ad" />
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <ul className="list-disc text-primary-paragraph2">
                    <li className="text-primary-paragraph2 font-bold">
                      Additional Details
                    </li>
                    <ul className="text-primary-paragraph2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Link To Manual:
                        </span>{" "}
                        A hyperlink to the product’s user manual or
                        instructional guide.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Description:
                        </span>{" "}
                        A brief overview of the vehicle, highlighting key
                        features and purpose.
                      </li>
                    </ul>
                  </ul>
                  <p>Click on the submit button.</p>
                  <p>New Machinery will be added successfully.</p>
                </div>
              </div>
              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {AD && (
                  <GatsbyImage
                    image={AD}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <div className="step2 pt-5">
                <TextToSpeech textSelector=".step2" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="sm pt-5">
                <TextToSpeech textSelector=".sm" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Search Machinery:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can search the machinery from the list of machineries of
                  locations present in the system. You can search based on
                  either:
                  <br />
                  <ul className="list-disc">
                    <li>
                      <p>
                        <span className="text-primary-pheading font-bold">
                          Name:
                        </span>{" "}
                        You can search by the name of machinery.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span className="text-primary-pheading font-bold">
                          Status:
                        </span>{" "}
                        You can search by the status of the machinery. The
                        status of machinery can be:
                        <ul className="text-primary-activelink font-bold">
                          <li>Available</li>
                          <li>Maintenance</li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <span className="text-primary-pheading font-bold">
                        Modal:
                      </span>{" "}
                      You can search by the model of the machinery.
                    </li>
                    <li>
                      <span className="text-primary-pheading font-bold">
                        Number:
                      </span>{" "}
                      You can search by the number of the machinery.
                    </li>
                  </ul>
                  <br />
                  <p>
                    Then click on the Search button. Also, you can click on the
                    refresh button to refresh the data.
                  </p>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {SM && (
                  <GatsbyImage
                    image={SM}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="step3 pt-5">
                <TextToSpeech textSelector=".step3" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="em pt-5">
                <TextToSpeech textSelector=".em" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Edit Machinery:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If any machinery details you want to change, you can easily
                  edit the details. For that:
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-bold">
                    <li>Click on the edit icon</li>
                    <li>Machinery details screen will open.</li>
                    <li>Click on the field you want to edit.</li>
                    <li>Make changes in the fields</li>
                    <li>Click on submit button.</li>
                    <li>
                      Machinery details will be edited/updated successfully.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="step4 pt-5">
                <TextToSpeech textSelector=".step4" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="dm pt-5">
                <TextToSpeech textSelector=".dm" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Delete Machinery:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If you no longer need any machinery and wants to delete the
                  machinery or the machinery you have sold and does not belong
                  to you, you can easily do so.
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-bold">
                    <li>
                      Click on the delete icon against the row you want to
                      delete in the machinery table.
                    </li>
                    <li>
                      A dialogue box will appear to confirm whether you want to
                      delete or not.
                    </li>
                    <li>Click on delete button.</li>
                    <li>Warehouse will be deleted successfully.</li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {DM && (
                  <GatsbyImage
                    image={DM}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="step5 pt-5">
                <TextToSpeech textSelector=".step5" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="vm pt-5">
                <TextToSpeech textSelector=".vm" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                  View Machinery:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can easily view the details of the machinery. For that:
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-bold">
                    <li>Hover on three dots.</li>
                    <li>Click on view button.</li>
                    <li>Click on delete button.</li>
                    <li>Macchinery details page will open.</li>
                    <li>
                      Click on print button if you want to print the details of
                      the machinery.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VM && (
                  <GatsbyImage
                    image={VM}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VM1 && (
                  <GatsbyImage
                    image={VM1}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="step6 pt-5">
                <TextToSpeech textSelector=".step6" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 6
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="mu pt-5">
                <TextToSpeech textSelector=".mu" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Machinery Usage:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  Machinery usage can be tracked easily. You can see where and
                  for how much time the machinery was used. Also, you can get an
                  overview of weekly, monthly and yearly usage for all the
                  machines available all at one place. For checking machinery
                  usage:
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-bold">
                    <li>Go to machinery tab:</li>
                    <li>
                      On top left corner, there will be a button of machinery
                      usage.
                    </li>
                    <li>Click on the button.</li>
                    <li>Machinery Usage Report will open.</li>
                    <li>
                      You can get an analysis and overview of how your
                      machineries are being used over specific time period. You
                      can also see which machinery is the most used one and
                      which one needs more attention.
                    </li>
                    <li>
                      Click on the dropdown to see weekly, monthly and yearly
                      usage of the machineries.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {MU && (
                  <GatsbyImage
                    image={MU}
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

export default machinery;
export const Head = () => (
  <>
    <title>Machinery | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
