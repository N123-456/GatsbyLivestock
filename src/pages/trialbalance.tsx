import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const trialbalance = () => {
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
      tr: file(relativePath: { eq: "tr.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          gtr: file(relativePath: { eq: "gtr.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
          dtr: file(relativePath: { eq: "dtr.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
        gl: file(relativePath: { eq: "gl.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const tr = getImage(data.tr);
   const gtr = getImage(data.gtr);
    const dtr = getImage(data.dtr);
    const gl = getImage(data.gl);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify font-montserrat text-[18px] text-primary-paragraph2">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                  Trial Balance Report:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-primary-pheading font-bold font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className="lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
              <div className="lg:pl-10">
              <p className="mb-4">
                The{" "}
                <span className="text-primary-activelink font-bold">
                  “Trial Report”
                </span>{" "}
                is a financial report that lists all the accounts in the{" "}
                <span className="text-primary-activelink font-bold">
                  general ledger
                </span>{" "}
                along with their respective{" "}
                <span className="text-primary-pheading font-bold">debit</span>{" "}
                and{" "}
                <span className="text-primary-pheading font-bold">credit</span>{" "}
                balances at a specific point in time.
              </p>
              <p className="mb-4">
                Its primary purpose is to ensure that the total{" "}
                <span className="text-primary-pheading font-bold">debits</span>{" "}
                equal the total{" "}
                <span className="text-primary-pheading font-bold">credits</span>
                , maintaining the accounting equation's accuracy. If the trial
                balance does not balance, it indicates an error, such as
                incorrect entries, missing transactions, or misclassifications.
              </p>
              <p className="mb-4">
                An example would be, if the farm spent money on{" "}
                <span className="text-primary-pheading font-bold">
                  equipment maintenance
                </span>
                , the expense would be debited to the{" "}
                <span className="text-black">maintenance account</span>, while
                the same amount would be credited to the{" "}
                <span className="text-black">cash or bank account</span>.
              </p>
              <p className="mb-4">
                The{" "}
                <span className="text-primary-activelink font-bold">
                  “Trial Report”
                </span>{" "}
                ensures both sides are equal, proving the mathematical accuracy
                of the financial records.
              </p>
                 <div className="pl-13 pt-8 flex justify-center">
                                {tr && (
                                <GatsbyImage
                                  image={tr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/>
</div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  How to Get to the Trial Report
                </h2>
                <p className="mb-4">
                  To get to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page, you must first get these things ready.
                </p>
                <p className="mb-4">
                  You must first filter the{" "}
                  <span className="text-primary-activelink font-bold">
                    “General Ledger”
                  </span>{" "}
                  table before opening the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page, as you need to have a specified date range before
                  opening the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  When you have the above items ready, you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, you must first filter the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    table before opening the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Trial Report”
                    </span>{" "}
                    page, as you need to have a specified date range before
                    opening the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Trial Report”
                    </span>{" "}
                    page. You can filter the table using the{" "}
                    <span className="text-black">
                      search and filter options
                    </span>
                    .
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                                {tr && (
                                <GatsbyImage
                                  image={tr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/>
                  <li className="mb-2">
                    Then, continue by clicking the{" "}
                    <span className="text-black">
                      “Trial Report [shown as a “clipboard with a checklist”]”
                    </span>{" "}
                    button located on the top-right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page, to the right of the{" "}
                    <span className="text-black">“Print”</span> button and to
                    the left of the{" "}
                    <span className="text-black">
                      “Balance Sheet [shown as a “clipboard with a clock” icon]”
                    </span>{" "}
                    button.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                                {gtr && (
                                <GatsbyImage
                                  image={gtr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/>
                </ol>
                <p className="mb-4">
                  It will then take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page.
                </p>
                 {/* <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  You can then review your{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Operation’s
                  </span>{" "}
                  respective{" "}
                  <span className="text-primary-pheading font-bold">debit</span>{" "}
                  and{" "}
                  <span className="text-primary-pheading font-bold">
                    credit
                  </span>{" "}
                  balances at a specific point in time.
                </p>
                <p className="mb-4">
                  You can also <span className="text-black">“download”</span>{" "}
                  the Trial report of your Farm’s as well.
                </p>
                <p className="mb-4">
                  When you have finished reviewing the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page, you can then exit the page by clicking the{" "}
                  <span className="text-black">“Go Back?”</span> button, located
                  to the left of the header bar of the page.
                </p>
                 {/* <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “General Ledger”
                  </span>{" "}
                  page.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                                {gl && (
                                <GatsbyImage
                                  image={gl}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  How to Download the Trial Report
                </h2>
                <p className="mb-4">
                  If you want to download the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page of your{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Operation
                  </span>
                  , you can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, clicking the{" "}
                    <span className="text-black">
                      “Trial Report [shown as a “clipboard with a checklist”]”
                    </span>{" "}
                    button located on the top-right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “General Ledger”
                    </span>{" "}
                    page, to the right of the{" "}
                    <span className="text-black">“Print”</span> button and to
                    the left of the{" "}
                    <span className="text-black">
                      “Balance Sheet [shown as a “clipboard with a clock” icon]”
                    </span>{" "}
                    button.
                  </li>
                   <div className="pl-13 pt-8 flex justify-center">
                                {dtr && (
                                <GatsbyImage
                                  image={dtr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/>
                </ol>
                <p className="mb-4">
                  It will then take you to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page.
                </p>
                 {/* <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  You can then download your{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page by clicking the{" "}
                  <span className="text-black">“Print”</span> button, located on
                  the top-right of the page, below the{" "}
                  <span className="text-black">“Logout”</span> button.
                </p>
                 {/* <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                 {/* <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  This file contains the current view of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Trial Report
                  </span>{" "}
                  page and its details.
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="text-black">“Save”</span>{" "}
                  button, located on the bottom right of your file explorer, so
                  that it saves the PDF file to that folder.
                </p>
                <p className="mb-4">
                  Now you can either go to the top-right hand of your browser
                  and go into the{" "}
                  <span className="text-primary-pheading font-bold">
                    Downloads
                  </span>{" "}
                  section, to view your PDF file, or you can go into the file
                  explorer location where you uploaded the PDF file and open it
                  to view it as well.
                </p>
                {/* <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                                {tbr && (
                                <GatsbyImage
                                  image={tbr}
                                  alt="Startups illustration"
                                  className="border border-gray-200 shadow-lg w-[1000.58px] "
                                />
                              )}
                            </div><br/><br/> */}
                <p className="mb-4">
                  Now that we have covered how to download the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Trial Report”
                  </span>{" "}
                  page, we have now covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “General Ledger”
                  </span>{" "}
                  page’s features and thus covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Financial”
                  </span>{" "}
                  Module!
                </p>
                <p className="mb-4">
                  Now that we have covered the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Financial”
                  </span>{" "}
                  Module of the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  , we can continue on and cover the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Manage Users”
                  </span>{" "}
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default trialbalance;
export const Head = () => (
  <>
    <title>TrialBalance | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
