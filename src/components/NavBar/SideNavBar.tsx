import * as React from "react";
import {
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { Link } from "gatsby";

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
      {/* Single Link (not collapsible) */}
      {link && !hasLinks ? (
        <Link
          to={link || "#"}
          onClick={() => setActiveLabel(label)}
          className="flex items-center justify-between w-full px-4 py-2 text-left"
        >
          <div className="flex items-center gap-2 w-full">
            <span
              className={`flex items-center w-[220px] pl-2 border-b border-[#DBDBDB] font-montserrat ${
                isActive
                  ? "text-primary-activelink font-bold"
                  : "text-primary-nlink font-medium"
              }`}
            >
              {label}
            </span>
          </div>
        </Link>
      ) : (
        // Parent with nested links (collapsible)
        <button
          onClick={handleClick}
          className="flex items-center justify-between w-full px-4 py-2 text-left font-montserrat"
        >
          <div className="flex items-center gap-2 w-full">
            <span
              className={`inline-flex items-center w-[220px] pl-2 border-b border-[#DBDBDB] font-montserrat ${
                isActive
                  ? "border-l-4 border-l-primary-activelink text-primary-activelink font-bold"
                  : "border-l-4 border-l-transparent text-primary-nlink font-medium"
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

      {/* Sub-links */}
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
