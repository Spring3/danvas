import styled from "styled-components"
import { styles } from "./Reference"
const MarkdownContent = styled.div`
  a {
    ${styles}
  }

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
      ${(props) => (props.marker ? `#${props.marker}` : "var(--marker-yellow)")}
        60%,
      ${(props) => (props.marker ? `#${props.marker}` : "var(--marker-yellow)")}
        100%
    );
  }

  text-align: justify;
`

export { MarkdownContent }
