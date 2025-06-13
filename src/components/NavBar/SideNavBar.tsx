import * as React from "react"
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
import * as classes from "./Sidebar.module.css";
import {Link} from "gatsby";

const data = [
  { link: "/dashboard", label: "Dashboard", icon: IconHome },
  { link: "/LandandLocation", label: "Land and Location", icon: IconMapPin },
  { link: "/ShelterDetails", label: "Shelters Details", icon: IconBuilding },
  { link: "/BuyAnimal", label: "Buy Animals", icon: IconShoppingCart },
  { link: "/postbuying", label: "Post Buying", icon: IconClipboardList },
  {
    link: "/feeding",
    label: "Feeding item and watering schedule",
    icon: IconBowl,
  },
  { link: "/vaccination", label: "Vaccination", icon: IconRings },
  {
    link: "/sheltercleaning",
    label: "Shelter Cleaning & Maintenance",
    icon: IconTrash,
  },
  {
    link: "/healthmonitoring",
    label: "Health Monitoring",
    icon: IconHeartPause,
  },
  { link: "/expenses", label: "Expenses", icon: IconWallet },
];
const SideNavBar = () => {
  const [active, setActive] = React.useState("");
   const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} >
          {/* <MantineLogo size={28} />
          <Code fw={700}>v3.1.2</Code> */}
          <h2>LiveStock</h2>
        </Group>
        <div>{links}</div>
      </div>
    </nav>
  );
}

export default SideNavBar
