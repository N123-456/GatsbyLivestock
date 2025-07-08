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
            Starting Guide for Warehouse:
          </h2>
          <p className="text-primary-paragraph text-[18px] font-montserrat font-normal px-10 pt-4">
            A warehouse is a storage facility where goods, equipment, or produce
            are kept safely before use or distribution. It helps organize and
            manage items efficiently, ensuring they are protected from damage or
            spoilage. Warehouses are often used to store harvested crops, seeds,
            tools, or farming supplies. Proper tracking of stock levels helps
            avoid shortages or excess inventory. Items in a warehouse can be
            categorized, labelled, and retrieved easily when needed. This
            improves overall farm management and ensures timely access to
            essential materials. For adding warehouse, you first need to add a
            farm location. If you have not yet have farm location added, add the
            farm location first. See the user guide for adding farm location.
            The details are provided in the above part of the document.
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
            Add Warehouse:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            <p>For adding harvest details:</p>
            Click on{" "}
            <span className="text-primary-activelink font-semibold">
              "Add Warehouse"
            </span>
            button.
            <p>Enter the required details including.</p>
            <p>
              Name of the warehouse, location where the warehouse will be
              located.
            </p>
            <p>
              Add storage racks and their capacity to store different inventory
              items and vehicles in an organized way.
            </p>
            <p>There are four options:</p>
            <br />
            <ul className="list-disc">
              <li>
                Shed: The Shed section is used for managing vehicle storage and
                tools. It provides space for storing vehicles and repair tools.
                Users can maintain equipment necessary for vehicle repairs,
                ensuring smooth vehicle operations.{" "}
              </li>
              <ul>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Oil and Fluid:
                  </span>{" "}
                  Various oils and fluids used for farm machinery and equipment
                  maintenance.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Spare Parts:
                  </span>{" "}
                  Extra parts for repairing and replacing damaged farm
                  machinery.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Tools:
                  </span>{" "}
                  Equipment and instruments used for farming tasks and repairs.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Parking:
                  </span>{" "}
                  Space for parking farm vehicles and machinery.
                </li>
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
              <li>
                Inputs/Technologies: The Inputs/Technologies Section is designed
                for handling and storing chemicals, such as fertilizers,
                pesticides, weedicides, and application equipment, safely.
              </li>
              <ul>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Fertilizer:
                  </span>
                  : Materials used to improve soil quality and help crops grow.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Pesticides:
                  </span>{" "}
                  Chemicals used to protect crops from pests and insects.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Wedicides:
                  </span>{" "}
                  Chemicals to control and eliminate weeds from the farm.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Application Equipment:
                  </span>{" "}
                  Tools and machines used to apply fertilizers, pesticides, and
                  weedicides.
                </li>
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
              <li>
                Vaccination Centre: The Vaccination Centre ensures proper
                management of vaccines and immunization tools. Options include
                Cabinets and Refrigerators for temperature-sensitive vaccines.
              </li>
              <ul>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Cabinet:
                  </span>{" "}
                  Storage space for vaccines and immunization materials.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Refrigerator:
                  </span>{" "}
                  A cooling appliance used to store vaccines and immunization
                  materials.
                </li>
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
              <li>
                Feed/ Forage: The Feed/Forage Section is used for storig
                harvested crops and animal feed. It ensures optimal conditions
                for storage to prevent spoilage and loss.{" "}
              </li>
              <ul>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Animal Feed:
                  </span>{" "}
                  Food provided to livestock for their nutrition.
                </li>
                <li>
                  <span className="text-primary-pheading font-semibold">
                    Harvest:
                  </span>{" "}
                  The yield collected from crops.
                </li>
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
              <li>Choose the storage option where you want to add racks.</li>
              <div className="pl-13 pt-8 flex justify-center">
                {listview && (
                  <GatsbyImage
                    image={listview}
                    alt="Startups illustration"
                    className="bg-white w-[1000.58px] "
                  />
                )}
              </div><br/>

              <li>
                After choosing the option, start adding racks for storing
                different inventory items.
              </li>
              <li>Click on “Add More” button.</li>
              <li>
                Add rack name (e.g. Rack 1), rack capacity (e.g. 100), unit
                (e.g. bags), and description (e.g. This rack contains
                fertilizers with a capacity of 100 bags) of the rack. You can
                add as many racks as per your requirement by clicking “Add more”
                button. In the similar way if you want to remove any rack, click
                on the “remove” button.
              </li>
              <li>
                After adding all the racks for different portions, click on the
                submit button.
              </li>
              <li>Warehouse will be added successfully.</li>
            </ul>
            <br />
          </div>
          <div className="flex items-center pt-5 space-x-4">
            <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
              Step 2
            </h2>
            <div className="flex-1 h-px bg-primary-line"></div>
          </div>
          <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
            Search Warehouse:
          </h2>
          <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
            You can search the warehouse from the list of warehouse of locations
            present in the system. You can search based on either:
            <br />
            <p>Warehouse Name: You can search by warehouse name.</p>
            <br />
            <p>
              Then click on the Search button. Also, you can click on the
              refresh button to refresh the data.
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
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Edit Warehouse:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If any warehouse detail you want to change, you can easily edit
              the details. For that:
              <br />
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>
                  Click on the edit icon against the warehouse you want to edit.
                </li>
                <li>Warehouse details screen will open.</li>
                <li>Click on the field you want to edit.</li>
                <li>Make changes in the fields</li>
                <li>Click on submit button.</li>
                <li>Warehouse details will be edited/updated successfully.</li>
              </ul>
            </div>
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 4
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              Delete Warehouse:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              If you want to delete any warehouse, you can easily do so.
              <br />
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>
                  Click on the delete icon against the row you want to delete in
                  the warehouse’s table.
                </li>
                <li>
                  A dialogue box will appear to confirm whether you want to
                  delete or not.
                </li>
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
            <div className="flex items-center pt-5 space-x-4">
              <h2 className="text-primary-activelink font-montserrat font-semibold text-[22px] pl-10">
                Step 5
              </h2>
              <div className="flex-1 h-px bg-primary-line"></div>
            </div>
            <h2 className="text-primary-subheading font-semibold text-[22px] font-montserrat pt-5 pl-10">
              View Warehouse:
            </h2>
            <div className="text-primary-paragraph2 text-[18px] font-montserrat font-normal px-10">
              You can easily view the details of the warehouse. For that:
              <br />
              <br />
              <ul className="pl-[15px] list-disc text-primary-activelink font-semibold">
                <li>Hover on three dots.</li>
                <li>Click on view button.</li>
                <li>Click on delete button.</li>
                <li>Warehouse details page will open.</li>
                <li>
                  Click on print button if you want to print the details of the
                  warehouse.
                </li>
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

export default harvest;
