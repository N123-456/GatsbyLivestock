// src/types.ts
export interface MenuItem {
  name: string;
  path?: string;
  sublinks?: MenuItem[];
}

export interface MenuItemComponentProps {
  item: MenuItem;
  activeLink: string;
  openMenus: Record<string, boolean>;
  toggleSubmenu: (menu: string) => void;
}