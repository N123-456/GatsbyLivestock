import * as React from "react";
import {
  IconHome,
  IconMapPin,
  IconBuilding,
  IconShoppingCart,
  IconClipboardList,
  IconBowl,
  IconRings,
  IconTrash,
  IconHeartPause,
  IconWallet,
  IconChevronUp,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";

import { Link } from "gatsby";
import { useState } from "react";


const SideNavBar = ({ label, links, initiallyOpened = false,setActiveLabel, activeLabel }) => {

 const [opened, setOpened] = React.useState(initiallyOpened);
  const hasLinks = Array.isArray(links) && links.length > 0;
const isActive = activeLabel === label;
  const handleClick = () => {
    if (hasLinks) {
      setOpened((o) => !o);
    } else {
      setActiveLabel(label);
    }
  };
  return (
    <div>
     <button
      onClick={handleClick}
        className={`flex items-center justify-between w-full px-4 py-2 text-left   ${isActive ? "text-primary-activelink border-l border-h-[2px] border-primary-activelink font-montserrat font-bold " : "text-primary-navlink font-montserrat font-bold hover:bg-gray-200"}`} 
       
      >
        <div className="flex items-center gap-2">
          
          <span className="font-montserrat text-primary-navlink font-medium text[12px] border-b w-[220px] border-bg-[#DBDBDB]">{label}</span>
        </div>
        {hasLinks && (
          opened ? (
            <IconChevronDown className="w-4 h-4 text-gray-600" />
          ) : (
           <IconChevronRight className="w-4 h-4 text-gray-600" />
          )
        )}
      </button>

      {hasLinks && opened && (
        <ul className="pl-8 mt-1 space-y-1 list-disc list-inside">
          {links.map((link) => (
            <li key={link.label} className="text-sm font-medium font-montserrat text-primary-navlink">
              <Link
                to={link.link || "#"}
                className="hover:text-green-900 "
                onClick={() => setActiveLabel(link.label)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideNavBar;
