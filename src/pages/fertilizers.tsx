import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

const fertilizers = () => {
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
            <div className="acu max-w-7xl w-full px-4 lg:px-4  text-justify">
            <div className="flex items-center pt-5">
                            <div className="hidden lg:block">
                              <TextToSpeech textSelector=".acu" />
                            </div>
                            <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                              Starting Guide for Fertilizer:
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
                  Fertilizers are substances added to soil or plants to provide
                  essential nutrients that promote healthy growth and increase
                  crop yield. They supply key nutrients like nitrogen,
                  phosphorus, and potassium, which plants need for development.
                  Fertilizers can be organic (e.g., compost, manure) or
                  chemical-based, depending on the farm's needs. Proper use of
                  fertilizers improves soil fertility, strengthens plants, and
                  ensures better quality produce. It is important to apply the
                  right type and amount of fertilizer to avoid harming crops or
                  the environment. In the fertilizers tab, you will add the
                  fertilizer applied to a specific crop.
                </p>
             
              <div className="pl-13 pt-8 flex justify-center">
                {fertilizer && (
                  <GatsbyImage
                    image={fertilizer}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />
              <div className="step1 pt-5">
                <TextToSpeech textSelector=".step1" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="af pt-5">
                <TextToSpeech textSelector=".af" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Add Fertilizer:
                </h2>

                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  <p>For adding fertilizer:</p>
                  <br />
                  Click on{" "}
                  <span className="text-primary-activelink font-semibold">
                    "Planting"
                  </span>{" "}
                  tab.
                  <br />
                  <p>
                    Click on three dots against the crop you want to add
                    fertilizer data.
                  </p>
                  <p>Choose Fertilizer from the options.</p>
                  <p>
                    Click on{" "}
                    <span className="text-primary-activelink font-semibold">
                      "Add Fertilizer"
                    </span>{" "}
                    button.
                  </p>
                  <p>Enter the required details as follows:</p>
                  <br />
                  <ul className="pl-[15px] list-disc">
                    <li>
                      Enter the product details including product name,
                      fertilizer type from the available types, brand of the
                      fertilizer, when was the fertilizer applied to the crop,
                      and how was the fertilizer applied i.e., the application
                      method.
                    </li>
                    <li>Now enter the usage details:</li>
                    <br />
                    <ul className="list-disc">
                      <li>
                        If the fertilizer you applied was taken from the
                        inventory, choose the option{" "}
                        <span className="text-primary-activelink font-semibold">
                          "inventory"
                        </span>{" "}
                        .
                      </li>
                      <li>Choose the inventory. </li>
                      <li>
                        After choosing the inventory, available quantity of the
                        inventory will be automatically shown. Enter the
                        quantity from the available quantity that was used. The
                        quantity cannot exceed the available quantity.
                      </li>
                      <div className="pl-13 pt-8 flex justify-center">
                        {AF && (
                          <GatsbyImage
                            image={AF}
                            alt="Startups illustration"
                            className="bg-white w-[1000.58px] "
                          />
                        )}
                      </div>
                      <br />
                      <li>
                        If the fertilizer you applied was not available in the
                        inventory and you have to buy the fertilizer, choose the
                        option{" "}
                        <span className="text-primary-activelink font-semibold">
                          "New Buy"
                        </span>{" "}
                        .
                      </li>
                      <li>
                        Enter the details when the fertilizer was bought, how
                        much did the fertilizer cost, how much quantity did you
                        buy, transaction details like head of accounts,
                        transaction id/cheque no in case head of accounts is
                        bank, and from whom you bought the fertilizer i.e., the
                        vendor’s name.
                      </li>
                      <div className="pl-13 pt-8 flex justify-center">
                        {AF1 && (
                          <GatsbyImage
                            image={AF1}
                            alt="Startups illustration"
                            className="bg-white w-[1000.58px] "
                          />
                        )}
                      </div>
                    </ul>
                  </ul>
                  <br />
                  <p>Click on the submit button.</p>
                  <p>Fertilizer will be added successfully.</p>
                  <p>
                    If the fertilizer was a new buy, in that case it was an
                    expense so a transaction will be created.
                  </p>
                  <br />{" "}
                </div>
              </div>
              <div className="step2 pt-5">
                <TextToSpeech textSelector=".step2" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="sf pt-5">
                <TextToSpeech textSelector=".sf" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Search Fertilizer:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can search the fertilizer from the list of fertilizers of
                  locations present in the system. You can search based on
                  either:
                  <br />
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Fertilizer Name
                    </span>
                    : You can search by the name of the Fertilizer.
                  </p>{" "}
                  <br />
                  <p>
                    Then click on the Search button. Also, you can click on the
                    refresh button to refresh the data.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {SF && (
                      <GatsbyImage
                        image={SF}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="step3 pt-5">
                <TextToSpeech textSelector=".step3" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="ef pt-5">
                <TextToSpeech textSelector=".ef" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Edit Fertilizer:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If any fertilizer detail you want to change, you can easily
                  edit the details. For that:
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the edit icon against the fertilizer you want to
                      edit.
                    </li>
                    <li>Fertilizer details screen will open.</li>
                    <li>Click on the field you want to edit.</li>
                    <li>Make changes in the fields</li>
                    <li>Click on submit button.</li>
                    <li>
                      Fertilizer details will be edited/updated successfully.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="step4 pt-5">
                <TextToSpeech textSelector=".step4" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="df pt-5">
                <TextToSpeech textSelector=".df" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Delete Fertilizer:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  If you want to delete any fertilizer, you can easily do so.
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>
                      Click on the delete icon against the row you want to
                      delete in the fertilizers’s table.
                    </li>
                    <li>
                      A dialogue box will appear to confirm whether you want to
                      delete or not.
                    </li>
                    <li>Click on delete button.</li>
                    <li>fertilizer will be deleted successfully.</li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {DF && (
                  <GatsbyImage
                    image={DF}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />
              <div className="step-5 pt-5">
                <TextToSpeech textSelector=".step5" />
                <div className="flex items-center space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
              </div>
              <div className="vf pt-5">
                <TextToSpeech textSelector=".vf" />
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  View Fertilizer:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can easily view the details of the fertilizer. For that:
                  <br />
                  <br />
                  <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                    <li>Hover on three dots.</li>
                    <li>Click on view button.</li>
                    <li>Click on delete button.</li>
                    <li>Fertilizer details page will open.</li>
                    <li>
                      Click on print button if you want to print the details of
                      the fertilizer.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VF && (
                  <GatsbyImage
                    image={VF}
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

export default fertilizers;
export const Head = () => (
  <>
    <title>Fertilizers | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
