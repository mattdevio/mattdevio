// Vendor Imports
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import { StaticQuery, withPrefix, graphql } from 'gatsby';

// Custom Imports
import { matdevioTheme } from '../bin/styled-theme';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            typekit
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={ matdevioTheme }>
        <Fragment>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <link rel='shortcut icon' type='image/png' href={withPrefix('/images/favicon.png')} />
            <link rel='stylesheet' href={withPrefix('/css/normalize.css')} />
            <link rel='stylesheet' href={withPrefix('/css/base.css')} />
            <link rel='stylesheet' href={data.site.siteMetadata.typekit} />
          </Helmet>
          { children }
        </Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;
