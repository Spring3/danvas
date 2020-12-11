import React from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon';
import DownloadOutlineIcon from 'mdi-react/DownloadOutlineIcon';
import { Link } from 'gatsby';
import { styles, Reference } from './Reference';

const Button = styled(Link)`
  ${styles}

  display: flex;
  gap: 5px;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  background: transparent;

  &:visited {
    background: transparent;
  }
`;

export const ButtonBack = ({ href, value }) => (
  <Button to={href}>
    <ArrowLeftIcon />
    {' '}
    {value}
  </Button>
);

const StyledDownloadButton = styled(Reference)`
  vertical-align: top;
  text-decoration: none;
  background: var(--marker-green) !important;
  padding: 5px !important;
  border-radius: 3px;

  &:hover {
    box-shadow: 0px 0px 10px var(--marker-green);
  }

  &:active {
    box-shadow: none !important;
  }

  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const DownloadButton = ({ href, value }) => (
  <StyledDownloadButton id="download-button" href={href}>
    <DownloadOutlineIcon />
    {' '}
    {value}
  </StyledDownloadButton>
);
