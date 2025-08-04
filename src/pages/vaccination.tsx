import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, navigate, useStaticQuery } from "gatsby";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const vaccination = () => {
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
      vaccination: file(relativePath: { eq: "vaccination.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const vaccination = getImage(data.vaccination);
  return (
    <AppLayout>
      <PrivateRoute>
        <div>
          <div className="flex flex-col justify-center">
            <div className="acu lg:pr-4 text-justify">
                <div className="flex items-center pt-5">
                                <div className="hidden lg:block">
                                  <TextToSpeech textSelector=".acu" />
                                </div>
                                <h2 className="text-primary-activelink dark:text-[#FFFFFF] font-semibold text-[30px] font-montserrat ">
                                  Vaccination Center:
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
             

              <div className="text-primary-paragraph2 text-[18px] dark:text-[#D5D5D5] font-montserrat font-normal lg:px-10">
                The Vaccination Centre ensures proper management of vaccines and
                immunization tools. Options include Cabinets and Refrigerators
                for temperature-sensitive vaccines.
                <ul>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Cabinet:
                    </span>{" "}
                    Storage space for vaccines and immunization materials.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-semibold">
                      Refrigerator:
                    </span>{" "}
                    A cooling appliance used to store vaccines and immunization
                    materials.
                  </li>
                </ul>
                <div className="pl-13 pt-8 flex justify-center">
                  {vaccination && (
                    <GatsbyImage
                      image={vaccination}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
              
              <br />
            </div>
          </div>
        </div></div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default vaccination;
export const Head = () => (
  <>
    <title>Vaccination | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
