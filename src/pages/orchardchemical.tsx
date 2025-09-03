import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TextToSpeech from "../components/TextToSpeech";

const orchardchemical = () => {
  const data = useStaticQuery(graphql`
    query {
      fertilizer: file(relativePath: { eq: "fertilizer.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AF: file(relativePath: { eq: "AF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AF1: file(relativePath: { eq: "AF1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SF: file(relativePath: { eq: "SF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DF: file(relativePath: { eq: "DF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VF: file(relativePath: { eq: "VF.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const fertilizer = getImage(data.fertilizer);
  const AF = getImage(data.AF);
  const AF1 = getImage(data.AF1);
  const SF = getImage(data.SF);
  const DF = getImage(data.DF);
  const VF = getImage(data.VF);
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
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Starting Guide for Chemical:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat  dark:text-primary-pheading font-bold lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <div className="lg:pl-10">
                <p className="mb-4">
                  <span className="text-primary-activelink font-bold">Pesticides</span> are
                  chemicals or natural substances used to protect crops from
                  pests, insects, weeds, and diseases. They help prevent damage
                  to plants, ensuring healthy growth and higher yields.
                </p>
                <p className="mb-4">
                  <span className="text-primary-activelink font-bold">Pesticides</span> can be
                  classified into types such as{" "}
                  <span className="text-primary-pheading font-bold">insecticides</span> (for
                  insects), <span className="text-primary-pheading font-bold">herbicides</span>{" "}
                  (for weeds), and{" "}
                  <span className="text-primary-pheading font-bold">fungicides</span> (for
                  fungi).
                </p>
                <p className="mb-4">
                  Proper and safe use of{" "}
                  <span className="text-primary-activelink font-bold">pesticides</span> is
                  important to avoid harm to crops, soil, and the environment.
                  Following recommended guidelines ensures effective pest
                  control while maintaining food safety.
                </p>
                <p className="mb-4">
                  Within the <span className="text-primary-activelink font-bold">“Chemicals”</span>{" "}
                  page, you can add the{" "}
                  <span className="text-primary-activelink font-bold">pesticides</span> applied to
                  a specific crop.
                </p>
                <p className="mb-4">
                  Below is an example of what it should look like:
                </p>

                <br />
                <br />

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Chemical
                </h2>
                <p className="mb-4">
                  If you want to add a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> such as a{" "}
                  <span className="text-primary-pheading font-bold">Pesticide</span>,{" "}
                  <span className="text-primary-pheading font-bold">Herbicides</span>,{" "}
                  <span className="text-primary-pheading font-bold">Insecticide</span>, etc. to
                  your <span className="text-primary-activelink font-bold">Orchard</span>, you must
                  make sure that there are a few things you need ready and set
                  up:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    An <span className="text-primary-activelink font-bold">Inventory</span> entry
                    of the <span className="text-primary-pheading font-bold">Chemical</span>{" "}
                    product. (Learn more here)
                  </li>
                  <li className="mb-2">
                    A{" "}
                    <span className="text-primary-activelink font-bold">Purchase Requisition</span>{" "}
                    entry of the{" "}
                    <span className="text-primary-pheading font-bold">Chemical</span> for your
                    farm. (Learn more here)
                  </li>
                  <li className="mb-2">
                    A <span className="text-primary-activelink font-bold">Purchase Order</span>{" "}
                    entry of the{" "}
                    <span className="text-primary-pheading font-bold">Chemical</span> for your
                    farm. (Learn more here)
                  </li>
                  <li className="mb-2">
                    A{" "}
                    <span className="text-primary-activelink font-bold">Goods receiving note</span>{" "}
                    for the <span className="text-primary-pheading font-bold">Chemical</span> you
                    purchased (Learn more here)
                  </li>
                </ul>
                <p className="mb-4">
                  Now that we have all the required assets for the farm we need
                  to add a <span className="text-primary-activelink font-bold">pesticide</span>{" "}
                  entry for our <span className="text-primary-activelink font-bold">Orchard</span>,
                  now let us start by:
                </p>
                <p className="mb-4">
                  First, you need to go to the{" "}
                  <span className="text-primary-activelink font-bold">“Chemicals”</span> page of
                  the <span className="text-primary-activelink font-bold">Orchard</span> you want
                  to add <span className="text-primary-activelink font-bold">Pesticides</span> to.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You start by, selecting the{" "}
                    <span className="font-bold">“three dots”</span> icon
                    [shown as <span className="font-bold">“⋮”</span> icon],
                    located at the right-side of the{" "}
                    <span className="text-primary-activelink font-bold">Orchard</span> you want to
                    add a <span className="text-primary-activelink font-bold">Chemical</span> to.
                  </li>
                  <li className="mb-2">
                    A small window will appear containing a list of buttons.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">“Chemicals”</span> page of
                  the <span className="text-primary-activelink font-bold">Orchard</span>. It should
                  look like this:
                </p>
                <p className="mb-4">
                  You can now continue on adding the{" "}
                  <span className="text-primary-activelink font-bold">Pesticide</span> to the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span> from here.
                </p>
                <p className="mb-4">
                  Now, click on the{" "}
                  <span className="font-bold">“’+’ Add Chemical”</span>{" "}
                  button, located at the top-left corner of the page, to the
                  right of the{" "}
                  <span className="font-bold">“Download Table”</span>{" "}
                  button and above the{" "}
                  <span className="font-bold">search options</span>.
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">“Add Chemical”</span> page.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {VF && (
                                          <GatsbyImage
                                            image={VF}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  All the fields within this page are required to be filled. So
                  please make sure to not skip any fields.
                </p>
                <p className="mb-4">
                  Let’s go through the steps and their fields of the{" "}
                  <span className="text-primary-activelink font-bold">“Add Chemical”</span> page:
                </p>
                <p className="mb-4">
                  The first step that we are covering is the{" "}
                  <span className="text-primary-activelink font-bold">“Product Details”</span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {VF && (
                                          <GatsbyImage
                                            image={VF}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The <span className="text-primary-activelink font-bold">“Product Details”</span>{" "}
                  step is a step where you input the general details of the{" "}
                  <span className="text-primary-activelink font-bold">Pesticide</span> you are
                  providing to the plant.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The <span className="text-primary-activelink font-bold">“Product Name”</span>{" "}
                    field: Enter the name of the{" "}
                    <span className="text-primary-pheading font-bold">Chemical</span> product
                    that is being used for the farm.
                  </li>
                  <li className="mb-2">
                    The <span className="text-primary-activelink font-bold">“Company”</span> field:
                    Enter the name of the company that is on the package of the{" "}
                    <span className="text-primary-activelink font-bold">Pesticide</span>. Select 1
                    of 8 options for the name of the company:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">Agritas</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">Bayer</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">Evyol</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">FMC</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">LCI</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">Suncrop</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">Syngenta</span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">Other</span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all these fields are filled with what
                  they are supposed to be filled with.
                </p>
                <p className="mb-4">
                  The next and final step, is the{" "}
                  <span className="text-primary-activelink font-bold">“Usage Details”</span> step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {VF && (
                                          <GatsbyImage
                                            image={VF}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The <span className="text-primary-activelink font-bold">“Usage Details”</span>{" "}
                  step is a step where you can input the details of what{" "}
                  <span className="text-primary-activelink font-bold">pesticides</span> will be
                  used from the{" "}
                  <span className="text-primary-activelink font-bold">Inventory</span> and how much
                  will be used on the farm.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">“Select Inventory”</span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-pheading font-bold">pesticides</span> product
                    that is within the{" "}
                    <span className="text-primary-activelink font-bold">Inventory</span> that is
                    the same <span className="text-primary-activelink font-bold">pesticides</span>{" "}
                    you wish to use on the farm. It will open a menu with a list
                    of options that are within the{" "}
                    <span className="text-primary-activelink font-bold">Inventory</span> for you to
                    select.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">“Available Quantity”</span>{" "}
                    field: This is a non-editable field that updates how many of
                    the <span className="text-primary-activelink font-bold">pesticides</span> you
                    chose earlier is there within the{" "}
                    <span className="text-primary-activelink font-bold">Inventory</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Application Quantity”
                    </span>{" "}
                    field: Enter in a number of how much of the{" "}
                    <span className="text-primary-activelink font-bold">pesticides</span> you want
                    to apply on the farm to be used.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date of Application”
                    </span>{" "}
                    field: Enter in a date and time of when the{" "}
                    <span className="text-primary-activelink font-bold">pesticides</span> should be
                    applied to the farm. It will open a Calendar box where you
                    can input in the Date and time.
                  </li>
                  <li className="mb-2">
                    The <span className="text-primary-activelink font-bold">“Mark Area”</span>{" "}
                    field: Enter in what area on the farm location should the{" "}
                    <span className="text-primary-activelink font-bold">pesticides</span> be
                    applied to. It will open a map window where you can put in
                    map points and edit them. Provided below are steps on how to
                    approach the{" "}
                    <span className="text-primary-activelink font-bold">Mark Area</span> feature.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                            {VF && (
                                            <GatsbyImage
                                              image={VF}
                                              alt="Startups illustration"
                                              className="border border-gray-200 shadow-lg w-[1000.58px] "
                                            />
                                          )}
                                        </div>
                                        <br />
                                        <br />
                </ul>
                <p className="mb-4">
                  When you select the{" "}
                  <span className="text-primary-activelink font-bold">“Mark Area”</span> button, a
                  satellite imagery map window will open.
                </p>
                <p className="mb-4">
                  In the map, you can see the farm location the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span> is located on,
                  marked with a{" "}
                  <span className="text-primary-pheading font-bold">red dotted outline</span>.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    Mark the boundaries of your farm location, by clicking and
                    placing points on the map.
                  </li>
                  <li className="mb-2">
                    A <span className="text-primary-pheading font-bold">red shape</span> will be
                    drawn on the top of the field you want the{" "}
                    <span className="text-primary-activelink font-bold">fertilizer</span> applied
                    to.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                            {VF && (
                                            <GatsbyImage
                                              image={VF}
                                              alt="Startups illustration"
                                              className="border border-gray-200 shadow-lg w-[1000.58px] "
                                            />
                                          )}
                                        </div>
                                        <br />
                                        <br />
                  <li className="mb-2">
                    After the boundaries are marked, click on the{" "}
                    <span className="font-bold">“Save”</span> button. You
                    will then be taken back to the edit page with the{" "}
                    <span className="text-primary-activelink font-bold">Mark Area</span> button,
                    having double tick mark next to it.
                  </li>
                </ol>
                <p className="mb-4">
                  Once you have filled in all the required fields, then you can
                  click the <span className="font-bold">“Submit”</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">“Chemicals”</span> page to
                  show you that you have added your{" "}
                  <span className="text-primary-activelink font-bold">Pesticide</span> to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard’s Chemicals Table
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have added a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span>, let us now
                  cover the features related to the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Chemicals Dashboard
                </h2>
                <p className="mb-4">
                  There are a variety of features within the{" "}
                  <span className="text-primary-activelink font-bold">Chemicals Dashboard</span>.
                  Each one is made to assist you in looking for the{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> you had
                  placed with the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span>. We will first
                  cover how to browse the{" "}
                  <span className="text-primary-activelink font-bold">Chemicals Dashboard</span>.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing within the Chemicals
                </h3>
                <p className="mb-4">
                  You can browse through the{" "}
                  <span className="text-primary-activelink font-bold">Chemical table</span> of the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span> you want using
                  the <span className="font-bold">page options</span>.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the{" "}
                  <span className="font-bold">page options</span>:
                </p>
                <p className="mb-4">
                  The <span className="font-bold">page options</span> are
                  located below the{" "}
                  <span className="text-primary-activelink font-bold">Chemical table</span>.
                </p>
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Total number of records”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Records per page option”
                  </span>
                  , the <span className="text-primary-activelink font-bold">“Page select”</span>,
                  and the{" "}
                  <span className="text-primary-activelink font-bold">“Go to page search”</span>.
                </p>
                <p className="mb-4">Let’s go through them one by one:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    : This shows a number of how many{" "}
                    <span className="text-primary-activelink font-bold">chemicals</span> are there
                    in the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">Chemical’s table</span>,
                    above the{" "}
                    <span className="font-bold">page select options</span>,
                    and is on the bottom left of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> entries you
                    want to see in one page. The default is set to 5. The
                    options are 5, 10, 50, and 100. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">Chemical’s table</span>,
                    above the{" "}
                    <span className="font-bold">page select options</span>,
                    and is to the bottom right of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">Page select options</span>:
                    It shows which page you are currently in (The default is the
                    1st page). It gives you buttons for the next five pages
                    after which it gives you the button to the last page. You
                    can move to the previous page using the left arrow button,
                    located on the left side, or to the next page using the
                    right arrow button located on the right side. It is located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">Chemical’s table</span>,
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">Records per page</span>,
                    and is on the bottom middle of the page.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                            {VF && (
                                            <GatsbyImage
                                              image={VF}
                                              alt="Startups illustration"
                                              className="border border-gray-200 shadow-lg w-[1000.58px] "
                                            />
                                          )}
                                        </div>
                                        <br />
                                        <br />
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">“Go to page” search</span>:
                    You can type a page number of where the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> you are
                    looking for is and hit enter. It will then open the page
                    with the page number shown as well.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                            {VF && (
                                            <GatsbyImage
                                              image={VF}
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
                  <span className="font-bold">page options</span> as a way
                  of finding a <span className="text-primary-activelink font-bold">chemical</span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">chemicals</span>.
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching within the Chemicals
                </h3>
                <p className="mb-4">
                  You can search for a specific{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> of an{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span>, as long as
                  you know the name of the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span>. You can
                  start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to view and search a{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> of. A
                    small white box will show up with a list of options you can
                    go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> Page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Then, find the{" "}
                  <span className="text-primary-activelink font-bold">Search bar</span> of the{" "}
                  <span className="text-primary-activelink font-bold">“Chemical”</span> page. It is
                  located under the{" "}
                  <span className="font-bold">“’+’ Add Chemical”</span>{" "}
                  button and the{" "}
                  <span className="font-bold">“Download Table”</span>{" "}
                  button.
                </p>
                <p className="mb-4">
                  Provided below is where the{" "}
                  <span className="font-bold">search options</span> are:
                </p>
                <p className="mb-4">You can only search based on:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Search by Chemicals Name”
                    </span>{" "}
                    search: Enter the name of the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> that is
                    within the table.
                  </li>
                </ul>
                <p className="mb-4">
                  Then click on the{" "}
                  <span className="font-bold">“Search”</span> button,
                  located on the far-right of the page, to the left of the{" "}
                  <span className="font-bold">“Refresh data”</span> button.
                </p>
                <p className="mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">Chemical table</span> update
                  with only the name of the{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> you typed in
                  the search bar.
                </p>
                <p className="mb-4">
                  Also, you can click on the{" "}
                  <span className="font-bold">“Refresh data”</span> button
                  to refresh the data. It is highlighted as a red button with an{" "}
                  <span className="text-primary-pheading font-bold">“arrow pointing back”</span>{" "}
                  icon.
                </p>
                <p className="mb-4">
                  We will now check out how to view a{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> of an{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span>.
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Chemicals Table
                </h3>
                <p className="mb-4">
                  You can download the{" "}
                  <span className="text-primary-activelink font-bold">Chemical table</span> from
                  the <span className="text-primary-activelink font-bold">Chemical</span> page. As
                  long as the filtered table shows any results or the table is
                  shown in its complete form, you can then use this feature.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to view and download the{" "}
                    <span className="text-primary-activelink font-bold">“Chemicals”</span> table
                    from. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    You can then adjust the{" "}
                    <span className="text-primary-activelink font-bold">chemical table</span> using
                    the <span className="font-bold">search options</span>{" "}
                    to filter the table for specific results or you can increase
                    the count of the{" "}
                    <span className="text-primary-activelink font-bold">“Records per page”</span>{" "}
                    to show more results of{" "}
                    <span className="text-primary-activelink font-bold">chemicals</span> associated
                    to the <span className="text-primary-activelink font-bold">Orchard</span>.
                  </li>
                  <li className="mb-2">
                    When you are ready to download the table as you see fit,
                    select the{" "}
                    <span className="font-bold">“Download Table”</span>{" "}
                    button, located at the top of the page, above the{" "}
                    <span className="font-bold">search options</span> and
                    to the right of the{" "}
                    <span className="font-bold">“’+’ Add Chemical”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                <p className="mb-4">
                  This file will contain only the{" "}
                  <span className="text-primary-activelink font-bold">Table</span> in the page that
                  is being currently seen (default is page 1).
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the{" "}
                  <span className="font-bold">“Save”</span> button, located
                  on the bottom right of your file explorer, so that it saves
                  the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-pheading font-bold">Downloads</span> section, to
                  view your PDF file, or you can go into the file explorer
                  location where you uploaded the PDF file and open it to view
                  it as well.
                </p>
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Chemical
                </h3>
                <p className="mb-4">
                  You can view the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry and see
                  its details as well as perform actions on the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> within the{" "}
                  <span className="text-primary-pheading font-bold">Farm Management System</span>
                  .
                </p>
                <p className="mb-4">
                  Here is how you can view a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry in an{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span>:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to view a{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> of. A
                    small white box will show up with a list of options you can
                    go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Here are 2 methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry in{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>:
                </p>
                <p className="mb-4">
                  The first method to viewing a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry in the
                  table, is just by selecting the product name of the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> you want to
                  check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the product name of the{" "}
                    <span className="text-primary-activelink font-bold">Chemical</span> you want to
                    view.
                  </li>
                  <li className="mb-2">
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    selected.
                  </li>
                </ol>
                <p className="mb-4">
                  The second method to view a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry in the
                  table, is just by selecting the{" "}
                  <span className="font-bold">“more options”</span> icon,
                  then selecting the{" "}
                  <span className="font-bold">“view”</span> button in the
                  menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon
                    [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>], located on the
                    right side of the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> you wish to
                    view.
                  </li>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">“extra options”</span> menu
                    show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span>{" "}
                    button, located at the top of the list in the menu.
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    selected.
                  </li>
                </ol>
                <p className="mb-4">
                  These are the two methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry. Both
                  do not have any differences in what details they show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> entry you are
                  viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that we have covered how to view a{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> entry, we can
                  now cover how to edit a{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> from the{" "}
                  <span className="text-primary-pheading font-bold">Farm Management System</span>
                  .
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Chemical
                </h3>
                <p className="mb-4">
                  Within the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemical”</span> page,
                  you can edit the{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> details shown
                  on the page.
                </p>
                <p className="mb-4">You can do so by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to view and edit a{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> from. A
                    small white box will show up with a list of options you can
                    go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> you wish to
                    edit the details of, either by browsing for it or searching
                    for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> that you
                    want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon
                    [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] on the right of
                    the <span className="text-primary-activelink font-bold">Chemical</span> that
                    you want to edit.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside
                    it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span>{" "}
                    button, it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    want to edit, you can then select the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button, located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span>{" "}
                    button and to the left of the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">“Edit Chemical”</span> page.
                </p>
                <p className="mb-4">
                  From here, you can edit only the product details of the{" "}
                  <span className="text-primary-activelink font-bold">chemical</span>.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                  of the <span className="text-primary-activelink font-bold">Chemical</span> you
                  edited so you can review your changes and edits.
                </p>
                <p className="mb-4">
                  An important point to make is that you can edit the{" "}
                  <span className="text-primary-activelink font-bold">chemical</span> product
                  details only as the other fields will require you to modify
                  the <span className="text-primary-activelink font-bold">Inventory</span> item
                  that is the <span className="text-primary-activelink font-bold">Chemical</span>.
                </p>
                <p className="mb-4">
                  Now, let’s check out the next feature on the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemicals”</span> page.
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 6
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Chemical
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                  you can choose to download a PDF file that contains the{" "}
                  <span className="text-primary-activelink font-bold">Chemical</span> details and
                  how much is being used on the farm.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to view and download a{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> from. A
                    small white box will show up with a list of options you can
                    go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> you wish to
                    download the details of, either by browsing for it or
                    searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> that you
                    want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon
                    [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] to the right of
                    the <span className="text-primary-activelink font-bold">Chemical</span> that
                    you want to download.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside
                    it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span>{" "}
                    button, it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    want to download the details of, you can then select the{" "}
                    <span className="font-bold">“Download”</span> button
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
                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  This file will contain the details shown on the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemical”</span> page.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the{" "}
                  <span className="font-bold">“Save”</span> button, located
                  on the bottom right of your file explorer, so that it saves
                  the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-pheading font-bold">Downloads</span> section, to
                  view your PDF file, or you can go into the file explorer
                  location where you uploaded the PDF file and open it to view
                  it as well.
                </p>
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 7
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Chemical
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">“View Chemical”</span> page,
                  you can also delete the{" "}
                  <span className="text-primary-activelink font-bold">Chemicals</span> entry from
                  the <span className="text-primary-activelink font-bold">Orchard</span> and make
                  it so that <span className="text-primary-activelink font-bold">chemical</span> is
                  not used anymore with the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span> as well.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon
                    button [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] located to the
                    right of the <span className="text-primary-activelink font-bold">Orchard</span>{" "}
                    you want to delete a{" "}
                    <span className="text-primary-activelink font-bold">“Chemical”</span> from. A
                    small white box will show up with a list of options you can
                    go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Chemicals”</span> button
                    which will be the fourth button in the list, below the{" "}
                    <span className="font-bold">“Fertilizer”</span> button
                    and the above{" "}
                    <span className="font-bold">“Harvest”</span> button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">“Chemicals”</span> page of
                    the <span className="text-primary-activelink font-bold">Orchard</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> you wish to
                    delete from the{" "}
                    <span className="text-primary-activelink font-bold">Orchard</span>, either by
                    browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">chemical</span> that you
                    want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon
                    [It’ll look like this{" "}
                    <span className="font-bold">“⋮“</span>] to the right of
                    the <span className="text-primary-activelink font-bold">Chemical</span> that
                    you want to delete.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside
                    it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span>{" "}
                    button, it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">“View Chemical”</span> page
                    of the <span className="text-primary-activelink font-bold">Chemical</span> you
                    want to delete, you can then select the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span>{" "}
                    button and to the right of the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will then open a dialogue box, to ask if you want to
                    confirm your deletion of the{" "}
                    <span className="text-primary-activelink font-bold">Chemical</span> entry.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“Delete”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">“Chemical”</span> page of the{" "}
                  <span className="text-primary-activelink font-bold">Orchard</span> where you will
                  see the <span className="text-primary-activelink font-bold">Chemical</span> entry
                  deleted from the table.
                </p>
                <p className="mb-4">
                  Now that you have seen all the parts of the{" "}
                  <span className="text-primary-activelink font-bold">“Chemicals”</span> section of
                  the <span className="text-primary-activelink font-bold">“Orchard”</span> page,
                  next we are going to cover the{" "}
                  <span className="text-primary-activelink font-bold">“Harvesting”</span> section
                  of the <span className="text-primary-activelink font-bold">“Orchard”</span> page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default orchardchemical;
export const Head = () => (
  <>
    <title>Orchard Chemical | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);