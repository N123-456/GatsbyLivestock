import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const recordtransaction = () => {
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
      rt: file(relativePath: { eq: "rt.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      rt1: file(relativePath: { eq: "rt1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      rt2: file(relativePath: { eq: "rt2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const rt = getImage(data.rt);
  const rt1 = getImage(data.rt1);
  const rt2 = getImage(data.rt2);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu  lg:pr-4  text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold dark:text-[#FFFFFF] text-[30px] font-montserrat ">
                  Record Transaction
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
                {" "}
                To record a transaction other than the automatic transactions
                created, do the following:
              </p>

              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] pt-5 font-montserrat font-normal lg:px-10 pt-5">
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-paragraph2 font-normal">
                  <li>Go to “Financials” tab.</li>
                  <li>Click on “Record Transaction” button.</li>
                  <li>Enter General details:</li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Transaction Type:
                    </span>{" "}
                    Select the transaction type from the dropdown menu such as
                    assets, revenue, liability etc.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Head of Accounts:
                    </span>{" "}
                    You can select one or more options like Cash, Bank,Inventory
                    etc. by clicking on the dropdown menu.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Invoice Number:
                    </span>
                    It is auto generated.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Cheque Number (Optional):
                    </span>{" "}
                    If applicable, enter the cheque number.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Date:
                    </span>{" "}
                    Use the calendar picker to select the transaction date.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Amount:
                    </span>{" "}
                    Enter the total amount for the transaction.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Vendor:
                    </span>{" "}
                    Write the name of the vendor.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Life Span (If Applicable): :
                    </span>{" "}
                    Select the applicable year using the dropdown menu.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Purpose:
                    </span>{" "}
                    Write the purpose or description of the transaction.
                  </li>
                </ul>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {rt && (
                  <GatsbyImage
                    image={rt}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />

              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] pt-5 font-montserrat font-normal lg:px-10 pt-5">
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-paragraph2 font-normal">
                  <li>Enter Transaction Details:</li>
                  <li>
                    Once Cash and/or Bank is selected under Head of Accounts,
                    additional fields appear.
                  </li>
                  <br />
                  <ul className="text-primary-paragraph dark:text-[#D5D5D5] font-normal">
                    <li className="text-primary-activelink dark:text-[#D5D5D5] font-bold">
                      For Cash Transactions:
                    </li>
                    <ul>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Cash Amount:
                        </span>{" "}
                        Enter the amount of cash used for the transaction
                      </li>
                    </ul>
                    <br />
                    <li className="text-primary-activelink dark:text-[#D5D5D5] font-bold">
                      For Bank Transactions:
                    </li>
                    <ul>
                      <li>
                        <span className="text-primary-pheading  font-bold">
                          Bank Name:
                        </span>{" "}
                        Select the bank name from the dropdown list.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Bank Account Number:
                        </span>{" "}
                        Enter the bank account number associated with the
                        transaction.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Title:
                        </span>{" "}
                        : Input the account title or name linked to the bank
                        account.
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Bank Amount:
                        </span>{" "}
                        Enter the transaction amount to be recorded for the bank
                        account.
                      </li>
                    </ul>
                  </ul>
                </ul>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {rt1 && (
                  <GatsbyImage
                    image={rt1}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />

              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] pt-5 font-montserrat font-normal lg:px-10 pt-5">
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-paragraph2 font-normal">
                  <li>Add Association and Additional Information:</li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Associated To:
                    </span>{" "}
                    Use the dropdown to link the transaction to an associated
                    entity or value.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Receiver Name:
                    </span>{" "}
                    Write the name of the person or entity receiving the
                    payment.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Description:
                    </span>{" "}
                    Provide a brief description of the transaction.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Attachment:
                    </span>{" "}
                    Upload any relevant documents by clicking the Attachment
                    button.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Step 4: Save the Transaction
                    </span>
                  </li>
                  <li>
                    After filling in all required fields, click on the Submit
                    button.
                  </li>
                  <li>Transaction will be created successfully.</li>
                </ul>
              </div>

              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {rt2 && (
                  <GatsbyImage
                    image={rt2}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>
              <br />

              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal pt-5 lg:px-10">
                <ul className="pl-[15px] list-disc dark:text-[#D5D5D5] text-primary-paragraph2 font-normal">
                  <p>Notes</p>
                  <br />
                  <li>
                    Fields marked as optional can be left blank if not
                    applicable.
                  </li>
                  <li>
                    Ensure you select Head of Accounts first to enable the
                    respective Cash and Bank input fields.
                  </li>
                  <li>Double-check the values for accuracy before saving.</li>
                </ul>
              </div>

              <br />
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default recordtransaction;
export const Head = () => (
  <>
    <title>RecordTransaction | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
