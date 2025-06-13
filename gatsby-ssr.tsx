import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from './src/theme';
import { AppLayout } from './src/components/AppShell/AppLayout';
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();
  replaceHeadComponents([
    ...headComponents,
    <ColorSchemeScript key="color-scheme-script" />,
  ]);
};

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>
    <AppLayout>{element}</AppLayout></MantineProvider>;
};