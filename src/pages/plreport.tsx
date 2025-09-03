import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import TextToSpeech from "../components/TextToSpeech";

const plreport = () => {
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
                The P&L Reports
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
              <h1 className="text-primary-pheading font-bold">
                How to get to the P&L Reports Page
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to check out the{" "}
                <span className="text-primary-activelink font-bold">
                  “P&L Reports”
                </span>{" "}
                page, you can start by:
              </p>
              <br />
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Inventory Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchards Reports”
                  </span>{" "}
                  button and below the{" "}
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
                    P&L Reports
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
                    "P&L Reports"
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
                    “P&L Reports”
                  </span>{" "}
                  page, lets now go through an overview of the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
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
              <br />
              <h1 className="text-primary-pheading font-bold font-montserrat text-[19px]">
                Overview of the P&L Reports Page
              </h1>
              <br />
              <p className="font-montserrat text-[18px] ">
                The{" "}
                <span className="text-primary-pheading font-bold">
                  “P&L Reports”
                </span>{" "}
                page is where you can view the lists of the various parts of the
                “Financials” page such as the Revenue, The Cost of Gods sold,
                The Profits, The Operating costs, The Operating Profits, The
                EBITDA, The Depreciation and Amortization, The Interest
                Expenses, The Net Profit before Taxes and the Taxes and Net
                Profit after Taxes for the Financial of the Farm Operation.
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
                  “P&L Reports”
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
                  “P&L Reports”
                </span>{" "}
                page. Starting with the{" "}
                <span className="text-primary-pheading font-semibold">
                  “Revenue”
                </span>{" "}
                section.
              </p>
              <br />
              <h2 className=" text-primary-pheading font-extrabold text-[19px]">
                1. Revenue
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the Revenue sources and their
                amounts as of the Date range that has been set.
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
                  “Cost of Goods Sold”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                2. Cost of Goods Sold
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the costs of the Goods and
                their amounts as of the Date range that has been set.
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
                  “Profits”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                3. Profits
              </h2>
              <p>
                This is where you can view the Profit of the Farm operation as
                of the Date range that has been set. The equation used to
                calculate is shown below:
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
                Also shown below is what it looks like:
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
                  “Operating Expenses”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                4. Operating Expenses
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the Operating costs of the Farm
                Management System and the Salaries for Management and
                Operations, as of the Date range that has been set.
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
                  “Operating Profits”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                5. Operating Profits
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This is where you can view the Operating profit of the Farm
                Operation as of the Date range that has bee set. The equation
                used to calculate is shown below:
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
                Also shown below is what it looks like:
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
                  “Earning before Interest, Taxes, Depreciation and
                  Amortization”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                6. Earning before Interest, Taxes, Depreciation and Amortization
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the net profit after taxes and
                the Interest Expenses, as well as the added Total EBITDA, as of
                the Date range that has been set.
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
                  “Depreciation and Amortization”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                7. Depreciation and Amortization
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the Depreciation of your assets
                (such as equipments, Inventory items, etc) as well as their
                Amortizations, as of the Date range that has been set.
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
                  “Interest Expenses”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                8. Interest Expenses
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view the Interest Expenses of the
                Farm Operations, as of the Date range that has been set.
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
                  “Net Profit before Taxes”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                9. Net Profit before Taxes
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This is where you can view the Net Profit before Taxes, as of
                the Date range that has been set. The equation used to calculate
                is shown below:
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
                Also shown below is what it looks like:
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
                  “Taxes and Net Profit after Taxes”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                10. Taxes and Net Profit after Taxes
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This is where you can view the Taxes that have been applied to
                the farm operation as well as the net profit after Taxes, as of
                the Date range that has been set. The equation used to calculate
                is shown below:
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
                Also shown below is what it looks like:
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
                  setting a date range for the P&L reports.
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
                Setting a Date range for the P&L Report
              </h1>
              <br />
              <p className=" text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want a custom date range of your P&L reports, then you
                can set the date range by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  button and below the{" "}
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
                    P&L Reports
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
                  You can then set the Date range by clicking the{" "}
                  <span className="font-bold">“Set Date Range”</span> field,
                  located to the right of the Page, above the{" "}
                  <span className="text-primary-pheading font-extrabold">
                    “Revenue”
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
                    “P&L Reports”
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
                    “P&L Reports”
                  </span>{" "}
                  page, lets now cover how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  the P&L Report.
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
                How to download a P&L Report
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to download the Inventory report, then you can do so
                by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the right of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  button and below the{" "}
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
                    P&L Reports
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
                  please set a different date range. (as shown in Setting a Date
                  Range for the P&L Reports).
                </li>
                <li>
                  After selecting the date range, you can then download the P&L
                  report by clicking the{" "}
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
                    This file contains the current view of the P&L Report page
                    and their details.
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
                <li>
                  Now you know how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  an P&L Report!
                </li>
                <br />
                <p>
                  Now that we have covered how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  an P&L Report, We have now covered the entire{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
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
  );
};

export default plreport;
export const Head = () => (
  <>
    <title>P&L Report | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);