// Vendor Imports
import React from 'react';
import styled from 'styled-components';
import { graphql, navigate, withPrefix } from 'gatsby';

// Custom Imports
import Layout from '../layout/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageWrapper from '../components/PageWrapper';

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Header onNavClick={ () => navigate(withPrefix('/')) }/>
      <PageTitle>{ frontmatter.title }</PageTitle>
      <PageWrapper>
        <BlogContent
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </PageWrapper>
      <Footer />
    </Layout>
  );
};

const PageTitle = styled.h1`
  font-family: ${ ({ theme }) => theme.typeFont };
  font-size: 4rem;
  text-align: center;
  margin: 5rem 0 3rem 0;
  padding: 0;
`;

const BlogContent = styled.div`
  font-family: ${ ({ theme }) => theme.typeFont };
  font-size: 2rem;
  blockquote {
    text-align: center;
    background: ${ ({ theme }) => theme.greenblue };
    > p {
      padding: 0.5rem;
    }
  }
  code.language-js {
    background-color: ${ ({ theme }) => theme.black };
    color: ${ ({ theme }) => theme.white };
    display: block;
    padding: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
