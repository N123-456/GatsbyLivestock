import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TextToSpeech from "../components/TextToSpeech";

const orchardsale = () => {
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
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  helps manage and organize the harvests that are stored in the{" "}
                  <span className="text-primary-activelink font-bold">
                    Inventory
                  </span>{" "}
                  of your{" "}
                  <span className="text-primary-activelink font-bold">
                    Warehouse
                  </span>{" "}
                  and their upcoming sale.
                </p>
                <p className="mb-4">
                  This page allows farmers to track all of their stored harvests
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and their purchases from different vendors.
                </p>
                <p className="mb-4">
                  By keeping everything in one place, it simplifies
                  decision-making, improves efficiency, and helps maintain a
                  clear record of the farm's financial performance.
                </p>
                <p className="mb-4">
                  In the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
                  </span>{" "}
                  tab, you can add the stored harvest picked/gained from a
                  specific crop and have it sold to a{" "}
                  <span className="text-primary-activelink font-bold">
                    vendor
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Below is an example of what it should look like:
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Sale After Storage
                </h2>
                <p className="mb-4">
                  If you want to sell the stored harvest of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , you must make sure that there are a few things you need
                  ready and set up:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    Make sure there are harvests that are stored in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    of a{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    . (You can learn more within the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    section of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    ).
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
                  Now that we have all the required assets we need to sell a
                  stored harvest for our{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , we begin by:
                </p>
                <p className="mb-4">
                  First, you need to go to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you want to sell the stored harvest of.
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
                    you want to sell the harvest of.
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
                    A small window will appear containing a list of buttons.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . It should look like this:
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  From here, you can continue on to selling off the stored
                  harvest of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now, click on the{" "}
                  <span className="font-bold">
                    “’+’ Add Sale After Storage”
                  </span>{" "}
                  button, located at the top-left corner of the page, to the
                  right of the{" "}
                  <span className="font-bold">“Download Table”</span> button.
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Sale After Storage”
                  </span>{" "}
                  page.
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
                  <span className="text-primary-activelink font-bold">
                    “Add Harvesting”
                  </span>{" "}
                  page:
                </p>
                <p className="mb-4">
                  The first step we are going to cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crop & Storage Details”
                  </span>{" "}
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
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Crop & Storage Details”
                  </span>{" "}
                  step is where you can view the harvests of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  that you selected that are stored within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Inventory
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Crop Name & Variety”
                    </span>{" "}
                    detail: This is the name of the crop and what type it is
                    that is stored in the{" "}
                    <span className="text-primary-activelink font-bold">
                      inventory
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Crop Location”
                    </span>{" "}
                    detail: This is the name of the farm location of where the
                    crop grew from.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “National Zone”
                    </span>{" "}
                    detail: This is where the farm location is based from, only
                    including the National Zone of the location, (Province,
                    Country).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Provincial Zone”
                    </span>{" "}
                    detail: This is where the farm location is based from, only
                    including the Provincial Zone of the location, (Division,
                    District, Tehsil).
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest Window”
                    </span>{" "}
                    detail: This is the time and date window for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Harvest
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Storage Date”
                    </span>{" "}
                    detail: This is the head of a list of dates that are of when
                    a harvest was stored in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvested Quantity”
                    </span>{" "}
                    detail: This is the head of a list of harvest quantities
                    that are of every harvest that was stored within the{" "}
                    <span className="text-primary-activelink font-bold">
                      Inventory
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Warehouse”
                    </span>{" "}
                    detail: This is the head of a list of Warehouses where each
                    warehouse is where a harvest was stored.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Harvested Quantity”
                    </span>{" "}
                    detail: This is where the total harvested quantity of all
                    the stored harvests are shown.
                  </li>
                </ul>
                <p className="mb-4">
                  This is a non-editable step where you can view each detail of
                  the stored harvests and be made aware of the current stock of
                  stored harvest of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  The second step we are going to cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Customer Details”
                  </span>{" "}
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
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Customer Details”
                  </span>{" "}
                  step is where the details of the{" "}
                  <span className="text-primary-activelink font-bold">
                    vendor
                  </span>{" "}
                  that is looking to purchase your harvest of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and all the required payment information are entered.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Customer Name”
                    </span>{" "}
                    field: Enter in the name of the customer that is looking to
                    purchase your harvest. It can either be the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    , a company, a group, etc.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Payment Method”
                    </span>{" "}
                    field: Enter in the payment method that will be used for the
                    purchase of the harvest. Choose 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Bank
                        </span>
                        : If you selected the{" "}
                        <span className="text-primary-pheading font-bold">
                          Bank
                        </span>{" "}
                        option, then you have to fill 3 more fields that
                        describe the bank payment method the purchase is using.
                        <ul className="list-disc ml-6 mt-2">
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Bank Name”
                            </span>{" "}
                            field: Enter in the name of the Bank that will hold
                            the transaction of the purchase for the harvest.
                          </li>
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Account Number”
                            </span>{" "}
                            field: Enter in the account number of the
                            transaction from the harvest purchase.
                          </li>
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Account Title”
                            </span>{" "}
                            field: Enter in the account title of the bank
                            account that is paying for the harvest.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Cash
                        </span>
                        : If you selected the{" "}
                        <span className="text-primary-pheading font-bold">
                          Cash
                        </span>{" "}
                        option, then you have to fill 4 more fields that
                        describe the cash payment method the purchase is using.
                        <ul className="list-disc ml-6 mt-2">
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Receiver's Name”
                            </span>{" "}
                            field: Enter in the name of the receiver the
                            transaction of the purchase for the harvest.
                          </li>
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Mobile Number”
                            </span>{" "}
                            field: Enter in the mobile number of the receiver
                            that will hold the transaction of the purchase for
                            the harvest.
                          </li>
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “City”
                            </span>{" "}
                            field: Enter in the name of the city where the
                            transaction was held.
                          </li>
                          <li>
                            The{" "}
                            <span className="text-primary-activelink font-bold">
                              “Address”
                            </span>{" "}
                            field: Enter in the full address of the location
                            where the transaction was held.
                          </li>
                        </ul>
                      </li>
                    </ul>
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
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Warehouse
                    </span>{" "}
                    you want the stored harvest sold from.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure that all the required fields are filled
                  before continuing.
                </p>
                <p className="mb-4">
                  The third step we are going to cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale Details”
                  </span>{" "}
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
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale Details”
                  </span>{" "}
                  step is where all the required details of the sale for the
                  stored harvest will be entered.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field: Enter in the amount of harvest that is being sold to
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    . Please note that at the moment, the quantity can only go
                    up to 1400.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit Price”
                    </span>{" "}
                    field: Enter in the unit price of the harvest that is about
                    to be sold.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Price”
                    </span>{" "}
                    field: This is a non-editable field, where it will take your
                    entry from the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Quantity”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Unit Price”
                    </span>{" "}
                    field. It will show the Total price of the harvest that you
                    are selling to the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tax%”
                    </span>{" "}
                    field: Enter in the percentage of tax that will be added to
                    the transaction of the stored harvest.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tax Amount”
                    </span>{" "}
                    field: This is a non-editable field, where it will take your
                    entry from the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tax%”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Price”
                    </span>{" "}
                    field. It will show the amount that the tax will add to the
                    Total price.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Payable Amount”
                    </span>{" "}
                    field: This is a non-editable field, where it will take your
                    entry from the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Tax%”
                    </span>{" "}
                    field and the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Total Price”
                    </span>{" "}
                    field. It will show the final payable amount that will be
                    paid by the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>{" "}
                    for the purchase of the stored harvest.
                  </li>
                </ul>
                <p className="mb-4">
                  Once you have filled in all the required fields, then you can
                  click the <span className="font-bold">“Submit”</span> button.
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
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page to show you that you have added your sold harvest entry
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard’s Sale After Storage Table
                  </span>
                  .
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Now that we have added a Sale for our stored harvest of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , let us now cover the features related to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Sale After Storage Dashboard
                </h2>
                <p className="mb-4">
                  There are a variety of features within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage Dashboard
                  </span>
                  . Each one is made to assist you in looking for the stored
                  harvest that is for sale you had placed with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . We will first cover how to browse the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage Dashboard
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing within the Sale After Storage
                </h3>
                <p className="mb-4">
                  You can browse through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
                  </span>{" "}
                  table of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you want using the{" "}
                  <span className="font-bold">pages options</span>.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the{" "}
                  <span className="font-bold">pages options</span>:
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
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Total number of records
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    Records per page option
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    Page select
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    Go to page search
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
                    : This shows a number of how many stored harvest for sale
                    are there in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is on the bottom left of the page.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many stored
                    harvest for sale entries you want to see in one page. The
                    default is set to 5. The options are 5, 10, 50, and 100. It
                    is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Sale After Storage table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is to the bottom right of the page.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
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
                      Sale After Storage table
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
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you are looking for is and hit enter. It will then open the
                    page with the page number shown as well.
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
                  <span className="font-bold">page options</span> as a way of
                  finding a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvests for sale
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have covered how to browse, let’s show another way
                  you can find a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
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
                  Searching within the Sale After Storage
                </h3>
                <p className="mb-4">
                  You can search for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , as long as you know the name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    customer
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
                    you want to view and search a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Harvest”
                    </span>{" "}
                    from. A small white box will show up with a list of options
                    you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
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
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    Page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Then, find the{" "}
                  <span className="text-primary-activelink font-bold">
                    search options
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page. It is located under the{" "}
                  <span className="font-bold">
                    “’+’ Add Sale After Storage”
                  </span>{" "}
                  button and the{" "}
                  <span className="font-bold">“Download Table”</span> button.
                </p>
                <p className="mb-4">
                  Provided below is where the{" "}
                  <span className="text-primary-activelink font-bold">
                    search options
                  </span>{" "}
                  are:
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">You can only search based on:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Search by Customer Name”
                    </span>{" "}
                    search: Enter the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      customer
                    </span>{" "}
                    that has purchased the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest
                    </span>
                    .
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
                    Sale After Storage table
                  </span>{" "}
                  update with only the name of the chemical you typed in the
                  search bar.
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
                    stored harvest for sale
                  </span>{" "}
                  or to filter the table for a specific result.
                </p>
                <p className="mb-4">
                  Now that we have covered how to search and filter through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage table
                  </span>
                  , let us now show how to download the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  table.
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Sale After Storage Table
                </h3>
                <p className="mb-4">
                  You can download the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage table
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
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
                      “Sale After Storage”
                    </span>{" "}
                    table from. A small white box will show up with a list of
                    options you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
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
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    You can then adjust the{" "}
                    <span className="text-primary-activelink font-bold">
                      Sale After Storage table
                    </span>{" "}
                    using the{" "}
                    <span className="text-primary-activelink font-bold">
                      search options
                    </span>{" "}
                    to filter the table for specific results or you can increase
                    the count of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Records per page”
                    </span>{" "}
                    to show more results of harvesting associated to the{" "}
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
                    <span className="text-primary-activelink font-bold">
                      search options
                    </span>{" "}
                    and to the right of the{" "}
                    <span className="font-bold">
                      “’+’ Add Sale After Storage”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
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
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Sale After Storage
                </h3>
                <p className="mb-4">
                  You can view the{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
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
                    Sale After Storage
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
                      “Sale After Storage”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
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
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Here are 2 methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry in the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  :
                </p>
                <p className="mb-4">
                  The first method to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry in the table, is just by selecting the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you want to view.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  The second method to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
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
                      stored harvest for sale
                    </span>{" "}
                    entry you wish to view.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
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
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  These are the two methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry. Both do not have any differences in what details they
                  show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that we have covered how to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Sale After Storage
                  </span>{" "}
                  entry, we can now cover how to edit a{" "}
                  <span className="text-primary-activelink font-bold">
                    sale after storage
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
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
                  Editing a Sale After Storage
                </h3>
                <p className="mb-4">
                  Within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
                  </span>{" "}
                  page, you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry details shown on the page.
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
                    you want to edit the{" "}
                    <span className="text-primary-activelink font-bold">
                      “stored harvest for sale”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    entry you wish to edit the details of, either by browsing
                    for it or searching for it.
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
                      stored harvest for sale
                    </span>{" "}
                    entry that you want to edit.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    entry you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
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
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Sale After Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>
                  .
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  From here, you can edit any details of the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry.
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry you edited so you can review your changes and edits.
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  Now, let’s check out the next feature on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
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
                  Downloading a Sale After Storage
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
                  </span>{" "}
                  page you can choose to download a PDF file that contains the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
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
                    you want to download a{" "}
                    <span className="text-primary-activelink font-bold">
                      “stored harvest for sale”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
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
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you wish to download the details of, either by browsing for
                    it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    that you want to download.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
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
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  This file will contain the details shown on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
                </p>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
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
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 7
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Sale After Storage
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Sale After Storage”
                  </span>{" "}
                  page, you can also delete the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and make it so that{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  doesn’t show within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  as well.
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
                    you want to delete a{" "}
                    <span className="text-primary-activelink font-bold">
                      “stored harvest for sale”
                    </span>{" "}
                    from. A small white box will show up with a list of options
                    you can go to.
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
                    Select the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button located as the last option, below the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    in the list.
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
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
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
                      stored harvest for sale
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    that you want to delete.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Sale After Storage”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
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
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    It will then open a dialogue box, to ask if you want to
                    confirm your deletion of the{" "}
                    <span className="text-primary-activelink font-bold">
                      stored harvest for sale
                    </span>{" "}
                    entry.
                  </li>
                  <li className="mb-2">
                    [Update with Fixed Image after Osama bhai fixes the submit
                    button of adding sale after storage]
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“Delete”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  [Update with Fixed Image after Osama bhai fixes the submit
                  button of adding sale after storage]
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  where you will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    stored harvest for sale
                  </span>{" "}
                  entry deleted from the table.
                </p>
                <p className="mb-4">
                  Now that we have covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  section. We have now covered all the sections of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page! Congratulations! You can now utilize the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page to its absolute limits!
                </p>
                <p className="mb-4">
                  We are now going to continue on to the next page, the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Warehouse”
                  </span>{" "}
                  Page!
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default orchardsale;
export const Head = () => (
  <>
    <title>Orchard Sale | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);