import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import { SEO } from "../components/SEO";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "./../components/DarkModeToggle/DarkModeToggle";

const addlocation = () => {
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
      fl: file(relativePath: { eq: "fl.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AL: file(relativePath: { eq: "AL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      LD: file(relativePath: { eq: "LD.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      LI: file(relativePath: { eq: "LI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      MB: file(relativePath: { eq: "MB.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      UI: file(relativePath: { eq: "UI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SL: file(relativePath: { eq: "SL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DL: file(relativePath: { eq: "DL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VL: file(relativePath: { eq: "VL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VL2: file(relativePath: { eq: "VL2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const fl = getImage(data.fl);
  const AL = getImage(data.AL);
  const LD = getImage(data.LD);
  const LI = getImage(data.LI);
  const MB = getImage(data.MB);
  const UI = getImage(data.UI);
  const SL = getImage(data.SL);
  const DL = getImage(data.DL);
  const VL = getImage(data.VL);
  const VL2 = getImage(data.VL2);

  return (
    <AppLayout>
      <PrivateRoute>
        <div className="acu">
          <div className="text-justify lg:pr-4 hide-scrollbar">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <TextToSpeech textSelector=".acu" />
              </div>
              <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#D5D5D5]">
                Starting Guide for Farm Locations:
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
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:pl-10 dark:text-[#D5D5D5]">
              Farm Locations are the locations that are owned by you or where
              you can plant your crops. So, for that you need to Add the
              location first. After that, on that particular location you can
              add the details of your farm. The locations can be of any type
              like fields, building etc. You can easily manage all your farm
              locations all at one place. For adding planting, warehouse and
              tasks related to land you first need to have a farm location. The
              location is an asset of the farmer. When a location is added, a
              transaction is created against that location. That can be viewed
              in the financial tab in general ledger table.
            </p>

            <div className="pl-13 pt-8 flex justify-center">
              {fl && (
                <GatsbyImage
                  image={fl}
                  alt="Startups illustration"
                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />

            <div className="flex items-center pt-5 space-x-2">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                Step 1
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

            <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
              Add Location:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              For adding a location:
              <br />
              <br />
              Click on{" "}
              <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                "Add location"
              </span>
              button.
              <br />
              Enter the required information.
              <br />
              First enter the{" "}
              <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                name and type
              </span>
              : of the location. The type of location can be:
              <br />
              <br />{" "}
              <ul>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Animal Enclosure:
                  </span>
                  An animal enclosure is a designated space designed to house
                  and safely contain animals, providing them with a suitable
                  environment for living and movement.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Buffer Zones:{" "}
                  </span>
                  Buffer zones are designated areas created to separate and
                  protect one region from another, often used to reduce conflict
                  or impact.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Buildings :{" "}
                  </span>
                  Buildings are structures designed for specific purposes, such
                  as housing, storage, or operations.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Farm Boundaries :{" "}
                  </span>
                  Farm boundaries are defined perimeters that mark the extent of
                  a farm's land.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Fields:{" "}
                  </span>
                  Fields are open areas of land used for planting crops or
                  grazing livestock.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Greenhouse:{" "}
                  </span>
                  A greenhouse is a controlled-environment structure designed
                  for growing plants.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Grow Room:{" "}
                  </span>
                  A grow room is an indoor space designed for cultivating plants
                  under controlled conditions.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Irrigation Zone:{" "}
                  </span>
                  Irrigation zones are designated areas within a farm that
                  receive water through a specific irrigation system.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Paddock:{" "}
                  </span>
                  A paddock is an enclosed area of land used for grazing or
                  exercising livestock.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Pasture:{" "}
                  </span>
                  Pasture is land covered with grass or other vegetation used
                  for grazing livestock.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Other:{" "}
                  </span>
                  Any other type other than the above mentioned..
                </li>
              </ul>
            </div>

            <div className="pl-13 pt-8 flex justify-center">
              {AL && (
                <GatsbyImage
                  image={AL}
                  alt="Startups illustration"
                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />

            <div className="text-primary-paragraph2 pt-5 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              <p className="text-primary-paragraph2 font-bold dark:text-[#D5D5D5]">
                Enter the required information.
              </p>
              <br />
              <ul className="text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                <li>Province</li>
                <li>Division</li>
                <li>District</li>
                <li>Tehsil</li>
                <li>Address</li>
              </ul>
              <div className="pl-13 pt-8 flex justify-center">
                {LD && (
                  <GatsbyImage
                    image={LD}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
            </div>

            <br />
            <br />

            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal dark:text-[#D5D5D5] lg:px-10">
              <p className="text-primary-paragraph2 font-bold dark:text-[#D5D5D5]">
                Enter the additional information including:
              </p>
              <br />
              <ul className="text-primary-subheading font-normal text-[18px] font-montserrat pt-5 dark:text-[#D5D5D5]">
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Ownership Status
                  </span>
                  : What is the ownership status of the land. Whether it is:
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Self Owned
                  </span>
                  : If the land is self owned then enter what is the estimated
                  cost of the land.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Crop Sharing
                  </span>
                  : If the land ownership status is crop sharing, enter the crop
                  sharing percentage and upload the terms of share tenancy
                  document.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Leased
                  </span>
                  : If the land is on lease, enter the annual lease rate.
                </li>
                <li>Select the soil type of the land.</li>
                <li>
                  Choose irrigation method: how your land is irrigated. Either
                  the land is:
                </li>
              </ul>
              <ul className="text-primary-activelink list-disc font-semibold pl-[15px] dark:text-[#D5D5D5]">
                <li>Rainfed</li>
                <li>By canal</li>
                <li>By Tube Wells</li>
                <li>By Dug Wells</li>
              </ul>
            </div>
            <div className="pl-13 pt-8 flex justify-center">
              {LI && (
                <GatsbyImage
                  image={LI}
                  alt="Startups illustration"
                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />

            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              <p className="text-primary-paragraph2 font-semibold dark:text-[#D5D5D5]">
                Choose the location boundaries:
              </p>
              <br />
              <h1 className="font-bold dark:text-[#D5D5D5]">
                Mark Boundaries:{" "}
              </h1>
              <ul className="text-primary-subheading font-normal text-[18px] font-montserrat dark:text-[#D5D5D5]">
                <li>
                  Click on the{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Mark Boundaries”
                  </span>{" "}
                  button. A satellite imagery map will open.
                </li>
                <li>Enter the location name in the search bar.</li>
                <li>Zoom In or zoom out to reach the exact location.</li>
                <li>
                  After reaching the desired location mark the boundaries of
                  your farm location.
                </li>
                <li>
                  Additionally, you can Upload KML file to get the location
                  marked on the map.
                </li>
                <li>
                  After the boundaries are marked, click on the save button.
                </li>
              </ul>
              <div className="pl-13 pt-8 flex justify-center">
                {MB && (
                  <GatsbyImage
                    image={MB}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />
              <ul className="pt-4 list-disc">
                <li>
                  Optionally, you can upload the image of your farm location.
                </li>
                <li>
                  When you will mark the boundaries, automatically area of your
                  land will be calculated.
                </li>
                <li>You can change the unit of area as per your choice.</li>
              </ul>
              <div className="pl-13 pt-8 flex justify-center">
                {UI && (
                  <GatsbyImage
                    image={UI}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
            </div>

            <br />
            <br />

            <div className="flex items-center pt-5 space-x-4 ">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                Step 2
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10 dark:text-[#D5D5D5]">
              Search Location:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              You can search the location from the list of farms of locations
              present in the system. You can search based on either:
              <br />
              <br />
              <p>
                <span className="text-primary-pheading font-bold">Name:</span>{" "}
                You can search by the name of the location.
              </p>{" "}
              <p>
                <span className="text-primary-pheading font-bold">Type:</span>{" "}
                You can search based on particular type of the location which
                can be:
              </p>
              <br />
              <ul className="pl-[15px] text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                <li>All</li>
                <li>Animal Enclosures</li>
                <li>Buffer Zones</li>
                <li>Buildings</li>
                <li>Farm Boundaries</li>
                <li>Fields</li>
                <li>Greenhouse</li>
                <li>Grow Room</li>
                <li>Irrigation Zones</li>
                <li>Paddock</li>
                <li>Pasture</li>
                <li>Others</li>
              </ul>
              <p>
                Then click on the Search button. Also, you can click on the
                refresh button to refresh the data.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {SL && (
                  <GatsbyImage
                    image={SL}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
            </div>

            <br />
            <br />

            <div className="flex items-center pt-5 space-x-4 ">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                Step 3
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10 dark:text-[#D5D5D5]">
              Edit Location:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              If any location details changes, you can easily edit the details.
              For that:
              <br />
              <br />
              <ul className="pl-[15px] text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                <li>
                  Click on the edit icon against the location you want to edit.
                </li>
                <li>Location details screen will open.</li>
                <li>Click on the field you want to edit.</li>
                <li>Make changes in the fields</li>
                <li>Click on submit button.</li>
                <li>Location details will be edited/updated successfully.</li>
              </ul>
            </div>

            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                Step 4
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>

            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10 dark:text-[#D5D5D5]">
              Delete Location:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              If you no longer need any location or that location no more
              belongs to you and wants to delete the location, you can easily do
              so.
              <br />
              <br />
              <ul className="pl-[15px] text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                <li>
                  Click on the delete icon against the row you want to delete in
                  the location’s table.
                </li>
                <li>
                  A dialogue box will appear to confirm whether you want to
                  delete or not.
                </li>
                <li>Click on delete button.</li>
                <li>Location will be deleted successfully.</li>
              </ul>
            </div>

            <div className="pl-13 pt-8 flex justify-center">
              {DL && (
                <GatsbyImage
                  image={DL}
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
              View Location:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              If you no longer need any location or that location no more
              belongs to you and wants to delete the location, you can easily do
              so.
              <br />
              <br />
              <ul className="pl-[15px] text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                <li>Hover on three dots.</li>
                <li>Click on view button.</li>
                <li>Click on delete button.</li>
                <li>Location details page will open.</li>
                <li>You can print the details of the location.</li>
              </ul>
            </div>

            <div className="pl-13 pt-8 flex justify-center">
              {VL && (
                <GatsbyImage
                  image={VL}
                  alt="Startups illustration"
                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <div className="pl-13 pt-8 flex justify-center">
              {VL2 && (
                <GatsbyImage
                  image={VL2}
                  alt="Startups illustration"
                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                />
              )}
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default addlocation;

export const Head = () => (
  <>
    <title>"Location | Farm Management System"</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
