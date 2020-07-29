import React from "react"
import styled from "styled-components"
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon"
import { Link } from "gatsby"
import { styles } from "./Reference"

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
