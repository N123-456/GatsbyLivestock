// src/components/SubMenu.tsx
import React, { memo } from 'react';
import { Link } from 'gatsby';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { MenuItem } from '../../types';
import { useSidebar } from '../../context/SidebarContext';

const SubMenu: React.FC<{ items: MenuItem[]; activeLink: string; level?: number }> = memo(
  ({ items, activeLink, level = 0 }) => {
    const { openMenus, toggleSubmenu } = useSidebar();

    return (
      <ul className={level > 0 ? 'ml-2' : 'pl-6 pt-2'}>
        {items.map((sublink) => {
          const isOpen = openMenus[sublink.name];
          const isActive = activeLink === sublink.path;

          return (
            <li
              key={sublink.name}
              className={`text-[13px] ${
                isActive
                  ? 'text-primary-activelink font-bold'
                  : 'text-primary-nlink font-medium'
              } font-montserrat`}
            >
              <div
                className={`flex items-center justify-between px-1 py-1 cursor-pointer ${
                  sublink.sublinks && isOpen
                    ? 'text-primary-activelink text-[13px] font-bold pl-1'
                    : ''
                }`}
                onClick={(e) => {
                  if (sublink.sublinks) {
                    e.stopPropagation();
                    toggleSubmenu(sublink.name);
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
                    {isOpen ? (
                      <IconChevronDown size={16 - level} />
                    ) : (
                      <IconChevronRight size={16 - level} />
                    )}
                  </span>
                )}
              </div>
              {sublink.sublinks && isOpen && (
                <SubMenu
                  items={sublink.sublinks}
                  activeLink={activeLink}
                  level={level + 1}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }
);

export default SubMenu;