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

const SideNavBar = ({
  label,
  links,
  initiallyOpened = false,
  setActiveLabel,
  activeLabel,
  link,
}) => {
  const [opened, setOpened] = React.useState(initiallyOpened);
  const hasLinks = Array.isArray(links) && links.length > 0;
  const isActive =
    activeLabel === label ||
    (hasLinks && links.some((link) => link.label === activeLabel));

  const handleClick = () => {
    setActiveLabel(label);
    if (hasLinks) {
      setOpened((o) => !o);
    }
  };

  return (
    <div>
      {link && !hasLinks ? (
        <Link
          to={link || "#"}
          onClick={() => setActiveLabel(label)}
          className={`flex items-center justify-between w-full px-4 py-2 text-left ${
            isActive
              ? "text-primary-activelink font-montserrat font-bold  "
              : "text-primary-nlink font-montserrat font-medium "
          }`}
        >
          {/* label css */}
          <div className="flex items-center gap-2">
            <span  className={`border-b w-[220px] border-[#DBDBDB] ${
          isActive ? "text-primary-activelink " : "text-primary-nlink"
        }`}>
              {label}
            </span>
          </div>
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className={`flex items-center justify-between w-full px-4 py-4  text-left ${
    isActive
      ? "text-primary-activelink font-montserrat py-2 font-bold border-l-2 h-[12px] pl-1 border-primary-activelink "
      : "text-primary-nlink font-montserrat font-medium py-2 "
  }`}
          
        >
          {/* nested link parent label */}
          <div className="flex items-center gap-2">
            <span
      className={`border-b w-[220px] border-[#DBDBDB] font-montserrat ${
        isActive ? "text-primary-activelink" : "text-primary-nlink"
      }`}
    >
      {label}
    </span>
          </div>
          {hasLinks &&
            (opened ? (
              <IconChevronDown className="w-4 h-4 text-gray-600" />
            ) : (
              <IconChevronRight className="w-4 h-4 text-gray-600" />
            ))}
        </button>
      )}

      {hasLinks && opened && (
        <ul className="pl-8 mt-1 space-y-1 list-disc list-inside pt-4">
          {links.map((link) => (
            <li
              key={link.label}
             
              className={`text-sm font-medium font-montserrat ${
                activeLabel === link.label
                  ? "text-primary-activelink"
                  : "text-primary-navlink"
              }`}
            >
              <Link
                to={link.link || "#"}
             
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