import React from "react"
import styled from "styled-components"
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon"
import DownloadOutlineIcon from "mdi-react/DownloadOutlineIcon"
import { Link } from "gatsby"
import { styles, Reference } from "./Reference"

const Button = styled(Link)`
  ${styles}

  vertical-align: top;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  background: transparent;

  &:visited {
    background: transparent;
  }

  svg {
    vertical-align: top;
  }
`

export const ButtonBack = ({ href, value }) => (
  <Button to={href}>
    <ArrowLeftIcon /> {value}
  </Button>
)

const StyledDownloadButton = styled(Reference)`
  vertical-align: top;
  text-decoration: none;
  background: var(--marker-green) !important;
  padding: 10px;
  border-radius: 3px;

  &:hover {
    box-shadow: 0px 0px 10px var(--marker-green);
  }

  &:pressed {
    box-shadow: none;
    border: 2px solid var(--marker-green);
  }

  @media (max-width: 750px) {
    padding: 5px;
    text-align: center;
  }
`

export const DownloadButton = ({ href, value }) => {
  return (
    <StyledDownloadButton id="download-button" href={href}>
      <DownloadOutlineIcon /> {value}
    </StyledDownloadButton>
  )
}
