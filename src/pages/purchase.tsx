import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const purchase = () => {
  const data = useStaticQuery(graphql`
    query {
      fl: file(relativePath: { eq: "fl.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      AL: file(relativePath: { eq: "AL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      LD: file(relativePath: { eq: "LD.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      LI: file(relativePath: { eq: "LI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      MB: file(relativePath: { eq: "MB.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      UI: file(relativePath: { eq: "UI.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         SL: file(relativePath: { eq: "SL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         DL: file(relativePath: { eq: "DL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         VL: file(relativePath: { eq: "VL.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
         VL2: file(relativePath: { eq: "VL2.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const fl = getImage(data.fl);
  const AL = getImage(data.AL);
  const LD = getImage(data.LD);
  const LI = getImage(data.LI);
  const MB = getImage(data.MB);
  const UI = getImage(data.UI);
   const SL = getImage(data.SL);
const DL = getImage(data.DL);
    const VL= getImage(data.VL);
    const VL2= getImage(data.VL2);
      
  return (
    <AppLayout>
      <div>
        <div className="flex flex-col justify-center">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
           Starting Guide for Purchase Requisition:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
            A Purchase Requisition is a formal request made within an organization to acquire goods or services. It is used to request the purchase of essential items, such as seeds, fertilizers, tools, or equipment. The process typically starts when there is a need for a particular item. The requisition includes details such as the item description, quantity required, and any specifications. After this, it moves to the purchase order to initiate the purchase process. This ensures that inventory levels are maintained, and resources are procured in an organized and efficient manner. It also helps track spending and manage budgets within the farm.
          </p>
          <div className="pl-13 pt-8 flex justify-center">
            {fl && (
              <GatsbyImage
                image={fl}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>
<br/><br/>
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Add Purchase Requisition:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            For adding purchase requisition:
            <br />
            <ul className="list-disc text-primary-activelink">
                <li>Click on the “inventory” tab.</li>
                <li>On the top left, there is a tab with title “Purchase Requisition”, click on it.</li>
                <li>Click on “Add New” button.</li>
                <li>Enter the details</li>
                <li>Enter the barcode</li>
            <li>Choose the warehouse where the inventory will be stored.</li>
            <li>Date when the inventory is requested.</li>
            <li>Choose the category where the inventory belongs to.</li>
            <li>Choose subcategory for exactly placing the inventory in correct rack.</li>
            <li>Choose the product stored in the warehouse against which you are adding the inventory.</li>
            <li>Enter the product variety, choose the vendor.</li>
            <li>Enter the quantity.</li>

            {fl && (
              <GatsbyImage
                image={fl}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}<br/>
<li>Click on “Add” button.</li>
<li>In the similar way you can add new purchase requisition, as you get new stock requests.</li>
 {fl && (
              <GatsbyImage
                image={fl}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}<br/>
            </ul>  
            <br/><br/>

            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Search & Print Purchase Requisition:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
           You can search the purchase requisition from the list of purchase requisitions present in the system. You can search based on:
              <br />
              <br />
              <ul>
                <li>Requisition Number: You can search by the requisition number.</li>
                <li>Warehouse: You can search for specific purchase requisitions for specific warehouse.</li>
                <li>Requisition Date</li>
              </ul>
              <p>Then click on the Search button. Also, you can click on the refresh button to refresh the data.</p>{" "}
              <p>
            Click on the “print” icon to print the details of the purchase requisition.
              </p><br/>
            
              <br />
                <div className="pl-13 pt-8 flex justify-center">
               {fl && (
              <GatsbyImage
                image={fl}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
              </div>
             
               <div className="pl-13 pt-8 flex justify-center">
                {DL && (
                  <GatsbyImage
                    image={DL}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
             
        </div>
      </div></div></div>
    </AppLayout>
  );
};

export default purchase;
export const Head = () => (
  <>
<title>Purchase | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)