import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import TextToSpeech from "../components/TextToSpeech";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const generalledger = () => {
     const data = useStaticQuery(graphql`
        query {
          f: file(relativePath: { eq: "f.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          glr: file(relativePath: { eq: "glr.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      `);
      const f = getImage(data.f);
      const glr = getImage(data.glr);
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
                  Starting Guide for General Ledger:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading dark:text-primary-pheading font-semibold text-[22px] font-montserrat lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>
              <p className="text-primary-paragraph2 dark:text-[#D5D5D5] sm:text-[12px] lg:text-lg md:text-lg font-montserrat font-normal lg:px-10 pt-4 text-justify">
                Now that we covered how to add entries in the{" "}
                <span className="text-primary-activelink font-bold">“General Ledger”</span> table
                within the{" "}
                <span className="text-primary-pheading font-bold">Farm Management System</span>. Let
                us now focus on the features that are present in the{" "}
                <span className="text-primary-activelink font-bold">“General Ledger”</span> Dashboard!
              </p>
              <br />
              <br />
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Filtering and Searching the General Ledger
                </h2>
                <p className="mb-4">
                  You can search and filter the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> table
                  present in the{" "}
                  <span className="text-primary-pheading font-bold">Farm Management System</span>
                  . You can find the search and filter options as they are
                  located below the{" "}
                  <span className="text-black">“’+’ Record Transaction”</span>{" "}
                  button,{" "}
                  <span className="text-black">“’+’ Create Expense”</span>{" "}
                  button,{" "}
                  <span className="text-black">“’+’ Add Account Head”</span>{" "}
                  button and above the{" "}
                  <span className="text-primary-pheading font-bold">Debit amount</span>, the{" "}
                  <span className="text-primary-pheading font-bold">Credit amount</span> and the{" "}
                  <span className="text-primary-pheading font-bold">Balance amount</span>.
                </p>
    <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="mb-4">
                  You can search based on these options going from left to
                  right:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    The <span className="text-primary-activelink font-bold">“Date Range”</span>{" "}
                    search: You can search and filter the date range of the
                    table so that you can see specific entries of a date range.
                  </li>
                  <li className="mb-2">
                    The <span className="text-primary-activelink font-bold">“Expense Type”</span>{" "}
                    search: You can search and filter the table for a specific
                    type of Expense so that the table only shows entries with
                    that expense. You can choose 1 of the many Expense type
                    options to filter from:
                    <ul className="list-disc ml-6 mt-2">
                      <li>Asset</li>
                      <li>Expense</li>
                      <li>Liabilities</li>
                      <li>Owner Equity</li>
                      <li>Revenue</li>
                      <li>[Any new Expense type will listed here]</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">“Head of Account”</span>{" "}
                    search: You can search and filter the table for the method
                    of payment or the account head that was used in either the{" "}
                    <span className="text-primary-pheading font-bold">Transaction</span> or the{" "}
                    <span className="text-primary-pheading font-bold">Expense</span>.
                  </li>
                </ol>

                <p className="mb-4">
                  Then click on the <span className="text-black">“Search”</span>{" "}
                  button, located on the far-right of the page, to the right of
                  the <span className="text-black">“Download Table”</span>{" "}
                  button and to the left of the{" "}
                  <span className="text-black">“Refresh data”</span> button.
                </p>
                <p className="mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> table
                  update with only the search options you typed or selected in
                  the search bar. Also, you can click on the{" "}
                  <span className="text-black">“Refresh data”</span> button to
                  refresh the data. It is highlighted as a red button with an{" "}
                  <span className="text-primary-pheading font-bold">“arrow pointing back”</span>{" "}
                  icon.
                </p>
                <p className="mb-4">
                  Now those are the search and filter options! You can now
                  search or filter for a specific{" "}
                  <span className="text-primary-pheading font-bold">Transaction</span> or{" "}
                  <span className="text-primary-pheading font-bold">Expense</span> entry or
                  filter the table for a set of{" "}
                  <span className="text-primary-pheading font-bold">Transactions</span> or{" "}
                  <span className="text-primary-pheading font-bold">Expenses</span> entries. You
                  can also use the search and filter options as a filter so that
                  you can <span className="text-black">“Download Table”</span>{" "}
                  specific <span className="text-primary-pheading font-bold">Transactions</span>{" "}
                  or <span className="text-primary-pheading font-bold">Expenses</span> entries to
                  use later.
                </p>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the General Ledger Table
                </h2>
                <p className="mb-4">
                  If you want to have a set of{" "}
                  <span className="text-primary-pheading font-bold">Transaction</span> or{" "}
                  <span className="text-primary-pheading font-bold">Expense</span> entries or the
                  entire{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> table
                  in the table within the{" "}
                  <span className="text-primary-pheading font-bold">Farm Management System</span>{" "}
                  on a PDF downloaded. Then you can do so by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, You can use the search to filter the table for
                    specific{" "}
                    <span className="text-primary-pheading font-bold">Transactions</span> or{" "}
                    <span className="text-primary-pheading font-bold">Expenses</span> that you
                    want to download, otherwise if you want to download the
                    entire table, leave the search options as it is in default.
                  </li>
                  <li className="mb-2">
                    Next, you can select the{" "}
                    <span className="text-black">“Print”</span> button located
                    on the top-right of the page and to the right of the{" "}
                    <span className="text-black">
                      “Trial Report [shown as a “clipboard with a checklist”
                      icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
 <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                 <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="mb-4">
                  This file contains the current view of the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> table
                  and their details.
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
                  <span className="text-primary-pheading font-bold">Downloads</span> section, to
                  view your PDF file, or you can go into the file explorer
                  location where you uploaded the PDF file and open it to view
                  it as well.
                </p>
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                  <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div><br/><br/>
                <p className="mb-4">
                  Now we have covered how to download the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span>{" "}
                  table. We are going to continue onward and show how to read
                  the <span className="text-primary-activelink font-bold">“Balance Sheet”</span>{" "}
                  Report.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default generalledger;
