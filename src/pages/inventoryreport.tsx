import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import PrivateRoute from '../components/Privateroute/PrivateRoute';
import { AppLayout } from '../components/AppShell/AppLayout';
import TextToSpeech from '../components/TextToSpeech';

const inventoryreport = () => {
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
                <div className="text-justify lg:pr-4 hide-scrollbar text-primary-paragraph">
                  <div className="flex items-center">
                    <div className="hidden lg:block">
                      <TextToSpeech textSelector=".acu" />
                    </div>
                    <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#D5D5D5]">
                    The Inventory Reports
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
                     <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                    <h1 className="text-primary-activelink font-bold">
                    How to get to the Inventory Reports Page
                    </h1><br />
                    <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                      If you want to check out the{" "}
                      <span className="text-primary-activelink font-bold">
                        “Inventory Reports”
                      </span>{" "}
                      page, you can start by:
                    </p><br />
                    <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                      <li>
                        First start by clicking the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Inventory Reports”
                        </span>{" "}
                        button located at the top-right of the page, to the right of
                        the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Equipment Reports”
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
                          Inventory Reports
                        </span>{" "}
                        page.
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
                        From here you can continue to review the{" "}
                        <span className="text-primary-pheading font-bold">
                          "Inventory Reports"
                        </span>{" "}
                        page to wish
                      </li>
    
                      <li>
                        If you wish to go back to the{" "}
                        <span className="text-primary-activelink font-bold">
                          Reports
                        </span>{" "}
                        page, then you can click the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Go Back?”
                        </span>{" "}
                        button located to the left of the header of the page.
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
                        Now that you know how to open the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Inventory Reports”
                        </span>{" "}
                        page, lets now go through an overview of the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Inventory Reports”
                        </span>{" "}
                        page.
                      </p>
                    </ul>
                    <br />
     <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                    <h1 className="text-primary-activelink font-bold font-montserrat text-[19px]">
                    Overview of the Inventory Reports Page
                    </h1><br />
                    <p className="font-montserrat text-[18px] ">
                      The{" "}
                      <span className="text-primary-pheading font-bold">
                        “Inventory Reports”
                      </span>{" "}
                      page is where you can view the lists of the Inventory and what state they are in entered in the “Inventory” page such as a summary of the Inventory that is purchased, Inventory Acquisition Transactions, Inventory Item Usages, Inventory Item Transfers, Inventory Item Maintenance and Repairs, Inventory Item Disposals, and finally the Inventory Item Reconciliations.
                      <br /> You can set the Date range for the Report so that you can either see the overall progress over years or the progress within a month.
                      <br /> You can also{" "}
                      <span className="text-primary-activelink font-bold">
                        download
                      </span>{" "}
                      the Report to view at a later time.
                      <br /> Here is what the{" "}
                      <span className="text-primary-pheading font-bold">
                        “Inventory Reports”
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
                        “Inventory Reports”
                      </span>{" "}
                      page. Starting with the{" "}
                      <span className="text-primary-pheading font-semibold">
                        “Summary of Inventory”
                      </span>{" "}
                      section.
                    </p>
                    <br />
                    <h2 className=" text-primary-pheading font-extrabold text-[19px]">
                     1. Summary of Inventory
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                     This Table is where you can view a list of Inventory items and their details that are under the Date range you set.
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
                      “Inventory Acquisition Transactions”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-extrabold">
                    2. Inventory Acquisition Transactions
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                      This Table is where you can view a list of Inventory items that have been acquired and their Transactions, under the Date range you set.


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
                        “Inventory Item Usages”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-extrabold">
                    3. Inventory Item Usages
                    </h2>
                    <p>
                     This Table is where you can view a list of Inventory items that have been used and the usage details, under the Date range you set.
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
                        “Inventory Item Transfers”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-bold">
                    4. Inventory Item Transfers
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                     This Table is where you can view a list of Inventory Items that have been transferred around and their transfer details, under the Date range you set.
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
                        “Inventory Item Maintenance and Repairs”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-bold">
                    5. Inventory Item Maintenance and Repairs
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                     This Table is where you can view a list of inventory item’s that have needed maintenance or repairs and their details, under the Date range you set.
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
                        “Inventory Item Disposals”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-bold">
                    6. Inventory Item Disposals
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                     This Table is where you can view a list of Inventory items that needed to be disposed and the disposal details, under the Date range you set.
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
                        “Inventory Item Reconciliations”
                      </span>
                      .
                    </p>
                    <br />
                    <h2 className="text-primary-pheading font-bold">
                    7. Inventory Item Reconciliations
                    </h2>
                    <p className="text-[18px] dark:text-[#D5D5D5]">
                     This Table is where you can view a list of Inventory items that have needed to be re-conciliated, under the Date range you set.

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
                      Now that we have covered the sections, we are now going to
                      cover the features, starting with the{" "}
                      <span className="text-primary-pheading font-bold">
                        {" "}
                        setting a date range for the inventory reports.
                      </span>
                    </p>
                    <br />
                     <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                    <h1 className="text-primary-activelink font-bold">
                    Setting a Date range for the Inventory Reports
                    </h1><br />
                    <p className=" text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                     If you want a custom date range of your equipment reports, then you can set the date range by:
                    </p>
                    <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                      <li>
                        First start by clicking the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Inventory Reports”
                        </span>{" "}
                        button located at the top-right of the page, to the right of
                        the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Equipment Reports”
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
                          Inventory Reports
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
                          “Inventory Summary”
                        </span>{" "}
                        table and below the{" "}
                        <span className="text-primary-activelink font-bold">
                          “Print”
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
                        <span className=" font-bold">Date Range</span>{" "} select
                        option. Set your custom date range and then close it.
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
                          “Inventory Reports”
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
                          “Inventory Reports”
                        </span>{" "}
                        page, lets now cover how to{" "}
                        <span className="text-primary-activelink font-bold">
                          download
                        </span>{" "}
                        the Inventory Report.
                      </p>
                    </ul>
    <br /> <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-[#BE8B45]">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                    <h1 className="text-primary-activelink font-bold">
                    How to download an Inventory Report
                    </h1><br />
                    <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                      If you want to download the inventory report, then you can do
                      so by:
                    </p>
                    <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                      <li>
                        First start by clicking the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Inventory Reports”
                        </span>{" "}
                        button located at the top-right of the page, to the right of
                        the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Equipment Reports”
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
                          Inventory Reports
                        </span>{" "}
                        page.
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
                        please set a different date range. (as shown in Setting a
                        Date Range for the Inventory Reports).
                      </li>
                      <li>
                        After selecting the date range, you can then download the
                        Inventory report by clicking the table and below the{" "}
                        <span className="text-primary-activelink font-bold">
                          “Download”
                        </span>{" "}
                        button, located to the top-right of the page, above the{" "}
                        <span className="font-bold">“Date Select”</span> option.
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
                          This file contains the current view of the Inventory
                          Report page and their details.
                        </li>
                      </ul>
    <br />
                      <li>
                        When you have found a suitable place for your PDF file, then
                        you can press the{" "} <span className='font-bold'>“Save”</span>{" "} button, located on the bottom right
                        of your file explorer, so that it saves the PDF file to that
                        folder.
                      </li>
                      <br />
                      <li>
                        Now you can either go to the top-right hand of your browser
                        and go into the Downloads section, to view your PDF file, or
                        you can go into the file explorer location where you
                        uploaded the PDF file and open it to view it as well.
                      </li>
                      <br />
                      <li>
                        Provided below is an example of what it should look like:
                      </li><br />
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
                      <li>Now you know how to {" "}
                        <span className="text-primary-activelink font-bold">
                          download
                        </span>{" "} an Inventory Report!</li><br />
                      <p>
                        Now that we have covered how to{" "}
                        <span className="text-primary-activelink font-bold">
                          download
                        </span>{" "}
                        an inventory Report, We have now now covered the entire{" "}
                        <span className="text-primary-pheading font-bold">
                          “inventory Reports”
                        </span>{" "}
                        page!
                      </p>
                      <br />
                      <p>
                        Next we are now going to cover the{" "}
                        <span className="text-primary-pheading font-bold">
                          “Orchards Reports”
                        </span>{" "}
                        page!
                      </p>
                    </ul>
                  </div>
                </div>
              </div>
            </PrivateRoute>
          </AppLayout>
  )
}

export default inventoryreport
export const Head = () => (
  <>
    <title>Inventory Report | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);