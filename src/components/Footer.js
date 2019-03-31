// Vendor Imports
import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

// Custom Imports
import PageWrapper from './PageWrapper';

const Footer = ({ onNavClick }) => (
  <FooterContainer>
    <PageWrapper>
      <ThreeBlockFlex>
        <FooterNav>
          <FooterNavLi>
            <FooterNavAnchor onClick={ () => onNavClick('aboutMeRef') }>
              About Me
            </FooterNavAnchor>
          </FooterNavLi>
          <FooterNavLi>
            <FooterNavAnchor onClick={ () => onNavClick('projectsRef') }>
              Projects
            </FooterNavAnchor>
          </FooterNavLi>
          <FooterNavLi>
            <FooterNavAnchor onClick={ () => onNavClick('blogRef') }>
              Blog
            </FooterNavAnchor>
          </FooterNavLi>
          <FooterNavLi>
            <FooterNavAnchor onClick={ () => onNavClick('contactRef') }>
              Contact
            </FooterNavAnchor>
          </FooterNavLi>
        </FooterNav>
        <PageCallout>
          { /* eslint max-len: 0 */ }
          This website was built from scratch with the <BackLink>Gatsby</BackLink> static site generator. All css was written with <BackLink>Styled Components</BackLink>. You can view the code on my Github account <BackLink>here</BackLink>.
        </PageCallout>
        <MediaBlock>
          <MediaBlockTitle>
            Follow Me On Social Media
          </MediaBlockTitle>
          <MediaList>
            <MediaListItem>
              <LinkedIn />
            </MediaListItem>
            <MediaListItem>
              <Twitter />
            </MediaListItem>
            <MediaListItem>
              <StackOverflow />
            </MediaListItem>
            <MediaListItem>
              <Github />
            </MediaListItem>
          </MediaList>
          <MediaBlockTitle>
            OR <BackLink href={ withPrefix('/downloads/mattgreenberg_cv.pdf') } download>Download My CV</BackLink>
          </MediaBlockTitle>
        </MediaBlock>
      </ThreeBlockFlex>
    </PageWrapper>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
  padding: 2.5rem 0;
  border-top: 5px solid ${ ({ theme }) => theme.teal };
  background-color: ${ ({ theme }) => theme.black };
`;

const ThreeBlockFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  ${ ({ theme }) => theme.medium`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  ` }
`;

const FooterNav = styled.ul`
  display: inline-block;
  width: 30%;
  min-height: 15rem;
  margin: 0;
  padding: 0;
  > li {
    margin-right: 2rem;
  }
  > li:nth-child(4) {
    margin-right: 0;
  }
  ${ ({ theme }) => theme.medium`
    width: 100%;
    min-height: auto;
    text-align: center;
    margin-bottom: 1.5rem;
  ` }
`;

const FooterNavLi = styled.li`
  display: inline-block;
  margin: 0.5rem 0;
`;

const FooterNavAnchor = styled.a`
  color: ${ ({ theme }) => theme.white };
  font-family: ${ ({ theme }) => theme.typeFont };
  text-transform: uppercase;
  font-size: 1.6rem;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
    color: ${ ({ theme }) => theme.teal };
  }
`;

const PageCallout = styled.p`
  display: inline-block;
  width: 30%;
  min-height: 15rem;
  color: ${ ({ theme }) => theme.white };
  font-family: ${ ({ theme }) => theme.typeFont };
  line-height: 2.2rem;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-align: center;
  ${ ({ theme }) => theme.medium`
    width: 100%;
    min-height: auto;
    text-align: center;
    margin-bottom: 1.5rem;
    max-width: 50rem;
  ` }
`;

const BackLink = styled.a`
  color: ${ ({ theme }) => theme.teal };
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const MediaBlock = styled.div`
  display: flex;
  width: 30%;
  min-height: 15rem;
  flex-direction: column;
  align-items: flex-end;
  ${ ({ theme }) => theme.medium`
    width: 100%;
    min-height: auto;
    align-items: center;
    margin-bottom: 1rem;
    max-width: 50rem;
  ` }
`;

const MediaBlockTitle = styled.p`
  color: ${ ({ theme }) => theme.white };
  font-family: ${ ({ theme }) => theme.typeFont };
  font-size: 1.6rem;
  margin: 0;
`;

const MediaList = styled.ul`
  text-align: right;
  margin: 1rem 0;
  padding: 0;
  > li:last-child {
    margin-right: 0;
  }
`;

const MediaListItem = styled.li`
  display: inline-block;
  margin: 0 0.5rem;
`;

const LinkedIn = styled.a.attrs({
  href: 'https://www.linkedin.com/in/greenbergma'
})`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
  background-color: #0077b5;
  &:before {
    content: '';
    background-image: url(${ withPrefix('/images/social200x50.png') });
    background-size: 10rem 2.5rem;
    background-position-x: 0;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Twitter = styled.a.attrs({
  href: 'https://twitter.com/mattdevio'
})`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
  background-color: #00aced;
  &:before {
    content: '';
    background-image: url(${ withPrefix('/images/social200x50.png') });
    background-size: 10rem 2.5rem;
    background-position-x: 33.333333%;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StackOverflow = styled.a.attrs({
  href: 'https://stackoverflow.com/users/4184194/mattdevio',
})`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
  background-color: #f48024;
  &:before {
    content: '';
    background-image: url(${ withPrefix('/images/social200x50.png') });
    background-size: 10rem 2.5rem;
    background-position-x: 66.6666666%;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Github = styled.a.attrs({
  href: 'https://github.com/mattdevio',
})`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border-radius: 0.5rem;
  position: relative;
  background-color: ${ ({ theme }) => theme.teal };
  &:before {
    content: '';
    background-image: url(${ withPrefix('/images/social200x50.png') });
    background-size: 10rem 2.5rem;
    background-position-x: 100%;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
