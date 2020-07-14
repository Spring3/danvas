import styled from "styled-components"

const Header = styled.h1`
  @media (min-width: 750px) {
    font-size: 2.5rem;
  }

  display: inline-block;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    transparent 60%,
    var(--marker-green) 60%,
    var(--marker-green) 100%
  );
`

export default Header
