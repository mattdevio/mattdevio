// Vendor Import
import React from 'react';
import styled from 'styled-components';

const MobileMenu = ({ menuIsOpen, handleMenuClick }) => (
  <MobileMenuContainer isOpen={ menuIsOpen } onClick={ handleMenuClick }>
    <MenuLine />
    <MenuLine />
    <MenuLine />
  </MobileMenuContainer>
);

export default MobileMenu;

const MobileMenuContainer = styled.div`
  display: none;
  width: 5rem;
  cursor: pointer;
  overflow: hidden;
  position: absolute;
  top: 0.2rem;
  right: 1.5rem;
  z-index: 10000;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  transform: scale(.7);
  ${ ({ isOpen }) => {
    if (isOpen) {
      return `
        > span:nth-child(1) {
          transform: rotate(-45deg) translate(-0.9rem, 1rem);
        }
        > span:nth-child(2) {
          margin-left: 5rem;
        }
        > span:nth-child(3) {
          transform: rotate(45deg) translate(-0.8rem, -1rem);
        }
      `;
    };
  } }
  ${ ({ theme }) => theme.medium`
    display: block;
  ` }
`;

const MenuLine = styled.span`
  height: 0.4rem;
  width: 100%;
  display: block;
  background-color: ${ ({ theme }) => theme.teal };
  border-radius: 0.5rem;
  margin: 0.9rem 0;
  transition: all 0.2s;
`;
