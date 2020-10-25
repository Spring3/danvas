import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Header } from "./common/Headers"
import { Project } from "./Project"
import { Flex } from "./Flex"

const ProjectsWrapper = styled(Flex)`
  position: relative;

  @media (min-width: 750px) {
    gap: 10rem 3rem;
    padding-left: 6%;
    padding-right: 6%;
  }
`

const StickyTitle = styled(Header)`
  @media (min-width: 750px) {
    z-index: 999999;
    position: sticky;
    top: 0;
  }
`

const ProjectsContainer = styled(Flex)`
  padding-bottom: 25vh;

  @media (max-width: 750px) {
    padding: 1rem;
  }
`

const ProjectsSection = ({ nodes }) => (
  <ProjectsContainer direction="column">
    <StickyTitle>Projects</StickyTitle>
    <ProjectsWrapper direction="column" gap="5rem 3rem">
      {nodes.map((node, i) => {
        const theme = { marker: `#${node.frontmatter.marker}` }
        return (
          <ThemeProvider key={node.fields.slug} theme={theme}>
            <Project node={node} key={i} index={i} />
          </ThemeProvider>
        )
      })}
    </ProjectsWrapper>
  </ProjectsContainer>
)

export { ProjectsSection }
