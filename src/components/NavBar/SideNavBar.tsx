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
} from "@tabler/icons-react";
import { Code, Group } from "@mantine/core";

import { Link } from "gatsby";

const SideNavBar = () => {
  return (
    <div className="w-[300px] bg-sidebar-50 border-r border-sidebar-200 p-6">
      <aside className="text-black">
        {/* <h2 className="text-2xl font-bold mb-4 text-green-700">LFMS</h2> */}
        <ul className="space-y-2 text-xl">
          <li>
            <Link
              to="/"
              className="flex gap-1 px-4 py-2 rounded-md hover:bg-primary-400 hover:text-text-light font-medium transition"
            >
              <IconHome size={25} className="text-[#be8b45]" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/BuyAnimal"
              className="flex px-4 py-2 gap-1 rounded-md hover:bg-primary-400 hover:text-text-light font-medium transition"
            >
              <IconShoppingCart size={25} className="text-[#be8b45]" />
              Animals
            </Link>
          </li>
          <li>
            <Link
              to="/feeding"
              className="flex gap-1 px-4 py-2 rounded-md hover:bg-primary-400 hover:text-text-light font-medium transition"
            >
              <IconBowl size={25} className="text-[#be8b45]" />
              Feeding
            </Link>
          </li>
          <li>
            <Link
              to="/vaccination"
              className="flex gap-1 px-4 py-2 rounded-md hover:bg-primary-400 hover:text-text-light font-medium transition"
            >
              <IconRings size={25} className="text-[#be8b45]" />
              Vaccination
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="flex gap-1 px-4 py-2 rounded-md hover:bg-green-400 hover:text-text-light font-medium transition"
            >
              <IconHeartPause size={25} className="text-[#be8b45]" />
              Health Checkup
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default SideNavBar;
