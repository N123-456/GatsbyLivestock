// src/components/MenuItemComponent.tsx
import React, { memo } from 'react';
import { Link } from 'gatsby';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';
import { MenuItem } from '../../types';
import SubMenu from './SubMenu';
import { useSidebar } from '../../context/SidebarContext';

const MenuItemComponent: React.FC<{ item: MenuItem; activeLink: string }> = memo(({ item, activeLink }) => {
  const { openMenus, toggleSubmenu } = useSidebar();
  const isOpen = openMenus[item.name];
  const isActive = activeLink === item.path;

  return (
    <li className="mb-1">
      {item.path ? (
        <Link to={item.path}>
          <MenuItemContent
            item={item}
            isOpen={isOpen}
            isActive={isActive}
            toggleSubmenu={toggleSubmenu}
          />
        </Link>
      ) : (
        <MenuItemContent
          item={item}
          isOpen={isOpen}
          isActive={isActive}
          toggleSubmenu={toggleSubmenu}
        />
      )}
      {item.sublinks && isOpen && (
        <>
          <SubMenu items={item.sublinks} activeLink={activeLink} />
          <span className="block border-b border-[#DBDBDB] pb-2 w-[207px] ml-[20px]" />
        </>
      )}
    </li>
  );
});

const MenuItemContent: React.FC<{
  item: MenuItem;
  isOpen: boolean;
  isActive: boolean;
  toggleSubmenu: (menu: string) => void;
}> = memo(({ item, isOpen, isActive, toggleSubmenu }) => {
  return (
    <div
      className={`flex items-center justify-between pl-[20px] py-2 text-sm font-montserrat cursor-pointer relative ${
        isOpen || isActive
          ? 'text-primary-activelink font-bold'
          : 'text-primary-nlink font-medium'
      }`}
      onClick={() => {
        if (item.sublinks) {
          toggleSubmenu(item.name);
        }
      }}
    >
      {item.sublinks && isOpen && (
        <span
          className="absolute left-4 top-[25px] transform -translate-y-1/2 w-[2px] h-4 bg-primary-activelink"
          style={{ height: '16px' }}
        />
      )}
      <span className="flex-1 pl-2 pt-2">
        {item.name}
        {(!item.sublinks || !isOpen) && (
          <span className="block border-b border-[#DBDBDB] pb-2 w-[207px]" />
        )}
      </span>
      {item.sublinks && (
        <span className="absolute right-3 bottom-3 text-black">
          {isOpen ? <IconChevronDown size={17} /> : <IconChevronRight size={17} />}
        </span>
      )}
    </div>
  );
});

export default MenuItemComponent;