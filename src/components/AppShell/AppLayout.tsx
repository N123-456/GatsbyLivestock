import React from "react";
import { AppShell, Burger, Code, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SideNavBar from "../NavBar/SideNavBar";


export function AppLayout({children}) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width:300 ,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      
      <AppShell.Navbar p="md">
        <SideNavBar />
      </AppShell.Navbar>

       <AppShell.Main className="bg-gray-50 ">
        {children}
      </AppShell.Main> 
    </AppShell>
  );
}