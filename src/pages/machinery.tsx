import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const machinery = () => {
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
          Starting Guide for Machinery:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
          In this Machinery module, you can keep track of the machineries available in your farm. One of your most vital tools is your machinery, which enables you to operate more efficiently and accomplish more. Regular maintenance is essential to preventing malfunctions and keeping everything functioning properly. With its ability to log hours, maintenance history, and expenses, Farm Management System simplifies machinery management. You can add, edit, view, search, delete the machinery. 
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
            Add New Machinery:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding new machinery, follow the following steps:</p>
            Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Add New"
            </span>
            button.
        
            <p>Enter the required details the fields are.</p>
            <ul className="list-disc">
                <li>Basic Information:</li>
            
            <ul className="text-primary-pheading">
                
            <li>❖ Name: Name of the equipment. </li>
            <li>❖ Type:  What type is the equipment. The types can be</li>
                <ul>
                <li><span className="text-primary-pheading">Machinery:</span> </li>
                <li><span className="text-primary-pheading">Tools:</span> </li>
                <li><span className="text-primary-pheading">Vehicles:</span> </li>
                 <li><span className="text-primary-pheading">Irigation:</span></li>
                   <li><span className="text-primary-pheading">Storage:</span></li>
                     <li><span className="text-primary-pheading">Harvesting:</span></li>
                       <li><span className="text-primary-pheading">Planting:</span></li>
                         <li><span className="text-primary-pheading">Fertilizing:</span></li>
                 </ul>
                 <li>❖ Status: What is the status of the equipment. Either its available or on Maintenance.</li>
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
           <li>Parking Information:</li>
           <ul className="text-primary-pheading">
            <li>❖ Warehouse: In which warehouse the machinery will be parked.</li>
            <li>❖ Parking Slot: In which parking slot of the warehouse, the machinery will be parked.</li>
              </ul><br/><br/>   
                 <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div>
            <li>Identification: How will the machinery be identified.</li>
            <ul className="text-primary-pheading">
            <li>❖ Model: What is the model of the machinery.</li>
            <li>❖ Model Year: What is the model year of the machinery.</li>
            <li>❖ ID / Plate No: What is the id/plate no of the machinery.</li>
            <li>❖ Serial No: Enter the serial number of the machinery.</li>
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
            <li>Specifications:</li>
            <ul className="text-primary-pheading">
            <li>❖ Engine: Details about the engine type, power output, and specifications. </li>
            <li>❖ Transmission: Information on the transmission system, including type and gear configuration.</li>
            <li>❖ Track Usage: The primary usage of the track, such as on-road, off-road, or specialized tracks.</li>
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
            <li>Purchase Information</li>
            <ul className="text-primary-pheading">
            <li>❖ Ownership Status:  Current ownership status, indicating whether the vehicle is owned or leased.</li>
            <li>❖ Date Acquired: The date the vehicle was acquired, indicating when it was purchased or leased.</li>
             <li>❖ Purchase Price: The price paid for the vehicle at the time of acquisition.</li>
             <li>❖ Estimated Value: Current estimated market value of the vehicle.</li>
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
<li>Additional Details</li><ul className="text-primary-pheading" >
            <li>❖ Link To Manual: A hyperlink to the product’s user manual or instructional guide.</li>
            <li>❖ Description: A brief overview of the vehicle, highlighting key features and purpose.</li>

            </ul></ul>
            <p>Click on the submit button.</p>
            <p>New Machinery will be added successfully.</p>
      
            
            <br /> 
            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search Machinery:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can search the machinery from the list of machineries of locations
              present in the system. You can search based on either:
              <br />
              <ul className="list-disc">
              <li><p>Name: You can search by the name of machinery.</p></li>
              <li><p>Status: You can search by the status of the machinery. The status of machinery can be:
o	Available
o	Maintenance
</p></li>
<li>Model: You can search by the model of the machinery.</li>
<li>Number: You can search by the number of the machinery.</li></ul>

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
                Edit Machinery:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any machinery details you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Click on the edit icon 
                  </li>
                  <li>Machinery details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Machinery details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Machinery:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you no longer need any machinery and wants to delete the machinery or the machinery you have sold and does not belong to you, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Click on the delete icon against the row you want to delete in the machinery table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>Warehouse will be deleted successfully.</li>
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
              View Machinery:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of the machinery. For that:
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Macchinery details page will open.</li>
                  <li>Click on print button if you want to print the details of the machinery.</li>
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
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Machinery Usage:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             Machinery usage can be tracked easily. You can see where and for how much time the machinery was used. Also, you can get an overview of weekly, monthly and yearly usage for all the machines available all at one place. For checking machinery usage:
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink">
                  <li>
                    Go to machinery tab:
                  </li>
                  <li>On top left corner, there will be a button of machinery usage.</li>
                  <li>Click on the button.</li>
                  <li>Machinery Usage Report will open.</li>
                  <li>You can get an analysis and overview of how your machineries are being used over specific time period. You can also see which machinery is the most used one and which one needs more attention.</li>
                <li>Click on the dropdown to see weekly, monthly and yearly usage of the machineries.</li>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default machinery;
