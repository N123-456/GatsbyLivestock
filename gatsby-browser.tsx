import React from 'react';
import './src/styles/global.css'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { AppLayout } from './src/components/AppShell/AppLayout';
import { theme } from './src/theme';

export const wrapPageElement = ({ element }) => {
  return <MantineProvider theme={theme}>
    <AppLayout>{element}</AppLayout></MantineProvider>;
};