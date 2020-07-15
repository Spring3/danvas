import React from "react"
import styled from "styled-components"

import SocialButtons from "../SocialButtons"

const ContentPanel = styled.div`
  @media (min-width: 750px) {
    font-size: 1.8rem;
    max-width: 35em;
    padding: 2rem;
  }

  @media (orientation: landscape) and (min-width: 750px) and (max-width: 900px),
    (max-width: 750px) {
    max-width: 100%;
    font-size: 1rem;

    h1 {
      font-size: 1.6rem;
    }
  }

  box-sizing: border-box;
  text-align: justify;
  color: var(--text-color-primary);
  border-radius: var(--border-radius);

  div {
    em {
      font-style: normal;
      font-weight: bold;
      background: var(--marker-green);
    }

    strong {
      background: var(--marker-yellow);
    }
  }

  span,
  p:last-child {
    color: var(--text-color-secondary);
    font-size: smaller;
  }
`

const InlinedSocialButtons = styled(SocialButtons)`
  display: inline-block;
  margin: 0px;
`

const AboutSection = ({ children }) => (
  <ContentPanel>
    <h1>Hello and Welcome!</h1>
    {children}
    <InlinedSocialButtons />
  </ContentPanel>
)

export { AboutSection }
