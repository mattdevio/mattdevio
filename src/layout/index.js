// Vendor Imports
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

// Custom Imports
import { matdevioTheme } from '../bin/styled-theme';

const Layout = ({ children }) => (
  <ThemeProvider theme={ matdevioTheme }>
    <Fragment>
      { children }
    </Fragment>
  </ThemeProvider>
);

export default Layout;
