import styled from "styled-components"

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-color);
  z-index: 1;
  gap: 2rem;

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
    top: 0px;
    padding: 1rem 0rem;
    left: 0;

    a {
      display: block;
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
  }

  @media (max-width: 750px) {
    box-shadow: 0px 0px 10px var(--shadow-color);

    #download-button,
    div {
      display: none;
    }
  }
`

export default Navbar
