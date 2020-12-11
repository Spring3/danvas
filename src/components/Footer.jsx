import React from 'react';
import styled from 'styled-components';
import { Link } from './Reference';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  grid-column: 1 / -1;
`;

const StyledLink = styled(Link)`
  font-weight: bold !important;
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: ${(props) => props.theme.marker || 'var(--marker-blue)'} !important;
`;

const Footer = () => (
  <StyledFooter>
    <StyledLink to="/cv">
      Yaay, you don't have to scroll up! My CV page is here.
    </StyledLink>
  </StyledFooter>
);

export { Footer };
