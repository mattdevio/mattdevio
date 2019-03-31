// Vendor Imports
import React, { Component } from 'react';

import { graphql, withPrefix } from 'gatsby';

// Custom Imports
import Layout from '../layout/index';
import Header from '../components/Header';
import SiteHero from '../components/SiteHero';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import BlogHighlightContact from '../components/BlogHighlightContact';
import Footer from '../components/Footer';

class Landing extends Component {
  constructor (props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
    this.aboutMeRef = React.createRef();
    this.projectsRef = React.createRef();
    this.blogRef = React.createRef();
    this.contactRef = React.createRef();
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleNavClick (id) {
    this[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  }

  handleMenuClick () {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  }

  render () {
    const { data } = this.props;
    const { menuIsOpen } = this.state;
    return (
      <Layout>
        <Header
          onNavClick={ this.handleNavClick }
          menuIsOpen={ menuIsOpen }
          handleMenuClick={ this.handleMenuClick }
        />
        <SiteHero menuIsOpen={ menuIsOpen } />
        <AboutMe ref={ this.aboutMeRef } />
        <Projects ref={ this.projectsRef } />
        <BlogHighlightContact
          postData={ data.allMarkdownRemark.edges[0].node }
          blogRef={ this.blogRef }
          contactRef={ this.contactRef }
        />
        <Footer onNavClick={ this.handleNavClick } />
      </Layout>
    );
  }
}

export default Landing;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        typekit
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
