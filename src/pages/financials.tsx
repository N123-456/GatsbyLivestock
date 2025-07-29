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
            <div className="content-container max-w-7xl w-full px-4 lg:px-4  text-justify">
        <div className="finance pt-5">
                                        <TextToSpeech textSelector=".finance" />
                <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:pl-10">
                  Starting Guide for Financials:
                </h2>
             

              <p className=" text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 pt-4">
                The Financial Module in the farm management system is designed
                to manage and streamline all financial activities related to the
                farm. It allows users to record, monitor, and analyse financial
                transactions to ensure the smooth and efficient running of farm
                operations. This module captures all transactions, including
                costs related to tasks such as soil testing, water testing,
                inventory purchases, field inspections, maintenance, and other
                farm-related activities. By maintaining accurate financial
                records, users can easily track expenses, manage liabilities,
                and monitor farm revenue. One of the critical aspects of the
                module is its ability to record inventory purchases. Whenever
                items like seeds, fertilizers, tools, or equipment are bought,
                the system logs these <br />
                <br /> transactions for better expense tracking. Similarly,
                expenses related to soil and water tests are captured to help
                farmers plan their budgets for maintaining optimal farm
                conditions. Costs associated with field inspections and
                maintenance of equipment, machinery, or infrastructure are also
                recorded, ensuring that farm assets are well-maintained and
                operational. The module also handles more significant financial
                elements, such as assets (like land, machinery, and buildings),
                liabilities (pending payments or debts), and owner’s equity,
                which reflects the investments made by the farm owner.
                Additionally, it tracks revenues generated from farm activities,
                ensuring that income is recorded accurately to assess
                profitability and overall financial performance.
                <br />
                <br />
                To provide a clear financial overview, the module generates
                essential reports. The General Ledger Report offers a detailed
                record of all financial transactions, serving as the foundation
                for accounting processes. The Trial Balance Report ensures that
                all debits and credits are balanced, which is crucial for
                identifying any discrepancies. Finally, the Balance Sheet gives
                a comprehensive snapshot of the farm's financial health, showing
                the current state of assets, liabilities, and owner’s equity. By
                using the Financial Module, farm owners and managers can make
                well-informed decisions, ensure accurate financial reporting,
                and maintain the overall financial stability of the farm. This
                module simplifies financial management and helps users focus on
                improving productivity and profitability.
              </p> </div>
              <div className="pl-13 pt-8 flex justify-center">
                {f && (
                  <GatsbyImage
                    image={f}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>

              <br />
              <div className="glr pt-5">
                                        <TextToSpeech textSelector=".glr" />
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10">
                General Ledger Report:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 pt-5">
                <p>
                  The General Ledger is the central record of all financial
                  transactions within the farm management system. It acts as the
                  main accounting document where every transaction related to
                  the farm is recorded. Each financial entry is categorized into
                  types, such as income, expenses, assets, liabilities, and
                  equity. For example, purchases of seeds, soil testing costs,
                  or revenue from crop sales are all recorded in their
                  respective accounts within the general ledger.
                  <br />
                  <br /> It provides a detailed breakdown of every debit and
                  credit, ensuring complete transparency and traceability of all
                  financial activities. The general ledger serves as the
                  foundation for preparing other financial reports like the
                  trial balance and balance sheet. Furthermore, we have head of
                  accounts like cash, bank, inventory, accounts receivable,
                  accounts payable etc. Against every head of account is a
                  general ledger report.{" "}
                </p>
              </div></div>
              <br />
              <div className="pl-13 pt-8 flex justify-center">
                {glr && (
                  <GatsbyImage
                    image={glr}
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

export default contact;
export const Head = () => (
  <>
    <title>Financials | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
