import React from "react"
import styled from "styled-components"
import { Link } from "./Reference"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0rem;
  grid-column: 1 / -1;
`

const StyledLink = styled(Link)`
  font-weight: bold !important;
  background: ${(props) =>
    props.theme.marker || "var(--marker-blue)"} !important;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink to="/cv">
        Yaay, you don't have to scroll up! My CV page is here.
      </StyledLink>
    </StyledFooter>
  )
}

export { Footer }
