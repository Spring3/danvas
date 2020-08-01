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
  margin-left: 2rem;
  vertical-align: top;
  text-decoration: none;
  background: var(--marker-red) !important;
  padding: 10px;

  &:hover {
    box-shadow: 0px 0px 10px var(--marker-red);
  }

  &:pressed {
    box-shadow: inset 0px 0px 10px var(--marker-red);
  }
`

export const DownloadButton = ({ href, value }) => (
  <StyledDownloadButton href={href}>
    <DownloadOutlineIcon /> {value}
  </StyledDownloadButton>
)
