import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

const balancesheet = () => {
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
      bs: file(relativePath: { eq: "bs.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const bs = getImage(data.bs);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify sm:text-[12px] lg:text-lg md:text-lg font-montserrat text-primary-paragraph2">
              <div className="flex items-center">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                  Balance Sheet:
                </h2>
              </div>
              <div className="flex items-center pt-5 ">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-primary-pheading font-bold">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
 <div className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
                 <p className="mb-4">The <span className="text-primary-activelink font-bold">“Balance Sheet”</span> is a critical financial report that provides a snapshot of the farm’s financial position at a specific point in time.</p>
        <p className="mb-4">It shows the relationship between the farm's <span className="text-primary-pheading font-bold">assets</span> (what the farm owns), <span className="text-primary-pheading font-bold">liabilities</span> (what the farm owes), and <span className="text-primary-pheading font-bold">owner’s equity</span> (the owner's investment).</p>
        <p className="mb-4">The balance sheet follows the accounting equation:</p>
          <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <ul className="list-disc ml-6 mb-4">
            <li><span className="text-primary-pheading font-bold">Assets</span> include items such as land, buildings, machinery, livestock, and inventory like seeds and fertilizers.</li>
            <li><span className="text-primary-pheading font-bold">Liabilities</span> refer to debts and obligations, such as loans, unpaid bills, or accounts payable.</li>
            <li><span className="text-primary-pheading font-bold">Owner’s Equity</span> represents the owner’s investment in the farm plus retained earnings (profits).</li>
        </ul>
        <p className="mb-4">A good example would be, if the farm owns equipment worth <span className="text-black">Rs. 10,000,000</span> (<span className="text-primary-pheading font-bold">asset</span>) but has an outstanding loan of <span className="text-black">Rs. 4,000,000</span> (<span className="text-primary-pheading font-bold">liability</span>), the <span className="text-primary-pheading font-bold">owner’s equity</span> would be <span className="text-black">Rs. 6,000,000</span>.</p>
        <p className="mb-4">The balance sheet helps determine the farm's financial health by showing whether its <span className="text-primary-pheading font-bold">assets</span> outweigh its <span className="text-primary-pheading font-bold">liabilities</span>.</p>
                <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
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
                 <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">How to Get to the Balance Sheet</h2>
        <p className="mb-4">To get to the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page from the <span className="text-primary-activelink font-bold">“General Ledger”</span> page, you can start by:</p>
        <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
                First, clicking the <span className="text-black">“Balance Sheet [shown as a “clipboard with a clock” icon]”</span> button located on the top-right of the <span className="text-primary-activelink font-bold">“General Ledger”</span> page, and to the left of the <span className="text-black">“Trial Report [shown as a “clipboard with a checklist”]”</span> button.
            </li>
              <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        </ol>
        <p className="mb-4">It will then take you to the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page.</p>
          <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">You can then review your <span className="text-primary-pheading font-bold">Farm Operation’s</span> financial position at a specific point in time.</p>
        <p className="mb-4">You can also <span className="text-black">“download”</span> the Balance Sheet of your Farm’s as well.</p>
        <p className="mb-4">When you have finished reviewing the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page, you can then exit the page by clicking the <span className="text-black">“Go Back?”</span> button, located to the left of the header bar of the page.</p>
          <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">You will then be taken back to the <span className="text-primary-activelink font-bold">“General Ledger”</span> page.</p>
          <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">Now that you know how to get to the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page, we are going to cover how you can download the <span className="text-primary-activelink font-bold">“Balance Sheet”</span>.</p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                 <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">How to Download the Balance Sheet</h2>
        <p className="mb-4">If you want to download the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page of your <span className="text-primary-pheading font-bold">Farm Operation</span>, you can start by:</p>
        <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
                First, clicking the <span className="text-black">“Balance Sheet [shown as a “clipboard with a clock” icon]”</span> button located on the top-right of the <span className="text-primary-activelink font-bold">“General Ledger”</span> page, and to the left of the <span className="text-black">“Trial Report [shown as a “clipboard with a checklist”]”</span> button.
            </li>
              <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        </ol>
        <p className="mb-4">It will then take you to the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page.</p>
          <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">You can then download your <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page by clicking the <span className="text-black">“Print”</span> button, located on the top-right of the page, below the <span className="text-black">“Logout”</span> button.</p>
         <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">Once you select it, it will open a file explorer window, asking where to put the file in.</p>
        <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">This file contains the current view of the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page and its details.</p>
        <p className="mb-4">When you have found a suitable place for your PDF file, then you can press the <span className="text-black">“Save”</span> button, located on the bottom right of your file explorer, so that it saves the PDF file to that folder.</p>
        <p className="mb-4">Now you can either go to the top-right hand of your browser and go into the <span className="text-primary-pheading font-bold">Downloads</span> section, to view your PDF file, or you can go into the file explorer location where you uploaded the PDF file and open it to view it as well.</p>
        <p className="mb-4">Provided below is an example of what it should look like:</p>
         <div className="pl-13 pt-8 flex justify-center">
                        {bs && (
                          <GatsbyImage
                            image={bs}
                            alt="Startups illustration"
                            className="border border-gray-200 shadow-lg w-[1000.58px] "
                          />
                        )}
                      </div><br/><br/>
        <p className="mb-4">Now that we have covered how to download the <span className="text-primary-activelink font-bold">“Balance Sheet”</span> page, we can then continue onward and cover the <span className="text-primary-activelink font-bold">“Trial Report”</span> page next.</p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default balancesheet;

export const Head = () => (
  <>
    <title>BalanceSheet | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
