import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";

const purchase = () => {
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
      PR: file(relativePath: { eq: "PR.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      APR: file(relativePath: { eq: "APR.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      APR1: file(relativePath: { eq: "APR1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }

      SPR: file(relativePath: { eq: "SPR.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      SPR1: file(relativePath: { eq: "SPR1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         po: file(relativePath: { eq: "po.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         apo: file(relativePath: { eq: "apo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         apo1: file(relativePath: { eq: "apo1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         spo: file(relativePath: { eq: "spo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         spo1: file(relativePath: { eq: "spo1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const PR = getImage(data.PR);
  const APR = getImage(data.APR);
  const APR1 = getImage(data.APR1);

  const SPR = getImage(data.SPR);
  const SPR1 = getImage(data.SPR1);

   const po = getImage(data.po);
  const apo = getImage(data.apo);
  const apo1 = getImage(data.apo1);

  const spo = getImage(data.spo);
  const spo1 = getImage(data.spo1);


  return (
    <AppLayout>
      <PrivateRoute>
      <div>
        <div className="flex flex-col justify-center">
          <div className="max-w-7xl w-full px-4 lg:px-4  text-justify">
            <h2 className="text-primary-activelink font-semibold text-[28px] font-montserrat lg:pl-10 pt-5">
              Starting Guide for Purchase Requisition:
            </h2>
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 pt-4">
              A Purchase Requisition is a formal request made within an
              organization to acquire goods or services. It is used to request
              the purchase of essential items, such as seeds, fertilizers,
              tools, or equipment. The process typically starts when there is a
              need for a particular item. The requisition includes details such
              as the item description, quantity required, and any
              specifications. After this, it moves to the purchase order to
              initiate the purchase process. This ensures that inventory levels
              are maintained, and resources are procured in an organized and
              efficient manner. It also helps track spending and manage budgets
              within the farm.
            </p>
            <div className="pl-13 pt-8 flex justify-center ">
              {PR && (
                <GatsbyImage
                  image={PR}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                Step 1
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Add Purchase Requisition:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              For adding purchase requisition:
              <br />
              <br />
              <ul className=" text-primary-paragraph2 ">
                <li>
                  Click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “inventory”{" "}
                  </span>{" "}
                  tab.
                </li>
                <li>
                  On the top left, there is a tab with title{" "}
                  <span className="text-primary-activelink font-bold">
                    “Purchase Requisition”{" "}
                  </span>
                  , click on it.
                </li>
                <li>
                  Click on{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New”{" "}
                  </span>{" "}
                  button.
                </li>
                <li>Enter the details</li>
                <li>Enter the barcode</li>
                <li>
                  Choose the warehouse where the inventory will be stored.
                </li>
                <li>Date when the inventory is requested.</li>
                <li>Choose the category where the inventory belongs to.</li>
                <li>
                  Choose subcategory for exactly placing the inventory in
                  correct rack.
                </li>
                <li>
                  Choose the product stored in the warehouse against which you
                  are adding the inventory.
                </li>
                <li>Enter the product variety, choose the vendor.</li>
                <li>Enter the quantity.</li>

                <div className="pl-13 pt-8 flex justify-center ">
                  {APR && (
                    <GatsbyImage
                      image={APR}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <li>
                  Click on{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add”{" "}
                  </span>{" "}
                  button.
                </li>
                <li>
                  In the similar way you can add new purchase requisition, as
                  you get new stock requests.
                </li>
                <div className="pl-13 pt-8 flex justify-center ">
                  {APR1 && (
                    <GatsbyImage
                      image={APR1}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
              </ul>
              <br />
              <br />
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                Search & Print Purchase Requisition:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                You can search the purchase requisition from the list of
                purchase requisitions present in the system. You can search
                based on:
                <br />
                <br />
                <ul>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Requisition Number:
                    </span>{" "}
                    You can search by the requisition number.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Warehouse:
                    </span>{" "}
                    You can search for specific purchase requisitions for
                    specific warehouse.
                  </li>
                  <br />
                  <li>Requisition Date</li>
                </ul>
                <p>
                  Then click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Search”{" "}
                  </span>{" "}
                  button. Also, you can click on the refresh button to refresh
                  the data.
                </p>{" "}
                <p>
                  Click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Print”{" "}
                  </span>{" "}
                  icon to print the details of the purchase requisition.
                </p>
                <br />
                <br />
                <div className="pl-13 pt-8 flex justify-center">
                  {SPR && (
                    <GatsbyImage
                      image={SPR}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <div className="pl-13 pt-8 flex justify-center">
                  {SPR1 && (
                    <GatsbyImage
                      image={SPR1}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="flex flex-col justify-center">
          <div className="max-w-7xl w-full px-4 lg:px-4  text-justify">
            <h2 className="text-primary-activelink font-semibold text-[28px] font-montserrat lg:pl-10 pt-5">
              Starting Guide for Purchase Order:
            </h2>
            <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 pt-4">
              A Purchase Order (PO) is a formal document issued by a buyer to a supplier, indicating the intent to purchase specific goods or services. A purchase order is created after the purchase requisition has been created. The supplier confirms the order. The purchase order serves as a legal agreement between the farm and the supplier. It helps track and manage farm purchases, monitor inventory, and maintain accurate financial records.
            </p>
            <div className="pl-13 pt-8 flex justify-center ">
              {po && (
                <GatsbyImage
                  image={po}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <br />
            <br />
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                Step 1
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Add Purchase Order:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              For adding purchase Order:
              <br />
              <br />
              <ul className=" text-primary-paragraph2 ">
                <li>
                  Click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “inventory”{" "}
                  </span>{" "}
                  tab.
                </li>
                <li>
                  On the top left, there is a tab with title{" "}
                  <span className="text-primary-activelink font-bold">
                    “Purchase Order”{" "}
                  </span>
                  , click on it.
                </li>
                <li>
                  Click on{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add New”{" "}
                  </span>{" "}
                  button.
                </li>
                <li>Enter the details</li>
                <li>Enter the barcode</li>
                <li>
                  Choose the warehouse where the inventory will be stored.
                </li>
                <li>Date when the inventory was added in the warehouse.</li>
                <li>Additionally, you can check the box, receive by purchase requisition to automatically add the purchase order against that requisition. Choose the requisition number against which you want to add purchase order. You can edit the details.</li>
                <li>
                If not automatic creation of purchase order by purchase requisition, then choose the category where the inventory belongs to.
                </li>
                <li>
                 Choose subcategory for exactly placing the inventory in correct rack.
                </li>
                <li>Choose the product stored in the warehouse against which you are adding the inventory.</li>
                <li>Enter the product variety, choose the vendor.</li>
                <li>Enter the quantity and unit price of inventory.</li>

                <div className="pl-13 pt-8 flex justify-center ">
                  {apo && (
                    <GatsbyImage
                      image={apo}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
                <li>
                  Click on{" "}
                  <span className="text-primary-activelink font-bold">
                    “Add”{" "}
                  </span>{" "}
                  button.
                </li>
                <li>
                  In the similar way you can add new purchase order, as
                  new requisition came.
                </li>
                <li>After adding purchase order, click on the submit button</li>
                <li>Purchase order will be added successfully.</li><br/>
                <div className="pl-13 pt-8 flex justify-center ">
                  {apo1 && (
                    <GatsbyImage
                      image={apo1}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <br />
              </ul>
              <br />
              <br />
              <div className="flex items-center pt-5 space-x-4">
                <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
                  Step 2
                </h2>
                <div className="flex-1 h-px bg-primary-line"></div>
              </div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                Search & Print Purchase Order:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
                You can search the purchase order from the list of
                purchase order present in the system. You can search
                based on:
                <br />
                <br />
                <ul>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Purchase Order Number:
                    </span>{" "}
                    You can search by the purchase order number.
                  </li>
                  <li>
                    <span className="text-primary-pheading font-bold">
                      Warehouse:
                    </span>{" "}
                    You can search for specific purchase requisitions for
                    specific warehouse.
                  </li>
                  <br />
                  <li>Purchase order Date</li>
                </ul>
                <p>
                  Then click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Search”{" "}
                  </span>{" "}
                  button. Also, you can click on the refresh button to refresh
                  the data.
                </p>{" "}
                <p>
                  Click on the{" "}
                  <span className="text-primary-activelink font-bold">
                    “Print”{" "}
                  </span>{" "}
                  icon to print the details of the purchase order.
                </p>
                <br />
                <br />
                <div className="pl-13 pt-8 flex justify-center">
                  {spo && (
                    <GatsbyImage
                      image={spo}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
                <div className="pl-13 pt-8 flex justify-center">
                  {spo1 && (
                    <GatsbyImage
                      image={spo1}
                      alt="Startups illustration"
                      className="bg-white w-[1000.58px] "
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </PrivateRoute>
    </AppLayout>
  );
};

export default purchase;
export const Head = () => (
  <>
    <title>Purchase | Farm Management System</title>
    <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
  </>
);
