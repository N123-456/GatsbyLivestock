import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const soiltest = () => {
  // const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  //   useEffect(() => {
  //     const loggedIn = isLoggedIn();
  //     if (!loggedIn) {
  //       navigate("/introduction");
  //     } else {
  //       setIsCheckingAuth(false); // allow page to render
  //     }
  //   }, []);

  //   // ⛔ Don't render anything while checking auth
  //   if (isCheckingAuth) return null;
  const data = useStaticQuery(graphql`
    query {
      ST: file(relativePath: { eq: "ST.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AS: file(relativePath: { eq: "AS.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SCN: file(relativePath: { eq: "SCN.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SDS: file(relativePath: { eq: "SDS.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SS: file(relativePath: { eq: "SS.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DS: file(relativePath: { eq: "DS.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VS: file(relativePath: { eq: "VS.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VS2: file(relativePath: { eq: "VS2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const ST = getImage(data.ST);
  const AS = getImage(data.AS);
  const SCN = getImage(data.SCN);
  const SDS = getImage(data.SDS);
  const SS = getImage(data.SS);
  const DS = getImage(data.DS);
  const VS = getImage(data.VS);
  const VS2 = getImage(data.VS2);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu max-w-7xl w-full px-4 lg:px-4  text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Soil Test:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-[#BE8B45] font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                A soil test checks the soil's health by measuring its nutrients
                and pH levels. It helps farmers understand what nutrients their
                soil needs. By testing the soil, farmers can make better choices
                about fertilizers, and which crops to grow. The test also
                prevents wasting fertilizers and helps save money. It improves
                crop growth and keeps the soil healthy in the long run. Regular
                soil tests are important for good farm management. This way,
                farmers can get the best results from their land. The soil test
                is an expense. When a soil test is added, a transaction is
                created against that soil test. That can be viewed in the
                financial tab in general ledger table.
              </p>

              <div className="pl-13 pt-8 flex justify-center">
                {ST && (
                  <GatsbyImage
                    image={ST}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold pt-5 text-[22px] font-montserrat lg:pl-10">
                Add Soil Test:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                For adding a soil test:
                <br />
                <br />
                <ul>
                  <li>
                    {" "}
                    Go to{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      farm locations
                    </span>{" "}
                    tab.
                  </li>
                  <li> Hover on three dots against the farm.</li>
                  <li>location you want to add soil test.</li>
                  <li> Click on soil test.</li>
                  <li>
                    Click on{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      “Add Soil Test”{" "}
                    </span>{" "}
                    button.
                  </li>
                </ul>
                <br />
                <br />
                Enter the required details including: <br />
                <ul>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Laboratory Information
                    </span>
                    :Enter the name of the laboratory.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Cost Information:{" "}
                    </span>
                    Enter the cost incurred on performing soil test including
                    charges, head of accounts and transaction id in case of head
                    of accounts is bank.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Date Information :{" "}
                    </span>
                    Date Information including when the report came and when was
                    the sample taken.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Soil Sample Identification:{" "}
                    </span>
                    Enter the details of soil type and soil colour from the soil
                    test report.
                  </li>

                  <div className="pl-13 pt-8 flex justify-center">
                    {AS && (
                      <GatsbyImage
                        image={AS}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Soil Chemical Properties:{" "}
                    </span>
                    Enter the PH and EC value of soil from the soil test report.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Soil Nutrient Content:{" "}
                    </span>
                    Enter the values of nitrogen, phosphorous, potassium,
                    sulphur, zinc, iron, manganese, copper, boron, calcium, and
                    magnesium from the soil test report.
                  </li>

                  <div className="pl-13 pt-8 flex justify-center">
                    {SCN && (
                      <GatsbyImage
                        image={SCN}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    Optionally, you can upload the soil test report document.
                  </li>
                  <li>Click on submit button.</li>
                  <li>Soil test will be added successfully.</li>
                </ul>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {SDS && (
                  <GatsbyImage
                    image={SDS}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold pt-5 text-[22px] font-montserrat lg:pl-10">
                Search Soil Test:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                You can search the soil test from the list of soil tests present
                in the system. You can search based on:
                <br />
                <p>
                  <span className="text-primary-pheading font-bold">Name:</span>{" "}
                  You can search by the name of the laboratory where the test
                  was performed.
                </p>{" "}
                <br />
                <p>
                  Then click on the Search button. Also, you can click on the
                  refresh button to refresh the data.
                </p>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {SS && (
                  <GatsbyImage
                    image={SS}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold text-[22px] pt-5 font-montserrat lg:pl-10">
                Edit Soil Test:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                If any soil test detail you want to change, you can easily edit
                the details. For that:
                <br />
                <br />
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon against the soil test you want to
                    edit.
                  </li>
                  <li>Soil Test details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Soil test details will be edited/updated successfully.
                  </li>
                </ul>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#DE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold text-[22px] pt-5 font-montserrat lg:pl-10">
                Delete Soil Test:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                If you want to delete the soil test, you can easily do so.
                <br />
                <br />
                <ul className="pl-[15px] dark:text-[#D5D5D5] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the delete icon against the row you want to delete
                    in the soil test’s table.
                  </li>
                  <li>
                    A dialogue box will appear to confirm whether you want to
                    delete or not.
                  </li>
                  <li>Click on delete button.</li>
                  <li>Soil test will be deleted successfully.</li>
                </ul>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {DS && (
                  <GatsbyImage
                    image={DS}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading dark:text-[#D5D5D5] font-semibold text-[22px] pt-5 font-montserrat lg:pl-10">
                View Soil Test:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                You can easily view the details of the soil test. For that:
                <br />
                <br />
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-activelink font-semibold">
                  <li>Hover on three dots.</li>
                  <li>Click on view button.</li>
                  <li>soil Test details page will open.</li>
                  <li>You can print the details of the soil test.</li>
                </ul>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {VS && (
                  <GatsbyImage
                    image={VS}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VS2 && (
                  <GatsbyImage
                    image={VS2}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default soiltest;
export const Head = () => (
  <>
    <title>SoilTest | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
