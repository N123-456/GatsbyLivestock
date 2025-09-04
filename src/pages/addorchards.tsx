import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { AppLayout } from "../components/AppShell/AppLayout";
import TextToSpeech from "../components/TextToSpeech";
import { faVestPatches } from "@fortawesome/free-solid-svg-icons";

const addorchards = () => {
  const data = useStaticQuery(graphql`
    query {
      orchard: file(relativePath: { eq: "orchard.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      addo: file(relativePath: { eq: "addo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      bfo: file(relativePath: { eq: "bfo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ps: file(relativePath: { eq: "ps.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ao: file(relativePath: { eq: "ao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      gtp: file(relativePath: { eq: "gtp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      sfo: file(relativePath: { eq: "sfo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dtot: file(relativePath: { eq: "dtot.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vttoao: file(relativePath: { eq: "vttoao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }

      eao: file(relativePath: { eq: "eao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vo: file(relativePath: { eq: "vo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dao: file(relativePath: { eq: "dao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      db: file(relativePath: { eq: "db.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      few: file(relativePath: { eq: "few.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      toto: file(relativePath: { eq: "toto.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const orchard = getImage(data.orchard);
  const addo = getImage(data.addo);
  const bfo = getImage(data.bfo);
  const ps = getImage(data.ps);
  const gtp = getImage(data.gtp);
  const sfo = getImage(data.sfo);
  const dtot = getImage(data.dtot);
  const vttoao = getImage(data.vttoao);
  const vo = getImage(data.vo);
  const eao = getImage(data.eao);
  const dao = getImage(data.dao);
  const db = getImage(data.db);
  const ao = getImage(data.ao);
  const few = getImage(data.few);
  const toto = getImage(data.toto);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="acu">
            <div className="text-justify lg:pr-4 text-[18px] text-primary-paragraph2 font-montserrat">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#D5D5D5]">
                  Starting Guide for Orchard
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat  dark:text-primary-pheading font-bold lg:pl-10">
                  Introduction
                </h2>
                <div className="lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
              <div className="lg:pl-10">
                <p className="mb-4">
                  In the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  process, you will enter the details of the orchards to be
                  planted, ensuring all the necessary information is recorded
                  for effective orchard management.
                </p>
                <p className="mb-4">
                  This includes selecting the{" "}
                  <span className="text-primary-pheading font-bold">
                    orchard type
                  </span>
                  , specifying the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard location
                  </span>
                  , and entering details about the seeds, such as{" "}
                  <span className="text-primary-pheading font-bold">
                    variety
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-pheading font-bold">
                    source
                  </span>
                  . Additional orchard details include the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard plant depth
                  </span>
                  ,{" "}
                  <span className="text-primary-activelink font-bold">
                    spacing
                  </span>
                  , and any{" "}
                  <span className="text-primary-activelink font-bold">
                    special instructions
                  </span>{" "}
                  can also be provided.
                </p>
                <p className="mb-4">
                  You can also provide estimated harvest details, including the{" "}
                  <span className="text-primary-activelink font-bold">
                    expected harvest date
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-activelink font-bold">
                    anticipated yield
                  </span>
                  .
                </p>
                <p className="mb-4">
                  By accurately recording these details, farmers can monitor an
                  orchard progress and optimize growth conditions for better
                  yields.
                </p>
                <p className="mb-4">
                  Moreover, you can add{" "}
                  <span className="text-primary-pheading font-bold">
                    fertilizers
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-pheading font-bold">
                    chemicals
                  </span>{" "}
                  that have been applied on the orchards as well as,{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection details
                  </span>{" "}
                  can also be added to the system. The details of these will be
                  found in the later sections of this chapter.
                </p>
                <p className="mb-4">Here is what the Page looks like:</p>
                <div className="pl-13 pt-8 flex justify-center">
                  {orchard && (
                    <GatsbyImage
                      image={orchard}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding an Orchard
                </h2>
                <p className="mb-4">
                  For adding an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , you first need to have a set of items ready, so that there
                  will not be any issues throughout the process:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    You need to have a{" "}
                    <span className="text-primary-pheading font-bold">
                      farm location
                    </span>
                    , that is set as a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Fields”
                    </span>{" "}
                    type. You can learn more by going to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Farm Locations Page
                    </span>{" "}
                    chapter.
                  </li>
                </ul>
                <p className="mb-4">
                  Now, once you have all the above required items ready, you can
                  continue to making an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  To add an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , you first start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Clicking on the{" "}
                    <span className="font-bold">“’+’ Add Orchard”</span> button,
                    located on the top-left corner of the page, to the right of
                    the <span className="font-bold">“Download Table”</span>{" "}
                    button and above the search options.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {addo && (
                      <GatsbyImage
                        image={addo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ol>
                <p className="mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Orchard”
                  </span>{" "}
                  page.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {ao && (
                    <GatsbyImage
                      image={ao}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  Please keep in mind, all the details of each step must be
                  filled properly.
                </p>
                <p className="mb-4">
                  Now, let us begin with the first step, The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Plant type & Location”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Plant type & Location”
                  </span>{" "}
                  step is where you input in what orchard is being planted, in
                  which farm location that is within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>,
                  and finally how is the orchard being planted on the farm
                  location. There are 7 fields to fill, depending on which
                  options you select.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Plant type”
                    </span>{" "}
                    field: Enter in what plant is being grown on the farm
                    location. You can put in the name of the plant type and
                    it’ll automatically show in a box below which crop you are
                    growing. Here are the options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Apple
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Apricot
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Banana
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Grapes
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Guava
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Lemon
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Mango
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Orange
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Papaya
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Peach
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Pineapple
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Plum
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Location”
                    </span>{" "}
                    field: Enter in which farm location that is within{" "}
                    <span className="text-primary-pheading font-bold">FMS</span>{" "}
                    will grow the orchard. The options are made up of farm
                    locations that are within the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Land Area”
                    </span>{" "}
                    field: This is a non-editable field. It will take the size
                    of the farm location you set when making the farm location,
                    this field measures in{" "}
                    <span className="text-primary-pheading font-bold">
                      acres
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Measurement Units”
                    </span>{" "}
                    field: Enter in which units of measurement will you be using
                    for the below fields. The options are:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Inch
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Feet
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Meter
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Centimeter
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inter-plant Distance”
                    </span>{" "}
                    field: Enter in the distance between each of the orchard
                    plants that are on the farm. Please enter based on the
                    measurement unit set earlier.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inter-row Distance”
                    </span>{" "}
                    field: Enter in the distance between each row of orchard
                    plants that are on the farm. Please enter based on the
                    measurement unit set earlier.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “No. of Plants”
                    </span>{" "}
                    field: Enter in the number of orchard plants that are or are
                    going to be on the farm.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Land Area”
                    </span>{" "}
                    field: This is a non-editable field. It will take the inputs
                    from the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inter-plant distance”
                    </span>{" "}
                    field,{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inter-row distance”
                    </span>{" "}
                    field, and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “No. of plants”
                    </span>{" "}
                    field to determine the amount of land area it will take. It
                    is measured in{" "}
                    <span className="text-primary-pheading font-bold">
                      acres
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  All the fields listed above in this step are required and need
                  to be filled.
                </p>
                <p className="mb-4">
                  Next, we are going to look at the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pre-planting”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Pre-planting”
                  </span>{" "}
                  step is where you fill in the details regarding the
                  pre-planting process. There are 2 required fields to fill,
                  however more fields will be added, depending on your choices.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cost”
                    </span>{" "}
                    field: Enter in how the Root Stock has been bought for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    farm. Select 1 of 2 options:
                    {/* <div className="pl-13 pt-8 flex justify-center">
                      {fl && (
                        <GatsbyImage
                          image={fl}
                          alt="Startups illustration"
                          className="border border-gray-200 shadow-lg w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <br /> */}
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          “Created”
                        </span>
                        : When you select this option, it means your root stock
                        are created by you and managed by you. It will add 1
                        extra option to the step.
                      </li>
                      <li>
                        The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Propagation Date”
                        </span>{" "}
                        field: Enter in the date and time of when the
                        propagation will begin for the{" "}
                        <span className="text-primary-pheading font-bold">
                          Orchard plant
                        </span>
                        .
                      </li>
                      {/* <div className="pl-13 pt-8 flex justify-center">
                        {fl && (
                          <GatsbyImage
                            image={fl}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div>
                      <br />
                      <br /> */}
                      <li>
                        <span className="text-primary-pheading font-bold">
                          “Purchased”
                        </span>
                        : When you select this option, it means your root stock
                        are purchased from a vendor. It will add 3 extra options
                        to the step.
                      </li>
                      <li>
                        The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Date of Purchase”
                        </span>{" "}
                        field: Enter in the date and time of when the root stock
                        was purchased from the vendor.
                      </li>
                      <li>
                        The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Location of Purchase”
                        </span>{" "}
                        field: Enter in the full address of the vendor that the
                        root stock was purchased from.
                      </li>
                      <li>
                        The{" "}
                        <span className="text-primary-activelink font-bold">
                          “Age of stock”
                        </span>{" "}
                        field: Enter in the age of the root stock, when the root
                        stock was purchased. Please enter it in{" "}
                        <span className="text-primary-pheading font-bold">
                          days
                        </span>
                        .
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Propagation”
                    </span>{" "}
                    field: Enter in the propagation state of the root stock for
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    . Select 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Budding
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Grafting
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  All the fields listed above in this step are required and need
                  to be filled.
                </p>
                <p className="mb-4">
                  Next, we are going to look at the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Planting Details”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Planting Details”
                  </span>{" "}
                  step is where you enter in more details regarding the
                  placement and current state of the crop. There are 9 fields
                  that are required to be filled:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Measurement units”
                    </span>{" "}
                    field: Select a unit of measurement that will be used in
                    this step. The options are:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Inch
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Feet
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Meter
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Centimeter
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting Date”
                    </span>{" "}
                    field: Enter in the date and time of when the orchard root
                    stock was planted.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Variety”
                    </span>{" "}
                    field: Enter in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “variety”
                    </span>{" "}
                    of the orchard plant type, (e.g.{" "}
                    <span className="text-primary-pheading font-bold">
                      “White” Chaunsa
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      “Malda” Chaunsa
                    </span>
                    , etc).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Pit size”
                    </span>{" "}
                    field: Enter in the size of the pit each orchard plant was
                    placed in.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Planting Material”
                    </span>{" "}
                    field: Enter in what planting material was used for the
                    orchard plant.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Source of Planting Material”
                    </span>{" "}
                    field: Enter in the name of the company or vendor that has
                    provided the Planting material.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Growth Stage”
                    </span>{" "}
                    field: Enter in the growth stage of the orchard plant at the
                    current time.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Seasoning Stage”
                    </span>{" "}
                    field: Enter in the seasoning stage of the orchard plant at
                    the current time.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Automatically create tasks”
                    </span>{" "}
                    check: Enter in if you want to automatically generate tasks
                    for the orchard in the farm.
                  </li>
                </ul>
                <p className="mb-4">
                  All the fields listed above in this step are required and need
                  to be filled.
                </p>
                <p className="mb-4">
                  Lastly, we are going to look at the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Estimated Harvest Details”
                  </span>{" "}
                  step:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Estimated Harvest Details”
                  </span>{" "}
                  step is where you enter the details regarding the harvesting
                  of your orchard plants, and the unit price of your orchard
                  plant’s produce. There are 9 fields that are required to be
                  filled.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Harvest Date”
                    </span>{" "}
                    field: Enter in the estimated date and time for the harvest
                    of the orchard plants.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Days to Maturity”
                    </span>{" "}
                    field: Enter in the number of days for the orchard plants to
                    achieve maturity. It will automatically fill based on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Harvest Date”
                    </span>{" "}
                    field and other fields.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest window (Days)”
                    </span>{" "}
                    field: Enter in the number of days of the harvest window for
                    the orchard plants.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Harvest Loss”
                    </span>{" "}
                    field: Enter in the estimate for the loss of the harvested
                    orchard plants, make sure to enter it in{" "}
                    <span className="text-primary-pheading font-bold">
                      percentage
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest Units”
                    </span>{" "}
                    field: Enter in the unit of measurement for the weight of
                    the harvested crops. Select 1 of 2 options:{" "}
                    <span className="text-primary-pheading font-bold">KG</span>{" "}
                    or{" "}
                    <span className="text-primary-pheading font-bold">
                      Maund
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated yield per plant”
                    </span>{" "}
                    field: Enter in the estimated yield of produce per orchard
                    plant from the farm location.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit Price”
                    </span>{" "}
                    field: Enter in the unit price of the harvested produce of
                    the orchard plants.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Revenue”
                    </span>{" "}
                    field: This is a non-editable field. It will take the inputs
                    from the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Harvest loss”
                    </span>{" "}
                    field, the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated yield per plant”
                    </span>{" "}
                    field, and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit Price”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Estimated Average height”
                    </span>{" "}
                    field: Enter in the average height of the orchard plants in
                    your farm location.
                  </li>
                </ul>
                <p className="mb-4">
                  All the fields listed above in this step are required and need
                  to be filled.
                </p>
                <p className="mb-4">
                  Once you have filled all the details that need to be filled
                  and feel comfortable with your inputs, you can select the{" "}
                  <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page with your{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry added to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>{" "}
                  table!
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {orchard && (
                    <GatsbyImage
                      image={orchard}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  Now that you have covered how to add an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry into{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>.
                  Let’s now check out the other features of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Orchard Dashboard
                </h2>
                <p className="mb-4">
                  Now that we covered how to add an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . Let us now focus on the features that are present in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard Dashboard
                  </span>
                  !
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing for Orchard
                </h3>
                <p className="mb-4">
                  You can browse through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard Table
                  </span>{" "}
                  to find the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry you want using the{" "}
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
                    Orchard table
                  </span>
                  .
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {bfo && (
                    <GatsbyImage
                      image={bfo}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
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
                    : This shows a number of how many{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    entries are there in the{" "}
                    <span className="text-primary-pheading font-bold">
                      Farm Management System
                    </span>
                    . It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard table
                    </span>
                    , above the page select options, and is on the bottom left
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard table
                    </span>
                    , above the page select options, and is to the bottom right
                    of the page.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
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
                      Orchard table
                    </span>
                    , the{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page
                    </span>
                    . It is on the bottom middle of the page.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {ps && (
                      <GatsbyImage
                        image={ps}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    entry you are looking for is and hit enter. It will then
                    open the page with the page number shown as well.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {gtp && (
                      <GatsbyImage
                        image={gtp}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>
                  .
                </p>
                <p className="mb-4">
                  There is an alternative way of finding an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , by using the{" "}
                  <span className="font-bold">search options</span>...
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <br />
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching for Orchard
                </h3>
                <p className="mb-4">
                  You can search for an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  from the table of{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>{" "}
                  present in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  . You can locate the{" "}
                  <span className="font-bold">search options</span> as they are
                  underneath the{" "}
                  <span className="font-bold">“’+’ Add Orchard”</span> button
                  and the <span className="font-bold">“Download Table”</span>{" "}
                  button, and above the table.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {sfo && (
                    <GatsbyImage
                      image={sfo}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Crop Name”
                    </span>{" "}
                    search: You can search and filter by the name of the crop
                    (for e.g.{" "}
                    <span className="text-primary-pheading font-bold">
                      Mango
                    </span>
                    ,{" "}
                    <span className="text-primary-pheading font-bold">
                      Guava
                    </span>
                    , etc).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Growth Stage”
                    </span>{" "}
                    search: You can search and filter the table for the stage of
                    growth the crop goes through. There are 8 options you can
                    search and filter the table from:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Decline Stage
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Early Fruiting Stage
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Peak Stage
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Vegetative Growth
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Upcoming Harvest”
                    </span>{" "}
                    search: You can search and filter the table for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchards
                    </span>{" "}
                    harvest time. There are 6 timing related options you can
                    search and filter the table from:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          All (Default)
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Today
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Tomorrow
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          This week
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Next Week
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Next Month
                        </span>
                      </li>
                    </ul>
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
                    Orchard table
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
                  search for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  or filter the table for a set of{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  that are in a specific stage or harvest time. You can also use
                  the <span className="font-bold">search options</span> as a
                  filter so that you can{" "}
                  <span className="font-bold">“Download a Table”</span> of
                  specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entries to use later.
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <br />
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Orchard Table
                </h3>
                <p className="mb-4">
                  If you want to have a set of{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>{" "}
                  or the entire{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>{" "}
                  in the table within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>{" "}
                  on a PDF downloaded, then you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you can use the search to filter the table for
                    specific things that you want to download, otherwise if you
                    want to download the entire table, leave the search options
                    as it is and go to the records per page count and set it to
                    100.
                  </li>
                  <li className="mb-2">
                    Next, you can select the{" "}
                    <span className="font-bold">“Download Table”</span> button
                    located on the top of the page, to the right of the{" "}
                    <span className="font-bold">“Add Orchard”</span> button and
                    above the <span className="font-bold">Search options</span>{" "}
                    of the page.
                  </li>
                </ol>
                <div className="pl-13 pt-8 flex justify-center">
                  {dtot && (
                    <GatsbyImage
                      image={dtot}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
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
                </div>
                <br />
                <br />
                <p className="mb-4">
                  This file contains all the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchards
                  </span>{" "}
                  that are present in page 1 of the table and their details.
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
                  {vttoao && (
                    <GatsbyImage
                      image={vttoao}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing the Tasks of an Orchard
                </h3>
                <p className="mb-4">
                  If you want to view the associated tasks regarding an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , then you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you wish to view the tasks of. A small white box will show
                    up with a list of options you can go to.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vttoao && (
                      <GatsbyImage
                        image={vttoao}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Click on the <span className="font-bold">“Tasks”</span>{" "}
                    button which will be second on the list, below the{" "}
                    <span className="font-bold">“View”</span> button and above
                    the <span className="font-bold">“Fertilizer”</span> button.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    Click on the <span className="font-bold">“Tasks”</span>{" "}
                    button, It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tasks of the Orchard”
                    </span>{" "}
                    page.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {toto && (
                      <GatsbyImage
                        image={toto}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ol>
                <p className="mb-4">
                  Listed here should all the tasks that are in relation to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you selected. The tasks table should consist of tasks that
                  help maintain and nurture the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  farm you selected.
                </p>
                <p className="mb-4">
                  Now that we have checked out how to get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Tasks of the Orchard”
                  </span>{" "}
                  page, now let’s show you how to view the details of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing an Orchard
                </h3>
                <p className="mb-4">
                  You can view an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>{" "}
                  and confirm the extra details about the crop you entered.
                  There are currently 2 methods to viewing an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry in the table.
                </p>
                <p className="mb-4">
                  Here is how you can view an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  :
                </p>
                <p className="mb-4">
                  The first method to viewing an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry in the table, is just by selecting the plant name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you want to check out.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the plant name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to a{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Orchard”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {vo && (
                    <GatsbyImage
                      image={vo}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  The second method to view an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry in the table, is just by selecting the{" "}
                  <span className="font-bold">“more options”</span> icon, then
                  selecting the <span className="font-bold">“view”</span> button
                  in the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you wish to view.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Orchard”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you selected.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {vo && (
                    <GatsbyImage
                      image={vo}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  These are the two methods to viewing an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry. Both do not have any differences in what details they
                  show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that you know how to view an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , let us now check out how to edit an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 6
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing an Orchard
                </h3>
                <p className="mb-4">
                  If you want to either update or correct some information of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , then you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry in the table.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    that you want to edit.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {eao && (
                      <GatsbyImage
                        image={eao}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
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
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Orchard”
                  </span>{" "}
                  page.
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <p className="mb-4">
                  Here you can change and update whatever fields you need to
                  edit.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Orchard”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you edited so you can review your changes and edits.
                </p>
                <p className="mb-4">
                  Now that you know how to edit an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , now let’s check out how to download an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 7
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading an Orchard
                </h3>
                <p className="mb-4">
                  If you wish to download only a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and its details, you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    that you want to download.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dao && (
                      <GatsbyImage
                        image={dao}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  {/* <div className="pl-13 pt-8 flex justify-center">
                    {fl && (
                      <GatsbyImage
                        image={fl}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br /> */}
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
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
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  This file contains the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard’s
                  </span>{" "}
                  details.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
                </p>
                {/* <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
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
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br /> */}
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 8
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting an Orchard
                </h3>
                <p className="mb-4">
                  If you want to delete an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  from the table within{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>,
                  you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    that you want to delete.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {dao && (
                      <GatsbyImage
                        image={dao}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>

                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Orchard”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
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
                    {vo && (
                      <GatsbyImage
                        image={vo}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    A dialogue box will appear to confirm whether you want to
                    delete the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
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
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    Then click the <span className="font-bold">“Delete”</span>{" "}
                    button in the dialogue box to confirm.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard Page
                  </span>{" "}
                  where the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  entry will then be deleted from the table.
                </p>
                <p className="mb-4">
                  Now that we have shown how to delete an entry from the table,
                  let us now move on within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page, and talk about the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Fertilizer”
                  </span>{" "}
                  section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default addorchards;
