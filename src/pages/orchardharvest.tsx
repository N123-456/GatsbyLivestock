import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TextToSpeech from "../components/TextToSpeech";

const orchardharvest = () => {
   const data = useStaticQuery(graphql`
    query {
         dat: file(relativePath: { eq: "dat.png" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         lot: file(relativePath: { eq: "lot.png" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         qap: file(relativePath: { eq: "qap.png" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         apqp: file(relativePath: { eq: "ps.apqp" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         inven: file(relativePath: { eq: "ao.inven" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         ain: file(relativePath: { eq: "ain.png" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         submit: file(relativePath: { eq: "submit.png" }) {
           childImageSharp {
             gatsbyImageData(placeholder: BLURRED)
           }
         }
         ma: file(relativePath: { eq: "ma.png" }) {
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
     const dat = getImage(data.dat);
     const lot = getImage(data.lot);
     const qap = getImage(data.qap);
     const ps = getImage(data.ps);
     const gtp = getImage(data.gtp);
     const apqp = getImage(data.apqp);
     const inven = getImage(data.inven);
     const ain = getImage(data.submit);
     const submit = getImage(data.vo);
     const ma = getImage(data.ma);
     const rs = getImage(data.rs);
     const db = getImage(data.db);
     const ao = getImage(data.ao);
     const few = getImage(data.few);
     const toto = getImage(data.toto);
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
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvesting
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  helps manage and organize the process of gathering crops and
                  recording important harvest-related details. It ensures that
                  harvested crops are properly documented, categorized, and
                  accounted for.
                </p>
                <p className="mb-4">
                  This page allows farmers to track the harvest process, monitor
                  yields, and manage post-harvest activities such as selling or
                  storing crops. It provides a structured way to organize
                  harvested produce, record quantities, and manage revenues.
                </p>
                <p className="mb-4">
                  By keeping everything in one place, it simplifies
                  decision-making, improves efficiency, and helps maintain a
                  clear record of the farm's productivity and financial
                  performance.
                </p>
                <p className="mb-4">
                  In the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  tab, you will add the harvest picked/gained from a specific
                  crop.
                </p>
                <p className="mb-4">
                  Below is an example of what it should look like:
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Harvesting
                </h2>
                <p className="mb-4">
                  If you want to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  to an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , you must make sure that there are a few things you need
                  ready and set up:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    A{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    space has been listed in the{" "}
                    <span className="text-primary-pheading font-bold">
                      FMS Inventory
                    </span>{" "}
                    for the harvest. (Learn how to set it up).
                  </li>
                  <li className="mb-2">
                    A{" "}
                    <span className="text-primary-activelink font-bold">
                      Vendor
                    </span>{" "}
                    contact for the produce to go to. (Learn how to set it up).
                  </li>
                </ul>
                <p className="mb-4">
                  Now that we have all the required assets for the farm we need
                  to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry for our{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , we begin by:
                </p>
                <p className="mb-4">
                  First, you need to go to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you want to add the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  to.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You start by selecting the{" "}
                    <span className="font-bold">“three dots”</span> icon [shown
                    as <span className="font-bold">“⋮”</span> icon], located at
                    the right-side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to add{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    to.
                  </li>
                  <li className="mb-2">
                    A small window will appear containing a list of buttons.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“Harvest”</span>{" "}
                    button located as the fifth option, below the{" "}
                    <span className="font-bold">“Chemical”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . It should look like this:
                </p>
                <p className="mb-4">
                  From here, you can continue on adding the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now, click on the{" "}
                  <span className="font-bold">“’+’ Add Harvesting”</span>{" "}
                  button, located at the top-left corner of the page, to the
                  right of the{" "}
                  <span className="font-bold">“Download Table”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Harvesting”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  All the fields within this page are required to be filled. So
                  please make sure to not skip any fields.
                </p>
                <p className="mb-4">
                  Let’s go through the steps and their fields of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Harvesting”
                  </span>{" "}
                  page:
                </p>
                <p className="mb-4">
                  The first step we are going to cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Date & Time”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {dat && (
                                          <GatsbyImage
                                            image={dat}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Date & Time”
                  </span>{" "}
                  step is a step where you input the date and time. You will
                  also have to put in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Post Harvest
                  </span>{" "}
                  state of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  as well as the{" "}
                  <span className="text-primary-activelink font-bold">
                    Vendor
                  </span>
                  . There are 3 fields that are all required to be filled:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest Date and Time”
                    </span>{" "}
                    field: Enter in the Date and Time of when the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    will happen.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Post Harvest”
                    </span>{" "}
                    field: Enter in what will happen to the produce after the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>
                    . Select 1 of 3 options:
                     {/* <div className="pl-13 pt-8 flex justify-center">
                              {VF && (
                                              <GatsbyImage
                                                image={VF}
                                                alt="Startups illustration"
                                                className="border border-gray-200 shadow-lg w-[1000.58px] "
                                              />
                                            )}
                                          </div>
                                          <br />
                                          <br /> */}
                    <ul className="list-disc ml-6 mt-2">
                      <li className="mb-2">
                        <span className="text-primary-pheading font-bold">
                          Direct Sale
                        </span>{" "}
                        (Default): Select this option if you wish to directly
                        sell the produce to a{" "}
                        <span className="text-primary-activelink font-bold">
                          vendor
                        </span>{" "}
                        after its{" "}
                        <span className="text-primary-activelink font-bold">
                          harvest
                        </span>
                        . These are the extra options that show up when you
                        press this option:
                        <ul className="list-disc ml-6 mt-2">
                          <li>
                            Within the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Harvest Date and Time”
                            </span>{" "}
                            step, you get the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Vendor”
                            </span>{" "}
                            field.
                          </li>
                          <li>
                            Within the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Quantity And Pricing”
                            </span>{" "}
                            step, you get the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Quantity”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Sale Price per unit”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Total Revenue”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Head of Accounts”
                            </span>{" "}
                            field, and the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Cheque No. / Transaction ID”
                            </span>{" "}
                            field. You can go to the third step for more
                            details.
                          </li>
                           {/* <div className="pl-13 pt-8 flex justify-center">
                                    {VF && (
                                                    <GatsbyImage
                                                      image={VF}
                                                      alt="Startups illustration"
                                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                                    />
                                                  )}
                                                </div>
                                                <br />
                                                <br /> */}
                        </ul>
                      </li>
                      <li className="mb-2">
                        <span className="text-primary-pheading font-bold">
                          Processed
                        </span>
                        : Select this option if you wish to process the{" "}
                        <span className="text-primary-activelink font-bold">
                          harvest
                        </span>{" "}
                        first then look to selling it to a{" "}
                        <span className="text-primary-activelink font-bold">
                          vendor
                        </span>
                        . These are the extra options that show up when you
                        press this option:
                        <ul className="list-disc ml-6 mt-2">
                          <li>
                            Within the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Harvest Date and Time”
                            </span>{" "}
                            step, you get the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Vendor”
                            </span>{" "}
                            field.
                          </li>
                          <li>
                            Within the{" "}
                            <span className="text-primary-activelink font-bold">
                              “After Processed Quantity & Price”
                            </span>{" "}
                            step, you get the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Before Processed Quantity”
                            </span>{" "}
                            field and its{" "}
                            <span className="text-primary-activelink font-bold">
                              “Unit”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “After Processing Quantity”
                            </span>{" "}
                            field and its{" "}
                            <span className="text-primary-activelink font-bold">
                              “Unit”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Revenue Amount Per Unit”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Head of Accounts”
                            </span>{" "}
                            field, and the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Cheque No. / Transaction ID”
                            </span>{" "}
                            field. You can go to the third step for more
                            details.
                          </li>
                           {/* <div className="pl-13 pt-8 flex justify-center">
                                    {VF && (
                                                    <GatsbyImage
                                                      image={VF}
                                                      alt="Startups illustration"
                                                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                                                    />
                                                  )}
                                                </div>
                                                <br />
                                                <br /> */}
                        </ul>
                      </li>
                      <li className="mb-2">
                        <span className="text-primary-pheading font-bold">
                          Storage
                        </span>
                        : Select this option if you want to store it in a{" "}
                        <span className="text-primary-activelink font-bold">
                          Warehouse
                        </span>{" "}
                        that has been listed in the{" "}
                        <span className="text-primary-pheading font-bold">
                          Inventory
                        </span>{" "}
                        of{" "}
                        <span className="text-primary-pheading font-bold">
                          Farm Management System
                        </span>
                        . These are the extra options that show up when you
                        press this option:
                        <ul className="list-disc ml-6 mt-2">
                          <li>
                            Within the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Inventory”
                            </span>{" "}
                            step, you get the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Warehouse”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Inventory”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Quantity”
                            </span>{" "}
                            field, the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Revenue Amount Per Unit”
                            </span>{" "}
                            field, and the{" "}
                            <span className="text-primary-activelink font-bold">
                              “Total Revenue Amount”
                            </span>{" "}
                            field. You can go to the third step for more
                            details.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Vendor”
                    </span>{" "}
                    Field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>{" "}
                    or company that is looking to purchase your crop. It will
                    show a list that contains the contacts within{" "}
                    <span className="text-primary-pheading font-bold">FMS</span>{" "}
                    that are listed as a{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    . This field will only appear if the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Post Harvest”
                    </span>{" "}
                    field is either set to{" "}
                    <span className="text-primary-pheading font-bold">
                      “Processed”
                    </span>{" "}
                    or{" "}
                    <span className="text-primary-pheading font-bold">
                      “Direct Sale”
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields within this step
                  are filled.
                </p>
                <p className="mb-4">
                  The second step that we are going to look at is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Lot”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {lot && (
                                          <GatsbyImage
                                            image={lot}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Lot”
                  </span>{" "}
                  step is where you name a batch name and number for your{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  as well as grade the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  depending on its state. There are 2 fields that are all
                  required to be filled:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Batch Number”
                    </span>{" "}
                    field: Enter in the batch number of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that is being graded. You can either put in a simple number
                    (such as 1, 2, 3, etc) or you can use a tag system that your
                    farm uses to identify and sort your{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    (such as{" "}
                    <span className="font-bold">EX1A_HVSTSCTN_001</span>).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Grade of Yield”
                    </span>{" "}
                    field: Enter in the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Grade”
                    </span>{" "}
                    of the yield that has been given to the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    (such as <span className="font-bold">“High”</span>,{" "}
                    <span className="font-bold">“Low”</span>, etc).
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields within this step
                  are filled.
                </p>
                <p className="mb-4">
                  The third step contains three different steps that all each
                  have different types of fields. Here are the steps and each of
                  their details:
                </p>
                <p className="mb-4">
                  Now, when the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Post Harvest”
                  </span>{" "}
                  field is set to the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Direct Sale”
                  </span>{" "}
                  option, which is the default option, it will show the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Quantity and Pricing”
                  </span>{" "}
                  step and all its fields.
                </p>
                
                 
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Quantity and Pricing”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                         {qap && (
                                          <GatsbyImage
                                            image={qap}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Quantity and Pricing”
                  </span>{" "}
                  step is where you enter in the quantity (in either Kilograms
                  or Grams) and the pricing related info for the direct sale of
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  . There are 6 fields that are all required to be filled:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field: Enter in the weight of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that is being directly sold to the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    . The weight options are{" "}
                    <span className="font-bold">Kilograms</span> and{" "}
                    <span className="font-bold">Grams</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale price Per Unit”
                    </span>{" "}
                    field: Enter in the sale price of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    per unit of <span className="font-bold">Kilogram</span> or{" "}
                    <span className="font-bold">Gram</span>, depending on what
                    you chose earlier.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Revenue”
                    </span>{" "}
                    field: This field is not editable, as it will change its
                    value based on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale price per unit”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head of Accounts”
                    </span>{" "}
                    field: Enter in the form at which the transaction was made
                    for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>
                    . You can choose between two options:
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
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter in the Cheque No. or the Transaction ID of the
                    purchase by the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields are filled
                  before continuing.
                </p>
                <p className="mb-4">
                  Now, when the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Post Harvest”
                  </span>{" "}
                  field is set to the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Processed”
                  </span>{" "}
                  option, it will show the{" "}
                  <span className="text-primary-activelink font-bold">
                    “After Processed Quantity and Price”
                  </span>{" "}
                  step and all its fields.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “After Processed Quantity and Price”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {apqp && (
                                          <GatsbyImage
                                            image={apqp}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “After Processed Quantity and Price”
                  </span>{" "}
                  step is where you enter in both the before processing quantity
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  and after processing quantity of the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  as well as the pricing information of the processed quantity
                  of{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Before Processed Quantity”
                    </span>{" "}
                    field: Enter in the weight of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    before it is sent over to be processed.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit”
                    </span>{" "}
                    field: Enter in the unit of measurement used to weigh the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>
                    , options are <span className="font-bold">Kilograms</span>{" "}
                    and <span className="font-bold">Grams</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “After Processed Quantity”
                    </span>{" "}
                    field: Enter in the weight of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    after it is processed.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit”
                    </span>{" "}
                    field: Enter in the unit of measurement used to weigh the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>
                    , the options are{" "}
                    <span className="font-bold">Kilograms</span> and{" "}
                    <span className="font-bold">Grams</span>.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Revenue Amount per unit”
                    </span>{" "}
                    field: Enter in the amount of revenue that would be earned
                    per unit of <span className="font-bold">Kilogram</span> or{" "}
                    <span className="font-bold">Gram</span>, depending on what
                    you chose earlier.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Revenue Amount”
                    </span>{" "}
                    field: This field is not editable, as it will change its
                    value based on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Revenue amount per unit”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “After Processed Quantity”
                    </span>{" "}
                    field.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head of Accounts”
                    </span>{" "}
                    field: Enter in the form at which the transaction was made
                    for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>
                    . You can choose between two options:
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
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter in the Cheque No. or the Transaction ID of the
                    purchase by the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields are filled
                  before continuing.
                </p>
                <p className="mb-4">
                  Now, when the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Post Harvest”
                  </span>{" "}
                  field is set to the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Storage”
                  </span>{" "}
                  option, it will show the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Inventory”
                  </span>{" "}
                  step and all its fields.
                </p>
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Inventory”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {inven && (
                                          <GatsbyImage
                                            image={inven}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Inventory”
                  </span>{" "}
                  step is where you enter which{" "}
                  <span className="text-primary-activelink font-bold">
                    warehouse
                  </span>{" "}
                  and what{" "}
                  <span className="text-primary-activelink font-bold">
                    inventory
                  </span>{" "}
                  is the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  being stored in, as well as the quantity and pricing
                  information.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    that holds the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    space to store the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Inventory”
                    </span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    that will hold the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field: Enter in the weight of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that will be stored in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>
                    . The weight unit that you set when making the{" "}
                    <span className="text-primary-activelink font-bold">
                      inventory
                    </span>{" "}
                    will be used for the quantity.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Revenue Amount Per Unit”
                    </span>{" "}
                    field: Enter in the amount of revenue that would be earned
                    per unit of <span className="font-bold">Kilogram</span> or{" "}
                    <span className="font-bold">Gram</span>, depending on what
                    you chose earlier.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Revenue Amount”
                    </span>{" "}
                    field: This field is not editable, as it will change its
                    value based on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Revenue amount per unit”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields are filled
                  before continuing.
                </p>
                <p className="mb-4">
                  These are the three different steps that you can see,
                  depending on what option you selected in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Post Harvest”
                  </span>{" "}
                  field.
                </p>
                <p className="mb-4">
                  Now the last step, is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Additional Information”
                  </span>{" "}
                  step:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {ain && (
                                          <GatsbyImage
                                            image={ain}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Additional Information”
                  </span>{" "}
                  step is where you can note down any Instructions for the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Instructions”
                    </span>{" "}
                    field: Enter in any additional instructions for the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that are not shown on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Add Harvest”
                    </span>{" "}
                    page, and are necessary for the farm. The{" "}
                    <span className="text-primary-activelink font-bold">
                      Instructions
                    </span>{" "}
                    is not a necessary field that needs to be filled, however it
                    is invaluable if there is anything that must happen to the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>
                    . It can be added here.
                  </li>
                </ul>
                <p className="mb-4">
                  Once you have filled in all the required fields, then you can
                  click the <span className="font-bold">“Submit”</span> button.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                          {submit && (
                                          <GatsbyImage
                                            image={submit}
                                            alt="Startups illustration"
                                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                                          />
                                        )}
                                      </div>
                                      <br />
                                      <br />
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page to show you that you have added your{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard’s Harvesting Table
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have added a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , let us now cover the features related to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Harvesting Dashboard
                </h2>
                <p className="mb-4">
                  There are a variety of features within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvesting Dashboard
                  </span>
                  . Each one is made to assist you in looking for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvesting
                  </span>{" "}
                  you had placed with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . We will first cover how to browse the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvesting Dashboard
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing within the Harvesting
                </h3>
                <p className="mb-4">
                  You can browse through the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvesting table
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
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
                    Harvesting table
                  </span>
                  .
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
                      Harvests
                    </span>{" "}
                    are there in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvesting table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is on the bottom left of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvests table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is to the bottom right of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Page select options
                    </span>
                    : It shows which page you are currently in (The default is
                    the 1st page). It gives you buttons for the next five pages
                    after which it gives you the button to the last page. You
                    can move to the previous page using the left arrow button,
                    located on the left side, or to the next page using the
                    right arrow button located on the right side. It is located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Chemical’s table
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
                                              className="border border-gray-200 shadow-lg "
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
                      harvest
                    </span>{" "}
                    you are looking for is and hit enter. It will then open the
                    page with the page number shown as well.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                            {gtp && (
                                            <GatsbyImage
                                              image={gtp}
                                              alt="Startups illustration"
                                              className="border border-gray-200 shadow-lg "
                                            />
                                          )}
                                        </div>
                                        <br />
                                        <br />
                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding a{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">
                    harvests
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have covered how to browse, let’s show another way
                  you can find a{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  you are looking for.
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching within the Harvesting
                </h3>
                <p className="mb-4">
                  You can search for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , as long as you know the batch number of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>
                  . You can start by:
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
                    you want to view and search the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    from. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    Page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Then, find the{" "}
                  <span className="text-primary-activelink font-bold">
                    search bar
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page. It is located under the{" "}
                  <span className="font-bold">“’+’ Add Harvesting”</span> button
                  and the <span className="font-bold">“Download Table”</span>{" "}
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
                      “Search by Harvest Batch number”
                    </span>{" "}
                    search: Enter the batch number of the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that is within the table.
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
                    Harvesting table
                  </span>{" "}
                  update with only the batch number of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  you typed in the search bar.
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
                  You can use the search function to find for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  or to filter the table for a specific result.
                </p>
                <p className="mb-4">
                  Now that we have covered how to search and filter through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest table
                  </span>
                  , let us now show how to download the table.
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Harvesting Table
                </h3>
                <p className="mb-4">
                  You can download the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest table
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  page. As long as the filtered table shows any results or the
                  table is shown in its complete form, you can then use this
                  feature.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and download the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    table from. A small white box will show up with a list of
                    options you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    You can then adjust the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvesting table
                    </span>{" "}
                    using the <span className="font-bold">search options</span>{" "}
                    to filter the table for specific results or you can increase
                    the count of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Records per page”
                    </span>{" "}
                    to show more results of{" "}
                    <span className="text-primary-activelink font-bold">
                      harvesting
                    </span>{" "}
                    associated to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    When you are ready to download the table as you see fit,
                    select the{" "}
                    <span className="font-bold">“Download Table”</span> button,
                    located at the top of the page, above the{" "}
                    <span className="font-bold">search options</span> and to the
                    right of the{" "}
                    <span className="font-bold">“’+’ Add Harvesting”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                <p className="mb-4">
                  This file will contain only the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table
                  </span>{" "}
                  in the page that is being currently seen (default is page 1).
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
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Harvesting
                </h3>
                <p className="mb-4">
                  You can view the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry and see its details as well as perform actions on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here is how you can view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry in an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  :
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
                    you want to view a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Here are 2 methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry in{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>:
                </p>
                <p className="mb-4">
                  The first method to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry in the table, is just by selecting the batch number of
                  the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      Batch number
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you want to view.
                  </li>
                  <li className="mb-2">
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  The second method to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
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
                      harvest
                    </span>{" "}
                    you wish to view.
                  </li>
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
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  These are the two methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry. Both do not have any differences in what details they
                  show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry you are viewing from the options listed above. You can
                  also sell the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  from{" "}
                  <span className="text-primary-pheading font-bold">
                    storage
                  </span>
                  , if it has been sent to{" "}
                  <span className="text-primary-pheading font-bold">
                    storage
                  </span>{" "}
                  in a{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have covered how to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  , now we are going to cover the additional actions you can do
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page. Starting with{" "}
                  <span className="text-primary-activelink font-bold">
                    “Editing a Harvesting”
                  </span>
                  .
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Harvesting
                </h3>
                <p className="mb-4">
                  Within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page, you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  details shown on the page.
                </p>
                <p className="mb-4">You can do so by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and edit a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    you wish to edit the details of, either by browsing for it
                    or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] to
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    that you want to edit.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
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
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Harvest”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  .
                </p>
                <p className="mb-4">
                  From here, you can edit any details of the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now keep in mind that each edit page is different with either
                  extra fields or less fields being shown on the different
                  pages.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  you edited so you can review your changes and edits.
                </p>
                <p className="mb-4">
                  An important point to make is that you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  product details only as the other fields will require you to
                  modify the{" "}
                  <span className="text-primary-activelink font-bold">
                    Inventory
                  </span>{" "}
                  item that is the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now, let’s check out the next feature on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page, the{" "}
                  <span className="text-primary-activelink font-bold">
                    Download
                  </span>{" "}
                  feature.
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 6
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Harvesting
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page you can choose to download a PDF file that contains the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  details and how much is being used on the farm.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and download a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    you wish to download the details of, either by browsing for
                    it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    that you want to view.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you want to download the details of, you can then select the{" "}
                    <span className="font-bold">“Download”</span> button located
                    at the top-right corner of the page, above both the{" "}
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
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
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
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 7
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Harvesting
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page, you can also delete the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and make it so that{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  doesn’t exist for this{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  anymore.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and delete the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    from. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    you wish to delete from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    , either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] to
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    that you want to delete.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
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
                  <li className="mb-2">
                    It will then open a dialogue box, to ask if you want to
                    confirm your deletion of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    entry.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“Delete”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  where you will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry deleted from the table.
                </p>
                <p className="mb-4">
                  Now that we covered how to delete a{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , let’s now cover how to access the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale after Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    harvest
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page.
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 8
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Selling a Harvest from Storage
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Harvest”
                  </span>{" "}
                  page, you can also sell the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and make it so that the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  that was first stored in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>
                  , can then be sold to a{" "}
                  <span className="text-primary-activelink font-bold">
                    vendor
                  </span>{" "}
                  or a company.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and sell a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    from. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the <span className="font-bold">“Harvest”</span>{" "}
                    button which will be the fifth button in the list, below the{" "}
                    <span className="font-bold">“Chemicals”</span> button and
                    above the{" "}
                    <span className="font-bold">“Field Inspection”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvesting”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    you wish to delete from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    , either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    that you want to sell.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Harvest”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Now, you can select the{" "}
                    <span className="font-bold">“Sale After Harvest”</span>{" "}
                    button, located to the left of the{" "}
                    <span className="font-bold">“Download”</span> button.
                  </li>
                  <li className="mb-2">
                    It will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale after Storage”
                    </span>{" "}
                    page, and it will open the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Adding Sale after storage”
                    </span>{" "}
                    page.
                  </li>
                </ol>
                <p className="mb-4">
                  Please continue on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Adding a Sale after Storage”
                  </span>{" "}
                  sub-section in the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  section, to learn more on.
                </p>
                <p className="mb-4">
                  Now that you have seen all the parts of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Harvesting”
                  </span>{" "}
                  section of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page, next we are going to cover the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  section of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
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

export default orchardharvest;
export const Head = () => (
  <>
    <title>Orchard Harvest | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);