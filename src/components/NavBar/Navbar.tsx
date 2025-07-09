import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarOpenMenus");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpenMenus", JSON.stringify(openMenus));
    }
  }, [openMenus]);

  const activeLink = window.location.pathname;

  console.log("Active Link", activeLink);

  const toggleSubmenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const menuItems = [
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
    <div>
      <aside className="fixed top-0 left-0 h-full w-[250px] overflow-y-auto scrollbar-hidden bg-[#F3FBF2] shadow-lg">
        <div className="p-4 pt-[23px] pb-2 pr-[20px] pl-[20px]">
          <h1 className="text-lg font-bold flex items-center">
            <span role="img" aria-label="logo" className="mr-2">
              {fmslogo && (
                <GatsbyImage
                  image={fmslogo}
                  alt="Farm Management System Logo"
                  className="h-[54px] w-[29px]"
                />
              )}
            </span>
            <p className="font-niramit text-[17px] font-bold text-primary-activelink">
              FARM MANAGEMENT <br />
              SYSTEM
            </p>
          </h1>
          <div className="border-b border-[#DBDBDB] w-[207px] ml-[8px] mt-[12px] pt-[12px]" />
        </div>

        <nav className="mt-3 space-y-2">
          <ul>
            {menuItems.map((item) => {
              return item.sublinks && openMenus[item.name] ? (
                <li key={item.name} className="mb-1">
                  <div
                    className={`flex items-center justify-between pl-[20px] py-2 text-sm font-montserrat cursor-pointer relative ${
                      item.sublinks && openMenus[item.name]
                        ? "text-primary-activelink font-bold"
                        : activeLink === `${item.path}/`
                        ? "text-primary-activelink font-bold"
                        : "text-primary-nlink font-medium"
                    }`}
                    onClick={() => {
                      if (item.sublinks) {
                        toggleSubmenu(item.name);
                      } else {
                      }
                    }}
                  >
                    {/* Custom left border for open submenus */}
                    {item.sublinks && openMenus[item.name] && (
                      <span
                        className="absolute left-4 top-[25px] transform -translate-y-1/2 w-[2px] h-4 bg-primary-activelink"
                        style={{ height: "16px" }}
                      />
                    )}
                    <span className="flex-1 pl-2 pt-2">
                      {item.path ? (
                        <Link to={item.path}>{item.name}</Link>
                      ) : (
                        item.name
                      )}
                      {/* Show border-b only if sublinks are not open */}
                      {!item.sublinks || !openMenus[item.name] ? (
                        <span className="block border-b border-[#DBDBDB] pb-2 w-[207px]" />
                      ) : null}
                    </span>
                    {item.sublinks && (
                      <span className="absolute right-3 bottom-3 text-black">
                        {openMenus[item.name] ? (
                          <IconChevronDown size={17} />
                        ) : (
                          <IconChevronRight size={17} />
                        )}
                      </span>
                    )}
                  </div>
                  {item.sublinks && openMenus[item.name] && (
                    <>
                      <ul className="pl-6 pt-2">
                        {item.sublinks.map((sublink) => (
                          <li
                            key={sublink.name}
                            className="text-[12px] text-primary-nlink font-medium font-montserrat"
                          >
                            <div
                              className={`flex items-center justify-between px-1 py-1 text-sm cursor-pointer ${
                                sublink.sublinks && openMenus[sublink.name]
                                  ? "text-primary-activelink text-[13px] font-bold font-montserrat pl-1"
                                  : activeLink === sublink.name
                                  ? "text-primary-activelink"
                                  : ""
                              }`}
                              onClick={(e) => {
                                if (sublink.sublinks) {
                                  e.stopPropagation();
                                  toggleSubmenu(sublink.name);
                                } else {
                                }
                              }}
                            >
                              <span className="flex-1">
                                {sublink.path ? (
                                  <Link to={sublink.path} className="flex-1">
                                    <span className="mr-2 text-black">•</span>
                                    {sublink.name}
                                  </Link>
                                ) : (
                                  <span className="flex-1">
                                    <span className="mr-2">•</span>
                                    {sublink.name}
                                  </span>
                                )}
                              </span>
                              {sublink.sublinks && (
                                <span>
                                  {openMenus[sublink.name] ? (
                                    <IconChevronDown size={16} />
                                  ) : (
                                    <IconChevronRight size={16} />
                                  )}
                                </span>
                              )}
                            </div>
                            {sublink.sublinks && openMenus[sublink.name] && (
                              <ul className="ml-2">
                                {sublink.sublinks.map((nestedSublink) => (
                                  <li key={nestedSublink.name}>
                                    <Link
                                      to={nestedSublink.path}
                                      className={`flex items-center px-4 py-1 text-sm font-montserrat ${
                                        activeLink === nestedSublink.name
                                          ? "text-primary-activelink "
                                          : "text-primary-nlink font-medium"
                                      }`}
                                      onClick={() => {}}
                                    >
                                      <span className="mr-2">•</span>
                                      {nestedSublink.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                      <span className="block border-b border-[#DBDBDB] pb-2 w-[207px] ml-[20px]" />
                    </>
                  )}
                </li>
              ) : (
                <Link to={item.path ?? activeLink}>
                  <li key={item.name} className="mb-1">
                    <div
                      className={`flex items-center justify-between pl-[20px] py-2 text-sm font-montserrat cursor-pointer relative ${
                        item.sublinks && openMenus[item.name]
                          ? "text-primary-activelink font-bold"
                          : activeLink === `${item.path}/`
                          ? "text-primary-activelink font-bold"
                          : "text-primary-nlink font-medium"
                      }`}
                      onClick={() => {
                        if (item.sublinks) {
                          toggleSubmenu(item.name);
                        } else {
                        }
                      }}
                    >
                      {/* Custom left border for open submenus */}
                      {item.sublinks && openMenus[item.name] && (
                        <span
                          className="absolute left-4 top-[25px] transform -translate-y-1/2 w-[2px] h-4 bg-primary-activelink"
                          style={{ height: "16px" }}
                        />
                      )}
                      <span className="flex-1 pl-2 pt-2">
                        {item.path ? (
                          <Link to={item.path}>{item.name}</Link>
                        ) : (
                          item.name
                        )}
                        {/* Show border-b only if sublinks are not open */}
                        {!item.sublinks || !openMenus[item.name] ? (
                          <span className="block border-b border-[#DBDBDB] pb-2 w-[207px]" />
                        ) : null}
                      </span>
                      {item.sublinks && (
                        <span className="absolute right-3 bottom-3 text-black">
                          {openMenus[item.name] ? (
                            <IconChevronDown size={17} />
                          ) : (
                            <IconChevronRight size={17} />
                          )}
                        </span>
                      )}
                    </div>
                    {item.sublinks && openMenus[item.name] && (
                      <>
                        <ul className="pl-6 pt-2">
                          {item.sublinks.map((sublink) => (
                            <li
                              key={sublink.name}
                              className="text-[12px] text-primary-nlink font-medium font-montserrat"
                            >
                              <div
                                className={`flex items-center justify-between px-1 py-1 text-sm cursor-pointer ${
                                  sublink.sublinks && openMenus[sublink.name]
                                    ? "text-primary-activelink text-[13px] font-bold font-montserrat pl-1"
                                    : activeLink === sublink.name
                                    ? "text-primary-activelink"
                                    : ""
                                }`}
                                onClick={(e) => {
                                  if (sublink.sublinks) {
                                    e.stopPropagation();
                                    toggleSubmenu(sublink.name);
                                  } else {
                                  }
                                }}
                              >
                                <span className="flex-1">
                                  {sublink.path ? (
                                    <Link to={sublink.path} className="flex-1">
                                      <span className="mr-2 text-black">•</span>
                                      {sublink.name}
                                    </Link>
                                  ) : (
                                    <span className="flex-1">
                                      <span className="mr-2">•</span>
                                      {sublink.name}
                                    </span>
                                  )}
                                </span>
                                {sublink.sublinks && (
                                  <span>
                                    {openMenus[sublink.name] ? (
                                      <IconChevronDown size={16} />
                                    ) : (
                                      <IconChevronRight size={16} />
                                    )}
                                  </span>
                                )}
                              </div>
                              {sublink.sublinks && openMenus[sublink.name] && (
                                <ul className="ml-2">
                                  {sublink.sublinks.map((nestedSublink) => (
                                    <li key={nestedSublink.name}>
                                      <Link
                                        to={nestedSublink.path}
                                        className={`flex items-center px-4 py-1 text-sm font-montserrat ${
                                          activeLink === nestedSublink.name
                                            ? "text-primary-activelink "
                                            : "text-primary-nlink font-medium"
                                        }`}
                                        onClick={() => {}}
                                      >
                                        <span className="mr-2">•</span>
                                        {nestedSublink.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                        <span className="block border-b border-[#DBDBDB] pb-2 w-[207px] ml-[20px]" />
                      </>
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
