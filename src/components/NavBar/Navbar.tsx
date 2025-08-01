// src/components/NavBar/Navbar.tsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  IconChevronDown,
  IconChevronRight,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { isLoggedIn } from "../../utils/auth";
import { navigate } from "gatsby";

const Sidebar = React.memo(() => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
        localStorage.setItem(
          "sidebarScrollPosition",
          sidebarRef.current.scrollTop.toString()
        );
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
        if (window.innerWidth < 768) {
          setIsSidebarOpen(false);
        }
      };

      handleLocationChange();
      window.addEventListener("popstate", handleLocationChange);
      return () => {
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, []);

  const handleDashboardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    const loggedIn = isLoggedIn();
    console.log("handleDashboardClick: isLoggedIn =", loggedIn);
    if (!loggedIn) {
      e.preventDefault();
      console.log("handleDashboardClick: Redirecting to /login");
      navigate("/login");
    } else {
      setActiveLink(path);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      }
    }
  };

  const toggleSubmenu = useCallback((menu, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setOpenMenus((prev) => {
      const topLevelMenus = menuItems.map((item) => item.name);
      if (topLevelMenus.includes(menu)) {
        const newState = { ...prev };
        topLevelMenus.forEach((topMenu) => {
          if (topMenu !== menu) {
            newState[topMenu] = false;
          }
        });
        newState[menu] = !prev[menu];
        return newState;
      }
      return {
        ...prev,
        [menu]: !prev[menu],
      };
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

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
        { name: "Sales After Storage", path: "/emptypage" },
        { name: "Health Monitoring", path: "/emptypage" },
      ],
    },
    {
      name: "Orchards",
      sublinks: [
        { name: "Add New Orchard", path: "/emptypage" },
        { name: "Fertilizers", path: "/emptypage" },
        { name: "Chemicals", path: "/emptypage" },
        { name: "Harvests", path: "/emptypage" },
        { name: "Field Inspections", path: "/emptypage" },
        { name: "Sales After Storage", path: "/emptypage" },
        { name: "Health Monitoring", path: "/emptypage" },
      ],
    },
    {
      name: "Warehouse",
      sublinks: [
        {
          name: "Add Warehouse",
          path: "/warehouse",
          sublinks: [
            { name: "Shed", path: "/warehouse" },
            { name: "Inputs/Technology", path: "/inputs" },
            { name: "Vaccination Center", path: "/vaccination" },
            { name: "Feed/Forage", path: "/feed" },
          ],
        },
      ],
    },
    {
      name: "Inventory",
      sublinks: [
         { name: "Add Inventory", path: "/inventory" },
        { name: "Purchase", path: "/purchase" },
        { name: "Transfer", path: "/emptypage" },
      ],
    },
    {
      name: "Machinery/Tools",
      sublinks: [
        { name: "Add New Machinery", path: "/machinery" },
        { name: "Maintenance", path: "/maintenance" },
        { name: "Track Usage", path: "/tracking" },
      ],
    },
    { name: "Contact", path: "/contact" },
    {
      name: "Financials",
      path: "/financials",
      sublinks: [
        { name: "General Ledger", path: "/financials" },
        { name: "Trial Balance", path: "/trialbalance" },
        { name: "Balance Sheet", path: "/balancesheet" },
        { name: "Record Transaction", path: "/recordtransaction" },
        { name: "Create Expense", path: "/emptypage" },
        { name: "Add Account Head", path: "/emptypage" },
      ],
    },
    {
      name: "Manage Users",
      path: "/user",
    },
    {
      name: "Reports",
      sublinks: [
        { name: "Crop Activity Reports", path: "/emptypage" },
        { name: "Equipment Reports", path: "/emptypage" },
        { name: "Inventory Reports", path: "/emptypage" },
        { name: "Orchard Reports", path: "/emptypage" },
        { name: "P&L Reports", path: "/emptypage" },
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

  const renderMenuItem = useCallback(
    (item) => {
      const isActive =
        !item.sublinks &&
        (activeLink === item.path || activeLink === `${item.path}/`);
      const isOpen = openMenus[item.name];
      const hasSublinks = item.sublinks && item.sublinks.length > 0;

      return (
        <div key={item.name}>
          <li className="mb-1">
            {item.path && !hasSublinks ? (
              <Link
                to={item.path}
                className="block w-full"
                onClick={(e) => {
                  if (item.name === "Dashboard") {
                    handleDashboardClick(e, item.path);
                  } else {
                    setActiveLink(item.path);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }
                }}
              >
                <div
                  className={`flex items-center w-full text-left pl-4 py-2 pr-0 text-xs md:text-sm font-montserrat cursor-pointer relative ${
                    isActive
                      ? "text-primary-activelink font-bold dark:text-[#BE8B45]"
                      : "text-primary-nlink font-medium dark:text-[#FFFFFF]"
                  }`}
                >
                  <span className="flex-1 pl-2 pt-2">
                    {item.name}
                    <span className="block border-b border-[#DBDBDB] pb-2 w-[90%]" />
                  </span>
                </div>
              </Link>
            ) : (
              <button
                className={`flex items-center w-full text-left pl-4 py-2 pr-0 text-xs md:text-sm font-montserrat cursor-pointer relative ${
                  item.sublinks && openMenus[item.name]
                    ? "text-primary-activelink font-bold dark:text-[#BE8B45]"
                    : activeLink === `${item.path}/`
                    ? "text-primary-activelink font-bold dark:text-[#BE8B45]"
                    : "text-primary-nlink font-medium dark:text-[#FFFFFF]"
                }`}
                onClick={(e) => {
                  if (hasSublinks) {
                    toggleSubmenu(item.name, e);
                  }
                }}
              >
                {hasSublinks && isOpen && (
                  <span
                    className="absolute left-4 top-[25px] transform -translate-y-1/2 w-[2px] h-4 bg-primary-activelink dark:bg-[#BE8B45]"
                    style={{ height: "16px" }}
                  />
                )}
                <span className="flex-1 pl-2 pt-2">
                  {item.name}
                  {!hasSublinks || !isOpen ? (
                    <span className="block border-b border-[#DBDBDB] pb-2 w-[90%]" />
                  ) : null}
                </span>
                {hasSublinks && (
                  <span
                    className={`absolute ${
                      isOpen ? "bottom-2 right-3 dark:text-[#BE8B45]" : "bottom-5 right-5 dark:text-[#FFFFFF]"
                    } text-black`}
                  >
                    {isOpen ? (
                      <IconChevronDown size={17} />
                    ) : (
                      <IconChevronRight size={17} />
                    )}
                  </span>
                )}
              </button>
            )}
            {hasSublinks && isOpen && (
              <>
                <ul className="pl-6 pt-2">
                  {item.sublinks.map((sublink) => {
                    const isSublinkActive =
                      sublink.path &&
                      (activeLink === sublink.path ||
                        activeLink === `${sublink.path}/`);

                    return (
                      <li
                        key={sublink.name}
                        className="text-[11px] md:text-[12px] text-primary-nlink font-medium font-montserrat dark:text-[#FFFFFF]"
                      >
                        <button
                          className={`flex items-center justify-between w-full px-1 py-1 text-[11px] md:text-sm cursor-pointer ${
                            sublink.sublinks && openMenus[sublink.name]
                              ? "text-primary-activelink text-[12px] md:text-[13px] font-bold font-montserrat pl-1 dark:text-[#BE8B45] dark:text-[#FFFFFF]"
                              : activeLink === sublink.name
                              ? "text-primary-activelink dark:text-[#BE8B45]"
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
                                className="flex items-center "
                              >
                                <span className="mr-2 text-black dark:text-[#FFFFFF]">•</span>
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
                            <span className="text-black pr-[9px] dark:text-[#BE8B45]">
                              {openMenus[sublink.name] ? (
                                <IconChevronDown size={16} />
                              ) : (
                                <IconChevronRight size={16} />
                              )}
                            </span>
                          )}
                        </button>
                        {sublink.sublinks && openMenus[sublink.name] && (
                          <ul className="ml-2">
                            {sublink.sublinks.map((nestedSublink) => {
                              const isNestedSublinkActive =
                                nestedSublink.path &&
                                (activeLink === nestedSublink.path ||
                                  activeLink === `${nestedSublink.path}/`);
                              return (
                                <li key={nestedSublink.name}>
                                  <Link
                                    to={nestedSublink.path}
                                    className="flex items-center px-2 py-1 text-[10px] md:text-sm font-montserrat text-primary-nlink font-medium dark:text-[#FFFFFF]"
                                  >
                                    <span className="mr-2 dark-text-[#FFFFFF]">•</span>
                                    {nestedSublink.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <span className="block border-b border-[#DBDBDB] pb-2 w-[83%] ml-[22px]" />
              </>
            )}
          </li>
        </div>
      );
    },
    [activeLink, openMenus, toggleSubmenu]
  );

  return (
    <div>
      <button
        className={`md:hidden fixed ${
          isSidebarOpen ? "left-[250px] top-1" : "left-1 top-1 bg-gray-200"
        } z-50 p-2  text-black rounded-md`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <IconX size={18} /> : <IconMenu2 size={24} />}
      </button>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-[#F3FBF2] dark:bg-[#2C2C2C] shadow-lg overflow-y-auto scrollbar-hidden transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-[250px] w-[290px]`}
      >
        <div className="pt-[23px]">
          <div className="font-bold flex items-center pl-[16px]">
            <span role="img" aria-label="logo" className="mr-2">
              {fmslogo && (
                <GatsbyImage
                  image={fmslogo}
                  alt="Farm Management System Logo"
                />
              )}
            </span>
            <p className="font-niramit lg:text-[17px] sm:text-[4px] md:text-[4px] text-primary-activelink dark:text-[#FFFFFF]">
              FARM MANAGEMENT <br />
              SYSTEM
            </p>
          </div>
          <div className="border-b border-[#DBDBDB] dark:border-[#0F783B] w-[82%] ml-[22px] mt-[12px] pt-[12px]" />
        </div>
        <nav className="mt-3 space-y-2">
          <ul>{menuItems.map((item) => renderMenuItem(item))}</ul>
        </nav>
      </aside>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
