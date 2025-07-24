import React, { useEffect, useState } from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, navigate, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PrivateRoute from "../components/Privateroute/PrivateRoute";
import { isLoggedIn } from "../utils/auth";
import TextToSpeech from "../components/TextToSpeech";

const inventory = () => {
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
      I: file(relativePath: { eq: "I.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AI: file(relativePath: { eq: "AI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AI1: file(relativePath: { eq: "AI1.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AN: file(relativePath: { eq: "AN.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AN1: file(relativePath: { eq: "AN1.png" }) {
       childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      MA: file(relativePath: { eq: "MA.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         SIN: file(relativePath: { eq: "SIN.png" }) {
       childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         DI: file(relativePath: { eq: "DI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         VI: file(relativePath: { eq: "VI.png" }) {
       childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
       
    }
  `);
  const I = getImage(data.I);
  const AI = getImage(data.AI);
  const AI1 = getImage(data.AI1);
  const AN = getImage(data.AN);
  const AN1 = getImage(data.AN1);
  const MA = getImage(data.MA);
   const SIN = getImage(data.SIN);
    const DI = getImage(data.DI);
     const VI= getImage(data.VI);
      
      
  return (
    <AppLayout>
      <PrivateRoute>
      <div>
        <div className="flex flex-col justify-center">
          <div className="content-container max-w-7xl w-full px-4 lg:px-4  text-justify">
               <TextToSpeech textSelector=".content-container" />
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat lg:pl-10 pt-5">
            Starting Guide for Inventory:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 pt-4">
            The inventory refers to the tracking and management of AIl items used on the farm, such as seeds, fertilizers, tools, and equipment. It helps farmers keep a record of the quantity, location, and condition of these items. It can AIso help monitor the cost of inputs and track their usage over time. The inventory system ensures that the farm runs smoothly, preventing shortages or excess inventory. This leads to better planning, cost savings, and improved farm productivity. It AIso AIlows for easy auditing and reporting of inventory data. 
          </p>
          <div className="pl-13 pt-8 flex justify-center">
            {I && (
              <GatsbyImage
                image={I}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>
<br/><br/>
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 1
            </h2>
            <div className="Iex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
            Add Inventory:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
            Before adding the inventory, it is necessary to add a warehouse first. If you have not added a warehouse yet, first add the warehouse. See the user guide for adding warehouse. For adding inventory:
            <br />
            <ul className="list-disc text-primary-activelink">
                <li>Enter the name of the inventory.</li>
                <li>Enter its variety.</li>
                <li>Enter the unit i.e., KG or grams</li>
                <li>Enter the barcode and SKU for the inventory item in order to uniquely identify the inventory.</li>
            <li>Choose the warehouse where the inventory will be stored.</li>
            <li>Choose the category where the inventory belongs to.</li>
            <li>Choose subcategory for exactly placing the inventory in correct rack.</li>
            <li>Specify the rack where the inventory will be placed.</li>
            <li>Enter the description about the location.</li>
            <li>Click the submit button.</li>
            <li>Inventory will be added successfully.</li>

            {AI && (
              <GatsbyImage
                image={AI}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}

            <p>By default, the inventory quantity will be zero. So, there are two ways for adding inventory:</p>
            <ol>
                <li>By directly, adding history if inventory is not to be ordered.</li>
                <li>By following the complete process by adding purchase requisition, purchase order and goods receiving note in case the inventory is too be ordered. For this process, see the details in the later section of the document.</li>
            </ol><br/>
            <p>For directly adding inventory history:</p><br/>
            <li>Click on the three dots against the inventory you want to add.</li>
            <li>Click on history button.</li>

              {AI1 && (
              <GatsbyImage
                image={AI1}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
            <li>Here you have two options:</li>
            </ul>
          
            <ul className="list-disc">
              <li>
                <span className="text-primary-pheading font-semibold">
                  Add New:
                </span>
                This option is for adding new inventory. For that:
              </li>
              <ul>
                <li>Click on “Add New” button</li>
                <li>Enter barcode.</li>
                <li>Select the warehouse where the inventory will be stored.</li>
                <li>Date when the inventory was added in the warehouse.</li>
                <li>Choose the category where the inventory belongs to.</li>
                <li>Choose subcategory for exactly placing the inventory in correct rack.</li>
                <li>Choose the product stored in the warehouse against which you are adding the inventory.</li>
                <li>Specify the rack where the inventory will be placed.</li>
                <li>Enter the product variety, choose the vendor.</li>
                <li>Enter the quantity and unit price of inventory.</li>
                <li>Enter SKU value.</li>
                <li>Choose the manufacture and expiry date if applicable.</li>
                <li>Click on “Add” button.</li>
                <li>In the similar way you can add new inventory as you new stock came.</li>
              <li>After adding inventory, click on the submit button.</li>
              <li>Inventory history will be added successfully.</li>
              </ul><br/>
               {AN && (
              <GatsbyImage
                image={AN}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
             {AN1 && (
              <GatsbyImage
                image={AN1}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
              <li>
                <span className="text-primary-pheading font-semibold">
                  ManuAI Adjustment:{" "}
                </span>
               This option is for if you found the difference between actuAI and available quantity present in warehouse. So, you can manuAIly adjust the quantity. For doing this:
              </li>
              <ul>
                <li>❖ Click on “ManuAI Adjustment” button.</li>
                <li>❖ Enter the reason, the date on which you are making manuAI adjustment, choose the rack, and the difference in the available and actuAI quantity. In case you want to lessen the inventory, enter the quantity with negative sign.</li>
                <li>❖ Click on submit button.</li>
                <li>❖ Inventory will be adjusted manuAIly successfully.</li>
              </ul><br/>
                {MA && (
              <GatsbyImage
                image={MA}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
            </ul>  
            <br/><br/>

            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Search Inventory:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              You can search the location from the list of inventories of locations
              present in the system. You can search based on either:
              <br />
              <br />
              <p>Inventory Name: You can search by the inventory name.</p>{" "}
              <p>
                Product Variety: You can search by the variety of the inventory.
              </p><br/>
              Then click on the Search button. AIso, you can click on the refresh button to refresh the data.
              <br />
               {SIN && (
              <GatsbyImage
                image={SIN}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
              
              <br/><br/>
              <div className="Iex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 3
            </h2>
            <div className="Iex-1 h-px bg-primary-line"></div></div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
                Edit Inventory:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
              If any inventory detail you want to change, you can easily edit the details of inventory but not inventory history. For that:
                <br /><br/>
                <ul className="pl-[15px] text-primary-activelink list-disc">
                  <li>
                    Click on the edit icon against the inventory you want to
                    edit.
                  </li>
                  <li>Inventory details screen will open.</li>
                  <li>Click on the fieAI1 you want to edit.</li>
                  <li>Make changes in the fieAI1s</li>
                  <li>Click on submit button.</li>
                  <li>
                    Inventory item details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <br/><br/>
              <div className="Iex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 4
            </h2>
            <div className="Iex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              Delete Inventory:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
               If you want to delete any inventory, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Click on the delete icon against the row you want to delete in the inventory’s table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>Inventory will be deleted successfully.</li>
                </ul>
              </div>
               <div className="pl-13 pt-8 Iex justify-center">
                {DI && (
                  <GatsbyImage
                    image={DI}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <br/><br/>
<h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10">
              Step 5
            </h2>
            <div className="Iex-1 h-px bg-primary-line"></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 lg:pl-10">
              View Inventory:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10">
               You can easily view the details of the inventory. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Inventory details page will open.</li>
                  <li>You can print the details of the location.</li>
                </ul>
              </div>
               <div className="pl-13 pt-8 Iex justify-center">
                {VI && (
                  <GatsbyImage
                    image={VI}
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

export default inventory;
export const Head = () => (
  <>
<title>Inventory | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)