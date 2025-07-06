import * as React from "react";
import {
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import { Link } from "gatsby";

const SideNavBar = ({
  label,
  links,
  setActiveLabel,
  activeLabel,
  link,
}) => {
  const [opened, setOpened] = React.useState(false);
  const hasLinks = Array.isArray(links) && links.length > 0;

  const isActive =
    activeLabel === label ||
    activeLabel === link ||
    (hasLinks && links.some(l => activeLabel === l.label || activeLabel === l.link));

  const handleClick = () => {
    if (hasLinks) {
      setOpened((prev) => !prev);
    }
    setActiveLabel(label);
  };

  return (
    <div>
      {link && !hasLinks ? (
        <Link
          to={link || "#"}
          onClick={() => setActiveLabel(label)}
          className="flex items-center justify-between w-full px-4 py-2 text-left"
        >
          <span
            className={`inline-block items-center w-[240px] pb-2 border-b border-[#DBDBDB] font-montserrat ${
              isActive
                ? "text-primary-activelink font-bold"
                : "text-primary-nlink font-medium"
            }`}
          >
            <span className="pl-0.5">{label}</span>
          </span>
        </Link>
      ) : (
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-left font-montserrat "
        >
          <div className="flex items-center justify-between w-full relative">
            <div className="flex items-center gap-2 relative">
              {isActive && (
                <div className="absolute left-[-10px] top-1/2 transform -translate-y-[60%] h-4 w-1 bg-primary-activelink " />
              )}
              <span
                className={`inline-block w-[240px] border-b border-[#DBDBDB] pb-1 font-montserrat ${
                  isActive
                    ? "text-primary-activelink font-bold"
                    : "text-primary-nlink font-medium"
                }`}
              >
                <span className="pl-1">{label}</span>
              </span>
              {hasLinks && (opened ? <IconChevronDown className="w-4 h-4 text-black mb-[2px] translate-y-[1px]" /> : <IconChevronRight className="w-4 h-4 text-black mb-[2px] translate-y-[1px]" />)}
            </div>
          </div>
        </button>
      )}

      {hasLinks && opened && (
        <ul className="pl-8 mt-1 space-y-1 list-disc list-inside pt-4 ">
          {links.map((item) => (
            <li
              key={item.label}
              className="text-sm font-medium font-montserrat"
            >
              {item.links ? (
                <SideNavBar
                  label={item.label}
                  links={item.links}
                  setActiveLabel={setActiveLabel}
                  activeLabel={activeLabel}
                  link={item.link}
                />
              ) : (
                <Link
                  to={item.link || "#"}
                  onClick={() => setActiveLabel(item.label)}
                  className={`${
                    activeLabel === item.label
                      ? "text-primary-activelink"
                      : "text-primary-navlink" 
                  } `}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SideNavBar;