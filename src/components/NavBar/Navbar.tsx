import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [activeLabel, setActiveLabel] = useState("/introduction");
  const navData = [
    { label: "Introduction", link: "/introduction" },
    { label: "Dashboard", link: "/" },
    { label: "Tasks", link: "/tasks" },
    {
      label: "Farm Location",

      links: [
        { label: "Add Location", link: "/addlocation" },
        { label: "Soil Test", link: "/soiltest" },
        { label: "Water Test", link: "/watertest" },
      ],
    },
    {
      label: "Planting",

      links: [
        { label: "Add New Planting", link: "/planting" },
        { label: "Fertilizers", link: "/fertilizers" },
        { label: "Chemicals", link: "/pesticides" },
        { label: "Harvests", link: "/harvest" },
        { label: "Field Inspections", link: "/fieldinspection" },
        { label: "Sales After Storage", link: "/harvest" },
        { label: "Health Monitoring", link: "/harvest" },
      ],
    },
    {
      label: "Orchards",

      links: [
        { label: "Add New Orchard", link: "" },
        { label: "Fertilizers", link: "" },
        { label: "Chemicals", link: "" },
        { label: "Harvests", link: "" },
        { label: "Field Inspections", link: "" },
        { label: "Sales After Storage", link: "" },
        { label: "Health Monitoring", link: "" },
      ],
    },
   {
  label: "Warehouse",
  links: [
    {
      label: "Add Warehouse",link:"/warehouse",
      links: [
        { label: "Shed", link: "/warehouse/shed" },
        { label: "Inputs/Technology Solutions", link: "/warehouse/inputs" },
        { label: "Vaccination Center", link: "/warehouse/vaccination" },
        { label: "Feed/Forage", link: "/warehouse/feed" },
      ],
    },
  ],
},


    {
      label: "Inventory",

      links: [
        { label: "Add Inventory", link: "/inventory" },
        { label: "Purchase", link: "/purchase" },
        { label: "Transfer", link: "/purchase" },
      ],
    },
    {
      label: "Machinery/Tools",

      links: [
        { label: "Add New Machinery ", link: "/machinery" },
        { label: "Maintenance", link: "/maintenance" },
        { label: "Track Usage", link: "/tracking" },
      ],
    },
    { label: "Contact", link: "/tracking" },
    {
      label: "Financials",

      links: [
        { label: "General Legder", link: "" },
        { label: "Trial Balance", link: "" },
        { label: "Balance Sheet", link: "" },
        { label: "Record Transaction", link: "" },
        { label: "Create Expense", link: "" },
        { label: "Add Account Head", link: "" },
      ],
    },

    { label: "Manage Users", link: "/inventory" },

    {
      label: "Reports",

      links: [
        { label: "Crop Activity Reports", link: "" },
        { label: "Equipment Reports", link: "" },
        { label: "Inventory Reports", link: "" },
        { label: "Orchard Reports", link: "" },
        { label: "Create Expense", link: "" },
        { label: "P&L Reports", link: "" },
      ],
    },
  ];
  const data = useStaticQuery(graphql`
    query {
      fmslogo: file(relativePath: { eq: "fmslogo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, height: 54, width: 29)
        }
      }
    }
  `);

  const fmslogo = getImage(data.fmslogo);
  return (
    <nav className="fixed top-0 left-0 z-50 w-80 h-screen overflow-y-auto scrollbar-hidden bg-[#F3FBF2] shadow-lg p-4">
      {/* Header */}
      <div className="inline-block border-b border-[#DBDBDB] w-[240px] mb-4 pb-6 ">
        <div className="flex items-center space-x-2 pl-[20px] pt-[23px]">
          {fmslogo && (
            <GatsbyImage
              image={fmslogo}
              alt={""}
              className="h-[54px] w-[29px]"
            />
          )}
          <h2 className="font-niramit text-[17px] font-bold text-primary-activelink">
            FARM MANAGEMENT
            <br />
            SYSTEM
          </h2>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-2 h-[calc(100%-120px)]">
        {navData.map((item, index) => (
          <SideNavBar
            key={index}
            label={item.label}
            links={item.links}
            setActiveLabel={setActiveLabel}
            activeLabel={activeLabel}
            link={item.link}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
