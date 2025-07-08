import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const fieldinspection = () => {
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
          Starting Guide for Field Inspection:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
         The Field Inspection is used to monitor and evaluate the condition of crops and fields during the growing process. It involves checking the health of plants, identifying pests, diseases, or nutrient deficiencies, and assessing overall field conditions. Regular inspections help ensure timely actions such as applying fertilizers, pesticides, or irrigation when needed. This section allows farmers to keep track of observations, make informed decisions, and improve crop health and yield. By conducting field inspections, farmers can address potential issues early and ensure better productivity and farm management. A field inspection is conducted separately against a specific crop.     
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
<br/><br/>
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Add Field Inspection:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding Field Inspection:</p>
            <br />
            <br />Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Planting"
            </span>{" "}
            tab.
            <br />
            <p>Click on three dots against the crop you want to add field inspection data.</p>
            <p>Choose field inspection from the options.</p>
            <p>Click on “Add Field Inspection” button.</p>
            <p>Enter the required details as follows:</p><br/>
            <ul className="list-disc">
                <li><span className="text-primary-pheading font-semibold">Field Inspection Details</span>: When was the field inspection performed, who was the field scout, why the field inspection was conducted, how much cost was incurred on the field inspection, transaction details like head of accounts, transaction id/ cheque no in case head of accounts is bank, who was the customer.</li>
                <li><span className="text-primary-pheading font-semibold">Plant Health Levels</span>: How much has the pest damaged the crop (low, high), is the crop diseased (infested, highly infested, low), and how much weeds are there in the crop (severe, less or none).</li>
                <li><span className="text-primary-pheading font-semibold">Disaster Level</span>: Intensity of heat wave (Severe, Moderate, Minor), intensity of rainfall (Severe, Moderate, Minor), effect of wind on crop (Severe, Moderate, Minor), smog density (Severe, Moderate, Minor), hailstorm intensity (Severe, Moderate, Minor), and frost condition (Severe, Moderate, Minor).</li>
                 <br/><div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <br/>
            <li>Optionally. You can add description, can mark area where the scouting took place and can also add images taken during field inspection.</li>
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
           <br/><br/>
            </ul>
            <p>Click on the submit button.</p>
            <p>Field inspection will be added successfully.</p>
            <p>A transaction will created as expense was incurred for carrying out field inspection.</p>
            <br /></div>
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Field Inspection:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the field inspection from the list of field inspection of locations
              present in the system. You can search based on either:
              <br />
              <ul>
                <li>
              <span className="text-primary-pheading font-semibold">Field Scout Name:</span> You can search which field scout carried out which field inspection.</li>{" "}
              <li><span className="text-primary-pheading font-semibold">Date Range:</span> You can search by specifying date range that how many field inspections were held during a specific date range.</li>
              </ul>
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
              <br/><br/>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 3
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
                Edit Field Inspection:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any field inspection detail you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon against the field inspection you want to
                    edit.
                  </li>
                  <li>Field Inspection details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Field Inspection details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Field Inspection:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any field inspection, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the delete icon against the row you want to delete in the field inspection’s table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>Field Inspection will be deleted successfully.</li>
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
              </div><br/><br/>
                    <div className="flex items-center pt-5 space-x-4">
<h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              View Field Inspection:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of the field inspection. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Field inspection details page will open.</li>
                  <li>Click on print button if you want to print the details of the field inspection.</li>
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
  
    </AppLayout>
  );
};

export default fieldinspection;
