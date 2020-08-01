import styled from "styled-components"

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-color);
  z-index: 1;

  @media (min-width: 750px) {
    top: 0;
    padding: 1rem 0px;
    border-bottom: solid 1px var(--shadow-color);

    a {
      svg {
        vertical-align: bottom;
      }
    }
  }

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
    (max-width: 750px) {
    height: 3rem;
    bottom: 0;
    left: 0;
    box-shadow: 0px -3px 10px var(--shadow-color);

    a {
      display: block;
      width: 100%;
      margin: 0;
      background: none !important;
      svg {
        vertical-align: bottom;
      }

      &:hover {
        box-shadow: none !important;
        background: var(--shadow-color) !important;
      }
    }

    a:nth-child(odd) {
      border-right: 1px solid var(--shadow-color);
    }

    a:nth-child(even) {
      border-left: 1px solid var(--shadow-color);
    }
  }
`

export default Navbar
