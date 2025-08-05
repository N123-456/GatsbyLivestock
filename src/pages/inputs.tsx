import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, navigate, useStaticQuery } from "gatsby";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const inputs = () => {
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
      inputs: file(relativePath: { eq: "inputs.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const inputs = getImage(data.inputs);
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
                  Inputs/Technologies:
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

              <div className="text-primary-paragraph2 dark:text-[#D5D5D5] text-[18px] font-montserrat font-normal lg:px-10">
                The Inputs/Technologies Section is designed for handling and
                storing chemicals, such as fertilizers, pesticides, weedicides,
                and application equipment, safely.
                <ul>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Fertilizer:
                    </span>
                    : Materials used to improve soil quality and help crops
                    grow.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Pesticides:
                    </span>{" "}
                    Chemicals used to protect crops from pests and insects.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Wedicides:
                    </span>{" "}
                    Chemicals to control and eliminate weeds from the farm.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Application Equipment:
                    </span>{" "}
                    Tools and machines used to apply fertilizers, pesticides,
                    and wedicides.
                  </li>
                </ul>
                <div className="pl-13 pt-8 flex justify-center">
                  {inputs && (
                    <GatsbyImage
                      image={inputs}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default inputs;
export const Head = () => (
  <>
    <title>Input/Technology | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
