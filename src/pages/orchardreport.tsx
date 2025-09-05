import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import TextToSpeech from "../components/TextToSpeech";

const orchardreport = () => {
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
      orre: file(relativePath: { eq: " orre.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dorre: file(relativePath: { eq: "dorre.png" }) {
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
  const orre = getImage(data.orre);
  const dorre = getImage(data.dorre);
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
                The Orchard Reports
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
                How to get to the Orchards Reports Page
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to check out the{" "}
                <span className="text-primary-activelink font-bold">
                  “Orchard Reports”
                </span>{" "}
                page, you can start by:
              </p>
              <br />
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the left of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button and below the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  button.
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {orre && (
                    <GatsbyImage
                      image={orre}
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
                    Orchard Reports
                  </span>{" "}
                  page.
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {orre && (
                    <GatsbyImage
                      image={orre}
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
                    "Orchard Reports"
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
                <p>
                  Now that you know how to open the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  page, lets now go through an overview of the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
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
                Overview of the Orchard Reports Page
              </h1>
              <br />
              <p className="font-montserrat text-[18px] ">
                The{" "}
                <span className="text-primary-pheading font-bold">
                  “Orchard Reports”
                </span>{" "}
                page is where you can see what farm location the Orchard Plants
                is being grown on as well as its location on Pakistan.
                <br /> You can also view the lists of the various parts of the{" "}
                <span className="text-primary-activelink">“Orchard”</span> page
                such as the Tasks for the Orchard Plants, The Fertilization
                being used for the Orchard Plants, The Pesticides being used for
                the Orchard Plants, The Field Inspections for the Crop and the
                Harvests for the Orchard Plants.
                <br />
                You can also select which Orchard Plants you entered into the
                Farm Management System that you want a Report made.
                <br /> You can also{" "}
                <span className="text-primary-activelink font-bold">
                  download
                </span>{" "}
                the Report to view at a later time.
                <br /> Here is what the{" "}
                <span className="text-primary-pheading font-bold">
                  “Orchard Reports”
                </span>{" "}
                page look like:
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
              <p className=" text-[18px] dark:text-[#D5D5D5]">
                We are now going to cover each section of the{" "}
                <span className="text-primary-pheading font-bold">
                  “Orchard Reports”
                </span>{" "}
                page. Starting with the{" "}
                <span className="text-primary-pheading font-extrabold">
                  “Tasks for the Orchard Plants”
                </span>{" "}
                section.
              </p>
              <br />
              <h2 className=" text-primary-pheading font-extrabold text-[19px]">
                1. Tasks for the Orchard Plants
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of Tasks of the Orchard
                Plants that are under the Orchard and Date range you set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  “Fertilization for the Orchard Plants”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                2. Fertilization for the Orchard Plants
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of Fertilizers of the
                Orchard Plants that are under the Orchard and Date range you
                set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  {" "}
                  “Pesticides for the Orchard Plants”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-extrabold">
                3. Pesticides for the Orchard Plants
              </h2>
              <p>
                This Table is where you can view a list of Pesticides of the
                Orchard Plants that are under the Orchard and Date range you
                set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  {" "}
                  “Field Inspections for the Orchard Plants”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                4. Field Inspections for the Orchard Plants
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of Field Inspections of
                the Orchard Plants that are under the Orchard and Date range you
                set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-extrabold">
                  {" "}
                  “Harvests for the Orchard Plants”
                </span>
                .
              </p>
              <br />
              <h2 className="text-primary-pheading font-bold">
                5. Harvests for the Orchard Plants
              </h2>
              <p className="text-[18px] dark:text-[#D5D5D5]">
                This Table is where you can view a list of harvests of the
                Orchard Plants that are under the Orchard and Date range you
                set.
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
              <p className="text-[18px] dark:text-[#D5D5D5]">
                Now that we have covered the sections, we are now going to cover
                the features, starting with the{" "}
                <span className="text-primary-pheading font-bold">
                  {" "}
                  select an Orchard to view its report.
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
                Selecting an Orchard to view its Orchard Report
              </h1>
              <br />
              <p className=" text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to view an Orchard report and choose a different
                orchard plant you want to view instead. You can start by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the left of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button and below the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  button.
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
                  It will then take you to the{" "}
                  <span className="text-primary-pheading font-bold">
                    Orchard Reports
                  </span>{" "}
                  page.
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {orre && (
                    <GatsbyImage
                      image={orre}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <li>
                  Now if you want to select a different crop to view its report,
                  you can do so by:
                </li>
                <ul>
                  <li>
                    First, clicking on the{" "}
                    <span className=" font-bold">Crop Name & Variety</span>{" "}
                    “Crop Name & Variety” field, located to the top-left of the
                    page, above the “Crop Location” text.
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
                    It will then show a list of all the Orchards that have been
                    entered into the Farm Management System. The one that has a
                    “tick mark” to the left of it is the one currently being
                    viewed by the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crops Activity Reports”
                    </span>{" "}
                    page.
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
                    You can then click the crop you want to view the report from
                    this list. It will have the “tick mark” to the left of it.
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
                    It will then change the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Orchard Reports”
                    </span>{" "}
                    page to show the Orchard Plants you selected and its details
                    as well as its Orchard Reports.
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
                </ul>

                <li>
                  That is how you can select a crop to view its Activity Report!
                </li>

                <p>
                  Now that we have covered how to select a crop to view its
                  Activity Report, the next feature we are going to cover is how
                  to download the Activity Report!
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
                How to download an Orchard Report
              </h1>
              <br />
              <p className="text-[18px] font-montserrat font-normal dark:text-[#D5D5D5]">
                If you want to download the Orchard report, then you can start
                by:
              </p>
              <ul className="font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  First start by clicking the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  button located at the top-right of the page, to the left of
                  the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
                  </span>{" "}
                  button and below the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  button.
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {dorre && (
                    <GatsbyImage
                      image={dorre}
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
                    Orchard Reports
                  </span>{" "}
                  page.
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
                  Now first if you want to download a different Orchard plant
                  instead of the default orchard plant, then please choose a
                  different orchard plant (as shown in Selecting a Orchard to
                  view its Orchard Report).
                </li>
                <li>
                  After you have chosen the orchard plant that you wish to
                  download, then you can click the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Print”
                  </span>{" "}
                  button, located to the top-right of the page, underneath the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Logout”
                  </span>{" "}
                  button.
                </li>
                <li>
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
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
                <ul className="list-disc">
                  <li>
                    This file contains the current view of the Orchard Report
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
                {/* <li>
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
                <br /> */}
                <li>
                  Now you know how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  an Orchard Report!
                </li>
                <br />
                <p>
                  Now that we have covered how to{" "}
                  <span className="text-primary-activelink font-bold">
                    download
                  </span>{" "}
                  an Orchard Report, We have now now covered the entire{" "}
                  <span className="text-primary-pheading font-bold">
                    “Orchard Reports”
                  </span>{" "}
                  page!
                </p>
                <br />
                <p>
                  Next we are now going to cover the{" "}
                  <span className="text-primary-pheading font-bold">
                    “P&L Reports”
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

export default orchardreport;
export const Head = () => (
  <>
    <title>Orchard Report | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
