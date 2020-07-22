import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import ArrowLeftIcon from "mdi-react/ArrowLeftIcon"
import ArrowRightIcon from "mdi-react/ArrowRightIcon"

const Button = styled(Link)`
  vertical-align: top;
  text-decoration: none;
  padding: 10px;
  background: transparent;

  svg {
    vertical-align: top;
  }
`

export const ButtonBack = ({ href, value }) => (
  <Button href={href}>
    <ArrowLeftIcon /> {value}
  </Button>
)

export const ButtonNext = ({ href, value }) => (
  <Button href={href}>
    {value} <ArrowRightIcon />
  </Button>
)
