import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const pesticides = () => {
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
          Starting Guide for Pesticides:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
           Pesticides are chemicals or natural substances used to protect crops from pests, insects, weeds, and diseases. They help prevent damage to plants, ensuring healthy growth and higher yields. Pesticides can be classified into types such as insecticides (for insects), herbicides (for weeds), and fungicides (for fungi). Proper and safe use of pesticides is important to avoid harm to crops, soil, and the environment. Following recommended guidelines ensures effective pest control while maintaining food safety. In the pesticides tab, you will add the pesticides applied to a specific crop.   
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
            Add Pesticides:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding Pesticides:</p>
            <br />
            <br />▪ Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Planting"
            </span>
            tab.
            <br />
            <p>▪Click on three dots against the crop you want to add pesticides data.</p>
            <p>o Choose pesticides from the options.</p>
            <p>o Click on “Add Fertilizer” button.</p>
            <p>o Enter the required details as follows:</p>
            <ul>
                <li>▪ Enter the product details including product name, brand of the pesticide, when was the pesticide applied to the crop, how much effective was the pesticide i.e., pesticide efficiency in percentage.</li>
                <li>▪ Now enter the usage details::</li>
                <ul>
                    <li>❖ If the pesticide you applied was taken from the inventory, choose the option “inventory”.</li>
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
            <li>❖ If the pesticide you applied was not available in the inventory and you have to buy the pesticide, choose the option “New Buy”.</li>
            <li>❖ Enter the details when the pesticide was bought, how much did the pesticide cost, how much quantity did you buy, transaction details like head of accounts, transaction id/cheque no in case head of accounts is bank, and from whom you bought the pesticide i.e., the vendor’s name.</li>   
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
            <p>o Pesticides will be added successfully.</p>
            <p>o If the pesticides was a new buy, in that case it was an expense so a transaction will be created.</p>
            <br /> 
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Pesticides:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the pesticides from the list of pesticides of locations
              present in the system. You can search based on either:
              <br />
              <p>▪ Pesticide Name: You can search by the name of the pesticide.</p>{" "}

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
                Edit Pesticide:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any pesticides application detail you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪ Click on the edit icon against the pesticide you want to
                    edit.
                  </li>
                  <li>▪ pesticide details screen will open.</li>
                  <li>▪ Click on the field you want to edit.</li>
                  <li>▪ Make changes in the fields</li>
                  <li>▪ Click on submit button.</li>
                  <li>
                    ▪ pesticides details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Pesticide:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any pesticide, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪	Click on the delete icon against the row you want to delete in the pesticide’s table.
                  </li>
                  <li>▪	A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>▪	Click on delete button.</li>
                  <li>▪	pesticide will be deleted successfully.</li>
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
              View Pesticide:
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
                  <li>▪pesticide details page will open.</li>
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

export default pesticides;
