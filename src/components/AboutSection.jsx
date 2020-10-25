import React from "react"
import styled from "styled-components"

import { Header } from "./common/Headers"
import { SocialButtons } from "./SocialButtons"

const ContentPanel = styled.div`
  box-sizing: border-box;
  text-align: justify;
  color: var(--text-color-primary);
  border-radius: var(--border-radius);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem;
`

const AboutSection = ({ children }) => (
  <ContentPanel>
    <Header>Hello and Welcome!</Header>
    {children}
    <SocialButtons />
  </ContentPanel>
)

export { AboutSection }
