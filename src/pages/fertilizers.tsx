import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const fertilizers = () => {
  const data = useStaticQuery(graphql`
    query {
      listview: file(relativePath: { eq: "listview.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      cview: file(relativePath: { eq: "cview.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      addtask: file(relativePath: { eq: "addtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      stask: file(relativePath: { eq: "stask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      dtask: file(relativePath: { eq: "dtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      vtask: file(relativePath: { eq: "vtask.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);
  const listview = getImage(data.listview);
  const cview = getImage(data.cview);
  const addtask = getImage(data.addtask);
  const stask = getImage(data.stask);
  const dtask = getImage(data.dtask);
  const vtask = getImage(data.vtask);
  return (
    <AppLayout>
      <div>
        <div className="flex flex-col ">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
          Starting Guide for Fertilizer:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
           Fertilizers are substances added to soil or plants to provide essential nutrients that promote healthy growth and increase crop yield. They supply key nutrients like nitrogen, phosphorus, and potassium, which plants need for development. Fertilizers can be organic (e.g., compost, manure) or chemical-based, depending on the farm's needs. Proper use of fertilizers improves soil fertility, strengthens plants, and ensures better quality produce. It is important to apply the right type and amount of fertilizer to avoid harming crops or the environment. In the fertilizers tab, you will add the fertilizer applied to a specific crop.  
          </p>
          <div className="pl-13 pt-8 flex justify-center">
            {listview && (
              <GatsbyImage
                image={listview}
                alt="Startups illustration"
                className="bg-white w-[1000.58px] "
              />
            )}
          </div>

          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Add Fertilizer:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding fertilizer:</p>
            <br />
            <br />▪ Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Planting"
            </span>
            tab.
            <br />
            <p>▪Click on three dots against the crop you want to add fertilizer data.</p>
            <p>o Choose Fertilizer from the options.</p>
            <p>o Click on “Add Fertilizer” button.</p>
            <p>o Enter the required details as follows:</p>
            <ul>
                <li>▪ Enter the product details including product name, fertilizer type from the available types, brand of the fertilizer, when was the fertilizer applied to the crop, and how was the fertilizer applied i.e., the application method.</li>
                <li>▪ Now enter the usage details:</li>
                <ul>
                    <li>❖ If the fertilizer you applied was taken from the inventory, choose the option “inventory”.</li>
                    <li>❖ Choose the inventory. </li>
                    <li>❖ After choosing the inventory, available quantity of the inventory will be automatically shown. Enter the quantity from the available quantity that was used. The quantity cannot exceed the available quantity.</li>
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <li>❖ If the fertilizer you applied was not available in the inventory and you have to buy the fertilizer, choose the option “New Buy”.</li>
            <li>❖ Enter the details when the fertilizer was bought, how much did the fertilizer cost, how much quantity did you buy, transaction details like head of accounts, transaction id/cheque no in case head of accounts is bank, and from whom you bought the fertilizer i.e., the vendor’s name.</li>   
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
                </ul>
            </ul>
            <p>o Click on the submit button.</p>
            <p>o Fertilizer will be added successfully.</p>
            <p>o If the fertilizer was a new buy, in that case it was an expense so a transaction will be created.</p>
            <br /> 
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Fertilizer:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the fertilizer from the list of fertilizers of locations
              present in the system. You can search based on either:
              <br />
              <p>▪ Fertilizer Name: You can search by the name of the Fertilizer.</p>{" "}

              <br />
              <p>
              Then click on the Search button. Also, you can click on the refresh button to refresh the data.
              </p>
              <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 3
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
                Edit Fertilizer:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any fertilizer detail you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪ Click on the edit icon against the fertilizer you want to
                    edit.
                  </li>
                  <li>▪ Fertilizer details screen will open.</li>
                  <li>▪ Click on the field you want to edit.</li>
                  <li>▪ Make changes in the fields</li>
                  <li>▪ Click on submit button.</li>
                  <li>
                    ▪ Fertilizer details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Fertilizer:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any fertilizer, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪	Click on the delete icon against the row you want to delete in the fertilizers’s table.
                  </li>
                  <li>▪	A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>▪	Click on delete button.</li>
                  <li>▪	fertilizer will be deleted successfully.</li>
                </ul>
              </div>
               <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
<h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              View Fertilizer:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of the fertilizer. For that:
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪	Hover on three dots.
                  </li>
                  <li>▪Click on view button.</li>
                  <li>▪Click on delete button.</li>
                  <li>▪Fertilizer details page will open.</li>
                  <li>▪Click on print button if you want to print the details of the fertilizer.</li>
                </ul>
              </div>
               <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
              <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default fertilizers;
