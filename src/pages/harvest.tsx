import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const harvest = () => {
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
        <div className="flex flex-col">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
          Starting Guide for Harvest:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
          The Harvest Section helps manage and organize the process of gathering crops and recording important harvest-related details. It ensures that harvested crops are properly documented, categorized, and accounted for. This section allows farmers to track the harvest process, monitor yields, and manage post-harvest activities such as selling or storing crops. It provides a structured way to organize harvested produce, record quantities, and manage revenues. By keeping everything in one place, it simplifies decision-making, improves efficiency, and helps maintain a clear record of the farm's productivity and financial performance. In the harvest tab, you will add the harvest picked/ gained from specific crop.     
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
            Add Harvest:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding harvest details:</p>
            <br />
            <br />▪ Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Planting"
            </span>
            tab.
            <br />
            <p>▪Click on three dots against the crop you want to add harvest data.</p>
            <p>o Choose harvest from the options.</p>
            <p>o Click on “Add Pesticides” button.</p>
            <p>o Enter the required details as follows:</p>
            <ul>
                <li>▪ Date & Time: When was the crop harvested, what was the after-harvest process i.e., either the yield was directly sold out or there was further processing on the yield or was stored in inventory. Other than the inventory option, enter the customer’s name who bought the yield. </li>
                <li>▪ Enter the batch no (e.g. Pick 1, Pick 2 etc.) and classify the grade of yield (e.g. High, Medium, Low):</li>
                <li>▪ In case the after-harvest process was “Direct Sale”, enter the quantity got in that batch (e.g. 40 KG), revenue per unit (e.g.212 Rs), total revenue will calculated automatically, and transaction details like head of accounts (e.g. Bank) and transaction id/ cheque no (e.g. 8746900987) in case head of accounts was bank. A transaction will be created against it as the harvest is a revenue generated from the farm.</li>
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <li>▪ In case the after-harvest process was “Processed”, enter the before processed quantity got in that batch, after processing quantity got in that batch, revenue per unit, total revenue will calculated automatically, and transaction details like head of accounts and transaction id/ cheque no in case head of accounts was bank. A transaction will be created against it as the harvest is a revenue generated from the farm.</li>
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <li>▪ In case the after-harvest process is “Inventory”, choose the inventory where the harvest will be stored, quantity to be stored, revenue per unit, total revenue will calculated automatically. No transaction will created in this case.</li>
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <li>▪ Enter the instructions related to the harvest if any.</li>
               
           
            </ul>
            <p>o Click on the submit button.</p>
            <p>o Harvest will be added successfully.</p>
            <p>o You can add more harvest pickings details in the same way.</p>
            <br /> 
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Harvest:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the harvest from the list of harvests of locations
              present in the system. You can search based on either:
              <br />
              <p>▪ Batch Number: You can search by the batch number of harvest.</p>{" "}

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
                Edit Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any harvesting detail you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪ Click on the edit icon against the harvest you want to
                    edit.
                  </li>
                  <li>▪ Harvesting details screen will open.</li>
                  <li>▪ Click on the field you want to edit.</li>
                  <li>▪ Make changes in the fields</li>
                  <li>▪ Click on submit button.</li>
                  <li>
                    ▪ Harvest details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any harvest, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪	Click on the delete icon against the row you want to delete in the harvest’s table.
                  </li>
                  <li>▪	A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>▪	Click on delete button.</li>
                  <li>▪	Harvest will be deleted successfully.</li>
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
              View Harvest:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of the harvest. For that:
                <br /><br/>
                <ul className="pl-[15px]">
                  <li>
                    ▪	Hover on three dots.
                  </li>
                  <li>▪Click on view button.</li>
                  <li>▪Click on delete button.</li>
                  <li>▪harvest details page will open.</li>
                  <li>▪Click on print button if you want to print the details of the harvest.</li>
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

export default harvest;
