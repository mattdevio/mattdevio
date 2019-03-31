// Vendor Imports
import React from 'react';
import styled from 'styled-components';

const SectionHeader = React.forwardRef(({ children }, ref) => (
  <SectionTitle ref={ ref }>
    { children }
  </SectionTitle>
));

export default SectionHeader;

const SectionTitle = styled.h3`
  font-family: ${ ({ theme }) => theme.headerFont };
  font-weight: 700;
  font-size: 7rem;
  text-transform: uppercase;
  display: block;
  margin: 0 auto;
  text-align: center;
`;
