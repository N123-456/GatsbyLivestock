import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const harvest = () => {
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
      harvest: file(relativePath: { eq: "harvest.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AH: file(relativePath: { eq: "AH.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AH1: file(relativePath: { eq: "AH1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AH2: file(relativePath: { eq: "AH2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SH: file(relativePath: { eq: "SH.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DH: file(relativePath: { eq: "DH.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VH: file(relativePath: { eq: "VH.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const harvest = getImage(data.harvest);
  const AH = getImage(data.AH);
  const AH1 = getImage(data.AH1);
  const AH2 = getImage(data.AH2);
  const SH = getImage(data.SH);
  const DH = getImage(data.DH);
  const VH = getImage(data.VH);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu  lg:pr-4 text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Starting Guide for Harvest:
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

              <p className="text-primary-paragraph dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                The Harvest Section helps manage and organize the process of
                gathering crops and recording important harvest-related details.
                It ensures that harvested crops are properly documented,
                categorized, and accounted for. This section allows farmers to
                track the harvest process, monitor yields, and manage
                post-harvest activities such as selling or storing crops. It
                provides a structured way to organize harvested produce, record
                quantities, and manage revenues. By keeping everything in one
                place, it simplifies decision-making, improves efficiency, and
                helps maintain a clear record of the farm's productivity and
                financial performance. In the harvest tab, you will add the
                harvest picked/ gained from specific crop.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {harvest && (
                  <GatsbyImage
                    image={harvest}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Add Harvest:
              </h2>

              <div className="text-primary-paragraph2 text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                <p>For adding harvest details:</p>
                <br />
                Click on{" "}
                <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                  "Planting"
                </span>{" "}
                tab.
                <br />
                <ul className="style-disc">
                  <li>
                    <p>
                      Click on three dots against the crop you want to add
                      harvest data.
                    </p>
                  </li>
                  <li>
                    <p>Choose harvest from the options.</p>
                  </li>
                  <li>
                    <p>
                      Click on{" "}
                      <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                        "Add Pesticides"
                      </span>{" "}
                      button.
                    </p>
                  </li>
                  <li>
                    <p>Enter the required details as follows:</p>
                  </li>
                </ul>
                <br />
                <ul className="pl-[15px] list-disc">
                  <li>
                    {" "}
                    Date & Time: When was the crop harvested, what was the
                    after-harvest process i.e., either the yield was directly
                    sold out or there was further processing on the yield or was
                    stored in inventory. Other than the inventory option, enter
                    the customer’s name who bought the yield.{" "}
                  </li>
                  <li>
                    Enter the batch no{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g. Pick 1, Pick 2 etc.)
                    </span>{" "}
                    and classify the grade of yield{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g. High, Medium, Low):
                    </span>
                    {""}
                  </li>
                  <li>
                    In case the after-harvest process was{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      “Direct Sale”,
                    </span>{" "}
                    enter the quantity got in that batch{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g. 40 KG),
                    </span>{" "}
                    revenue per unit{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g.212 Rs),
                    </span>{" "}
                    total revenue will calculated automatically, and transaction
                    details like head of accounts{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g. Bank)
                    </span>{" "}
                    and transaction id/ cheque no{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      (e.g. 8746900987)
                    </span>{" "}
                    in case head of accounts was bank. A transaction will be
                    created against it as the harvest is a revenue generated
                    from the farm.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AH && (
                      <GatsbyImage
                        image={AH}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>
                    In case the after-harvest process was{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      “Processed”,
                    </span>{" "}
                    enter the before processed quantity got in that batch, after
                    processing quantity got in that batch, revenue per unit,
                    total revenue will calculated automatically, and transaction
                    details like head of accounts and transaction id/ cheque no
                    in case head of accounts was bank. A transaction will be
                    created against it as the harvest is a revenue generated
                    from the farm.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AH1 && (
                      <GatsbyImage
                        image={AH1}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <li>
                    In case the after-harvest process is{" "}
                    <span className="text-primary-activelink font-bold dark:text-[#D5D5D5]">
                      “Inventory”,
                    </span>{" "}
                    choose the inventory where the harvest will be stored,
                    quantity to be stored, revenue per unit, total revenue will
                    calculated automatically. No transaction will created in
                    this case.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {AH2 && (
                      <GatsbyImage
                        image={AH2}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li>Enter the instructions related to the harvest if any.</li>

                  <br />
                  <li>
                    <p>Click on the submit button.</p>
                  </li>
                  <li>
                    <p>Harvest will be added successfully.</p>
                  </li>
                  <li>
                    <p>
                      You can add more harvest pickings details in the same way.
                    </p>
                  </li>
                </ul>
                <br />{" "}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Search Harvest:
              </h2>
              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                You can search the harvest from the list of harvests of
                locations present in the system. You can search based on either:
                <br />
                <p>
                  <span className="text-primary-pheading font-semibold">
                    Batch Number
                  </span>{" "}
                  You can search by the batch number of harvest.
                </p>{" "}
                <br />
                <p>
                  Then click on the Search button. Also, you can click on the
                  refresh button to refresh the data.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {SH && (
                    <GatsbyImage
                      image={SH}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
              </div>

              <br />
              <br />

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                Edit Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                If any harvesting detail you want to change, you can easily edit
                the details. For that:
                <br />
                <br />
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon against the harvest you want to edit.
                  </li>
                  <li>Harvesting details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>Harvest details will be edited/updated successfully.</li>
                </ul>
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink dark:text-[#BE8B45] font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 4
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 dark:text-[#D5D5D5] font-semibold text-[22px] font-montserrat lg:pl-10">
                Delete Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                If you want to delete any harvest, you can easily do so.
                <br />
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  <li>
                    Click on the delete icon against the row you want to delete
                    in the harvest’s table.
                  </li>
                  <li>
                    A dialogue box will appear to confirm whether you want to
                    delete or not.
                  </li>
                  <li>Click on delete button.</li>
                  <li>Harvest will be deleted successfully.</li>
                </ul>
              </div>

              <div className="pl-13 pt-8 flex justify-center">
                {DH && (
                  <GatsbyImage
                    image={DH}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                  Step 5
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>

              <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                View Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                You can easily view the details of the harvest. For that:
                <br />
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                  <li>Hover on three dots.</li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>harvest details page will open.</li>
                  <li>
                    Click on print button if you want to print the details of
                    the harvest.
                  </li>
                </ul>
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {VH && (
                  <GatsbyImage
                    image={VH}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
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

export default harvest;
export const Head = () => (
  <>
    <title>Harvest | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
