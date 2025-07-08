import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const contact = () => {
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
          Starting Guide for Contacts:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
           Contacts are the central repository for storing and managing contact information of relevant individuals or businesses. Targeted contacts are mostly farmers and agricultural business owners. Key contact details are displayed within the Contacts Grid: name, company, email, phone number, address, and designation. You can add, delete, edit, search and view contacts.
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
            Add New Contact:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding a new contact</p>
            Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Add New"
            </span>
            button.
        <p>Contact form will open</p>
        <p>Fill out the required details. The details of fields are:</p>
            <p>Click on the three dots against the machinery you want to add maintenance record..</p>
            <p>Click on "Maintenance" button</p>
   <p>Enter the required details:</p><br/>
   <ul>
                <li><span className="text-primary-pheading font-semibold">Full Name:</span> Name of the contact. </li>
                <li><span className="text-primary-pheading font-semibold">Email:</span>Email Address of the contact. </li>
                <li><span className="text-primary-pheading font-semibold">Contact Number:</span>Contact Number of the person </li>
                 <li><span className="text-primary-pheading font-semibold">Alternative No:</span>It is an optional field. If user has any alternative number, you can enter.</li>
                   <li><span className="text-primary-pheading font-semibold">Designation:</span>At which designation, the person is at the company/ organization.</li>
                     <li><span className="text-primary-pheading font-semibold">Role:</span>Role of the contact related to your farm. The roles can be.</li>
                    <br/> <ul className="text-primary-paragraph2">
                        <li>Auditor: Reviews and verifies the accuracy of financial records and system operations.</li>
                        <li>Vendor: Provides goods or services and interacts with the system to manage orders and invoices.</li>
                        <li>Manager: Oversees system operations, tasks, and team activities to ensure smooth workflow.</li>
                     </ul><br/>
                       <li><span className="text-primary-pheading font-semibold">Organization/Company:</span>Name of the organization in which the person works in.</li>
                        <li><span className="text-primary-pheading font-semibold">Address Details:</span>Address of the person. Address details include:</li>
                 <br/> <ul className="text-primary-activelink font-medium list-disc">
                        <li>Province</li>
                        <li>Division</li>
                        <li>District</li>
                        <li>Tehsil</li>
                        <li>Address (Exact Address)</li>
                        <li>Postal Code</li>
                     </ul>
                 </ul><br/>
                 <p>Click on the submit button</p>
                 <p>New Contact will be created</p>
           <br/>
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
              Search Contact:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can search the contact from the list of contacts present in the system. You can search based on either:
              <br />
              <ul className="list-disc">
              <li><p>Name: You can search by the name of contact.</p></li>
              <li><p>Contact No: You can search by the contact no of the contact.</p></li>
              <li><p>Role: You can search by the role of the user which can be:
o	Vendor
o	Manager
o	Auditor


</p></li>

              <br />
              <p>
              Then click on the Search button. Also, you can click on the refresh button to refresh the data.
              </p><br/>
              <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div></ul>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 3
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
              <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
                Edit Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any contacts details you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon 
                  </li>
                  <li>contact details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    Contact details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line "></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            If you no longer need any contact and wants to delete the contact, you can easily do so.
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the delete icon against the row you want to delete in the contact’s table.
                  </li>
                  <li>A dialogue box will appear to confirm whether you want to delete or not.</li>
                  <li>Click on delete button.</li>
                  <li>contact will be deleted successfully.</li>
                </ul>
              </div><br/>
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
              View Contact:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can easily view the details of users. For that:
                <br />
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Hover on three dots.
                  </li>
                  <li>Click on view button.</li>
                  <li>Click on delete button.</li>
                  <li>contact details page will open.</li>
                  <li>Click on print button if you want to print the details of the contact.</li>
                </ul>
              </div><br/>
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

export default contact;
