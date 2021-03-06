import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';

const BackButton = styled(Link)`
  vertical-align: top;
  text-decoration: none;
  background: var(--marker-link);
  padding: 10px;

  &:hover {
    box-shadow: 0px 0px 10px var(--marker-link);
  }

  &:pressed {
    box-shadow: inset 0px 0px 10px var(--marker-link);
  }

  svg {
    vertical-align: sub;
  }
`;

export default ({ href }) => (
  <BackButton href={href}>
    <ArrowLeftIcon /> Go Back
  </BackButton>
);
