import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { AppLayout } from "../components/AppShell/AppLayout";
import TextToSpeech from "../components/TextToSpeech";
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
const addorchards = () => {
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
                Starting Guide for Farm Orchard:
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
              In the Orchard process, you will enter the details of the orchards
              to be planted, ensuring all the necessary information is recorded
              for effective orchard management. This includes selecting the
              orchard type, specifying the Orchard location, and entering
              details about the seeds, such as variety and source. Additional
              orchard details include the Orchard plant depth, spacing, and any
              special instructions can also be provided. You can also provide
              estimated harvest details, including the expected harvest date and
              anticipated yield. By accurately recording these details, farmers
              can monitor an orchard progress and optimize growth conditions for
              better yields. Moreover, you can add fertilizers and chemicals
              that have been applied on the orchards as well as, field
              inspection details can also be added to the system. The details of
              these will be found in the later sections of this chapter. Here is
              what the Page looks like:
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
              Adding Orchards:
            </h2>

            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              For adding orchard, you first need to have a set of items ready,
              so that there will not be any issues throughout the process:
              <br />
              <br />
              You need to have a farm location, that is set as a{" "}
              <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                "Fields"
              </span>
              type You can learn more by going to the Farm Locations Page
              chapter.
              <br />
              Now, once you have all the above required items ready, you can
              continue to making an Orchard entry in the Farm Management System.
              To add an Orchard, You first start by:
              <br />
              Click on the{" "}
              <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                ’+’ Add Orchard
              </span>{" "}
              button, located on the top-left.
              <br />
              corner of the page, to the right of the{" "}
              <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                “Download Table”
              </span>{" "}
              button and above the search options.
              <br />{" "}
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
              <p>
                It will open the{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Add Orchard”
                </span>{" "}
                page.
              </p>
              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {AL && (
                  <GatsbyImage
                    image={AL}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <ul>
                <li>
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </li>
                <li>
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Plant Type and Location”
                  </span>{" "}
                  step:
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {AL && (
                    <GatsbyImage
                      image={AL}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Plant Type and Location”
                  </span>{" "}
                  step is where you input in what orchard is being planted, in
                  which farm location that is within FMS, and finally how is the
                  orchard being planted on the farm location. There are 7 fields
                  to fill, depending on which options you select.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Plant Type”
                  </span>{" "}
                  field: Enter in what plant is being grown on the farm
                  location. You can put in the name of the plant type and it’ll
                  automatically show in a box below which crop you are growing.
                  Here are the options:
                </li>
                <ul className="list-disc list-inside dark:text-[#D5D5D5] text-primary-activelink font-semibold text-[18px]">
                  <li>Apple </li>
                  <li>Apricot</li>
                  <li>Banana</li>
                  <li>Grapes</li>
                  <li>Guava</li>
                  <li>Lemon</li>
                  <li>Mango</li>
                  <li>Orange</li>
                  <li>Papaya</li>
                  <li>Peach</li>
                  <li>Pineapple</li>
                  <li>Plum</li>
                </ul>

                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Location”
                  </span>{" "}
                  field: Enter in which farm location that is within FMS will
                  grow the orchard. The options are made up of farm locations
                  that are within the Farm Management System.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Total Land Area”
                  </span>{" "}
                  field: This is a non-editable field. It will take the size of
                  the farm location you set when making the farm location, this
                  field measures in acres.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Measurement Units”
                  </span>{" "}
                  field: Enter in which units of measurement will you be using
                  for the below fields. The options are:
                </li>
                <ul className="text-primary-activelink font-semibold list-disc dark:text-[#D5D5D5]">
                  <li>Inch</li>
                  <li>Feet</li>
                  <li>Meter</li>
                  <li>Centimeter</li>
                </ul>
                <br />
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Inter-plant Distance”
                  </span>{" "}
                  field: Enter in the distance between each of the orchard
                  plants that are on the farm. Please enter based on the
                  measurement unit set earlier.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Inter-row Distance”
                  </span>{" "}
                  field: Enter in the distance between each row of orchard
                  plants that are on the farm. Please enter based on the
                  measurement unit set earlier.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “No. of Plants”
                  </span>{" "}
                  field: Enter in the number of orchard plants that are or are
                  going to be on the farm.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                    “Land Area”
                  </span>{" "}
                  field: This is a non-editable field. It will take the inputs
                  from the “Inter-plant distance” field, “Inter-row distance”
                  field and the “No. of plants” field to determine the amount of
                  land area it will take. It is measured in acres.
                </li>
              </ul>
              <p>
                {" "}
                All the fields listed above in this step are required and need
                to filled.
              </p>
            </div>

            <br />
            <br />

            <div className="text-primary-paragraph2 pt-5 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              <p className="text-primary-paragraph2 font-bold dark:text-[#D5D5D5]">
                Next, we are going to look at the{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Pre-planting”
                </span>{" "}
                step:
                <br />
                The{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Pre-planting”
                </span>{" "}
                step is where you fill in the details regarding the pre-planting
                process. There are 2 required fields to fill, however more
                fields will be added, depending on your choices.
              </p>
              <p>
                The{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Cost”
                </span>{" "}
                field: Enter in how the Root Stock has been bought for the
                Orchard farm. Select 1 of 2 options:
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {LD && (
                  <GatsbyImage
                    image={LD}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <p>
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Created”
                </span>{" "}
                : When you select this option, It means your root stock are
                created by you and managed by you. It will add 1 extra option to
                the step.
              </p>
              <p>
                The{" "}
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Propagation Date”
                </span>{" "}
                field: Enter in the date and time of when the propagation will
                begin for the Orchard plant.
              </p>
              <p>
                <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  “Purchased”
                </span>{" "}
                : When you select this option, It means your root stock are
                purchased from a vendor. It will add 3 extra options to the
                step.
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

export default addorchards;
