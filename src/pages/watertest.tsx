import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const watertest = () => {
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
      WT: file(relativePath: { eq: "WT.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AW: file(relativePath: { eq: "AW.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AW2: file(relativePath: { eq: "AW2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AW3: file(relativePath: { eq: "AW3.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AW4: file(relativePath: { eq: "AW4.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SW: file(relativePath: { eq: "SW.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DW: file(relativePath: { eq: "DW.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VW: file(relativePath: { eq: "VW.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VW2: file(relativePath: { eq: "VW2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const WT = getImage(data.WT);
  const AW = getImage(data.AW);
  const AW2 = getImage(data.AW2);
  const AW3 = getImage(data.AW3);
  const AW4 = getImage(data.AW4);
  const SW = getImage(data.SW);
  const DW = getImage(data.DW);
  const VW = getImage(data.VW);
  const VW2 = getImage(data.VW2);

  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="content-container max-w-7xl w-full px-4 lg:px-4  text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Water Test:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10">
                A water test checks the quality of water used on the farm,
                including its pH, nutrient levels, and any harmful substances.
                It helps ensure the water is safe for crops, livestock, and
                irrigation systems. By testing water, farmers can identify
                issues like contamination or imbalances in minerals. This allows
                them to make informed decisions on water treatment or
                adjustments. Regular water testing is important to maintain
                healthy crops and livestock. It also helps prevent damage to
                irrigation equipment. A good water quality test ensures the best
                results for farming activities. The water test is an expense.
                When a water test is added, a transaction is created against
                that soil test. That can be viewed in the financial tab in
                general ledger table.
              </p>

              <div className="pl-13 pt-8 flex justify-center">
                {WT && (
                  <GatsbyImage
                    image={WT}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="s1 pt-5">
                <TextToSpeech textSelector=".s1" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="aw pt-5">
                <TextToSpeech textSelector=".aw" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Add Water Test:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  For adding a water test:
                  <br />
                  <br />
                  Go to{" "}
                  <span className="text-primary-activelink font-bold">
                    farm locations
                  </span>{" "}
                  tab.
                  <br />
                  Hover on three dots against the farm. location you want to add
                  water test. <br />
                  Click on water test.
                  <br />
                  Click on
                  <span className="text-primary-activelink font-bold">
                    “Add Water Test”
                  </span>{" "}
                  button.
                  <br />
                  <br />
                  Enter the required details including: <br />
                  <ul className="PL-[15px]">
                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Water Quality Information
                      </span>
                      : Enter the name of the laboratory and choose the water
                      resource through which the water comes.
                    </li>
                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Cost Information:{" "}
                      </span>
                      Enter the cost incurred on performing soil test including
                      charges, head of accounts and transaction id in case of
                      head of accounts is bank.
                    </li>
                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Date Information :{" "}
                      </span>
                      Date Information including when the report came and when
                      was the sample taken.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {AW && (
                        <GatsbyImage
                          image={AW}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Water Quality Parameters :{" "}
                      </span>
                      Enter the details including water colour, temperature of
                      water, pH value, turbidity, total dissolved solids,
                      dissolved oxygen level, salinity, hardness, chloride,
                      nitrate, and fluoride value from the water test report.
                    </li>

                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Heavy Metals and Contaminants:{" "}
                      </span>
                      Enter the lead, arsenic, mercury, and cadmium value of
                      water from the water test report.
                    </li>
                    <li>
                      <span className="text-primary-pheading font-semibold">
                        Pesticides and Herbicides:{" "}
                      </span>
                      Enter the pesticides and herbicides level found in water
                      from the water test report.
                    </li>

                    <div className="pl-13 pt-8 flex justify-center">
                      {AW2 && (
                        <GatsbyImage
                          image={AW2}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <li>
                      Optionally, you can upload the water test report document.
                    </li>
                    <li>Click on submit button.</li>
                    <li>Water test will be added successfully.</li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {AW3 && (
                  <GatsbyImage
                    image={AW3}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="s2 pt-5">
                <TextToSpeech textSelector=".s2" />
                <div className="flex items-center  space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="swt pt-5">
                <TextToSpeech textSelector=".swt" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Search Water Test:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can search the water test from the list of water tests
                  present in the system. You can search based on:
                  <br />
                  <p className="pl-[15px] ">
                    <span className="text-primary-pheading font-semibold">
                      Name
                    </span>
                    : You can search by the name of the laboratory where the
                    test was performed.
                  </p>
                  <br />
                  <p>
                    Then click on the Search button. Also, you can click on the
                    refresh button to refresh the data.
                  </p>
                </div>
              </div>
              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {SW && (
                  <GatsbyImage
                    image={SW}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="s3 pt-5">
                <TextToSpeech textSelector=".s3" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="ewt pt-5">
                <TextToSpeech textSelector=".ewt" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Edit Water Test:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If any water test detail you want to change, you can easily
                  edit the details. For that:
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the edit icon against the water test you want to
                      edit.
                    </li>
                    <li>water Test details screen will open.</li>
                    <li>Click on the field you want to edit.</li>
                    <li>Make changes in the fields</li>
                    <li>Click on submit button.</li>
                    <li>
                      Water test details will be edited/updated successfully.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="s4 pt-5">
                <TextToSpeech textSelector=".s4" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="dwt pt-5">
                <TextToSpeech textSelector=".dwt" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Delete Water Test:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If you want to delete the water test, you can easily do so.
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the delete icon against the row you want to
                      delete in the water test’s table.
                    </li>
                    <li>
                      A dialogue box will appear to confirm whether you want to
                      delete or not.
                    </li>
                    <li>Click on delete button.</li>
                    <li>water test will be deleted successfully.</li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {DW && (
                  <GatsbyImage
                    image={DW}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="s5 pt-5">
                <TextToSpeech textSelector=".s5" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="vwt pt-5">
                <TextToSpeech textSelector=".vwt" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  View water Test:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can easily view the details of the water test. For that:
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>Hover on three dots.</li>
                    <li>Click on view button.</li>
                    <li>water Test details page will open.</li>
                    <li>You can print the details of the water test.</li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VW && (
                  <GatsbyImage
                    image={VW}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VW2 && (
                  <GatsbyImage
                    image={VW2}
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

export default watertest;
export const Head = () => (
  <>
    <title>WaterTest | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
