import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import TextToSpeech from "../components/TextToSpeech";

const activityreports = () => {
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
          <div className="text-justify font-montserrat text-[18px] text-primary-paragraph2">
            <div className="flex items-center">
              <div className="hidden lg:block">
                <TextToSpeech textSelector=".acu" />
              </div>
              <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#D5D5D5]">
                Starting Guide for Reports
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
            <div className=" font-montserrat">
              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:pl-10 dark:text-[#D5D5D5]">
                The{" "}
                <span className="text-primary-activelink font-bold">
                  “Reports”
                </span>{" "}
                page gives you a complete overview of your farm’s operations in
                one place. It gathers information from different parts of the
                FMS system and turns it into clear, organized summaries. You can
                quickly see details about your crops, orchards, machinery and
                tools, inventory, and financial performance. This makes it
                easier to track progress, spot trends, and make informed
                decisions. Everything is presented in a way that’s easy to read
                and understand, even if you’re not familiar with every detail of
                the farm records. You can also download these reports and
                visualize your farm’s comfortably. There are 5 Reports that you
                can review currently:
              </p>
              <ul className="pl-10 font-montserrat text-[18px] dark:text-[#D5D5D5]">
                <li>
                  The{" "}
                  <span className="text-primary-pheading font-bold">
                    Crop Activity Reports:
                  </span>{" "}
                  Here you can review the Reports of the Crops that you have
                  entered in the Farm Management System.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-pheading font-bold">
                    Equipment Reports:
                  </span>{" "}
                  Here you can review the Reports of the Equipments that you
                  have entered in the Farm Management System.
                  <li>
                    The{" "}
                    <span className="text-primary-pheading font-bold">
                      Inventory Reports:
                    </span>{" "}
                    Here you can review the Reports of the Inventory that you
                    have entered in the Farm Management System.
                  </li>
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-pheading font-bold">
                    Orchard Reports:
                  </span>{" "}
                  Here you can review the Reports of the Orchard Plants that you
                  have entered in the Farm Management System.
                </li>
                <li>
                  The{" "}
                  <span className="text-primary-pheading font-bold">
                    P&L Reports:
                  </span>{" "}
                  Here you can review the Reports of the Financials of your Farm
                  Operation in the Farm Management System.
                </li>
                <li>
                  Think of it as your farm’s performance dashboard, all in one
                  convenient page!
                </li>
                <li>
                  We are going to cover each page, in terms of what they contain
                  and their features, going from left to right. Starting off
                  with the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”!
                  </span>
                </li>
                <div className="pl-13 pt-8 flex justify-center">
                  {fl && (
                    <GatsbyImage
                      image={fl}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div><br/><br/>
              </ul>
              <div className="pl-10 font-montserrat">
                <h1 className="text-primary-activelink font-semibold font-montserrat text-[19px]">
                  The Crop Activity Reports
                </h1>
                <p className="text-primary-pheading font-bold text-[18px]">
                  How to get to the Crop Activity Reports Page
                </p>
                <p>
                  If you want to check out the{" "}
                  <span className="text-primary-pheading font-bold">
                    “Crop Activity Reports”
                  </span>{" "}
                  page, you can start by:
                </p>
                <ul>
                  <li>
                    First start by clicking the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    button located at the top-right of the page, to the left of
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Equipment Reports”
                    </span>{" "}
                    button and above the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Orchard Reports”
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
                  </div><br/><br/>
                  <li>
                    It will then take you to the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
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
                  </div><br/><br/>
                  <li>
                    From here you can continue to review the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    page to wish.
                  </li>
                  <li>
                    If you wish to go back to the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Reports”
                    </span>{" "}
                    page, then you can click the{" "}
                    <span className="text-primary-activelink font-bold">
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
                  <li>
                    Now that you know how to open the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    page, lets now go through an overview of the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    page.
                  </li>
                </ul>
              </div>
              <h2 className="pl-10 text-primary-pheading font-bold font-montserrat text-[19px]">
                Overview of the Crop Activity Reports Page
              </h2>
              <p className="pl-10 font-montserrat text-[18px] ">
                {" "}
                The Crop Activity Reports page is where you can see what farm
                location the Crop is being grown on as well as its location on
                Pakistan. You can also view the lists of the various parts of
                the “Planting” page such as the Tasks for the Crop, The
                Fertilization being used for the Crops, The Pesticides being
                used for the Crop, The Field Inspections for the Crop and the
                Harvests for the Crop.You can also select which Crop you entered
                into the Farm Management System that you want a Report made. You
                can also download the Report to view at a later time. Here is
                what the “Crop Activity Reports” page look like:
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
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                We are now going to cover each section of the “Crop Activity
                Reports” Page. Starting with the “Tasks for the Crop” section.
              </p>
              <h3 className="pl-10 text-primary-pheading  font-bold text-[19px]">
                Tasks for the Crop
              </h3>
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                In this section, This Table is where you can view a list of
                Tasks of the Crop that are under the Crop and Date range you
                set.
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
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-bold">
                  “Fertilization for the Crop”
                </span>
                .
              </p>

              <h3 className="pl-10 text-primary-pheading font-bold">
                Fertilization for the Crop
              </h3>
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                In this section, This Table is where you can view a list of
                Fertilizers of the Crop that are under the Crop and Date range
                you set.
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
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-bold">
                  {" "}
                  “Pesticides for the Crop”
                </span>
                .
              </p>

              <h3 className="pl-10 text-primary-pheading font-bold">
                Pesticides for the Crop
              </h3>
              <p>
                In this section, This Table is where you can view a list of
                Pesticides of the Crop that are under the Crop and Date range
                you set.
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
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                Next is the{" "}
                <span className="text-primary-pheading font-bold">
                  {" "}
                  “Harvests for the crop”
                </span>
                .
              </p>

              <h3 className="pl-10 text-primary-pheading font-bold">
                Pesticides for the Crop
              </h3>
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                In this section, This Table is where you can view a list of
                harvests of the Crop that are under the Crop and Date range you
                set.
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
              <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                Now that we have covered the sections, we are now going to cover
                the features, starting with the{" "}
                <span className="text-primary-pheading font-bold">
                  {" "}
                  “select a crop to view report. ”
                </span>
                .
              </p>
             
                <h2 className="pl-10 text-primary-pheading font-bold">
                  Selecting a Crop to view its Activity Report
                </h2>
                <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                  If you want to view an activity report and choose a different
                  crop you want to view instead. You can start by:
                </p>
                <ul className="pl-10 dark:text-[#D5D5D5] font-montserrat text-[18px]">
                  <li>
                    First, clicking the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    button located at the top-right of the page, to the left of
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Equipment Reports”
                    </span>{" "}
                    button and above the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Orchard Reports”
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
                      “Crop Activity Reports”
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
                    Now if you want to select a different crop to view its
                    report, you can do so by
                  </li>
                  <ul className="list-disc pl-10 text-[18px] dark:text-[#D5D5D5]">
                    <li>
                      First, clicking on the{" "}
                      <span className="font-bold">“Crop Name & Variety”</span>{" "}
                      field, located to the top-left of the page, above the
                      “Crop Location” text.
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
                      It will then show a list of all the Crops that have been
                      entered into the Farm Management System. The one that has
                      a “tick mark” to the left of it is the one currently being
                      viewed by the{" "}
                      <span className="text-primary-pheading font-bold">
                        “Crops Activity Reports”
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
                      You can then click the crop you want to view the report
                      from this list. It will have the “tick mark” to the left
                      of it.
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
                      It will then change the{" "}
                      <span className="text-primary-pheading font-bold">
                        “Crop Activity Reports”
                      </span>{" "}
                      page to show the Crop you selected and its details as well
                      as its Activity Reports.
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
                  <li>
                    That is how you can select a crop to view its Activity
                    Report! Now that we have covered how to select a crop to
                    view its Activity Report, the next feature we are going to
                    cover is how to{" "}
                    <span className="text-primary-activelink font-bold">
                      download
                    </span>{" "}
                    the Activity Report!
                  </li>
                </ul>

                <h2 className="pl-10 text-primary-pheading font-bold">
                  How to download a Crop Activity Report.
                </h2>
                <p className="pl-10 text-[18px] dark:text-[#D5D5D5]">
                  If you want to view an activity report and choose a different
                  crop you want to view instead. You can start by:
                </p>
                <ul className="pl-10 dark:text-[#D5D5D5] font-montserrat text-[18px]">
                  <li>
                    First, clicking the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Crop Activity Reports”
                    </span>{" "}
                    button located at the top-right of the page, to the left of
                    the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Equipment Reports”
                    </span>{" "}
                    button and above the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Orchard Reports”
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
                      “Crop Activity Reports”
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
                    Now first if you want to download a different crop instead
                    of the default crop, then please choose a different crop (as
                    shown in Selecting a Crop to view its Activity Report).
                  </li>
                  <li>
                    After you have chosen the crop that you wish to download,
                    then you can click the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Print”
                    </span>{" "}
                    button, located on the top-right side of the page,
                    underneath the{" "}
                    <span className="text-primary-pheading font-bold">
                      “Logout”
                    </span>{" "}
                    button.
                  </li>
                  <li>
                    Once you select it, it will open a file explorer window,
                    asking where to put the file in.
                  </li>
                  <ul className="list-disc pl-10">
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
                      This file contains the current view of the Crop Activity
                      Report page and their details.
                    </li>
                  </ul>
                  <li>
                    When you have found a suitable place for your PDF file, then
                    you can press the “Save” button, located on the bottom right
                    of your file explorer, so that it saves the PDF file to that
                    folder.
                  </li>
                  <li>
                    Now you can either go to the top-right hand of your browser
                    and go into the Downloads section, to view your PDF file, or
                    you can go into the file explorer location where you
                    uploaded the PDF file and open it to view it as well.
                  </li>
                  <li>
                    Provided below is an example of what it should look like:
                  </li>
                  <li>
                    Now you know how to download a Crop Activity Report!
                    <br />
                    Now that we have covered how to download a Crop Activity
                    Report, We have now now covered the entire “Crop Activity
                    Reports” page! Next we are now going to cover the “Equipment
                    Maintenance Reports” page.
                  </li>
                </ul>
              
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default activityreports;
export const Head = () => (
  <>
    <title>Crop Activity Report | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);