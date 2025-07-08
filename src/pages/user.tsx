import React from "react";
import { AppLayout } from "../components/AppShell/AppLayout";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const user = () => {
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
          Starting Guide for User Management:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
          Users can be managed easily through farm management system. Users are the people who will perform the tasks related to the farm. System offers different user roles with varying levels of access and permissions within the system. From here, you grant access to users to access the system according to their defined roles. Only users with "Farm Admin" role can create and manage user accounts. Users can be added, searched and their details can be edited.
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
            Add New User:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding a new user</p><br/><br/>
            Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Add New"
            </span>
            button.
    
   <p>Enter the required details:</p>
   <ul>
                <li><span className="text-primary-pheading font-semibold">Name:</span> Name of the User. </li>
                <li><span className="text-primary-pheading font-semibold">Email Address:</span>Email Address of the user through which they can log into the system and will also get their login credentials and through this email. </li>
                <li><span className="text-primary-pheading font-semibold">Phone Number:</span>Contact Number of the user </li>
                 <li><span className="text-primary-pheading font-semibold">Image:</span>Profile image of the user.It is optional</li>
                   <li><span className="text-primary-pheading font-semibold">Status:</span>User status can either be blocked or active. By default, user status will be active and cannot be changed. The field is disabled. But you can later change the status if you want to block access of any user to the system by changing its status to blocked.</li>
                     <li><span className="text-primary-pheading font-semibold">User Role:</span>From this dropdown, you can define the role of user and can decide much access user can have to the system. The user roles are:</li>
                     <ul className="text-primary-paragraph2 font-medium list-disc">
                        <li><span className="text-primary-activelink font-bold">Farm Manager</span>:</li><br/>
                        <ul><li>Access to operational features like plantings, resources etc.</li>
                        <li>Can create users (except for Admins) and assign tasks/events.</li></ul><br/>
                        <li><span className="text-primary-activelink font-bold">Accountant</span>:</li><br/>
                        <ul><li>Have exclusive access to the accounting section, including financial reports.</li>
                        <li>Have no access to any operational information.</li></ul><br/>
                        <li><span className="text-primary-activelink font-bold">Service Manager</span>:</li><br/>
                        <ul><li>Full access to the Resources section for managing equipment, tools, and inventory.</li>
                        <li>Can also work with contacts.</li></ul><br/>
                         <li><span className="text-primary-activelink font-bold">Warehouse Manager</span>:</li><br/>
                        <ul><li>Have limited access to the Resources section, focusing on inventory and warehouse management.</li>
                        <li>Can also work with contacts.</li></ul><br/>
                        <li><span className="text-primary-activelink font-bold">Farm Worker</span>:</li><br/>
                        <ul><li>Have access to create, view, and update tasks assigned to them.</li>
                        <li>Cannot see tasks assigned to others but can work with unassigned tasks.</li></ul><br/>

                         <li><span className="text-primary-activelink font-bold">Auditor</span>:</li><br/>
                        <ul><li>Read-only access to all information within System, including financial data.</li>
                        <li>Cannot modify records, access settings, or create/assign tasks/events.</li></ul><br/>
                        
                     </ul>
                     
                 <p>Click on the submit button</p>
                 <p>User will be Added</p></ul>
           <br/>
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
            <div className="flex-1 h-px bg-primary-line"></div></div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Search User:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             You can search the user from the list of users present in the system. You can search based on either:
              <br />
              <ul className="list-disc">
              <li><p>Email Address: You can search by the email of the user.</p></li>
              <li><p>Status: You can search by the status of the user which can be:
o	Active
o	Blocked


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
                Edit User:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
             If any user's details you want to change, you can easily edit the details. For that:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  <li>
                    Click on the edit icon 
                  </li>
                  <li>User details screen will open.</li>
                  <li>Click on the field you want to edit.</li>
                  <li>Make changes in the fields</li>
                  <li>Click on submit button.</li>
                  <li>
                    User details will be edited/updated successfully.
                  </li>
                </ul>
              </div>
              <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 4
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div></div>
               <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Block User:
              </h2>
              <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            You can block any user for any reason. When the user will be blocked, he/she will lose access to the system and will not be able to log into the system. For this, you can do it in two ways:
                <br /><br/>
                <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                  
                  <li>You can go to edit details and change the status to blocked.</li>
                  <li>You can hover on three dots. There you will find an option of Block.</li>
                
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
<h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 5
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
                <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              View User Details:
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
                  <li>User details page will open.</li>
                
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
    
    </AppLayout>
  );
};

export default user;
