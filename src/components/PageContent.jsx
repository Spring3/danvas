import styled from "styled-components"

const Content = styled.div`
  @media (min-width: 750px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p,
    ul {
      font-size: 1.2rem;
    }
  }
  h2 {
    display: inline-block;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 60%,
      var(--marker-yellow) 60%,
      var(--marker-yellow) 100%
    );
  }

  text-align: justify;

  p > img {
    max-width: 100%;
  }

  li {
    margin-top: 5px;
  }
`

export default Content
