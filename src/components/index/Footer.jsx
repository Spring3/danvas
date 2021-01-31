import React from 'react';
import styled from 'styled-components';
import { MARKERS } from '../../theme';
import { Reference } from '../common/Reference';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  grid-column: 1 / -1;
`;

const StyledLink = styled(Reference)`
  font-weight: bold !important;
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: ${(props) => props.theme.marker || MARKERS.blue} !important;
`;

const Footer = () => {
  const onClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });
    }
  };

  return (
    <StyledFooter>
      <StyledLink href="#" onClick={onClick}>
        Yaay, you&apos;ve reached the bottom! Poke this compact elevator to go back up.
      </StyledLink>
    </StyledFooter>
  );
};

export { Footer };
