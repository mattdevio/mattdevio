// Vendor Imports
import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

// Custom Imports
import MobileMenu from './MobileMenu';

export default ({ onNavClick, menuIsOpen, handleMenuClick }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <SiteBadge />
      <MobileMenu menuIsOpen={ menuIsOpen } handleMenuClick={ handleMenuClick } />
      <NavigationContainer menuIsOpen={ menuIsOpen }>
        <NavItem>
          <NavAnchor onClick={ () => onNavClick('aboutMeRef') }>About Me</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor onClick={ () => onNavClick('projectsRef') }>Projects</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor onClick={ () => onNavClick('blogRef') }>Blog</NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor onClick={ () => onNavClick('contactRef') }>Contact</NavAnchor>
        </NavItem>
      </NavigationContainer>
    </HeaderWrapper>
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  background-color: ${ ({ theme }) => theme.black };
  border-bottom: 0.5rem solid ${ ({ theme }) => theme.teal };
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${ ({ theme }) => theme.siteMaxWidth };
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const SiteBadge = styled.span`
  background-image: url(${ withPrefix('/images/site_badge.png') });
  background-position: center;
  background-size: cover;
  width: 12rem;
  height: 9.5rem;
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 50%;
  z-index: 1000;
  transform: translateX(-50%);
`;

const NavigationContainer = styled.ul`
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  > li:nth-child(2) {
    margin-right: 6rem;
  }
  > li:nth-child(3) {
    margin-left: 6rem;
  }
  ${ ({ theme }) => theme.medium`
    position: absolute;
    top: calc(100% + 0.5rem);
    background-color: ${ theme.black };
    height: 25rem;
    flex-direction: column;
    justify-content: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s;
    > li:nth-child(2) {
      margin-right: 0;
    }
    > li:nth-child(3) {
      margin-left: 0;
    }
    > li {
      border-bottom: 1px dashed ${ theme.white };
    }
    > li:last-child {
      border-bottom: 0;
    }
  ` }
  ${ ({ menuIsOpen, theme }) => {
    if (menuIsOpen) {
      return theme.medium`
        max-height: 25rem;
      `;
    }
  } }
`;

const NavItem = styled.li`
  display: inline-block;
  color: #fff;
  font-family: ${ ({ theme }) => theme.accentFont };
  font-size: 1.6rem;
  width: 20%;
  height: 100%;
  text-align: center;
  position: relative;
  ${ ({ theme }) => theme.medium`
    height: auto;
    width: 100%;
    max-width: 35rem;
  ` }
`;

const NavAnchor = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  text-algin: center;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${ ({ theme }) => theme.teal };
  }
  ${ ({ theme }) => theme.medium`
    position: relative;
    height: auto;
    top: inherit;
    left: inherit;
    transform: none;
    padding: 0.8rem 0;
  ` }
`;
