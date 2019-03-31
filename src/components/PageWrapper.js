// Vendor Imports
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: ${ ({ theme }) => theme.siteMaxWidth };
  padding: 0 1.5rem;
  margin: 0 auto;
`;

export default PageWrapper;
