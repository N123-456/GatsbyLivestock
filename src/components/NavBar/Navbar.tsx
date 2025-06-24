import React, { useState } from "react";
import SideNavBar from "./SideNavBar";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Navbar = () => {
    const [activeLabel, setActiveLabel] = useState("Dashboard");
  const navData = [
    { label: "Introduction", link: "/" },
    { label: "Dashboard", link: "/" },
    { label: "Tasks", link: "/" },
    {
      label: "Farm Location",
      initiallyOpened: true,
      links: [
        { label: "Add Location", link: "/" },
        { label: "Soil Test", link: "/" },
        { label: "Water Test", link: "/" },
      ],
    },
    {
      label: "Planting",

      links: [
        { label: "Add New Planting", link: "/" },
        { label: "Fertilizers", link: "/" },
        { label: "Chemicals", link: "/" },
        { label: "Harvests", link: "/" },
        { label: "Field Inspections", link: "/" },
        { label: "Sales After Storage", link: "/" },
        { label: "Health Monitoring", link: "/" },
      ],
    },
    {
      label: "Orchards",

      links: [
        { label: "Add New Orchard", link: "/" },
        { label: "Fertilizers", link: "/" },
        { label: "Chemicals", link: "/" },
        { label: "Harvests", link: "/" },
        { label: "Field Inspections", link: "/" },
        { label: "Sales After Storage", link: "/" },
        { label: "Health Monitoring", link: "/" },
      ],
    },
    {
      label: "Warehouse",
      links: [
        {
          label: "Add Warehouse",
          link: "/",
        },
        {
          label: "Shed",
          link: "/",
        },
        {
          label: "Inputs/Technology Solutions",
          link: "/",
        },
        {
          label: "Vaccination Center",
          link: "/",
        },
        {
          label: "Feed Storage",
          link: "/",
        },
      ],
    },
    {
      label: "Inventory",
      links: [
        {
          label: "Purchase",
          link: "/",
        },
        {
          label: "Transfer",
          link: "/",
        },
      ],
    },
    {
      label: "Machinery/Tools",
      links: [
        {
          label: "Add New Machinery ",
          link: "/",
        },
        {
          label: "Maintenance",
          link: "/",
        },
        {
          label: "Track Usage",
          link: "/",
        },
      ],
    },
    { label: "Contact", link: "/" },
    {
      label: "Financials",
      links: [
        { label: "General Legder", link: "/" },
        { label: "Trial Balance", link: "/" },
        { label: "Balance Sheet", link: "/" },
        { label: "Record Transaction", link: "/" },
        { label: "Create Expense", link: "/" },
        { label: "Add Account Head", link: "/" },
      ],
    },
    { label: "Manage Users", link: "/" },
    {
      label: "Reports",
      links: [
        { label: "Crop Activity Reports", link: "/" },
        { label: "Equipment Reports", link: "/" },
        { label: "Inventory Reports", link: "/" },
        { label: "Orchard Reports", link: "/" },
        { label: "Create Expense", link: "/" },
        { label: "P&L Reports", link: "/" },
      ],
    },
  ];
  const data = useStaticQuery(graphql`
    query {
      fmslogo: file(relativePath: { eq: "fmslogo.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const fmslogo = getImage(data.fmslogo);
  return (
    <nav className="w-80 h-screen bg-[#F3FBF2] shadow-lg p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center space-x-2 border-b border-w-[207px] border-bg-[#DBDBDB]">
          {fmslogo && <GatsbyImage image={fmslogo} alt={""} />}
          <h2 className="text-xl font-niramit text-[17px] font-bold text-primary-activelink">
            FARM MANAGEMENT SYSTEM
          </h2>
        </div>
      </div>

      {/* Links */}
      <div className="space-y-2  h-[calc(100%-120px)]">
        {navData.map((item, index) => (
          <SideNavBar
            key={index}
            label={item.label}
            links={item.links}
            initiallyOpened={item.initiallyOpened}
            setActiveLabel={setActiveLabel}
            activeLabel={activeLabel}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
