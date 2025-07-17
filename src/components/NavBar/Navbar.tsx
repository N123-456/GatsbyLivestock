import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useState, useRef, useCallback } from "react";

const Sidebar = React.memo(() => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  const [openMenus, setOpenMenus] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarOpenMenus");
      return saved ? JSON.parse(saved) : {};
    }
    return {};
  });

  const [activeLink, setActiveLink] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  });

  // Preserve scroll position
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScrollPosition = localStorage.getItem("sidebarScrollPosition");
      if (savedScrollPosition && sidebarRef.current) {
        sidebarRef.current.scrollTop = parseInt(savedScrollPosition);
      }
    }
  }, []);

  // Save scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        localStorage.setItem("sidebarScrollPosition", sidebarRef.current.scrollTop.toString());
      }
    };

    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.addEventListener("scroll", handleScroll);
      return () => sidebar.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebarOpenMenus", JSON.stringify(openMenus));
    }
  }, [openMenus]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleLocationChange = () => {
        setActiveLink(window.location.pathname);
      };

      // Set initial active link
      handleLocationChange();

      // Listen for navigation changes
      window.addEventListener("popstate", handleLocationChange);
      
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, []);

  // const toggleSubmenu = useCallback((menu: string, event?: React.MouseEvent) => {
  //   if (event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //     [menu]: !prev[menu],
  //   }));
  // }, []);

  const menuItems = [
    { name: "Introduction", path: "/introduction" },
    { name: "Dashboard", path: "/" },
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
          name: "Add Warehouse", path:"/warehouse",
          sublinks: [
            { name: "Shed", path: "/warehouse" },
            { name: "Inputs/Technology ", path: "/inputs" },
            { name: "Vaccination Center", path: "/vaccination" },
            { name: "Feed/Forage", path: "/feed" },
          ],
        },
      ],
    },
    {
      name: "Inventory",
      sublinks: [
        { name: "Purchase", path: "/purchase" },
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
      name: "Financials", path:"/financials",
      sublinks: [
        { name: "General Ledger", path: "/financials" },
        { name: "Trial Balance", path: "/trialbalance" },
        { name: "Balance Sheet", path: "/balancesheet" },
        { name: "Record Transaction", path: "/recordtransaction" },
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

  const toggleSubmenu = useCallback((menu: string, event?: React.MouseEvent) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  setOpenMenus((prev) => {
    const topLevelMenus = menuItems.map((item) => item.name);
    console.log("Toggling:", menu, "Current openMenus:", prev);
    if (topLevelMenus.includes(menu)) {
      const newState = { ...prev };
      topLevelMenus.forEach((topMenu) => {
        if (topMenu !== menu) {
          newState[topMenu] = false;
        }
      });
      newState[menu] = !prev[menu];
      console.log("New openMenus:", newState);
      return newState;
    }
    return {
      ...prev,
      [menu]: !prev[menu],
    };
  });
}, [menuItems]);

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

  const renderMenuItem = useCallback((item: any) => {
    const isActive = !item.sublinks && (activeLink === item.path || activeLink === `${item.path}/`);
    const isOpen = openMenus[item.name];
    const hasSublinks = item.sublinks && item.sublinks.length > 0;

    return (
      <li key={item.name} className="mb-1">
        <div
         className={`flex items-center justify-between pl-[20px] py-2 text-sm font-montserrat cursor-pointer relative ${
                      item.sublinks && openMenus[item.name]
                        ? "text-primary-activelink font-bold"
                        : activeLink === `${item.path}/`
                        ? "text-primary-activelink font-bold"
                        : "text-primary-nlink font-medium"
                    }`}
          onClick={(e) => {
            if (hasSublinks) {
              toggleSubmenu(item.name, e);
            }
          }}
        >
          {hasSublinks && isOpen && (
            <span
              className="absolute left-4 top-[25px] transform -translate-y-1/2 w-[2px] h-4 bg-primary-activelink"
              style={{ height: "16px" }}
            />
          )}
          <span className="flex-1 pl-2 pt-2">
            {item.path && !hasSublinks ? (
              <Link
                to={item.path}
                className={`${
                  isActive ? "text-primary-activelink font-bold" : "text-primary-nlink"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              item.name
            )}
            {!hasSublinks || !isOpen ? (
              <span className="block border-b border-[#DBDBDB] pb-2 w-[207px]" />
            ) : null}
          </span>
          {hasSublinks && (
            <span className={`absolute right-3 ${isOpen ? "bottom-3" : "bottom-4"} text-black`}>
              {isOpen ? (
                <IconChevronDown size={17} />
              ) : (
                <IconChevronRight size={17} />
              )}
            </span>
          )}
        </div>
        {hasSublinks && isOpen && (
          <>
            <ul className="pl-6 pt-2">
              {item.sublinks.map((sublink: any) => {
                const isSublinkActive = sublink.path && (activeLink === sublink.path || activeLink === `${sublink.path}/`);
                return (
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
                        toggleSubmenu(sublink.name, e);
                      }
                    }}
                  >
                    <span className="flex-1">
                      {sublink.path && !sublink.sublinks ? (
                        <Link
                          to={sublink.path}
                          className="flex items-center"
                        >
                          <span className="mr-2 text-black">•</span>
                          {sublink.name}
                        </Link>
                      ) : (
                        <span className="flex items-center">
                          <span className="mr-2">•</span>
                          {sublink.name}
                        </span>
                      )}
                    </span>
                    {sublink.sublinks && (
                      <span className="text-black pr-[9px]">
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
                      {sublink.sublinks.map((nestedSublink: any) => {
                        const isNestedSublinkActive = nestedSublink.path && (activeLink === nestedSublink.path || activeLink === `${nestedSublink.path}/`);
                        return (
                        <li key={nestedSublink.name}>
                          <Link
                            to={nestedSublink.path}
                            className="flex items-center px-4 py-1 text-sm font-montserrat text-primary-nlink font-medium" 
                          >
                            <span className="mr-2">•</span>
                            {nestedSublink.name}
                          </Link>
                        </li>
                      )})}
                    </ul>
                  )}
                </li>
              )})}
            </ul>
            <span className="block border-b border-[#DBDBDB] pb-2 w-[207px] ml-[20px]" />
          </>
        )}
      </li>
    );
  }, [activeLink, openMenus, toggleSubmenu]);

  return (
    <div>
      <aside 
        ref={sidebarRef}
        className="fixed top-0 left-0 h-full lg:w-[250px] sm:w-[170px] overflow-y-auto scrollbar-hidden bg-[#F3FBF2] shadow-lg"
      >
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
            {menuItems.map((item) => renderMenuItem(item))}
          </ul>
        </nav>
      </aside>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;

