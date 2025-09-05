import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const contact = () => {
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
      finance: file(relativePath: { eq: "finance.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      anah: file(relativePath: { eq: "anah.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
           aane: file(relativePath: { eq: "aane.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const finance = getImage(data.finance);
  const anah = getImage(data.anah);
  const aane = getImage(data.aane);

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
                  Starting Guide for Financials:
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
<div className="lg:pl-10">
              <p className=" text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal ">
                The <span className="text-primary-activelink font-bold">Financial Module</span> in
                the farm management system is designed to manage and streamline
                all financial activities related to the farm. It allows users to
                record, monitor, and analyze financial transactions to ensure
                the smooth and efficient running of farm operations. This module
                captures all transactions, including costs related to tasks such
                as <span className="text-primary-pheading font-bold">soil testing</span>,{" "}
                <span className="text-primary-pheading font-bold">water testing</span>,{" "}
                <span className="text-primary-activelink font-bold">inventory purchases</span>,{" "}
                <span className="text-primary-pheading font-bold">field inspections</span>,{" "}
                <span className="text-primary-activelink font-bold">maintenance</span>, and other
                farm-related activities. By maintaining accurate financial
                records, users can easily track expenses, manage liabilities,
                and monitor farm revenue.
              </p>
              <p className="text-justify mb-4">
                One of the critical aspects of the module is its ability to
                record{" "}
                <span className="text-primary-activelink font-bold">inventory purchases</span>.
                Whenever items like{" "}
                <span className="text-primary-pheading font-bold">seeds</span>,{" "}
                <span className="text-primary-pheading font-bold">fertilizers</span>,{" "}
                <span className="text-primary-pheading font-bold">tools</span>, or{" "}
                <span className="text-primary-pheading font-bold">equipment</span> are bought,
                the system logs these transactions for better expense tracking.
                Similarly, expenses related to{" "}
                <span className="text-primary-activelink font-bold">soil and water tests</span> are
                captured to help farmers plan their budgets for maintaining
                optimal farm conditions. Costs associated with{" "}
                <span className="text-primary-pheading font-bold">field inspections</span> and{" "}
                <span className="text-primary-activelink font-bold">
                  maintenance of equipment, machinery, or infrastructure
                </span>{" "}
                are also recorded, ensuring that farm assets are well-maintained
                and operational.
              </p>
              <p className="text-justify mb-4">
                The module also handles more significant financial elements,
                such as <span className="text-primary-activelink font-bold">assets</span> (like{" "}
                <span className="text-primary-pheading font-bold">land</span>,{" "}
                <span className="text-primary-pheading font-bold">machinery</span>, and{" "}
                <span className="text-primary-pheading font-bold">buildings</span>),{" "}
                <span className="text-primary-activelink font-bold">liabilities</span> (
                <span className="text-primary-pheading font-bold">
                  pending payments or debts
                </span>
                ), and <span className="text-primary-activelink font-bold">owner’s equity</span>,
                which reflects the investments made by the farm owner.
                Additionally, it tracks{" "}
                <span className="text-primary-activelink font-bold">revenues</span> generated from
                farm activities, ensuring that income is recorded accurately to
                assess profitability and overall financial performance.
              </p>
              <p className="text-justify mb-4">
                To provide a clear financial overview, the module generates
                essential reports. The{" "}
                <span className="text-primary-activelink font-bold">“General Ledger Report”</span>{" "}
                offers a detailed record of all financial transactions, serving
                as the foundation for accounting processes. The{" "}
                <span className="text-primary-pheading font-bold">“Trial Balance Report”</span>{" "}
                ensures that all debits and credits are balanced, which is
                crucial for identifying any discrepancies. Finally, the{" "}
                <span className="text-primary-activelink font-bold">“Balance Sheet”</span> gives a
                comprehensive snapshot of the farm's financial health, showing
                the current state of{" "}
                <span className="text-primary-pheading font-bold">assets</span>,{" "}
                <span className="text-primary-pheading font-bold">liabilities</span>, and{" "}
                <span className="text-primary-pheading font-bold">owner’s equity</span>.
              </p>
              <p className="text-justify mb-4">
                By using the{" "}
                <span className="text-primary-activelink font-bold">Financial Module</span>, farm
                owners and managers can make well-informed decisions, ensure
                accurate financial reporting, and maintain the overall financial
                stability of the farm. This module simplifies financial
                management and helps users focus on improving productivity and
                profitability.
              </p>
              <p className="text-justify mb-4">
                When you first click the{" "}
                <span className="text-primary-activelink font-bold">“Financials”</span> Button in
                the Menu, you will be taken to the{" "}
                <span className="text-primary-pheading font-bold">“General Ledger”</span> page
                immediately.
              </p>
          </div>

              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 1
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h2 className="text-2xl font-semibold text-primary-activelink font-bold mb-3 text-justify">
                  The “General Ledger” Page
                </h2>
                <p className="text-justify mb-4">
                  The <span className="text-primary-activelink font-bold">“General Ledger”</span>{" "}
                  page is the central record of all financial transactions
                  within the farm management system. It acts as the main
                  accounting document where every transaction related to the
                  farm is recorded. Each financial entry is categorized into
                  types, such as <span className="text-primary-pheading font-bold">income</span>,{" "}
                  <span className="text-primary-pheading font-bold">expenses</span>,{" "}
                  <span className="text-primary-pheading font-bold">assets</span>,{" "}
                  <span className="text-primary-pheading font-bold">liabilities</span>, and{" "}
                  <span className="text-primary-pheading font-bold">equity</span>. An example
                  would be, purchases of{" "}
                  <span className="text-primary-activelink font-bold">seeds</span>,{" "}
                  <span className="text-primary-activelink font-bold">soil testing costs</span>, or{" "}
                  <span className="text-primary-activelink font-bold">
                    revenue from crop sales
                  </span>
                  . They are all recorded in their respective accounts within
                  the general ledger.
                </p>
                <p className="text-justify mb-4">
                  It provides a detailed breakdown of every debit and credit,
                  ensuring complete transparency and traceability of all
                  financial activities. The general ledger serves as the
                  foundation for preparing other financial reports like the{" "}
                  <span className="text-primary-pheading font-bold">Trial Balance</span> and{" "}
                  <span className="text-primary-pheading font-bold">Balance Sheet</span>.
                  Furthermore, we have head of accounts like{" "}
                  <span className="text-primary-activelink font-bold">cash</span>,{" "}
                  <span className="text-primary-activelink font-bold">bank</span>,{" "}
                  <span className="text-primary-activelink font-bold">inventory</span>,{" "}
                  <span className="text-primary-activelink font-bold">accounts receivable</span>,{" "}
                  <span className="text-primary-activelink font-bold">accounts payable</span>, etc.
                  Against every head of account is a general ledger report.
                </p>
                    <div className="pl-13 pt-8 flex justify-center">
                {finance && (
                  <GatsbyImage
                    image={finance}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Recording a New Transaction
                </h3>
                <p className="text-justify mb-4">
                  For adding a new Transaction that you wish to record, you
                  first need to have a set of items ready, so that there will
                  not be any issues throughout the process:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    You need to have the Transaction details with you as you
                    need to enter the details that are required from it.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Now, once you have the required items ready, you can continue
                  to adding a new Transaction entry in the Farm Management
                  System. To add a Transaction, you first start by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    Clicking on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “’+’ Record Transaction”
                    </span>{" "}
                    button, located on the top-left corner of the page, to the
                    left of the{" "}
                    <span className="text-primary-pheading font-bold">“’+’ Create Expense”</span>{" "}
                    button and to the top of the search options.
                  </li>
                       {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                </ol>
                <p className="text-justify mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Record New Transaction”
                  </span>{" "}
                  page.
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  Please keep in mind, all the fields in the single step must be
                  filled properly. Now, let us begin with the first step, the{" "}
                  <span className="text-primary-pheading font-bold">“Transaction”</span> step:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  The <span className="font-bold">“Transaction”</span> step
                  is where you enter all the relevant and required information
                  regarding the Transaction such as the type of transaction,
                  what the Head of Accounts was, Invoice Number, Cheque Number
                  (if done by Cheque), date, amount, Vendor, life span, and
                  purpose.
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="font-bold">“Type”</span> field:
                    Enter the type of transaction that was made. Please choose 1
                    of 5 options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-activelink font-bold">Asset</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Expense</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Liabilities</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Owner Equity</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Revenue</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    The{" "}
                    <span className="font-bold">“Head of Accounts”</span>{" "}
                    field: Enter the form of accounts head the transaction was
                    made under. You may choose more than one of the 10 options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-activelink font-bold">Account Payable</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">
                          Account Receivable
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">
                          Accumulated Depreciation
                        </span>
                      </li>
                      <li>
                        <span className="font-bold">Bank</span>: If you
                        choose this option, you will see 4 extra fields in the{" "}
                        <span className="font-bold">
                          “Transaction Details”
                        </span>{" "}
                        step. These fields are, the{" "}
                        <span className="font-bold">“Bank Name”</span>{" "}
                        field, the{" "}
                        <span className="font-bold">
                          “Bank Account Number”
                        </span>{" "}
                        field, the{" "}
                        <span className="font-bold">“Account Title”</span>{" "}
                        field, and the{" "}
                        <span className="font-bold">“Bank Amount”</span>{" "}
                        field.
                      </li>
                      <li>
                        <span className=" font-bold">Cash</span>: If you
                        choose this option, you will see 1 extra field in the{" "}
                        <span className="font-bold">
                          “Transaction Details”
                        </span>{" "}
                        step. These fields are the{" "}
                        <span className="font-bold">“Cash Amount”</span>{" "}
                        field.
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Depreciation</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">
                          Furniture and Fixtures
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Inventory</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Pesticides</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Tax</span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    The <span className="font-bold">“Invoice Number”</span>{" "}
                    field: This is a non-editable field where the Invoice Number
                    is added to the Transaction.
                  </li>
                  <li>
                    The{" "}
                    <span className="font-bold">
                      “Cheque Number (Optional)”
                    </span>{" "}
                    field: Enter the Cheque number of the Transaction.
                  </li>
                  <li>
                    The <span className="font-bold">“Date”</span> field:
                    Enter the date of the Transaction.
                  </li>
                  <li>
                    The <span className="font-bold">“Amount”</span> field:
                    Enter the amount of Rupees that was earned or spent from the
                    Transaction.
                  </li>
                  <li>
                    The <span className="font-bold">“Vendor”</span> field:
                    Enter the name of the Vendor that is on the receiving or
                    spending end of the Transaction. It will show a list of the
                    contacts that has been entered in the{" "}
                    <span className="text-primary-activelink font-bold">Contacts</span> page.
                  </li>
                  <li>
                    The{" "}
                    <span className="font-bold">
                      “Life Span (if applicable)”
                    </span>{" "}
                    field: Enter how long the subject of the Transaction will
                    last, in terms of years.
                  </li>
                  <li>
                    The <span className="font-bold">“Purpose”</span> field:
                    Enter what the purpose of the Transaction is, in a few
                    words.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="text-justify mb-4">
                  Next is the second step, the{" "}
                  <span className="font-bold">“Transaction Detail”</span>{" "}
                  step:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  The{" "}
                  <span className="font-bold">“Transaction Detail”</span>{" "}
                  step is only shown when you select either the{" "}
                  <span className="text-primary-activelink font-bold">“Bank”</span> option or the{" "}
                  <span className="text-primary-activelink font-bold">“Cash”</span> option in the{" "}
                  <span className="font-bold">“Head of Accounts”</span>{" "}
                  field, within the{" "}
                  <span className="font-bold">“Transaction”</span> step.
                  This is where you enter either the bank information or the
                  cash information, regarding the head of accounts.
                </p>
                <p className="text-justify mb-4">
                  If the <span className="text-primary-activelink font-bold">“Bank”</span> option
                  was chosen, in the{" "}
                  <span className="font-bold">“Head of Accounts”</span>{" "}
                  field, within the{" "}
                  <span className="font-bold">“Transaction”</span> step:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className=" font-bold">“Bank Name”</span>{" "}
                    field: Enter the name of the Bank that is overseeing the
                    transaction. You may type the name of the bank and its
                    option within the box will show.
                  </li>
                  <li>
                    The{" "}
                    <span className=" font-bold">
                      “Bank Account Number”
                    </span>{" "}
                    field: Enter the bank account number of the bank account
                    from which the Transaction is done on.
                  </li>
                  <li>
                    The <span className=" font-bold">“Account Title”</span>{" "}
                    field: Enter the Bank account title of the bank account that
                    from which the Transaction is done on.
                  </li>
                  <li>
                    The <span className="font-bold">“Bank Amount”</span>{" "}
                    field: Enter the amount of rupees that has been transferred
                    in the Transaction.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  If the <span className="text-primary-activelink font-bold">“Cash”</span> option
                  was chosen, in the{" "}
                  <span className="font-bold">“Head of Accounts”</span>{" "}
                  field, within the{" "}
                  <span className="font-bold">“Transaction”</span> step:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="font-bold">“Cash Amount”</span>{" "}
                    field: Enter the amount of rupees that was transferred for
                    the Transaction.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  If both options were not chosen, then the{" "}
                  <span className=" font-bold">“Transaction Detail”</span>{" "}
                  step will not be shown.
                </p>
                <p className="text-justify mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="text-justify mb-4">
                  Next is the third step, the{" "}
                  <span className="font-bold">“Associated To”</span> step:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  The <span className="text-primary-activelink font-bold">“Associated To”</span>{" "}
                  step is where you enter the association that the transaction
                  has, whether it is general or specific.
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="font-bold">“Associated To”</span>{" "}
                    field: Enter what the transaction is associated to, i.e., is
                    it general purpose or a specific purpose that it is being
                    purchased or spent on. Please choose 1 of 11 options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-activelink font-bold">Farm</span>
                      </li>
                      <li>
                        <span className=" font-bold">Fertilizer</span>: When
                        you choose this option, 1 extra field is shown in the{" "}
                        <span className="font-bold">“Associated To”</span>{" "}
                        step, the{" "}
                        <span className="font-bold">“Fertilizer”</span>{" "}
                        field:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            The{" "}
                            <span className=" font-bold">“Fertilizer”</span>{" "}
                            field: Enter the Fertilizer that is stored in the
                            Inventory that is associated to the transaction.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">General</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">
                          Goods Receiving Note
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Health</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Inventory</span>: When
                        you choose this option, 1 extra field is shown in the{" "}
                        <span className="text-primary-pheading font-bold">“Associated To”</span>{" "}
                        step, the{" "}
                        <span className=" font-bold">“Inventory”</span>{" "}
                        field:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            The{" "}
                            <span className=" font-bold">“Inventory”</span>{" "}
                            field: Enter the name of the Inventory item that is
                            associated to the transaction.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className=" font-bold">Land</span>: When you
                        choose this option, 1 extra field is shown in the{" "}
                        <span className="font-bold">“Associated To”</span>{" "}
                        step, the <span className="font-bold">“Land”</span>{" "}
                        field:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            The <span className="font-bold">“Land”</span>{" "}
                            field: Enter the name of the land that is associated
                            to the transaction.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Orchard</span>
                      </li>
                      <li>
                        <span className=" font-bold">Pesticide</span>: When
                        you choose this option, 1 extra field is shown in the{" "}
                        <span className="font-bold">“Associated To”</span>{" "}
                        step, the{" "}
                        <span className="font-bold">“Pesticide”</span>{" "}
                        field:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            The{" "}
                            <span className="font-bold">“Pesticide”</span>{" "}
                            field: Enter the name of the pesticide that is
                            stored in the Inventory that is associated to the
                            transaction.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className=" font-bold">Planting</span>: When
                        you choose this option, 1 extra field is shown in the{" "}
                        <span className="font-bold">“Associated To”</span>{" "}
                        step, the{" "}
                        <span className="font-bold">“Planting”</span>{" "}
                        field:
                        <ul className="list-disc pl-6 mt-2">
                          <li>
                            The{" "}
                            <span className=" font-bold">“Planting”</span>{" "}
                            field: Enter the name of the Planting that is being
                            tracked by the Farm Management System that is
                            associated to the transaction.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Equipment</span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Please select the correct option in the above field, if you
                  wish to add any additional information to the transaction’s
                  association. Please make sure all the fields have been filled
                  correctly before continuing.
                </p>
                <p className="text-justify mb-4">
                  Finally, the fourth and final step is the{" "}
                  <span className="font-bold">“Additional Info”</span>{" "}
                  step:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  The <span className=" font-bold">“Additional Info”</span>{" "}
                  step is where you enter any additional Information regarding
                  the Transaction, such as the Name of the Receiver of the
                  Transaction, Any additional description to the Transaction,
                  and an attachment to a document or Image regarding the
                  Transaction.
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="font-bold">“Receiver Name”</span>{" "}
                    field: Enter the name of the receiver of the Transaction.
                  </li>
                  <li>
                    The <span className="font-bold">“Description”</span>{" "}
                    field: Enter any additional description regarding the
                    Transaction.
                  </li>
                  <li>
                    The <span className="font-bold">“Attachment”</span>{" "}
                    field: Upload a Document or an Image that details the
                    Transaction.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="text-justify mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="text-primary-pheading font-bold">“Submit”</span> button.
                  You will then be taken back to the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> page
                  with your Transaction entry added to the{" "}
                  <span className=" font-bold">“General Ledger”</span>{" "}
                  table!
                </p>
                     <div className="pl-13 pt-8 flex justify-center">
                {finance && (
                  <GatsbyImage
                    image={finance}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/>
              </div>
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-primary-pheading font-bold">
                  Step 3
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <div className="lg:pl-10">
                <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Adding a New Account Head
                </h3>
                <p className="text-justify mb-4">
                  When adding an Account Head, you will also be given a prompt
                  to make a new Expense type. To make a new Expense Type, you
                  can start by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    Clicking on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “’+’ Add Account Head”
                    </span>{" "}
                    button, located on the top-left corner of the page, to the
                    right of the{" "}
                    <span className="text-primary-pheading font-bold">“’+’ Create Expense”</span>{" "}
                    button and to the top of the search options.
                  </li>
                       <div className="pl-13 pt-8 flex justify-center">
                {anah && (
                  <GatsbyImage
                    image={anah}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/>
                </ol>
                <p className="text-justify mb-4">
                  It will then open an{" "}
                  <span className="text-primary-activelink font-bold">“Add Expense Type”</span>{" "}
                  dialog box.
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  Within the Dialog box is 1 field, the{" "}
                  <span className="text-primary-pheading font-bold">“Expense Type”</span> field:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="text-primary-activelink font-bold">“Expense Type”</span>{" "}
                    field: Enter a name for a new Expense type for the General
                    Ledger.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  When you have entered a name for the new Expense Type, then
                  you can select the{" "}
                  <span className="text-primary-pheading font-bold">“Submit”</span> button.
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span> page
                  with the new Expense type added to the general ledger for
                  future uses.
                </p>

                <h3 className="text-xl font-semibold text-primary-activelink font-bold mb-2 text-justify">
                  Adding a New Expense
                </h3>
                <p className="text-justify mb-4">
                  For adding a new Expense, you first need to have a set of
                  items ready, so that there will not be any issues throughout
                  the process:
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    You need to have the Expense details with you as you need to
                    enter the details that are required from it.
                  </li>
                  <li>
                    If the Expense is a new type of Expense that needs to be
                    specified differently in the{" "}
                    <span className="text-primary-activelink font-bold">“General Ledger”</span>{" "}
                    table, then you need a new Expense Type ready.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Now, once you have the required items ready, you can continue
                  to adding a new Expense entry in the Farm Management System.
                  To add an Expense, you first start by:
                </p>
                <ol className="list-decimal pl-6 mb-4 text-justify">
                  <li>
                    Clicking on the{" "}
                    <span className="text-primary-activelink font-bold">“’+’ Create Expense”</span>{" "}
                    button, located on the top-left corner of the page, to the
                    right of the{" "}
                    <span className="text-primary-pheading font-bold">
                      “’+’ Record Transaction”
                    </span>{" "}
                    button, to the left of the{" "}
                    <span className="text-primary-pheading font-bold">
                      “’+’ Add Account Head”
                    </span>{" "}
                    button, and to the top of the search options.
                  </li>
                       <div className="pl-13 pt-8 flex justify-center">
                {aane && (
                  <GatsbyImage
                    image={aane}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/>
                </ol>
                <p className="text-justify mb-4">
                  It will open the{" "}
                  <span className="text-primary-activelink font-bold">“New Expense”</span> page.
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  Please keep in mind, all the fields in the single step must be
                  filled properly. Now, let us begin with the first step, the{" "}
                  <span className="text-primary-pheading font-bold">“Expense Information”</span>{" "}
                  step:
                </p>
                     {/* <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/> */}
                <p className="text-justify mb-4">
                  The{" "}
                  <span className=" font-bold">“Expense Information”</span>{" "}
                  step is where you enter all the relevant and required
                  information regarding the Expense that was made, such as
                  Location, Date, Expense Type, Payment Form, Expense Amount,
                  Invoice Number, Description, and Attachment.
                </p>
                <ul className="list-disc pl-6 mb-4 text-justify">
                  <li>
                    The <span className="font-bold">“Location”</span>{" "}
                    field: Enter the Location where the Expense took place. It
                    will show a list of Farm Locations that are entered into the
                    Farm Management System, and you have to choose 1 option.
                  </li>
                  <li>
                    The <span className=" font-bold">“Date”</span> field:
                    Enter the Date and time of when the Expense took place.
                  </li>
                  <li>
                    The <span className=" font-bold">“Expense Type”</span>{" "}
                    field: Enter the type of Expense that took place at the
                    Location. Please choose 1 of the Expense Types. These are
                    the default options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-activelink font-bold">Asset</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Expense</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Liabilities</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Owner Equity</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">Revenue</span>
                      </li>
                      <li>[Any new Expense Type will be listed below]</li>
                    </ul>
                  </li>
                  <li>
                    The <span className=" font-bold">“Payment From”</span>{" "}
                    field: Enter how the Payment was conducted and what form it
                    is in. Please choose 1 of 2 options:
                    <ul className="list-disc pl-6 mt-2">
                      <li>
                        <span className="text-primary-activelink font-bold">Account Payable</span>
                      </li>
                      <li>
                        <span className="text-primary-activelink font-bold">
                          Account Receivable
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    The <span className=" font-bold">“Expense Amount”</span>{" "}
                    field: Enter the amount of rupees that was spent for the
                    expense.
                  </li>
                  <li>
                    The <span className=" font-bold">“Invoice Number”</span>{" "}
                    field: Enter the Invoice Number of the Expense. It should be
                    written on the receipt of the Expense.
                  </li>
                  <li>
                    The <span className=" font-bold">“Description”</span>{" "}
                    field: Enter any additional description of the Expense that
                    describes it in detail.
                  </li>
                  <li>
                    The <span className=" font-bold">“Attachment”</span>{" "}
                    field: Upload a Document or an Image that details the
                    Expense. For example, receipt, Purchase Information, etc.
                  </li>
                </ul>
                <p className="text-justify mb-4">
                  Please make sure all the fields have been filled correctly
                  before continuing.
                </p>
                <p className="text-justify mb-4">
                  Now, once you have filled all the details that need to be
                  filled and feel comfortable with your inputs, you can select
                  the <span className="text-primary-activelink font-bold">“Submit”</span> button.
                  You will then be taken back to the{" "}
                  <span className="text-primary-pheading font-bold">“General Ledger”</span> page
                  with your Expense entry added to the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span>{" "}
                  table!
                </p>
                     <div className="pl-13 pt-8 flex justify-center">
                {finance && (
                  <GatsbyImage
                    image={finance}
                    alt="Startups illustration"
                    className="border border-gray-200 shadow-lg w-[1000.58px] "
                  />
                )}
              </div>

              <br /><br/>
                <p className="text-justify mb-4">
                  Now that we have covered how to add an Expense! We have
                  covered how to add a Transaction entry, Expense entry, and
                  making a new Expense Type! We are now going to continue on and
                  cover the{" "}
                  <span className="text-primary-activelink font-bold">“General Ledger”</span>{" "}
                  Dashboard and its features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default contact;
export const Head = () => (
  <>
    <title>Financials | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
