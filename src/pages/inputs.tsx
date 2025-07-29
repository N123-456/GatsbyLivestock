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
            <div className="content-container max-w-7xl w-full px-4 lg:px-4  text-justify">
                <div className="harvest pt-5">
                                                               <TextToSpeech textSelector=".harvest" />
                <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat">
                  Inputs/Technologies:
                </h2>
             

              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal pt-5 lg:px-10">
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
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
              </div></div>
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
