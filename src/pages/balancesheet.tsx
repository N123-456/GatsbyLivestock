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
            <div className="acu max-w-7xl w-full px-4 lg:px-4  text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector=".acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat ">
                  Balance Sheet:
                </h2>
              </div>
              <div className="flex items-center pt-5 ">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <div className="text-primary-paragraph2 text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                The Balance Sheet is a critical financial report that provides a
                snapshot of the farm’s financial position at a specific point in
                time. It shows the relationship between the farm's assets (what
                the farm owns), liabilities (what the farm owes), and owner’s
                equity (the owner's investment).
                <br />
                <p>
                  The balance sheet follows the accounting equation: Assets =
                  Liabilities + Owner’s Equity
                </p>
                <br />
                <ul className="list-disc dark:text-[#D5D5D5]">
                  <li>
                    <p>
                      Assets include items such as land, buildings, machinery,
                      livestock, and inventory like seeds and fertilizers.
                    </p>
                  </li>
                  <li>
                    <p>
                      Liabilities refer to debts and obligations, such as loans,
                      unpaid bills, or accounts payable.
                    </p>
                  </li>
                  <li>
                    <p>
                      Owner’s Equity represents the owner’s investment in the
                      farm plus retained earnings (profits).
                    </p>
                  </li>

                  <br />
                  <p>
                    For example, if the farm owns equipment worth Rs. 10,000,000
                    (asset) but has an outstanding loan of Rs. 4,000,000
                    (liability), the owner’s equity would be Rs. 6,000,000. The
                    balance sheet helps determine the farm's financial health by
                    showing whether its assets outweigh its liabilities.
                  </p>
                  <br />
                  <div className="pl-13 pt-8 flex justify-center">
                    {bs && (
                      <GatsbyImage
                        image={bs}
                        alt="Startups illustration"
                        className="bg-white w-[1000.58px] "
                      />
                    )}
                  </div>
                </ul>
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
