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
          <div className="text-justify lg:pr-4 hide-scrollbar text-primary-paragraph">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <TextToSpeech textSelector=".acu" />
              </div>
              <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#D5D5D5]">
                Starting Guide for Orchard
              </h2>
            </div>
            <div className="flex items-center pt-5">
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                Introduction
              </h2>
              <div className="lg:hidden">
                <TextToSpeech textSelector=".acu" />
              </div>
            </div>
            <div className="lg:pl-10 text-[19px] text-primary-paragraph2 font-montserrat">
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                In the Orchard process, you will enter the details of the
                orchards to be planted, ensuring all the necessary information
                is recorded for effective orchard management.
                <br />
                This includes selecting the{" "}
                <span className="font-bold">Orchard type</span> , specifying the{" "}
                <span className="font-bold">Orchard location</span> , and
                entering details about the seeds, such as variety and source.
                Additional <span className="font-bold">Orchard details</span>{" "}
                include the Orchard plant depth, spacing, and any special
                instructions can also be provided. You can also provide{" "}
                <span className="font-bold">estimated harvest details</span> ,
                including the expected harvest date and anticipated yield.
                <br />
                By accurately recording these details, farmers can monitor an
                orchard progress and optimize growth conditions for better
                yields. Moreover, you can add fertilizers and chemicals that
                have been applied on the orchards as well as, field inspection
                details can also be added to the system. The details of these
                will be found in the later sections of this chapter. Here is
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
              <div className="flex items-center pt-5 space-x-4 ">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h1 className="text-primary-activelink font-semibold">
                Adding an Orchard
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                For adding orchard, you first need to have a set of items ready,
                so that there will not be any issues throughout the process:
              </p>
              <br />
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  You need to have a farm location, that is set as a “Fields”
                  type. You can learn more by going to the Farm Locations Page
                  chapter.
                </li>
                <p>
                  Now, once you have all the above required items ready, you can
                  continue to making an Orchard entry in the Farm Management
                  System. To add an Orchard, You first start by:
                </p>
                <br />
                <li>
                  Clicking on the{" "}
                  <span className="text-primary-activelink font-semibold">
                    “’+’ Add Orchard”
                  </span>{" "}
                  button, located on the top-left corner of the page, to the
                  right of the{" "}
                  <span className="text-primary-activelink font-semibold">
                    “download table”
                  </span>{" "}
                  button and above the{" "}
                  <span className="font-bold">“Search options”</span> .
                </li>
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
                <li>
                  It will open the{" "}
                  <span className="text-primary-pheading font-bold">
                    Add Orchard
                  </span>{" "}
                  page
                </li>
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
                <li>
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </li>
                <li>
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Plant type & Location”
                  </span>{" "}
                  step.
                </li>
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
                <ul className="list-disc">
                  <li>
                    The{" "}
                    <span className="font-bold">“Plant type & Location”</span>{" "}
                    step is where you input in what orchard is being planted, in
                    which farm location that is within FMS, and finally how is
                    the orchard being planted on the farm location. There are 7
                    fields to fill, depending on which options you select.
                  </li>
                  <br />
                  <p>
                    The <span className="font-bold">“Plant type”</span> field:
                    Enter in what plant is being grown on the farm location. You
                    can put in the name of the plant type and it’ll
                    automatically show in a box below which crop you are
                    growing. Here are the options:
                  </p>
                  <ul className="list-disc">
                    <li>Apple</li>
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
                  <p>
                    The <span className="font-bold">“Location”</span> field:
                    Enter in which farm location that is within FMS will grow
                    the orchard. The options are made up of farm locations that
                    are within the Farm Management System.
                  </p>
                  <p>
                    The <span className="font-bold">“Total Land Area”</span>{" "}
                    field: This is a non-editable field. It will take the size
                    of the farm location you set when making the farm location,
                    this field measures in acres.
                  </p>
                  <p>
                    The <span className="font-bold">“Measurement Units”</span>{" "}
                    field: Enter in which units of measurement will you be using
                    for the below fields. The options are:
                  </p>
                  <ul>
                    <li>Inch</li>
                    <li>Feet</li>
                    <li>Meter</li>
                    <li>Centimeter</li>
                  </ul>
                  <br />
                  <p>
                    The{" "}
                    <span className="font-bold">“Inter-plant distance”</span>{" "}
                    field: Enter in the distance between each of the orchard
                    plants that are on the farm. Please enter based on the
                    measurement unit set earlier.
                  </p>
                  <br />
                  <p>
                    The <span className="font-bold">“Inter-row distance”</span>{" "}
                    field: Enter in the distance between each row of orchard
                    plants that are on the farm. Please enter based on the
                    measurement unit set earlier.
                  </p>
                  <p>
                    The <span className="font-bold">“Land Area”</span> field:
                    This is a non-editable field. It will take the inputs from
                    the “Inter-plant distance” field, “Inter-row distance” field
                    and the “No. of plants” field to determine the amount of
                    land area it will take. It is measured in acres.
                  </p>
                  <br />
                  <li>
                    All the fields listed above in this step are required and
                    need to filled.
                  </li>
                </ul>
                <li>
                  Next, we are going to look at the{" "}
                  <span className="font-bold">“Pre-planting”</span> step:
                </li>
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
                <ul>
                  <li>
                    The <span className="font-bold">“Pre-planting”</span> step
                    is where you fill in the details regarding the pre-planting
                    process. There are 2 required fields to fill, however more
                    fields will be added, depending on your choices.
                  </li>
                  <p>
                    The <span className="font-bold">“Cost”</span> field: Enter
                    in how the Root Stock has been bought for the Orchard farm.
                    Select 1 of 2 options:
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
                  <p>
                    {" "}
                    <span className="font-bold">“Created”</span> : When you
                    select this option, It means your root stock are created by
                    you and managed by you. It will add 1 extra option to the
                    step.
                  </p>
                  <ul className="list-disc">
                    <li>
                      The <span className="font-bold">“Propagation date”</span>{" "}
                      field: Enter in the date and time of when the propagation
                      will begin for the Orchard plant.
                    </li>
                  </ul>
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
                </ul>
                <p>
                  {" "}
                  <span className="font-bold">“Purchased”</span> : When you
                  select this option, It means your root stock are purchased
                  from a vendor. It will add 3 extra options to the step.
                </p>
                <ul className="list-disc">
                  <li>
                    The <span className="font-bold">“Date of Purchase”</span>{" "}
                    field: Enter in the date and time of the of when the root
                    stock was purchased from the vendor.
                  </li>
                  <li>
                    The{" "}
                    <span className="font-bold">“Location of Purchase”</span>{" "}
                    field: Enter in the full address of the vendor that the root
                    stock was purchased from.
                  </li>
                  <li>
                    The <span className="font-bold">“Age of stock”</span> field:
                    Enter in the age of the root stock, when the root stock was
                    purchased. Please enter it in days.
                  </li>
                </ul>
                <p>
                  The <span className="font-bold">“Propagation”</span> field:
                  Enter in the propagation state of the root stock for the
                  Orchard. Select 1 of 2 options:
                </p>
                <ul>
                  <li>Budding</li>
                  <li>Grafting</li>
                </ul>
                <br />
                <li>
                  All the fields listed above in this step are required and need
                  to filled.
                </li>
                <br />
                <li>
                  Next, we are going to look at the{" "}
                  <span className="font-bold">“Planting details”</span> step:
                </li>
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
                <li>
                  The <span className="font-bold">“Planting details”</span> step
                  is where you enter in more details regarding the placement and
                  current state of the crop. There are 9 fields that are
                  required to be filled:
                </li>
                <p>
                  The <span className="font-bold">“Measurements Units”</span>{" "}
                  field: Select a unit of measurement that will be used in this
                  step. The options are:
                </p>
                <br />
                <ul>
                  <li>Inch</li>
                  <li>Feet</li>
                  <li>Meter</li>
                  <li>Centimeter</li>
                </ul>
                <br />
                <p>
                  The <span className="font-bold">“Planting Date”</span> field:
                  Enter in the date and time of when the orchard root stock was
                  planted.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Variety”</span> field: Enter
                  in the “variety” of the orchard plant type, (e.g. “White”
                  Chaunsa, “Malda” Chaunsa, etc).
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Pit Size”</span> field: Enter
                  in the size of the pit each orchard plant was placed in.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Planting Material”</span>{" "}
                  field: Enter in what planting material was used for the
                  orchard plant.
                </p>
                <br />
                <p>
                  The{" "}
                  <span className="font-bold">“Source Planting Material”</span>{" "}
                  field: Enter in the name of the company of vendor that has
                  provided the Planting material.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Growth Stage”</span> field:
                  Enter in the growth stage of the orchard plant at the current
                  time.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Seasoning Stage”</span>{" "}
                  field: Enter in the seasoning stage of the orchard plant at
                  the current time.
                </p>
                <br />
                <p>
                  The{" "}
                  <span className="font-bold">
                    “Automatically create tasks”
                  </span>{" "}
                  check: Enter in if you want to automatically generate tasks
                  for the orchard in the farm.
                </p>
                <br />
                <li>
                  All the fields listed above in this step are required and need
                  to filled.
                </li>
                <br />
                <li>
                  Lastly, we are going to look at the{" "}
                  <span className="font-bold">“Estimated Harvest Details”</span>{" "}
                  step:
                </li>
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
                <li>
                  The{" "}
                  <span className="font-bold">“Estimated Harvest Details”</span>{" "}
                  step is where you enter the details regarding the harvesting
                  of your orchard plants, and the unit price of your orchard
                  plant’s produce. There are 9 fields that are required to be
                  filled.
                </li>
                <br />{" "}
                <p>
                  The{" "}
                  <span className="font-bold">“Estimated Harvest Date”</span>{" "}
                  field: Enter in the estimated date and time for the harvest of
                  the orchard plants.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Days to Maturity”</span>{" "}
                  field: Enter in the number of days for the orchard plants to
                  achieve maturity. It will automatically fill based on the
                  “Estimated Harvest Date” field and other fields.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Harvest window (Days)”</span>{" "}
                  field: Enter in the number of days of the harvest window for
                  the orchard plants.
                </p>
                <br />
                <p>
                  The{" "}
                  <span className="font-bold">“Estimated Harvest Loss”</span>{" "}
                  field: Enter in the estimate for the loss of the harvested
                  orchard plants, make sure to enter it in percentage.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Harvest Units”</span> field:
                  Enter in the unit of measurement for the weight of the
                  harvested crops. Select 1 of 2 options: KG or Maund.
                </p>
                <br />
                <p>
                  The{" "}
                  <span className="font-bold">“Estimated yield per plant”</span>{" "}
                  field: Enter in the estimated yield of produce per orchard
                  plant from the farm location.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Unit Price”</span> field:
                  Enter in the unit price of the harvested produce of the
                  orchard plants.
                </p>
                <br />
                <p>
                  The <span className="font-bold">“Estimated Revenue”</span>{" "}
                  field: This is a non-editable field. It will take the inputs
                  from the “Estimated Harvest loss” field, the “Estimated yield
                  per plant” field and the “Unit Price” field.
                </p>
                <br />
                <p>
                  The{" "}
                  <span className="font-bold">“Estimated Average height”</span>{" "}
                  field: Enter in the average height of the orchard plants in
                  your farm location.
                </p>
                <br />
                <li>
                  All the fields listed above in this step are required and need
                  to filled.
                </li>
                <br />
                <li>
                  Once you have filled all the details that need to filled and
                  feel comfortable with your inputs. You can select the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Submit”
                  </span>{" "}
                  button.
                </li>
                <br />
                <li>
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page with your Orchard entry added to the Orchards table!
                </li>
              </ul>
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
              <p>
                Now that you have covered how to add an Orchard entry into FMS.
                Lets now check out the other features of the{" "}
                <span className="text-primary-activelink font-bold">
                  “Orchard”
                </span>{" "}
                page.
              </p>
              <br />
              <div className="flex items-center pt-5 space-x-4 ">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <br />
              <h1 className="text-primary-pheading font-bold font-montserrat text-[19px]">
                Overview of the Crop Activity Reports Page
              </h1>
              <br />
              <p className="font-montserrat text-[18px] ">
                The{" "}
                <span className="text-primary-pheading font-bold">
                  “Equipment Maintenance Reports”
                </span>{" "}
                page is where you can view the lists of the equipments and their
                statuses entered in the “Machinery/Tools” page such as a summary
                of the equipment that is owned by you or leased to you, the
                maintenance of the machines, scheduled or unscheduled, and
                finally the status of the equipments.
                <br /> You can set the Date range for the Report so that you can
                either see the overall progress over years or the progress
                within a month.
                <br /> You can also{" "}
                <span className="text-primary-activelink font-bold">
                  download
                </span>{" "}
                the Report to view at a later time.
                <br /> Here is what the{" "}
                <span className="text-primary-pheading font-bold">
                  “Equipment Maintenance Reports”
                </span>{" "}
                page look like:
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
              <p className=" text-[18px] dark:text-[#D5D5D5]">
                We are now going to cover each section of the{" "}
                <span className="text-primary-pheading font-bold">
                  “Equipment Maintenance Reports”
                </span>{" "}
                page. Starting with the{" "}
                <span className="text-primary-pheading font-semibold">
                  “Summary of Equipments”
                </span>{" "}
                section.
              </p>
              <br />
              <h2 className=" text-primary-pheading font-extrabold text-[19px]">
                1. Summary of Equipments
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of Equipments and their
                details that are under the Date range you set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  “Scheduled Maintenance’s of Equipments”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                2. Scheduled Maintenance of Equipments
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of Equipments that have
                had scheduled maintenance’s, under the Date range you set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  {" "}
                  “Unscheduled Maintenance’s of Equipments”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                3. Unscheduled Maintenance’s of Equipments
              </h2>
              <p>
                This Table is where you can view a list of Equipments that have
                had unscheduled maintenance’s, under the Date range you set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  {" "}
                  “Summary of Equipments Status”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                4. Summary of Equipments Status
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of the statuses of the
                equipment’s, under the Date range you set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Now that we have covered the sections, we are now going to cover
                the features, starting with the{" "}
                <span className="text-primary-pheading font-bold">
                  {" "}
                  setting a date range for the equipments reports.
                </span>
              </p>
              <br />
              <div className="flex items-center pt-5 space-x-4 ">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <br />
              <h1 className="text-primary-pheading font-bold">
                Setting a Date range for the Equipment Reports
              </h1>
              <br />
              <p className=" text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want a custom date range of your equipment reports, then
                you can set the date range by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  button, to the left of the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Inventory Reports”
                  </span>{" "}
                  button and above the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button.
                </li>
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
                <li>
                  It will then take you to the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment Maintenance Reports
                  </span>{" "}
                  page
                </li>
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
                <li>
                  You can then set the Date range by clicking the{" "}
                  <span className="font-bold">“Set Date Range”</span> field,
                  located to the right of the Page, above the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Summary”
                  </span>{" "}
                  table and below the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Download”
                  </span>{" "}
                  button.
                </li>
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
                <li>
                  You will then see a window open below the field, showing a{" "}
                  <span className=" font-bold">Date Range</span> select option.
                  Set your custom date range and then close it.
                </li>
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
                <li>
                  After selecting the date range, you can then see the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Maintenance Reports”
                  </span>{" "}
                  page update with the date range you selected in mind.
                </li>
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
                <p>
                  Now that we have covered how adjust the date range on the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Maintenance Reports”
                  </span>{" "}
                  page, lets now cover how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  the Equipments Report.
                </p>
              </ul>
              <br />{" "}
              <div className="flex items-center pt-5 space-x-4 ">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <br />
              <h1 className="text-primary-pheading font-bold">
                How to download an Equipment Report
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to download the equipment report, then you can do so
                by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  button, to the left of the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Inventory Reports”
                  </span>{" "}
                  button and above the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button.
                </li>
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
                <li>
                  It will then take you to the{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment Maintenance Reports
                  </span>{" "}
                  page
                </li>
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
                <li>
                  If you wish to set a custom Date range of the report then
                  please set a different date range. (as shown in Setting a Date
                  Range for the Equipment Reports).
                </li>
                <li>
                  After selecting the date range, you can then download the
                  Equipments report by clicking the table and below the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Download”
                  </span>{" "}
                  button, located to the top-right of the page, above the{" "}
                  <span className="font-bold">“Date Select”</span> option. .
                </li>
                <li>
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </li>
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
                <ul className="list-disc">
                  <li>
                    This file contains the current view of the Equipment Report
                    page and their details.
                  </li>
                </ul>
                <br />
                <li>
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="font-bold">“Save”</span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </li>
                <br />
                <li>
                  Now you can either go to the top-right hand of your browser
                  and go into the Downloads section, to view your PDF file, or
                  you can go into the file explorer location where you uploaded
                  the PDF file and open it to view it as well.
                </li>
                <br />
                <li>
                  Provided below is an example of what it should look like:
                </li>
                <br />
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
                <li>Now you know how to download an Equipment Report!</li>
                <br />
                <p>
                  Now that we have covered how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  an Equipment Report, We have now now covered the entire{" "}
                  <span className="text-primary-pheading font-bold">
                    “Equipment Maintenance Reports”
                  </span>{" "}
                  page!
                </p>
                <br />
                <p>
                  Next we are now going to cover the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Inventory Reports”
                  </span>{" "}
                  page!
                </p>
              </ul>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default addorchards;
