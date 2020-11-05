import React from "react"
import styled from "styled-components"

import { Header } from "./common/Headers"
import { SocialButtons } from "./SocialButtons"
import { Flex } from "./Flex"

const ContentPanel = styled(Flex)`
  box-sizing: border-box;
  text-align: justify;
  color: var(--text-color-primary);
  border-radius: var(--border-radius);
  height: 100vh;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 750px) {
    width: 800px;
  }
`

const AboutSection = ({ children }) => (
  <ContentPanel direction="column" justifyContent="center">
    <Header>Hello and Welcome!</Header>
    {children}
    <SocialButtons />
  </ContentPanel>
)

export { AboutSection }
