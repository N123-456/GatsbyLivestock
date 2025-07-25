import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const pesticides = () => {
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
      pesticide: file(relativePath: { eq: "pesticide.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      APE: file(relativePath: { eq: "APE.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      APE1: file(relativePath: { eq: "APE1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SPE: file(relativePath: { eq: "SPE.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      DPE: file(relativePath: { eq: "DPE.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      VPE: file(relativePath: { eq: "VPE.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const pesticide = getImage(data.pesticide);
  const APE = getImage(data.APE);
  const APE1 = getImage(data.APE1);
  const SPE = getImage(data.SPE);
  const DPE = getImage(data.DPE);
  const VPE = getImage(data.VPE);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="content-container max-w-7xl w-full px-4 lg:px-4  text-justify">
              <div className="flex items-center pt-5 space-x-1">
                <TextToSpeech textSelector=".content-container" />
                <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat">
                  Starting Guide for Pesticides:
                </h2>
              </div>

              <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 pt-4">
                Pesticides are chemicals or natural substances used to protect
                crops from pests, insects, weeds, and diseases. They help
                prevent damage to plants, ensuring healthy growth and higher
                yields. Pesticides can be classified into types such as
                insecticides (for insects), herbicides (for weeds), and
                fungicides (for fungi). Proper and safe use of pesticides is
                important to avoid harm to crops, soil, and the environment.
                Following recommended guidelines ensures effective pest control
                while maintaining food safety. In the pesticides tab, you will
                add the pesticides applied to a specific crop.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {pesticide && (
                  <GatsbyImage
                    image={pesticide}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                Add Pesticides:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                <p>For adding Pesticides:</p>
                <br />
                Click on{" "}
                <span className="text-primary-activelink font-semibold">
                  "Planting"
                </span>
                tab.
                <br />
                <p>
                  Click on three dots against the crop you want to add
                  pesticides data.
                </p>
                <p>Choose pesticides from the options.</p>
                <p>
                  Click on{" "}
                  <span className="text-primary-activelink font-semibold">
                    "Add Pesticides"
                  </span>{" "}
                  button.
                </p>
                <p>Enter the required details as follows:</p>
                <br />
                <ul className="list-disc ">
                  <li>
                    Enter the product details including product name, brand of
                    the pesticide, when was the pesticide applied to the crop,
                    how much effective was the pesticide i.e., pesticide
                    efficiency in percentage.
                  </li>
                  <li>Now enter the usage details:</li>
                  <br />
                  <ul className="list-disc">
                    <li>
                      If the pesticide you applied was taken from the inventory,
                      choose the option{" "}
                      <span className="text-primary-activelink font-bold">
                        “inventory”.
                      </span>
                    </li>
                    <li>Choose the inventory. </li>
                    <li>
                      After choosing the inventory, available quantity of the
                      inventory will be automatically shown. Enter the quantity
                      from the available quantity that was used. The quantity
                      cannot exceed the available quantity.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {APE && (
                        <GatsbyImage
                          image={APE}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
                    <br />
                    <li>
                      If the pesticide you applied was not available in the
                      inventory and you have to buy the pesticide, choose the
                      option{" "}
                      <span className="text-primary-activelink font-bold">
                        “New Buy”.
                      </span>
                    </li>
                    <li>
                      Enter the details when the pesticide was bought, how much
                      did the pesticide cost, how much quantity did you buy,
                      transaction details like head of accounts, transaction
                      id/cheque no in case head of accounts is bank, and from
                      whom you bought the pesticide i.e., the vendor’s name.
                    </li>
                    <div className="pl-13 pt-8 flex justify-center">
                      {APE1 && (
                        <GatsbyImage
                          image={APE1}
                          alt="Startups illustration"
                          className="bg-white w-[1000.58px] "
                        />
                      )}
                    </div>
                  </ul>
                  <br />

                  <li>
                    <p>Click on the submit button.</p>
                  </li>
                  <li>
                    {" "}
                    <p>Pesticides will be added successfully.</p>
                  </li>
                  <li>
                    <p>
                      If the pesticides was a new buy, in that case it was an
                      expense so a transaction will be created.
                    </p>
                  </li>
                </ul>
                <br />
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                  Search Pesticides:
                </h2>
                <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                  You can search the pesticides from the list of pesticides of
                  locations present in the system. You can search based on
                  either:
                  <br />
                  <p>
                    <span className="text-primary-pheading font-semibold">
                      Pesticide Name
                    </span>
                    : You can search by the name of the pesticide.
                  </p>{" "}
                  <br />
                  <p>
                    Then click on the Search button. Also, you can click on the
                    refresh button to refresh the data.
                  </p>
                  <div className="pl-13 pt-8 flex justify-center">
                    {SPE && (
                      <GatsbyImage
                        image={SPE}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                      Step 3
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
                  <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                    Edit Pesticide:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                    If any pesticides application detail you want to change, you
                    can easily edit the details. For that:
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                      <li>
                        Click on the edit icon against the pesticide you want to
                        edit.
                      </li>
                      <li>pesticide details screen will open.</li>
                      <li>Click on the field you want to edit.</li>
                      <li>Make changes in the fields</li>
                      <li>Click on submit button.</li>
                      <li>
                        pesticides details will be edited/updated successfully.
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                      Step 4
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
                  <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                    Delete Pesticide:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                    If you want to delete any pesticide, you can easily do so.
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                      <li>
                        Click on the delete icon against the row you want to
                        delete in the pesticide’s table.
                      </li>
                      <li>
                        A dialogue box will appear to confirm whether you want
                        to delete or not.
                      </li>
                      <li>Click on delete button.</li>
                      <li>pesticide will be deleted successfully.</li>
                    </ul>
                  </div>
                  <div className="pl-13 pt-8 flex justify-center">
                    {DPE && (
                      <GatsbyImage
                        image={DPE}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                      Step 5
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
                  <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                    View Pesticide:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                    You can easily view the details of the fertilizer. For that:
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                      <li>Hover on three dots.</li>
                      <li>Click on view button.</li>
                      <li>Click on delete button.</li>
                      <li>pesticide details page will open.</li>
                      <li>
                        Click on print button if you want to print the details
                        of the fertilizer.
                      </li>
                    </ul>
                  </div>
                  <div className="pl-13 pt-8 flex justify-center">
                    {VPE && (
                      <GatsbyImage
                        image={VPE}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default pesticides;
export const Head = () => (
  <>
    <title>Pesticides | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
