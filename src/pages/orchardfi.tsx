import React from "react";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { AppLayout } from "../components/AppShell/AppLayout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import TextToSpeech from "../components/TextToSpeech";
import { readSessionStorageValue } from "@mantine/hooks";

const orchardfi = () => {
  const data = useStaticQuery(graphql`
    query {
      fie: file(relativePath: { eq: "fie.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ph: file(relativePath: { eq: "ph.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      wi: file(relativePath: { eq: "wi.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      finan: file(relativePath: { eq: "finan.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ao: file(relativePath: { eq: "ao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      gtp: file(relativePath: { eq: "gtp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      sfo: file(relativePath: { eq: "sfo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dtot: file(relativePath: { eq: "dtot.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vttoao: file(relativePath: { eq: "vttoao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }

      submit: file(relativePath: { eq: "submit.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      qap: file(relativePath: { eq: "qap.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      apqp: file(relativePath: { eq: "ps.apqp" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      inven: file(relativePath: { eq: "ao.inven" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ain: file(relativePath: { eq: "ain.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      submit: file(relativePath: { eq: "submit.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      ma: file(relativePath: { eq: "ma.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      rs: file(relativePath: { eq: "rs.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }

      ps: file(relativePath: { eq: "ps.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      gtp: file(relativePath: { eq: "gtp.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dao: file(relativePath: { eq: "dao.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      db: file(relativePath: { eq: "db.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      few: file(relativePath: { eq: "few.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      toto: file(relativePath: { eq: "toto.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const fie = getImage(data.fie);
  const ph = getImage(data.ph);
  const wi = getImage(data.wi);
  const ps = getImage(data.ps);
  const gtp = getImage(data.gtp);
  const sfo = getImage(data.sfo);
  const finan = getImage(data.finan);
  const vttoao = getImage(data.vttoao);

  const apqp = getImage(data.apqp);
  const inven = getImage(data.inven);
  const ain = getImage(data.submit);
  const submit = getImage(data.vo);
  const ma = getImage(data.ma);
  const rs = getImage(data.rs);
  const db = getImage(data.db);
  const ao = getImage(data.ao);
  const few = getImage(data.few);
  const toto = getImage(data.toto);
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
                <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                  Starting Guide for Chemical:
                </h2>
              </div>
              <div className="flex items-center pt-5">
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat  dark:text-primary-pheading font-bold lg:pl-10">
                  Introduction
                </h2>
                <div className=" lg:hidden">
                  <TextToSpeech textSelector=".acu" />
                </div>
              </div>

              <div className="lg:pl-10">
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  is used to monitor and evaluate the condition of the crop
                  during the growing process.
                </p>
                <p className="mb-4">
                  It involves checking the health of plants, identifying pests,
                  diseases, or nutrient deficiencies, and assessing overall
                  field conditions. Regular inspections help ensure timely
                  actions such as applying fertilizers, pesticides, or
                  irrigation when needed.
                </p>
                <p className="mb-4">
                  This section allows farmers to keep track of observations,
                  make informed decisions, and improve crop health and yield. By
                  conducting{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspections
                  </span>
                  , farmers can address potential issues early and ensure better
                  productivity and farm management.
                </p>
                <p className="mb-4">
                  A{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  is conducted separately against a specific crop.
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 1
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Adding a Field Inspection
                </h2>
                <p className="mb-4">
                  If you want to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  to an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , you must make sure that there are a few things you need
                  ready and set up:
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    A{" "}
                    <span className="text-primary-activelink font-bold">
                      Vendor
                    </span>{" "}
                    contact that is a{" "}
                    <span className="text-primary-pheading font-bold">
                      field inspection specialist
                    </span>{" "}
                    (Learn how to set it up).
                  </li>
                </ul>
                <p className="mb-4">
                  Now that we have all the required assets for the farm we need
                  to add a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry for our{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , we begin by:
                </p>
                <p className="mb-4">
                  First, you need to go to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  you want to add the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  to.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You start by selecting the{" "}
                    <span className="font-bold">“three dots”</span> icon [shown
                    as <span className="font-bold">“⋮”</span> icon], located at
                    the right-side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to add{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    to.
                  </li>
                  <li className="mb-2">
                    A small window will appear containing a list of buttons.
                  </li>
                  <li className="mb-2">
                    Select the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    located as the sixth option, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button in the list.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . It should look like this:
                </p>
                <p className="mb-4">
                  From here, you can continue on adding the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now, click on the{" "}
                  <span className="font-bold">“’+’ Add Field Inspection”</span>{" "}
                  button, located at the top-left corner of the page, to the
                  right of the{" "}
                  <span className="font-bold">“Download Table”</span> button and
                  above the <span className="font-bold">search options</span>.
                </p>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Field Inspection”
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  All the fields within this page are required to be filled. So
                  please make sure to not skip any fields.
                </p>
                <p className="mb-4">
                  Let’s go through the steps and their fields of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add Field Inspection”
                  </span>{" "}
                  page:
                </p>
                <p className="mb-4">
                  The first step that we will cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  step:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {fie && (
                    <GatsbyImage
                      image={fie}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  step is where you enter the Date and Time of when the
                  inspection happened, the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Scout’s
                  </span>{" "}
                  name, and the purpose of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Date & Time”
                    </span>{" "}
                    field: Enter in the Date and Time of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    when it was conducted.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “FieldScout Name”
                    </span>{" "}
                    field: Enter in the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Scout
                    </span>{" "}
                    who conducted the Inspection.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Purpose of Field Inspection”
                    </span>{" "}
                    field: Enter in a small name for what the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    looked for.
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the required fields are filled properly
                  before continuing.
                </p>
                <p className="mb-4">
                  The second step that we will cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Plant Health”
                  </span>{" "}
                  step:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {ph && (
                    <GatsbyImage
                      image={ph}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Plant Health”
                  </span>{" "}
                  step is where you can enter the state of the crops during the
                  Inspection, such as the pest health on the plant, whether
                  there are diseases on the plant, and the weed count near the
                  crops.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Pest Damage”
                    </span>{" "}
                    field: Enter in the amount of Pest Damage that was found
                    during the Inspection. Choose 1 of 2 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Low
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          High
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Plant Health”
                    </span>{" "}
                    field: Enter in the health of the crops that was found
                    during the Inspection. Choose 1 of 3 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Highly Infested
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Infested
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Low
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Weed”
                    </span>{" "}
                    field: Enter in the weed situation of your crops that was
                    found during the Inspection. Choose 1 of 3 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          None
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Less
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the required fields are filled properly
                  before continuing.
                </p>
                <p className="mb-4">
                  The third step that we will cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Weather Impact”
                  </span>{" "}
                  step:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {wi && (
                    <GatsbyImage
                      image={wi}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Weather Impact”
                  </span>{" "}
                  step is where you can enter the state of the weather on the
                  farm and on the crops during the Inspection, such as the Heat
                  wave, Rainfall, Wind Effect, Smog, Hail Storm, and Frost
                  effects on the Crops.
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Heat Wave”
                    </span>{" "}
                    field: Enter in the amount of heat shown during a heatwave
                    that was on the farm during the Inspection. Choose 1 of 3
                    options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Rainfall”
                    </span>{" "}
                    field: Enter in the amount of rain shown during a Rainfall
                    that was on the farm during the Inspection. Choose 1 of 3
                    options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Wind Effect”
                    </span>{" "}
                    field: Enter in the wind speed shown that was on the farm
                    during the Inspection. Choose 1 of 3 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Smog”
                    </span>{" "}
                    field: Enter in the amount of smog that was on the farm
                    during the Inspection. Choose 1 of 3 options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Hail Storm”
                    </span>{" "}
                    field: Enter in the amount of hail shown during a Hail Storm
                    that was on the farm during the Inspection. Choose 1 of 3
                    options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Frost”
                    </span>{" "}
                    field: Enter in the amount of frost shown during a Rainfall
                    that was on the farm during the Inspection. Choose 1 of 3
                    options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Minor
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Moderate
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Severe
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the required fields are filled properly
                  before continuing.
                </p>
                <p className="mb-4">
                  The fourth step that we are going to cover is the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Financial”
                  </span>{" "}
                  step:
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {finan && (
                    <GatsbyImage
                      image={finan}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  The{" "}
                  <span className="text-primary-activelink font-bold">
                    “Financial”
                  </span>{" "}
                  step is where you can enter the required fields for financial
                  information, regarding the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>
                  .
                </p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cost of Field Inspection”
                    </span>{" "}
                    field: Enter in the cost of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    that was conducted by the{" "}
                    <span className="text-primary-activelink font-bold">
                      FieldScout
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Head of Accounts”
                    </span>{" "}
                    field: Enter in the form at which the transaction was made
                    for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>
                    . You can choose between two options:
                    <ul className="list-disc ml-6 mt-2">
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Payable
                        </span>
                      </li>
                      <li>
                        <span className="text-primary-pheading font-bold">
                          Account Receivable
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Cheque No. / Transaction ID”
                    </span>{" "}
                    field: Enter in the Cheque No. or the Transaction ID of the
                    purchase by the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Vendor”
                    </span>{" "}
                    field: Enter in the{" "}
                    <span className="text-primary-activelink font-bold">
                      vendor
                    </span>{" "}
                    that has been hired for the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Mark Area”
                    </span>{" "}
                    field: Enter in what area on the farm location was the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    conducted on. It will open a map window where you can put in
                    map points and edit them. Provided below are steps on how to
                    approach the{" "}
                    <span className="text-primary-activelink font-bold">
                      mark area
                    </span>{" "}
                    feature.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {ma && (
                      <GatsbyImage
                        image={ma}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ul>
                <p className="mb-4">
                  When you select the{" "}
                  <span className="font-bold">“Mark Area”</span> button, a
                  satellite imagery map window will open.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    In the map, you can see the farm location the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    is located on, marked with a red dotted outline.
                  </li>
                  <li className="mb-2">
                    Mark the boundaries of your farm location, by clicking and
                    placing points on the map.
                  </li>
                  <li className="mb-2">
                    A red shape will be drawn on the top of the field you want
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    to be conducted on.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {rs && (
                      <GatsbyImage
                        image={rs}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    After the boundaries are marked, click on the{" "}
                    <span className="font-bold">“Save”</span> button. You will
                    then be taken back to the edit page with the{" "}
                    <span className="text-primary-activelink font-bold">
                      mark area
                    </span>{" "}
                    button, having double tick mark next to it.
                  </li>
                </ol>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Description”
                    </span>{" "}
                    field: Enter in any additional information about the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>
                    , such as the more detailed inspection notes, any required
                    steps that need to be taken for the farm.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Drop Images here”
                    </span>{" "}
                    field: Enter in any additional images that are provided that
                    are a part of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>
                    .
                  </li>
                </ul>
                <p className="mb-4">
                  Please make sure all the required fields are filled properly
                  before continuing.
                </p>
                <p className="mb-4">
                  Once you have filled in all the required fields, then you can
                  click the <span className="font-bold">“Submit”</span> button.
                </p>
                <div className="pl-13 pt-8 flex justify-center">
                  {submit && (
                    <GatsbyImage
                      image={submit}
                      alt="Startups illustration"
                      className="border border-gray-200 shadow-lg w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <br />
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  page to show you that you have added your{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  to the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard’s Field Inspections Table
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have added a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , let us now cover the features related to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  page.
                </p>

                <h2 className="text-2xl font-semibold mb-3 text-primary-activelink font-bold">
                  Features of the Field Inspection Dashboard
                </h2>
                <p className="mb-4">
                  There are a variety of features within the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection Dashboard
                  </span>
                  . Each one is made to assist you in looking for the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  you had placed with the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  . We will first cover how to browse the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection Dashboard
                  </span>
                  .
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Browsing within the Field Inspection
                </h3>
                <p className="mb-4">
                  You can browse through the table of the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  you want using the{" "}
                  <span className="font-bold">pages options</span>.
                </p>
                <p className="mb-4">
                  Let’s show you how to use the{" "}
                  <span className="font-bold">pages options</span>:
                </p>
                <p className="mb-4">
                  The <span className="font-bold">page options</span> are
                  located below the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection table
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here you can see the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Total number of records”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Records per page option”
                  </span>
                  , the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Page select”
                  </span>
                  , and the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Go to page search”
                  </span>
                  .
                </p>
                <p className="mb-4">Let’s go through them one by one:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    : This shows a number of how many{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspections
                    </span>{" "}
                    are there in the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected. It is located below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspections table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is on the bottom left of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page option
                    </span>
                    : This opens a menu where you can select how many{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    entries you want to see in one page. The default is set to
                    5. The options are 5, 10, 50, and 100. It is located below
                    the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspections table
                    </span>
                    , above the{" "}
                    <span className="font-bold">page select options</span>, and
                    is to the bottom right of the page.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      Page select options
                    </span>
                    : It shows which page you are currently in (The default is
                    the 1st page). It gives you buttons for the next five pages
                    after which it gives you the button to the last page. You
                    can move to the previous page using the left arrow button,
                    located on the left side, or to the next page using the
                    right arrow button located on the right side. It is located
                    below the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection’s table
                    </span>
                    , the{" "}
                    <span className="text-primary-activelink font-bold">
                      Total number of records
                    </span>
                    , and the{" "}
                    <span className="text-primary-activelink font-bold">
                      Records per page
                    </span>
                    , and is on the bottom middle of the page.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {ps && (
                      <GatsbyImage
                        image={ps}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg"
                      />
                    )}
                  </div>
                  <br />
                  <br />
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Go to page” search
                    </span>
                    : You can type a page number of where the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    you are looking for is and hit enter. It will then open the
                    page with the page number shown as well.
                  </li>
                  <div className="pl-13 pt-8 flex justify-center">
                    {gtp && (
                      <GatsbyImage
                        image={gtp}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg"
                      />
                    )}
                  </div>
                  <br />
                  <br />
                </ul>
                <p className="mb-4">
                  You can use the{" "}
                  <span className="font-bold">page options</span> as a way of
                  finding a{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  or a collection of{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspections
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Now that we have covered how to browse, let’s show another way
                  you can find a{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  you are looking for.
                </p>
                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 2
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Searching within the Field Inspection
                </h3>
                <p className="mb-4">
                  You can search for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  of an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  , as long as you know the name of the{" "}
                  <span className="text-primary-activelink font-bold">
                    FieldScout
                  </span>{" "}
                  or when the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  was conducted. You can start by:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and search the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspections”
                    </span>{" "}
                    Page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Then, find the{" "}
                  <span className="text-primary-activelink font-bold">
                    search options
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspections”
                  </span>{" "}
                  page. It is located under the{" "}
                  <span className="font-bold">“’+’ Add Field Inspection”</span>{" "}
                  button and the{" "}
                  <span className="font-bold">“Download Table”</span> button.
                </p>
                <p className="mb-4">
                  Provided below is where the{" "}
                  <span className="text-primary-activelink font-bold">
                    search options
                  </span>{" "}
                  are:
                </p>
                <p className="mb-4">You can only search based on:</p>
                <ul className="list-disc ml-6 mb-4">
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Search by FieldScout Name”
                    </span>{" "}
                    search: Enter the name of the{" "}
                    <span className="text-primary-activelink font-bold">
                      FieldScout
                    </span>{" "}
                    that conducted the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    on the crops, that is within the table.
                  </li>
                  <li className="mb-2">
                    The{" "}
                    <span className="text-primary-activelink font-bold">
                      “Select Date Range of Scouting”
                    </span>{" "}
                    search: Enter a date range of when the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    was conducted on the crops, that is within the table.
                  </li>
                </ul>
                <p className="mb-4">
                  Then click on the <span className="font-bold">“Search”</span>{" "}
                  button, located on the far-right of the page, to the left of
                  the <span className="font-bold">“Refresh data”</span> button.
                </p>
                <p className="mb-4">
                  You will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspections table
                  </span>{" "}
                  update with only the search results you typed in the search
                  bars.
                </p>
                <p className="mb-4">
                  Also, you can click on the{" "}
                  <span className="font-bold">“Refresh data”</span> button to
                  refresh the data. It is highlighted as a red button with an{" "}
                  <span className="text-primary-pheading font-bold">
                    “arrow pointing back”
                  </span>{" "}
                  icon.
                </p>
                <p className="mb-4">
                  You can use the search function to find for a specific{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>{" "}
                  or to filter the table for a specific result.
                </p>
                <p className="mb-4">
                  Now that we have covered how to search and filter through the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspections table
                  </span>
                  , let us now show how to download the table of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>
                  .
                </p>

                <div className="flex items-center pt-5 space-x-4">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px]  dark:text-primary-pheading font-bold">
                    Step 3
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading the Field Inspection Table
                </h3>
                <p className="mb-4">
                  You can download the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection table
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  page. As long as the filtered table shows any results or the
                  table is shown in its complete form, you can then use this
                  feature.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and download the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    table from. A small white box will show up with a list of
                    options you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    You can then adjust the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspections table
                    </span>{" "}
                    using the{" "}
                    <span className="text-primary-activelink font-bold">
                      search options
                    </span>{" "}
                    to filter the table for specific results or you can increase
                    the count of the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Records per page”
                    </span>{" "}
                    to show more results of{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspections
                    </span>{" "}
                    associated to the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    .
                  </li>
                  <li className="mb-2">
                    When you are ready to download the table as you see fit,
                    select the{" "}
                    <span className="font-bold">“Download Table”</span> button,
                    located at the top of the page, above the{" "}
                    <span className="text-primary-activelink font-bold">
                      search options
                    </span>{" "}
                    and to the right of the{" "}
                    <span className="font-bold">
                      “’+’ Add Field Inspection”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  Once you select it, it will open a file explorer window,
                  asking where to put the file in.
                </p>
                <p className="mb-4">
                  This file will contain only the{" "}
                  <span className="text-primary-activelink font-bold">
                    Table
                  </span>{" "}
                  in the page that is being currently seen (default is page 1).
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="font-bold">“Save”</span>{" "}
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
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 4
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Viewing a Field Inspection
                </h3>
                <p className="mb-4">
                  You can view the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry and see its details as well as perform actions on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Harvest
                  </span>{" "}
                  within the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Here is how you can view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry in an{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>
                  :
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspections”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  Here are 2 methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry in{" "}
                  <span className="text-primary-pheading font-bold">FMS</span>:
                </p>
                <p className="mb-4">
                  The first method to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry in the table, is just by selecting the{" "}
                  <span className="text-primary-activelink font-bold">ID</span>{" "}
                  or the{" "}
                  <span className="text-primary-activelink font-bold">
                    FieldScout name
                  </span>{" "}
                  of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  you want to check out.
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    You can select the{" "}
                    <span className="text-primary-activelink font-bold">
                      ID
                    </span>{" "}
                    or the{" "}
                    <span className="text-primary-activelink font-bold">
                      FieldScout name
                    </span>{" "}
                    of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you want to view.
                  </li>
                  <li className="mb-2">
                    You will then be taken to a{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  The second method to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry in the table, is just by selecting the{" "}
                  <span className="font-bold">“more options”</span> icon, then
                  selecting the <span className="font-bold">“view”</span> button
                  in the menu that shows:
                </p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>],
                    located on the right side of the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    you wish to view.
                  </li>
                  <li className="mb-2">
                    You will then see the{" "}
                    <span className="text-primary-activelink font-bold">
                      “extra options”
                    </span>{" "}
                    menu show.
                  </li>
                  <li className="mb-2">
                    Select the <span className="font-bold">“View”</span> button,
                    located at the top of the list in the menu.
                  </li>
                  <li className="mb-2">
                    You will then be taken to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you selected.
                  </li>
                </ol>
                <p className="mb-4">
                  These are the two methods to viewing a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry. Both do not have any differences in what details they
                  show.
                </p>
                <p className="mb-4">
                  You can also download, delete, and edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry you are viewing from the options listed above.
                </p>
                <p className="mb-4">
                  Now that we have covered how to view a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry, we can now cover how to edit a{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  from the{" "}
                  <span className="text-primary-pheading font-bold">
                    Farm Management System
                  </span>
                  .
                </p>

                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 5
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Editing a Field Inspection
                </h3>
                <p className="mb-4">
                  Within the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Field Inspection”
                  </span>{" "}
                  page, you can edit the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  details shown on the page.
                </p>
                <p className="mb-4">You can do so by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and edit a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspections”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you wish to edit the details of, either by browsing for it
                    or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    that you want to edit.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you want to edit, you can then select the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button, located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span> button and
                    to the left of the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Edit Field Inspection”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>
                  .
                </p>
                <p className="mb-4">
                  From here, you can edit any details of the{" "}
                  <span className="text-primary-activelink font-bold">
                    field inspection
                  </span>
                  .
                </p>
                <p className="mb-4">
                  Once you have made your changes and edits, you can then select
                  the <span className="font-bold">“Submit”</span> button.
                </p>
                <p className="mb-4">
                  It will then take you back to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Field Inspection”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  you edited so you can review your changes and edits.
                </p>
                <p className="mb-4">
                  Now, let’s check out the next feature on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Field Inspection”
                  </span>{" "}
                  page, the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Download”
                  </span>{" "}
                  feature.
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 6
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Downloading a Field Inspection
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Field Inspection”
                  </span>{" "}
                  page you can choose to download a PDF file that contains the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  details and how much is being used on the farm.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and download a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you wish to download the details of, either by browsing for
                    it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      harvest
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    that you want to download.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you want to download the details of, you can then select the{" "}
                    <span className="font-bold">“Download”</span> button located
                    at the top-right corner of the page, above both the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button and the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  It will then open a file explorer window, asking you where to
                  download the PDF file:
                </p>
                <p className="mb-4">
                  This file will contain the details shown on the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  page.
                </p>
                <p className="mb-4">
                  Here is an example of what it could look like:
                </p>
                <p className="mb-4">
                  When you have found a suitable place for your PDF file, then
                  you can press the <span className="font-bold">“Save”</span>{" "}
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
                <p className="mb-4">
                  Provided below is an example of what it should look like:
                </p>
                <div className="flex items-center pt-5 space-x-4 ">
                  <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] dark:text-primary-pheading font-bold">
                    Step 7
                  </h2>
                  <div className="flex-1 h-px bg-primary-line"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-activelink font-bold">
                  Deleting a Field Inspection
                </h3>
                <p className="mb-4">
                  From the{" "}
                  <span className="text-primary-activelink font-bold">
                    “View Field Inspection”
                  </span>{" "}
                  page, you can also delete the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspections
                  </span>{" "}
                  entry from the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  and make it so that{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  is not part of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  anymore.
                </p>
                <p className="mb-4">You can start by:</p>
                <ol className="list-decimal ml-6 mb-4">
                  <li className="mb-2">
                    First, hovering on the{" "}
                    <span className="font-bold">“Three dots”</span> icon button
                    [It’ll look like this <span className="font-bold">“⋮“</span>
                    ] located to the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you want to view and delete a{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspection”
                    </span>{" "}
                    of. A small white box will show up with a list of options
                    you can go to.
                  </li>
                  <li className="mb-2">
                    Select on the{" "}
                    <span className="font-bold">“Field Inspection”</span> button
                    which will be the sixth button in the list, below the{" "}
                    <span className="font-bold">“Harvest”</span> button and
                    above the{" "}
                    <span className="font-bold">“Sale After Storage”</span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “Field Inspections”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Next, locate the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    you wish to delete from the{" "}
                    <span className="text-primary-activelink font-bold">
                      Orchard
                    </span>
                    , either by browsing for it or searching for it.
                  </li>
                  <li className="mb-2">
                    Once you find the{" "}
                    <span className="text-primary-activelink font-bold">
                      field inspection
                    </span>{" "}
                    that you want to view the details of, please select the{" "}
                    <span className="font-bold">“three dots”</span> icon [It’ll
                    look like this <span className="font-bold">“⋮“</span>] on
                    the right of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    that you want to view.
                  </li>
                  <li className="mb-2">
                    Then, a small white box will show with the{" "}
                    <span className="font-bold">“view”</span> button inside it.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“view”</span> button,
                    it will then take you to the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you selected.
                  </li>
                  <li className="mb-2">
                    Once you are on the{" "}
                    <span className="text-primary-activelink font-bold">
                      “View Field Inspection”
                    </span>{" "}
                    page of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    you want to delete, you can then select the{" "}
                    <span className="font-bold">
                      “Delete [shown as a trashcan icon]”
                    </span>{" "}
                    button located at the top-right corner of the page, below
                    the <span className="font-bold">“Download”</span> button and
                    to the right of the{" "}
                    <span className="font-bold">
                      “Edit [shown as a pencil icon]”
                    </span>{" "}
                    button.
                  </li>
                  <li className="mb-2">
                    It will then open a dialogue box, to ask if you want to
                    confirm your deletion of the{" "}
                    <span className="text-primary-activelink font-bold">
                      Field Inspection
                    </span>{" "}
                    entry.
                  </li>
                  <li className="mb-2">
                    Click the <span className="font-bold">“Delete”</span>{" "}
                    button.
                  </li>
                </ol>
                <p className="mb-4">
                  You will then be taken to the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspections”
                  </span>{" "}
                  page of the{" "}
                  <span className="text-primary-activelink font-bold">
                    Orchard
                  </span>{" "}
                  where you will see the{" "}
                  <span className="text-primary-activelink font-bold">
                    Field Inspection
                  </span>{" "}
                  entry deleted from the table.
                </p>
                <p className="mb-4">
                  Now that you have seen all the parts of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Field Inspection”
                  </span>{" "}
                  section of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
                  </span>{" "}
                  page, next we are going to cover the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Sale After Storage”
                  </span>{" "}
                  section of the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Orchard”
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

export default orchardfi;
export const Head = () => (
  <>
    <title>Orchard Field Inspection | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
