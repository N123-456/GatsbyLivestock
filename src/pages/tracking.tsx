import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const maintenance = () => {
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
          Starting Guide with Machinery Usage Tracking:
          </h2>
         
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 1
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Add Check-In Usage:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>The check-in process involves recording details when a machine is returned after use. This includes noting the time and date of return, the operator's name, and the machine's current condition. A thorough inspection is carried out to check for any signs of damage, wear and tear, fuel levels, or technical issues. If any problems are found, they are documented for maintenance or repair. The machine is then cleaned, refuelled (if required), and properly stored in its designated area to ensure it is ready for the next operation. Recording this information in a logbook or farm management system helps maintain accurate usage records, track machine health, and ensure accountability. You can visually analyse the check in usage of the machinery. You can easily filter out weekly, monthly and yearly check in usage. </p>
           <br/>
           <h2 className="text-primary-paragraph2 text-[19px] font-montserrat font-semibold ">Add Check-In</h2>
           
           <ul>
        <li>Go to{" "}
            <span className="text-primary-activelink font-semibold">
              "Machinery"
            </span>
            Tab.</li> 
            <li>click on three dots against the machinery you want to add check in usage</li>
           <li>Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Track Usage"
            </span>
            button.</li> 
             <li>Go to{" "}
            <span className="text-primary-activelink font-semibold">
              "+Check In"
            </span>
            button.</li> <br/>
            <p className="font-semibold">Enter Machinery Details:</p>
            <li> <span className="text-primary-pheading font-semibold">
              Machinery
            </span>: Displays the name of the machinery being checked in (e.g., Tractor). This field is non-editable and is automatically populated.</li>
             <li> <span className="text-primary-pheading font-semibold">
              Machine Type
            </span>: Displays the type of machinery (e.g., Machinery). This field is also non-editable and pre-filled.</li>
            <br/>
            <p className="font-semibold">Enter Check-In Details:</p>

            <li> <span className="text-primary-pheading font-semibold">
              Operator Name
            </span>:Select your name from the drop-down list. This is the name of the individual operating or checking in the machinery.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Date Checked
            </span>:Click the field and select the current date and time. This records when the check-in process is being completed.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Duration
            </span>:No. of hours the machine has been in use. It will be calculated automatically.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Warehouse
            </span>:Use the drop-down menu to select the warehouse where the machinery is currently stored.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Parking Slot
            </span>:Choose the specific slot where the machinery is parked from the provided list.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Fuel Level
            </span>:Adjust the slider to reflect the current fuel level of the machinery: (0 = Empty, 25 = Low, 50 = Half-Full, 75 = Almost Full, 100 = Full).</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Condition
            </span>:Select the current condition of the machinery from the drop-down list: (Good, Fair, Excellent, Poor, Very Poor).</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Issues/Repairs
            </span>:Write any issues or repairs needed in the text field. If no issues, leave the field blank or enter "None.".</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Supervisor Name
            </span>:Select the supervisor's name from the drop-down list. This ensures that the supervisor overseeing the check-in process is recorded.</li>
           <li>Review all details carefully to ensure accuracy.</li>
           <li>Once complete, click the Submit button.</li>
           <li>Check In usage will be added successfully.</li>
           </ul> 
                <div className="pl-13 pt-8 flex justify-center">
              {listview && (
                <GatsbyImage
                  image={listview}
                  alt="Startups illustration"
                  className="bg-white w-[1000.58px] "
                />
              )}
            </div></div>
          
         
           
          
            

            <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Add Check-Out Usage:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>The check-in process involves recording details when a machine is returned after use. This includes noting the time and date of return, the operator's name, and the machine's current condition. A thorough inspection is carried out to check for any signs of damage, wear and tear, fuel levels, or technical issues. If any problems are found, they are documented for maintenance or repair. The machine is then cleaned, refuelled (if required), and properly stored in its designated area to ensure it is ready for the next operation. Recording this information in a logbook or farm management system helps maintain accurate usage records, track machine health, and ensure accountability. You can visually analyse the check in usage of the machinery. You can easily filter out weekly, monthly and yearly check in usage. </p>
           <br/>
           <h2 className="text-primary-paragraph2 text-[19px] font-montserrat font-semibold ">Add Check-In</h2>
           <ul>
        <li>Go to{" "}
            <span className="text-primary-activelink font-semibold">
              "Machinery"
            </span>
            Tab.</li> 
            <li>click on three dots against the machinery you want to add check in usage</li>
           <li>Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Track Usage"
            </span>
            button.</li> 
             <li>Go to{" "}
            <span className="text-primary-activelink font-semibold">
              "+Check In"
            </span>
            button.</li> <br/>
            <p className="font-semibold">Enter Machinery Details:</p>
            <li> <span className="text-primary-pheading font-semibold">
              Machinery
            </span>: Displays the name of the machinery being checked in (e.g., Tractor). This field is non-editable and is automatically populated.</li>
             <li> <span className="text-primary-pheading font-semibold">
              Machine Type
            </span>: Displays the type of machinery (e.g., Machinery). This field is also non-editable and pre-filled.</li>
           <br/>
            <p className="font-semibold">Enter Check-In Details:</p>

            <li> <span className="text-primary-pheading font-semibold">
              Operator Name
            </span>:Select your name from the drop-down list. This is the name of the individual operating or checking in the machinery.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Date Checked
            </span>:Click the field and select the current date and time. This records when the check-in process is being completed.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Duration
            </span>:No. of hours the machine has been in use. It will be calculated automatically.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Warehouse
            </span>:Use the drop-down menu to select the warehouse where the machinery is currently stored.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Parking Slot
            </span>:Choose the specific slot where the machinery is parked from the provided list.</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Fuel Level
            </span>:Adjust the slider to reflect the current fuel level of the machinery: (0 = Empty, 25 = Low, 50 = Half-Full, 75 = Almost Full, 100 = Full).</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Condition
            </span>:Select the current condition of the machinery from the drop-down list: (Good, Fair, Excellent, Poor, Very Poor).</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Issues/Repairs
            </span>:Write any issues or repairs needed in the text field. If no issues, leave the field blank or enter "None.".</li>
           
           <li> <span className="text-primary-pheading font-semibold">
              Supervisor Name
            </span>:Select the supervisor's name from the drop-down list. This ensures that the supervisor overseeing the check-in process is recorded.</li>
           <li>Review all details carefully to ensure accuracy.</li>
           <li>Once complete, click the Submit button.</li>
           <li>Check In usage will be added successfully.</li>
           </ul>
             
            
              <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div></div>

              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 3
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
                Edit Maintenance:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any maintenance details you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon 
                  </li>
                  <li>Maintenance details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Maintenance details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Maintenance:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete the maintenance, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the delete icon against the row you want to delete in the maintenance’s table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>Maintenance will be deleted successfully.</li>
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
              View Maintenance:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of the maintenance. For that:
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>Maintenance details page will open.</li>
                  <li>Click on print button if you want to print the details of the maintenance.</li>
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
      
      
    </AppLayout>
  );
};

export default maintenance;
export const Head = () => (
  <>
<title>Tracking | Farm Management System</title>
 <link rel="icon" type="image/png" href="/images/fmsLogo.png" />
</>
)