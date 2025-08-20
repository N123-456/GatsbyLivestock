import React from 'react'
import PrivateRoute from '../components/Privateroute/PrivateRoute'
import { AppLayout } from '../components/AppShell/AppLayout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import TextToSpeech from '../components/TextToSpeech';

const orchardfertilizer = () => {
      const data = useStaticQuery(graphql`
        query {
          fertilizer: file(relativePath: { eq: "fertilizer.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          AF: file(relativePath: { eq: "AF.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          AF1: file(relativePath: { eq: "AF1.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          SF: file(relativePath: { eq: "SF.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          DF: file(relativePath: { eq: "DF.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          VF: file(relativePath: { eq: "VF.png" }) {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      `);
      const fertilizer = getImage(data.fertilizer);
      const AF = getImage(data.AF);
      const AF1 = getImage(data.AF1);
      const SF = getImage(data.SF);
      const DF = getImage(data.DF);
      const VF = getImage(data.VF);
  return (
     <AppLayout>
          <PrivateRoute>
            <div>
              <div className="flex flex-col justify-center">
                <div className="acu lg:pr-4 text-justify">
                  <div className="flex items-center">
                    <div className="hidden lg:block">
                      <TextToSpeech textSelector=".acu" />
                    </div>
                    <h2 className="text-primary-activelink font-semibold text-[30px] font-montserrat dark:text-[#FFFFFF]">
                      Starting Guide for Fertilizer:
                    </h2>
                  </div>
                  <div className="flex items-center pt-5">
                    <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#BE8B45]">
                      Introduction
                    </h2>
                    <div className=" lg:hidden">
                      <TextToSpeech textSelector=".acu" />
                    </div>
                  </div>
    
                  <p className="text-primary-paragraph text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
              Fertilizers are substances added to soil or plants to provide essential nutrients that promote healthy growth and increase crop yield. They supply key nutrients like nitrogen, phosphorus, and potassium, which plants need for development. Fertilizers can be organic (e.g., compost, manure) or chemical-based, depending on the farm's needs. 
Proper use of fertilizers improves soil fertility, strengthens plants, and ensures better quality produce. It is important to apply the right type and amount of fertilizer to avoid harming crops or the environment. 
Now within the Fertilizer feature, you can have a fertilizer applied to a specific crop. From there you can essentially ensure that the Orchard will always have that fertilizer given to it and FMS will make sure that a task regarding fertilization of the field will have that fertilizer attached to it.
Below is an example of what it looks like:<br/>
Now, lets us show how to add a fertilizer entry on your Orchard entry in FMS!
                  </p>
    
                  <br />
                  <br />
    
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl- dark:text-[#BE8B45]">
                      Step 1
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
    
                  <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                    Adding a Fertilizer:
                  </h2>
    
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                    <p>If you want to add a Fertilizer to your Orchard, you must make sure that there are a few things you need ready and set up:</p>
                    <br />
                  <ul className='list-disc'>
                    <li>An Inventory entry of the Fertilizer product. (Learn more here)</li>
                    <li>A Purchase Requisition entry of the Fertilizer for your farm. (Learn more here)</li>
                    <li>A Purchase Order entry of the Fertilizer for your farm. (Learn more here)</li>
                  <li>A Goods receiving note for the Fertilizer you purchased (Learn more here)</li>
                  </ul>
                    <br />
                    <p>
                     Now that we have all the required assets for the farm we need to add a fertilizer entry for our Orchard, Now let us start by:

                    </p>
                    <p>First, you need to go to the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Fertilizer"
                      </span>{" "} page of the Orchard you want to add Fertilizers to.</p>

                        <ul className='list-disc'>
                            <li>You start by, selecting the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Three dots"
                      </span>{" "} icon [shown as “⋮” icon], located at the right-side of the Orchard you want to add Fertilizer to.</li>
                        <li>A small window will appear containing a list of buttons.</li>
                        <li>Select the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Fertilizer"
                      </span>{" "} button located as the third option in this list, below the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Tasks"
                      </span>{" "} button and above the “Chemicals” button.</li>
                        <li>You will then be taken to the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Fertilizer"
                      </span>{" "} page of the Orchard. It should look like this:</li>
                        </ul><br/>
                        <p>You can now continue on adding the Fertilizer to the Orchard from here.</p>
                      <p>Now, click on the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "’+’ Add Fertilizer"
                      </span>{" "} button, located at the top-left corner of the page, to the right of the “Download Table” button.
 </p>
                      <p>You will then be taken to the <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                        "Add Fertilizer"
                      </span>{" "} page.</p>
                     
                   <div className="pl-13 pt-8 flex justify-center">
                          {AF && (
                            <GatsbyImage
                              image={AF}
                              alt="Startups illustration"
                              className="bg-white w-[1000.58px] "
                            />
                          )}
                        </div>
                        <br />
                    <p>All the fields within this page are required to be filled. So please make sure to not skip any fields.</p>
                    <p>Let’s go through the steps and their fields of the “Add Fertilizer” page:</p>
                    <ul>
                        <li>The first step that we are cover is the “Product Details” step:
</li>
 <div className="pl-13 pt-8 flex justify-center">
                          {AF && (
                            <GatsbyImage
                              image={AF}
                              alt="Startups illustration"
                              className="bg-white w-[1000.58px] "
                            />
                          )}
                        </div>
                        <br />
<li>The <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">“Product Details”</span>{" "} step is a step where you input the general details of the Fertilizer you are providing to the plant.</li>
                    <li>The <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">“Product Name”</span>{" "} field: Enter the name of the Fertilizer product that is being used for the farm.</li>
                    
                <li>The “Type” field: Enter what type of Fertilizer is being used for the farm. Select 1 from 10 options:</li>
                    <ul className="text-primary-activelink font-semibold dark:text-[#D5D5D5] list-disc">
                        <li>BOP:</li>
                        <li>Bio Fertilizer:</li>
                        <li>CAN:</li>
                        <li>DAP:</li>
                        <li>MOP</li>
                        <li>NP</li>
                        <li>NPK</li>
                        <li>SOP</li>
                        <li>Sulfer Coated Urea</li>
                        <li>Urea</li>
                    </ul>
                    <li>The <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">“Company”</span>{" "} field: Enter the name of the company that is on the package of the Fertilizer. Select 1 of 6 options for the name of the company.</li>
                     <p>
                  <span className="text-primary-pheading font-semibold">
                    Agritech
                  </span>
                  : Select this if the company’s name on the package is “Agritech”.
                </p>{" "}
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    Engro
                  </span>
                  : Select this if the company’s name on the package is “Engro”.
                </p>
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    Agritech
                  </span>
                  : Select this if the company’s name on the package is “Agritech”.
                </p>
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    FFC
                  </span>
                  :Select this if the company’s name on the package is “FFC”.

                </p>{" "}
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    Fatima
                  </span>
                  : Select this if the company’s name on the package is “Fatima”.

                </p>{" "}
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    VAN
                  </span>
                  : Select this if the company’s name on the package is “VAN”.

                </p>{" "}
                 <p>
                  <span className="text-primary-pheading font-semibold">
                    Other
                  </span>
                  : Select this if the company’s name on the package is not any of the one’s listed above.


                </p>{" "}
                <p>The “Application Method” field: Enter in what application method will the farm be using to apply the fertilizer. Select 1 of 7 options for the application method:
</p>
<ul>
    <li>Broadcast</li>
    <li>Fertigation</li>
    <li>Foliar</li>
    <li>Liquid Feed</li>
    <li>Placement</li>
    <li>Soil Injection</li>
    <li>Spray</li>
</ul>
<li>Please make sure that all these fields are filled with what they are supposed to be filled with.</li>
                    <li>The next and final step, is the “Usage Details” step:</li>
                     <div className="pl-13 pt-8 flex justify-center">
                          {AF && (
                            <GatsbyImage
                              image={AF}
                              alt="Startups illustration"
                              className="bg-white w-[1000.58px] "
                            />
                          )}
                        </div><br/>
                        <li>The “Usage Details” step is a step where you can input the details of what fertilizer will be used from the Inventory and how much will be used on the farm.</li>
                    <ul>
                        <li>The “Select Inventory” field: Enter in the name of the fertilizer product that is within the Inventory that is the same fertilizer you wish to use on the farm. It will open a menu with a list of options that are within the Inventory for you to select.</li>
                    <li>The “Available Quantity” field: This is a non-editable field that updates how many of the fertilizer you chose earlier is there within the Inventory.
</li>
<li>The “Application Quantity” field: Enter in a number of how much of the fertilizer you want to apply on the farm to be used.</li>
                    <li>The “Date of Application” field: Enter in a date and time of when the fertilizer should be applied to the farm. It will open a Calendar box where you can input in the Date and time.</li>
                    <li>The “Mark Area” field: Enter in what area on the farm location should the fertilizer be applied to. It will open a map window where you can put in map points and edit them. Provided below are steps on how to approach the mark area feature.</li>
                    </ul>
                    <li>When you select the “Mark Area” button, A satellite imagery map window will open.</li>
                    <div className="pl-13 pt-8 flex justify-center">
                          {AF && (
                            <GatsbyImage
                              image={AF}
                              alt="Startups illustration"
                              className="bg-white w-[1000.58px] "
                            />
                          )}
                        </div>
                        <br />
                        <li>In the map, you can see the farm location the Orchard is located on, marked with a red dotted outline.</li>
                    <li>Mark the boundaries of your farm location, by clicking and placing points on the map.</li>
                    <li>A red shape will be drawn on the top of the field you want the fertilizer applied to.</li>
                     <div className="pl-13 pt-8 flex justify-center">
                          {AF && (
                            <GatsbyImage
                              image={AF}
                              alt="Startups illustration"
                              className="bg-white w-[1000.58px] "
                            />
                          )}
                        </div>
                        <br />
                        <li>After the boundaries are marked, click on the “Save” button. You will then be taken back to the edit page with the mark area button, having double tick mark next to it.</li>
                    <li>Once, you have filled in all the required fields, then you can click the “Submit” button.</li>
                    <li>It will then take you to back to the “Fertilizer” page to show you that you have added your Fertilizer to the Orchard’s Fertilizer Table.</li>
                    </ul>
                    
                    <br/>
                    <p>Now that we have added a fertilizer we can now move on to the next feature, which is browsing through the Fertilizer page.</p>
                    <h1 className='text-primary-activelink font-semibold'>Features of the Fertilizer Dashboard</h1>
                    <p>Now that we covered how to add a Fertilizer into the Farm Management System. Let us now focus on the features that are present in the Fertilizer Dashboard!</p>
                    <ul className="pl-[15px] ">
                      <li className='text-primary-activelink'>
                       Browsing within the Fertilizer
                      </li>
                      <li>You can browse through the fertilizer table of the Orchard you want using the pages options.
</li>
<li>Lets show you how to use the pages options:</li>
                      <br />
                      <ul className="list-disc">
                        <li>
                      The page options are located below the Fertilizer table.
                        </li>
                        <li>Here you can see the “Total number of records”, the “Records per page option”, the “Page select” and the “Go to page search”. </li>
                        <li>
                          Lets go through them one by one:
                        </li>
                       
                 <ul>
                    <li>The Total number of records: This shows a number of how many fertilizers are there in the Orchard you selected. It is located below the Fertilizer’s table, above the page select options and is on the bottom left of the page.</li>
                 <li>The Records per page option: This opens a menu where you can select how many fertilizer entries do you want to see in one page. The default is set to 5. The options are 5, 10, 50 and 100. It is located below the fertilizers table, above the page select options and is to the bottom right of the page.</li>
                 <li>The Page select options: It shows which page you are currently in (The default is the 1st page). It gives you buttons for the next five pages after which it gives you the button to the last page. You can move to the previous page using the left arrow button, located on the left side or to next page using the right arrow button located on the right side. It is Located below the Fertilizer’s table, the Total number of records and the records per page and is on the bottom middle of the page.
</li>
                 </ul>
                        <li>
                          If the fertilizer you applied was not available in the
                          inventory and you have to buy the fertilizer, choose the
                          option{" "}
                          <span className="text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                            "New Buy"
                          </span>{" "}
                          .
                        </li>
                        <li>
                          Enter the details when the fertilizer was bought, how much
                          did the fertilizer cost, how much quantity did you buy,
                          transaction details like head of accounts, transaction
                          id/cheque no in case head of accounts is bank, and from
                          whom you bought the fertilizer i.e., the vendor’s name.
                        </li>
                        <div className="pl-13 pt-8 flex justify-center">
                          {AF1 && (
                            <GatsbyImage
                              image={AF1}
                              alt="Startups illustration"
                              className="border border-gray-200 shadow-lg w-[1000.58px] "
                            />
                          )}
                        </div>
                      </ul>
                    </ul>
                    <br />
                    <p>Click on the submit button.</p>
                    <p>Fertilizer will be added successfully.</p>
                    <p>
                      If the fertilizer was a new buy, in that case it was an
                      expense so a transaction will be created.
                    </p>
                    <br />{" "}
                  </div>
    
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                      Step 2
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
    
                  <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                    Search Fertilizer:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                    You can search the fertilizer from the list of fertilizers of
                    locations present in the system. You can search based on either:
                    <br />
                    <p>
                      <span className="text-primary-pheading font-semibold ">
                        Fertilizer Name
                      </span>
                      : You can search by the name of the Fertilizer.
                    </p>{" "}
                    <br />
                    <p>
                      Then click on the Search button. Also, you can click on the
                      refresh button to refresh the data.
                    </p>
                    <div className="pl-13 pt-8 flex justify-center">
                      {SF && (
                        <GatsbyImage
                          image={SF}
                          alt="Startups illustration"
                          className="border border-gray-200 shadow-lg w-[1000.58px] "
                        />
                      )}
                    </div>
                  </div>
    
                  <br />
                  <br />
    
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                      Step 3
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
    
                  <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                    Edit Fertilizer:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                    If any fertilizer detail you want to change, you can easily edit
                    the details. For that:
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      <li>
                        Click on the edit icon against the fertilizer you want to
                        edit.
                      </li>
                      <li>Fertilizer details screen will open.</li>
                      <li>Click on the field you want to edit.</li>
                      <li>Make changes in the fields</li>
                      <li>Click on submit button.</li>
                      <li>
                        Fertilizer details will be edited/updated successfully.
                      </li>
                    </ul>
                  </div>
    
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                      Step 4
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
    
                  <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                    Delete Fertilizer:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                    If you want to delete any fertilizer, you can easily do so.
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      <li>
                        Click on the delete icon against the row you want to delete
                        in the fertilizers’s table.
                      </li>
                      <li>
                        A dialogue box will appear to confirm whether you want to
                        delete or not.
                      </li>
                      <li>Click on delete button.</li>
                      <li>fertilizer will be deleted successfully.</li>
                    </ul>
                  </div>
    
                  <div className="pl-13 pt-8 flex justify-center">
                    {DF && (
                      <GatsbyImage
                        image={DF}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                  <br />
                  <br />
    
                  <div className="flex items-center pt-5 space-x-4">
                    <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] lg:pl-10 dark:text-[#BE8B45]">
                      Step 5
                    </h2>
                    <div className="flex-1 h-px bg-primary-line"></div>
                  </div>
    
                  <h2 className="text-primary-subheading pt-5 font-semibold text-[22px] font-montserrat lg:pl-10 dark:text-[#D5D5D5]">
                    View Fertilizer:
                  </h2>
                  <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal lg:px-10 dark:text-[#D5D5D5]">
                    You can easily view the details of the fertilizer. For that:
                    <br />
                    <br />
                    <ul className="pl-[15px] list-disc text-primary-activelink font-semibold dark:text-[#D5D5D5]">
                      <li>Hover on three dots.</li>
                      <li>Click on view button.</li>
                      <li>Click on delete button.</li>
                      <li>Fertilizer details page will open.</li>
                      <li>
                        Click on print button if you want to print the details of
                        the fertilizer.
                      </li>
                    </ul>
                  </div>
    
                  <div className="pl-13 pt-8 flex justify-center">
                    {VF && (
                      <GatsbyImage
                        image={VF}
                        alt="Startups illustration"
                        className="border border-gray-200 shadow-lg w-[1000.58px] "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </PrivateRoute>
        </AppLayout>
  )
}

export default orchardfertilizer
