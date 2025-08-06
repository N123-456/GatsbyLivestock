import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, navigate, useStaticQuery } from "gatsby";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

const feed = () => {
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
      feed: file(relativePath: { eq: "feed.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      feed1: file(relativePath: { eq: "feed1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const feed = getImage(data.feed);
  const feed1 = getImage(data.feed1);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div id='acu' className="lg:pr-4 text-justify">
              <div className="flex items-center pt-5">
                <div className="hidden lg:block">
                  <TextToSpeech textSelector="acu" />
                </div>
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Feed/Forage:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector="acu" />
                </div>
              </div>

              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                The Feed/Forage Section is used for storing harvested crops and
                animal feed. It ensures optimal conditions for storage to
                prevent spoilage and loss.{" "}
                <ul>
                  {" "}
                  <br />
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Animal Feed:
                    </span>{" "}
                    Food provided to livestock for their nutrition.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Harvest:
                    </span>{" "}
                    The yield collected from crops.
                  </li>
                </ul>
                <div className="pl-13 pt-8 flex justify-center">
                  {feed && (
                    <GatsbyImage
                      image={feed}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <ul>
                  <li>
                    Choose the storage option where you want to add racks.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {feed1 && (
                      <GatsbyImage
                        image={feed1}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />

                  <li>
                    After choosing the option, start adding racks for storing
                    different inventory items.
                  </li>
                  <li>
                    Click on{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Add More"
                    </span>{" "}
                    button.
                  </li>
                  <li>
                    Add rack name (e.g. Rack 1), rack capacity (e.g. 100), unit
                    (e.g. bags), and description (e.g. This rack contains
                    fertilizers with a capacity of 100 bags) of the rack. You
                    can add as many racks as per your requirement by clicking{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "Add More"{" "}
                    </span>
                    button. In the similar way if you want to remove any rack,
                    click on the{" "}
                    <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      "remove"{" "}
                    </span>{" "}
                    button.
                  </li>
                  <li>
                    After adding all the racks for different portions, click on
                    the submit button.
                  </li>
                  <li>Warehouse will be added successfully.</li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default feed;

export const Head = () => (
  <>
    <title>Feed | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
