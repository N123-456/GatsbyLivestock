import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const planting = () => {
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
        <div className="flex flex-col justify-center">
          <h2 className="text-primary-activelink font-semibold text-[34px] font-montserrat pl-10 pt-5">
          Starting Guide for Planting:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
           In the planting process, you enter the details of the crops to be planted, ensuring all necessary information is recorded for effective crop management. This includes selecting the crop type, specifying the planting location, and entering details about the seeds, such as variety and source. Additional planting details include the planting depth, spacing, and any special instructions. You should also provide estimated harvest details, including the expected harvest date and anticipated yield. By accurately recording these details, farmers can monitor crop progress and optimize growth conditions for better yields. Moreover, you can add fertilizers and pesticides details applied on the crop. Also, the harvest details of the crop can be added. Furthermore, field inspection details can also be added. The details of these will be found in the later sections of the document.
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
            Add Planting:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding planting, you first need to have a farm location. So, if you haven’t have added yet first add the farm location. See the guide for adding farm location in the upper section of the document. After choosing the crop, most of the fields will be automatically filled based on predefined data, but you can modify them as per your need. So, for adding planting:</p>
            <br />
            <br /> Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Add Planting"
            </span>
            button.
            <br />
            Enter the required fields.
            <br />
            <span className="text-primary-pheading font-semibold">
            Crop Type & Location:
            </span>
            : In the crop type and location, you will enter what crop you want to plant and on which farm location you want to plant. How the crop will be planted like 
            <br />
            <br/>
            <ul className="pl-[15px] font-semibold text-primary-activelink list-disc">
              <li>
                Planted in Beds
              </li>
              <li>
                Cover Crop
              </li>
              <li>
               Row Crop
              </li>
              <li>
               Other
              </li>
           
               </ul><br/>
                  <p> If the crop will be planted in beds, enter the following details:</p>
               <ul className="list-disc">
           
              <br/>
              <li>
                Choose the unit of measurement (Centimetre, Meter, Inch, Feet).
              </li>
              <li>
               Enter how many beds you will use for planting.
              </li>
              <li>
               Enter the length, width, and height of each bed.
              </li>
              <li>
               Enter how many rows you will plant in each bed.
              </li>
              <li>
               Land Area will be calculated automatically on which the crop will be planted.
              </li>
              <li>
                Choose the direction for planting (Away from Sun, Towards Sun).
              </li>
              <li>If the crop is planted as cover crop, row crop or any other, enter the following details:</li>
              <li>Enter the land area on which the crop will be planted.</li>
              <li>Choose the direction for planting (Away from Sun, Towards Sun).</li>
            </ul>
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
            <p className="font-semibold font-primary-pheading">Seed Details:</p>
            <ul className="text-primary-subheading font-normal text-[18px] font-montserrat list-disc">
              <li>
               Select the company that provided the seeds.
              </li>
              <li>
                Choose the type of seed being used.
              </li>
              <li>
              Enter the total amount of seeds you have for planting.
              </li>
              <li>
                Choose the unit of measurement for the seed quantity (e.g., KG, grams).
              </li>
              <li>Enter the lot number of the seed batch for tracking purposes.</li>
  
              <li>Enter the origin or source of the seeds (country or region).</li>
            </ul>
            <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div><br/>
            <p className="font-semibold font-primary-pheading ">Planting Details.</p>
            <ul className=" font-normal list-disc">
              <li>Select the unit of measurement for input (Centimetre, Meter, Inch, Feet).</li>
              <li>Enter the specific variety of the crop you are planting.</li>
              <li>Enter the distance between rows in your planting beds.</li>
              <li>Choose how you are starting the crops (Nursery in Grounds, Nursery in Trays, Bulbs/Cloves, Remove Root Stock, Grafting, and Others).</li>
              <li>Enter the total number of plants per acre.</li>
              <li>Enter the space between each plant in the row.</li>
              <li>Enter the expected number of days for the seeds to start emerging after planting.</li>
           <li>Enter the recommended planting depth for your crop.</li>
           <li>Select the date and time when the seeds will be sown.</li>
           <li>Specify the material used for sowing.</li>
           <li>Enter the number of seeds to plant in each hole.</li>
           <li>Select the date and time for transplanting, if applicable.</li>
           <li>Enter the estimated germination rate for the seeds (percentage).</li>
           <li>Choose the growth stage of the crop (Seed Started, Germination, Seeding, Vegetative, Flowering, Ripening, Complete). You can later modify the growth stage of the crop.</li>
           <li>If you will check the box, task will automatically be created for that particular planting which you can modify or add according to your needs. If you want to see the list of tasks for a particular crop</li>
           <ul className="text-primary-activelink font-semibold list-disc"> <li>Click on three dots.</li>
            <li>Click on Tasks button</li>
            <li>Tasks list will open.</li>
            <li>You can add, edit, delete, search and view the tasks.</li></ul>
            </ul>
            <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div><br/><br/>
            <p className="font-semibold">Estimated Harvest Details:</p>
            <ul className="font-normal text-[18px] font-montserrat list-disc">
              <li>
               What is the expected date to harvest the crop.
              </li>
              <li>Maturity days will calculated automatically based on sowing and harvesting date.</li>
              <li>How many days it will take to harvest the crop will be entered in harvest window.</li>
              <li>
           How much you will lost during the harvest will be entered in est. Harvest lost.
              </li>
              <li>
               Select the harvest unit (KG, Maunds)
              </li>
              <li>
               How much estimated yield will be produced will be entered in Est. Yield Per Acre.
              </li>
              <li>What is the unit price per kg/maund for that particular crop.</li>
              <li>Estimated Revenue will be calculated automatically.</li>
              <li>How much average height will be of the crop at the time of harvesting.</li>
            <li>Click on submit button.</li>
            <li>Crop planting will be added successfully.</li>
            </ul>
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
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Planting:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the location from the list of farms of locations
              present in the system. You can search based on either:
              <br />
              <p><span className="text-primary-pheading font-semibold">	Crop Name: </span>You can search by the name of the crop.</p>{" "}
              <p>
                <span className="text-primary-pheading font-semibold">Growth Stage:</span> You can filter out that how much crops are in a particular growth stage.
              </p>
              <p><span className="text-primary-pheading font-semibold">Upcoming Harvest:</span> You can filter out which crop’s harvest are today, tomorrow, this week, next week, and next month.</p>
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
                Edit Planting:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
                If any planting details changes, you can easily edit the
                details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon against the crop you want to
                    edit.
                  </li>
                  <li>Planting details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Planting details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Planting:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any crop planting, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the delete icon against the row you want to delete in the planting’s table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>Crop will be deleted successfully.</li>
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
                  <div className="flex items-center pt-5 space-x-4">
<h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              View Planting:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can easily view the details of the planting. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Crop details page will open.</li>
                  <li>You can print the details of the Planting.</li>
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

export default planting;
export const Head = () => (
  <>
<title>Planting | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)