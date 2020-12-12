import React from 'react';
import styled, { css } from 'styled-components';
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

const ButtonBack = ({ href, value }) => (
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

const DownloadButton = ({ href, value }) => (
  <StyledDownloadButton id="download-button" href={href}>
    <DownloadOutlineIcon />
    {' '}
    {value}
  </StyledDownloadButton>
);

const PreviewButton = styled.button`
  z-index: 2;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  svg {
    fill: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
  }


  ${(props) => props.isDisabled
    ? css`
      cursor: not-allowed;
      background: rgba(255, 255, 255, 0.1);
      svg {
        fill: rgba(255, 255, 255, 0.15);
      }
    `
    : css`
      &:focus,
      &:hover {
        background: rgba(255, 255, 255, 0.2);
        svg {
          fill: rgba(255, 255, 255, 1);
        }
      }
    `
  }

  @media (max-width: 700px) {
    position: absolute;
  }
`;

const PreviewButtonPrevious = styled(PreviewButton)`
  @media (min-width: 701px) {
    margin-left: 1rem;
  }

  @media (max-width: 700px) {
    left: 1rem;
  }
`;

const PreviewButtonNext = styled(PreviewButton)`
  @media (min-width: 701px) {
    margin-right: 1rem;
  }

  @media (max-width: 700px) {
    right: 1rem;
  }
`;

export {
  ButtonBack, DownloadButton, PreviewButtonPrevious, PreviewButtonNext
};
