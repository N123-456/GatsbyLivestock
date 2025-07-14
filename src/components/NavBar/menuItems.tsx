// src/config/menuItems.ts
import { MenuItem } from "../../types";

export const menuItems: MenuItem[] = [
  { name: "Introduction", path: "/introduction" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Tasks", path: "/tasks" },
  {
    name: "Farm Location",
    sublinks: [
      { name: "Add Location", path: "/addlocation" },
      { name: "Soil Test", path: "/soiltest" },
      { name: "Water Test", path: "/watertest" },
    ],
  },
      {
      name: "Planting",
      sublinks: [
        { name: "Add New Planting", path: "/planting" },
        { name: "Fertilizers", path: "/fertilizers" },
        { name: "Chemicals", path: "/pesticides" },
        { name: "Harvests", path: "/harvest" },
        { name: "Field Inspections", path: "/fieldinspection" },
        { name: "Sales After Storage", path: "/planting" },
        { name: "Health Monitoring", path: "/planting" },
      ],
    },
    {
      name: "Orchards",
      sublinks: [
        { name: "Add New Orchard", path: "/warehouse" },
        { name: "Fertilizers", path: "/warehouse" },
        { name: "Chemicals", path: "/warehouse" },
        { name: "Harvests", path: "/warehouse" },
        { name: "Field Inspections", path: "/warehouse" },
        { name: "Sales After Storage", path: "/warehouse" },
        { name: "Health Monitoring", path: "/warehouse" },
      ],
    },
    {
      name: "Warehouse",
      sublinks: [
        {
          name: "Add Warehouse",
          sublinks: [
            { name: "Shed", path: "/warehouse" },
            { name: "Inputs/Technology ", path: "/warehouse" },
            { name: "Vaccination Center", path: "/maintenance" },
            { name: "Feed/Forage", path: "/maintenance" },
          ],
        },
      ],
    },
    {
      name: "Inventory",
      sublinks: [
        { name: "Purchase", path: "/maintenance" },
        { name: "Transfer", path: "/maintenance" },
      ],
    },
    {
      name: "Machinery/Tools",
      sublinks: [
        { name: "Add New Machinery", path: "/maintenance" },
        { name: "Maintenance", path: "/maintenance" },
        { name: "Track Usage", path: "/tracking" },
      ],
    },
    { name: "Contact", path: "/contact" },
    {
      name: "Financials",
      sublinks: [
        { name: "General Ledger", path: "/maintenance" },
        { name: "Trial Balance", path: "/maintenance" },
        { name: "Balance Sheet", path: "/maintenance" },
        { name: "Record Transaction", path: "/maintenance" },
        { name: "Create Expense", path: "/maintenance" },
        { name: "Add Account Head", path: "/maintenance" },
      ],
    },
    {
      name: "Manage Users",
      path: "/user",
    },
    {
      name: "Reports",
      sublinks: [
        { name: "Crop Activity Reports", path: "/maintenance" },
        { name: "Equipment Reports", path: "/maintenance" },
        { name: "Inventory Reports", path: "/maintenance" },
        { name: "Orchard Reports", path: "/maintenance" },
        { name: "P&L Reports", path: "/maintenance" },
      ],
    },
  // ... rest of your menu items from your original code
];